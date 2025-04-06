
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import WhatsAppButton from './WhatsAppButton';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  date: Date;
  message: string;
}

const consultants = [
  { id: 1, name: "Maria Silva" },
  { id: 2, name: "João Mendes" },
  { id: 3, name: "Ana Oliveira" },
];

const ConsultationForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedConsultant, setSelectedConsultant] = useState(consultants[0].name);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to book a consultation.",
        variant: "destructive",
      });
      navigate("/login", { state: { from: "/consultation" } });
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the date to ISO string for Supabase
      const formattedDate = data.date.toISOString();

      const { error } = await supabase
        .from('consultations')
        .insert([
          { 
            user_id: user.id,
            consultant_name: selectedConsultant,
            consultation_date: formattedDate,
            notes: data.message,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Consultation Booked",
        description: `Your consultation has been scheduled for ${format(data.date, "PPP")}`,
      });

      // Reset form
      form.reset();
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to book consultation",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
        <p className="text-muted-foreground mb-6">
          Schedule a one-on-one consultation with our immigration experts to discuss your specific situation and get personalized guidance.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
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
                      <Input type="tel" placeholder="+351 XXX XXX XXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="date"
              rules={{ required: "Please select a date" }}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preferred Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => 
                          date < new Date() || 
                          date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide any specific questions or topics you'd like to discuss in your consultation."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Consultation"}
              </Button>
              
              <WhatsAppButton 
                phoneNumber="+351910000000"
                message="Hello, I'm interested in scheduling a consultation about Portugal immigration."
                variant="outline"
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                Ask via WhatsApp
              </WhatsAppButton>
            </div>
          </form>
        </Form>
      </div>
      
      <div className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Our Consultation Process</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h4 className="font-medium">Book an Appointment</h4>
              <p className="text-sm text-muted-foreground">Choose your preferred date and consultant from our team of immigration experts.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium">Confirmation</h4>
              <p className="text-sm text-muted-foreground">Receive confirmation by email with meeting details and preparation guidelines.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium">Consultation Session</h4>
              <p className="text-sm text-muted-foreground">Meet with your consultant via video call or in-person to discuss your Portugal immigration journey.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h4 className="font-medium">Personalized Plan</h4>
              <p className="text-sm text-muted-foreground">Receive a tailored immigration plan based on your specific situation and goals.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-4 rounded-md border">
          <p className="text-sm font-medium">Consultation Fee</p>
          <p className="text-2xl font-bold">€75 / hour</p>
          <p className="text-xs text-muted-foreground">The fee is deducted from your service package if you proceed with our immigration services.</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
