
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, FileText, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface VisaApplication {
  id: string;
  visa_type: string;
  status: string;
  application_date: string;
}

const statusColorMap: Record<string, string> = {
  draft: 'bg-slate-400',
  submitted: 'bg-blue-400',
  in_review: 'bg-amber-400',
  approved: 'bg-green-400',
  rejected: 'bg-red-400',
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const Applications = () => {
  const { toast } = useToast();
  const [applications, setApplications] = useState<VisaApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('visa_applications')
          .select('*')
          .order('application_date', { ascending: false });

        if (error) throw error;
        
        setApplications(data as VisaApplication[]);
      } catch (error: any) {
        console.error('Error fetching applications:', error);
        toast({
          title: "Error loading applications",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Applications</h1>
            <p className="text-muted-foreground">View and manage your visa applications</p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link to="/applications/new" className="flex items-center">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start New Application
            </Link>
          </Button>
        </div>
        
        {applications.length === 0 && !loading ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <FileText className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="mt-6 text-xl font-semibold">No applications yet</h2>
              <p className="mt-2 text-muted-foreground">
                You haven't started any visa applications yet.
              </p>
              <Button asChild className="mt-6">
                <Link to="/applications/new">Start Your First Application</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Your Visa Applications</CardTitle>
              <CardDescription>
                Track the status of your visa applications and upload required documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-8">Loading applications...</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Visa Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted On</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell className="font-medium">{application.visa_type}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="secondary"
                            className={`${statusColorMap[application.status.toLowerCase()] || 'bg-slate-400'} text-white`}
                          >
                            {application.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(application.application_date)}</TableCell>
                        <TableCell className="text-right">
                          <Button asChild size="sm" variant="ghost">
                            <Link to={`/applications/${application.id}`}>
                              View <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Applications;
