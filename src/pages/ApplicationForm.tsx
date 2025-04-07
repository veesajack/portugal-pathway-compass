
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/contexts/UserProfileContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Define the application form schema
const formSchema = z.object({
  visa_type: z.string().min(1, { message: "Please select a visa type" }),
  first_name: z.string().min(2, { message: "First name must be at least 2 characters" }),
  last_name: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  nationality: z.string().min(1, { message: "Please enter your nationality" }),
  passport_number: z.string().min(1, { message: "Please enter your passport number" }),
  additional_notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Define our visa type interface
interface VisaType {
  id: string;
  name: string;
  description?: string;
}

const ApplicationForm = () => {
  const { user } = useAuth();
  const { profile } = useUserProfile();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visaTypes, setVisaTypes] = useState<VisaType[]>([]);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      visa_type: "",
      first_name: "",
      last_name: "",
      email: user?.email || "",
      phone: profile?.phone || "",
      nationality: profile?.nationality || "",
      passport_number: "",
      additional_notes: "",
    }
  });
  
  // Update form values when profile data is loaded
  useEffect(() => {
    if (profile) {
      const fullName = profile.full_name || "";
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      
      form.setValue("first_name", firstName);
      form.setValue("last_name", lastName);
      form.setValue("email", user?.email || "");
      form.setValue("phone", profile.phone || "");
      form.setValue("nationality", profile.nationality || "");
    }
  }, [profile, user, form]);
  
  // Fetch visa types from the database
  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        // Directly defining visa types as a fallback
        const fallbackVisaTypes: VisaType[] = [
          { id: 'd7', name: 'D7 Passive Income Visa' },
          { id: 'golden', name: 'Golden Visa' },
          { id: 'student', name: 'Student Visa' },
          { id: 'digital_nomad', name: 'Digital Nomad Visa' },
          { id: 'work', name: 'Work Visa' }
        ];
        
        try {
          // Try to fetch from the database first
          const { data, error } = await supabase
            .from('visa_types')
            .select('*');
            
          if (error) {
            console.warn('Error fetching visa types from database:', error);
            setVisaTypes(fallbackVisaTypes);
          } else if (data && data.length > 0) {
            setVisaTypes(data as VisaType[]);
          } else {
            console.warn('No visa types found in database, using fallback data');
            setVisaTypes(fallbackVisaTypes);
          }
        } catch (dbError) {
          console.warn('Database error:', dbError);
          setVisaTypes(fallbackVisaTypes);
        }
      } catch (error) {
        console.error('Error setting up visa types:', error);
        toast({
          title: "Error loading visa types",
          description: "There was an error loading the available visa types.",
          variant: "destructive",
        });
      }
    };
    
    fetchVisaTypes();
  }, []);
  
  const onSubmit = async (values: FormValues) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to submit an application.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    try {
      setLoading(true);
      
      // Insert the application data into the database
      const { data, error } = await supabase
        .from('visa_applications')
        .insert({
          user_id: user.id,
          visa_type: values.visa_type,
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone: values.phone,
          nationality: values.nationality,
          passport_number: values.passport_number,
          additional_notes: values.additional_notes,
          application_date: new Date().toISOString(),
          status: 'submitted',
        })
        .select();
      
      if (error) throw error;
      
      toast({
        title: "Application submitted",
        description: "Your visa application has been submitted successfully.",
      });
      
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: "Error submitting application",
        description: error.message,
        variant: "destructive",
      });
      console.error('Error submitting visa application:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Visa Application Form</h1>
          <p className="text-muted-foreground mb-8">
            Please fill out the form below to submit your visa application. All fields marked with * are required.
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Enter your personal details for the visa application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Visa Type */}
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="visa_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Visa Type *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={loading}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select visa type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {visaTypes.map((type) => (
                                  <SelectItem key={type.id} value={type.name}>
                                    {type.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Select the type of visa you wish to apply for
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* First Name */}
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              disabled={loading} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Last Name */}
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              disabled={loading} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              disabled={loading || !!user?.email} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your phone number" 
                              disabled={loading} 
                              {...field} 
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Nationality */}
                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nationality *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your nationality" 
                              disabled={loading} 
                              {...field} 
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Passport Number */}
                    <FormField
                      control={form.control}
                      name="passport_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passport Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your passport number" 
                              disabled={loading} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Additional Notes */}
                  <FormField
                    control={form.control}
                    name="additional_notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any additional information or special circumstances we should know about" 
                            className="resize-none" 
                            rows={5}
                            disabled={loading} 
                            {...field} 
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormDescription>
                          Optional: Include any relevant details that may help with your application
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="min-w-[150px]"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              By submitting this form, you consent to the processing of your personal data in accordance with our privacy policy.
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationForm;
