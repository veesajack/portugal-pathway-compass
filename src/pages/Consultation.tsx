
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check, Clock, Video, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Consultation = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [consultationType, setConsultationType] = useState('video');
  const [visaType, setVisaType] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Simulated time slots for the selected date
  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time for your consultation.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      toast({
        title: "Consultation Booked!",
        description: `Your ${consultationType} consultation has been scheduled.`,
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Book a Consultation</h1>
          <p className="text-center text-muted-foreground mb-12">
            Schedule a one-on-one session with our immigration experts to guide you through the Portuguese visa process.
          </p>
          
          {isBooked ? (
            <Card className="w-full max-w-lg mx-auto animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <CardTitle>Consultation Booked!</CardTitle>
                <CardDescription>
                  Your consultation has been scheduled for {date && format(date, 'MMMM do, yyyy')} at {timeSlot}.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-medium mb-2">Consultation Details:</h3>
                  <p><span className="font-medium">Type:</span> {consultationType === 'video' ? 'Video Call' : 'Phone Call'}</p>
                  <p><span className="font-medium">Date:</span> {date && format(date, 'MMMM do, yyyy')}</p>
                  <p><span className="font-medium">Time:</span> {timeSlot}</p>
                  <p><span className="font-medium">Consultation Topic:</span> {visaType} Visa</p>
                </div>
                <p className="text-muted-foreground">
                  You will receive a confirmation email with all the details and instructions for your consultation.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => setIsBooked(false)}>Book Another Consultation</Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Consultation Services</CardTitle>
                    <CardDescription>
                      Get personalized guidance for your immigration process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 bg-primary/10 p-2 rounded-md">
                        <Video className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Video Consultation</h3>
                        <p className="text-sm text-muted-foreground">Face-to-face meeting via Zoom or Google Meet</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 bg-primary/10 p-2 rounded-md">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone Consultation</h3>
                        <p className="text-sm text-muted-foreground">Convenient voice call at your scheduled time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 bg-primary/10 p-2 rounded-md">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">60-Minute Session</h3>
                        <p className="text-sm text-muted-foreground">Comprehensive consultation with our experts</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t mt-4">
                      <p className="text-sm text-muted-foreground">
                        Consultation fee: <span className="font-medium text-foreground">€75</span> (payable after confirmation)
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Why Book a Consultation?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">✓ Get personalized guidance for your specific situation</p>
                    <p className="text-sm">✓ Understand complex visa requirements and processes</p>
                    <p className="text-sm">✓ Avoid common application mistakes</p>
                    <p className="text-sm">✓ Develop a clear strategy for your immigration journey</p>
                    <p className="text-sm">✓ Have all your questions answered by experts</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Book Your Consultation</CardTitle>
                    <CardDescription>
                      Fill out the form below to schedule your consultation with our immigration experts.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Consultation Type</h3>
                          <RadioGroup
                            value={consultationType}
                            onValueChange={setConsultationType}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="video" id="video" />
                              <Label htmlFor="video" className="flex items-center cursor-pointer">
                                <Video className="mr-2 h-4 w-4" /> Video Call
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone" className="flex items-center cursor-pointer">
                                <Phone className="mr-2 h-4 w-4" /> Phone Call
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Consultation Topic</h3>
                          <Select value={visaType} onValueChange={setVisaType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select visa type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="d7">D7 Passive Income Visa</SelectItem>
                              <SelectItem value="golden">Golden Visa</SelectItem>
                              <SelectItem value="digital_nomad">Digital Nomad Visa</SelectItem>
                              <SelectItem value="student">Student Visa</SelectItem>
                              <SelectItem value="work">Work Visa</SelectItem>
                              <SelectItem value="general">General Immigration Advice</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Select Date & Time</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label>Consultation Date</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-start text-left font-normal mt-2",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : "Select date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={(date) => 
                                      date < new Date() || 
                                      date.getDay() === 0 || 
                                      date.getDay() === 6
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            
                            <div>
                              <Label>Available Time Slots</Label>
                              <Select 
                                value={timeSlot} 
                                onValueChange={setTimeSlot}
                                disabled={!date}
                              >
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                  {availableTimeSlots.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 pt-4 border-t">
                          <h3 className="text-lg font-medium">Personal Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input 
                                id="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                              id="phone" 
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Additional Information (Optional)</Label>
                            <Textarea 
                              id="message" 
                              placeholder="Let us know about your specific questions or concerns"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Booking Consultation..." : "Book Consultation"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consultation;
