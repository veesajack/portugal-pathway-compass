import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/contexts/UserProfileContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, CheckSquare, PlusCircle, User, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import WhatsAppButton from '@/components/WhatsAppButton';

interface Application {
  id: string;
  visa_type: string;
  status: string;
  application_date: string;
}

interface Consultation {
  id: string;
  consultant_name: string;
  consultation_date: string;
  status: string;
}

const statusColorMap: Record<string, string> = {
  draft: 'bg-slate-400',
  submitted: 'bg-blue-400',
  in_review: 'bg-amber-400',
  approved: 'bg-green-400',
  rejected: 'bg-red-400',
  scheduled: 'bg-blue-400',
  completed: 'bg-green-400',
  canceled: 'bg-red-400',
};

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { profile, isAdmin } = useUserProfile();
  const [applications, setApplications] = useState<Application[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        const { data: applicationsData, error: applicationsError } = await supabase
          .from('visa_applications')
          .select('id, visa_type, status, application_date')
          .eq('user_id', user.id)
          .order('application_date', { ascending: false })
          .limit(3);
          
        if (applicationsError) throw applicationsError;
        
        const { data: consultationsData, error: consultationsError } = await supabase
          .from('consultations')
          .select('id, consultant_name, consultation_date, status')
          .eq('user_id', user.id)
          .order('consultation_date', { ascending: true })
          .limit(3);
          
        if (consultationsError) throw consultationsError;
        
        setApplications(applicationsData as Application[]);
        setConsultations(consultationsData as Consultation[]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [user]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {profile?.full_name || user?.email || 'User'}</h1>
            <p className="text-muted-foreground">Manage your immigration journey to Portugal</p>
          </div>
          
          {isAdmin && (
            <Button asChild className="mt-4 md:mt-0">
              <Link to="/admin">Admin Dashboard</Link>
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Visa Applications Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Visa Applications
              </CardTitle>
              <CardDescription>Manage your visa applications</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p>Loading applications...</p>
              ) : applications.length > 0 ? (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{app.visa_type}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(app.application_date)}</p>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={`${statusColorMap[app.status.toLowerCase()] || 'bg-slate-400'} text-white`}
                      >
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-2">No applications yet</p>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/applications/new">Start Application</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/applications">View All Applications</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Consultations Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Consultations
              </CardTitle>
              <CardDescription>Your consultation appointments</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p>Loading consultations...</p>
              ) : consultations.length > 0 ? (
                <div className="space-y-4">
                  {consultations.map((consultation) => (
                    <div key={consultation.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">With {consultation.consultant_name}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(consultation.consultation_date)}</p>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={`${statusColorMap[consultation.status.toLowerCase()] || 'bg-slate-400'} text-white`}
                      >
                        {consultation.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-2">No consultations scheduled</p>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/consultation">Book Consultation</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button asChild className="w-full">
                <Link to="/consultation">Schedule Consultation</Link>
              </Button>
              <WhatsAppButton 
                message="Hello, I'd like to schedule a consultation about my Portugal immigration process."
                variant="outline"
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                Quick WhatsApp Inquiry
              </WhatsAppButton>
            </CardFooter>
          </Card>
          
          {/* Quick Links Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckSquare className="mr-2 h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Useful tools and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link to="/tools/eligibility-checker" className="flex items-center p-3 rounded-md transition-colors hover:bg-secondary">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Visa Eligibility Checker</p>
                    <p className="text-xs text-muted-foreground">Find your best visa option</p>
                  </div>
                </Link>
                
                <Link to="/tools/document-checklist" className="flex items-center p-3 rounded-md transition-colors hover:bg-secondary">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Document Checklist</p>
                    <p className="text-xs text-muted-foreground">Track required documents</p>
                  </div>
                </Link>
                
                <Link to="/profile" className="flex items-center p-3 rounded-md transition-colors hover:bg-secondary">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Profile Settings</p>
                    <p className="text-xs text-muted-foreground">Update your information</p>
                  </div>
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full flex items-center">
                <Link to="/applications/new">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Start New Visa Application
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
