
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface VisaType {
  id: string;
  name: string;
  description: string;
}

interface FormValues {
  visa_type_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  nationality: string;
  passport_number: string;
  notes: string;
}

const ApplicationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [visaTypes, setVisaTypes] = useState<VisaType[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      visa_type_id: '',
      first_name: '',
      last_name: '',
      email: user?.email || '',
      phone: '',
      nationality: '',
      passport_number: '',
      notes: '',
    },
  });

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        // Query the visa_types table from our database
        const { data, error } = await supabase
          .from('visa_types')
          .select('id, name, description')
          .order('name');

        if (error) throw error;
        
        // Type assertion to ensure the data matches our VisaType interface
        setVisaTypes(data as unknown as VisaType[]);
      } catch (error: any) {
        console.error('Error fetching visa types:', error);
        toast({
          title: "Error loading visa types",
          description: error.message,
          variant: "destructive",
        });
      }
    };

    fetchVisaTypes();
  }, []);

  const onSubmit = async (data: FormValues) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to submit an application.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get the visa type name for the application record
      const visaType = visaTypes.find(vt => vt.id === data.visa_type_id);
      
      if (!visaType) {
        throw new Error("Selected visa type not found");
      }
      
      // Create application
      const { data: application, error } = await supabase
        .from('visa_applications')
        .insert({
          user_id: user.id,
          visa_type_id: data.visa_type_id,
          visa_type: visaType.name,
          status: 'draft',
          documents: JSON.stringify({
            personal_info: {
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              phone: data.phone,
              nationality: data.nationality,
              passport_number: data.passport_number,
            }
          }),
          notes: data.notes
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Application Started",
        description: "Your visa application has been created successfully.",
      });
      
      // Redirect to the application details page
      navigate(`/applications/${application.id}`);
    } catch (error: any) {
      console.error('Error creating application:', error);
      toast({
        title: "Error creating application",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Start a New Visa Application</h1>
          <p className="text-muted-foreground mb-8">
            Fill in the basic information to begin your visa application process.
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Provide your personal details as they appear in your passport or official ID.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="visa_type_id"
                    rules={{ required: "Please select a visa type" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Visa Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a visa type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {visaTypes.map((visaType) => (
                              <SelectItem key={visaType.id} value={visaType.id}>
                                {visaType.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the type of visa you want to apply for.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="first_name"
                      rules={{ required: "First name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="last_name"
                      rules={{ required: "Last name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nationality"
                      rules={{ required: "Nationality is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nationality</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="passport_number"
                      rules={{ required: "Passport number is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passport Number</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any additional information that might be relevant to your application"
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Start Application"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-muted-foreground text-center max-w-lg">
                By submitting this form, you're starting the visa application process. 
                You'll be guided through additional steps to complete your application.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationForm;
