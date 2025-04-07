
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { extendedSupabase as supabase } from '@/integrations/supabase/types-extension';
import { toast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, FileText, Clock, CheckCircle, XCircle, Loader2, MessageSquare } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Application {
  id: string;
  user_id: string;
  visa_type: string;
  status: string;
  application_date: string;
  updated_at: string;
  notes: string | null;
  user_name?: string;
  user_email?: string;
}

interface User {
  id: string;
  email: string;
  full_name: string | null;
}

const ApplicationsManagement = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Record<string, User>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [visaTypeFilter, setVisaTypeFilter] = useState('all');
  const [visaTypes, setVisaTypes] = useState<string[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [notes, setNotes] = useState('');

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('visa_applications')
        .select('*')
        .order('application_date', { ascending: false });

      if (error) throw error;
      
      const appData = data as Application[];
      setApplications(appData);
      
      // Extract unique visa types
      const uniqueVisaTypes = Array.from(new Set(appData.map(app => app.visa_type)));
      setVisaTypes(uniqueVisaTypes);
      
      // Fetch user information for all applications
      const userIds = Array.from(new Set(appData.map(app => app.user_id)));
      await fetchUsers(userIds);
      
      setFilteredApplications(appData);
    } catch (error: any) {
      toast({
        title: "Error fetching applications",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const fetchUsers = async (userIds: string[]) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, email')
        .in('id', userIds);
        
      if (error) throw error;
      
      const usersMap: Record<string, User> = {};
      data.forEach((user: any) => {
        usersMap[user.id] = user;
      });
      
      setUsers(usersMap);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    // Apply filters when any filter changes
    filterApplications();
  }, [searchTerm, statusFilter, visaTypeFilter, applications]);

  const filterApplications = () => {
    let filtered = [...applications];
    
    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    // Filter by visa type
    if (visaTypeFilter !== 'all') {
      filtered = filtered.filter(app => app.visa_type === visaTypeFilter);
    }
    
    // Filter by search term (user name or email)
    if (searchTerm) {
      filtered = filtered.filter(app => {
        const user = users[app.user_id];
        if (!user) return false;
        
        const searchLower = searchTerm.toLowerCase();
        const nameMatch = user.full_name && user.full_name.toLowerCase().includes(searchLower);
        const emailMatch = user.email && user.email.toLowerCase().includes(searchLower);
        const visaMatch = app.visa_type.toLowerCase().includes(searchLower);
        
        return nameMatch || emailMatch || visaMatch;
      });
    }
    
    setFilteredApplications(filtered);
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('visa_applications')
        .update({ 
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);
        
      if (error) throw error;
      
      // Update local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status, updated_at: new Date().toISOString() } : app
      ));
      
      // Send notification to user
      const app = applications.find(a => a.id === id);
      if (app) {
        await sendNotification(app.user_id, status, app.visa_type);
      }
      
      toast({
        title: "Status updated",
        description: `Application status has been updated to ${status}.`
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const sendNotification = async (userId: string, status: string, visaType: string) => {
    try {
      let title, message, type;
      
      switch (status) {
        case 'in_review':
          title = "Application Under Review";
          message = `Your ${visaType} visa application is now being reviewed by our team.`;
          type = "info";
          break;
        case 'approved':
          title = "Application Approved";
          message = `Congratulations! Your ${visaType} visa application has been approved.`;
          type = "success";
          break;
        case 'rejected':
          title = "Application Rejected";
          message = `We regret to inform you that your ${visaType} visa application has been rejected.`;
          type = "error";
          break;
        case 'additional_documents':
          title = "Additional Documents Required";
          message = `We need additional documents for your ${visaType} visa application.`;
          type = "warning";
          break;
        default:
          title = "Application Status Update";
          message = `Your ${visaType} visa application status has been updated to ${status}.`;
          type = "info";
      }
      
      const { error } = await supabase
        .from('notifications')
        .insert({
          user_id: userId,
          title,
          message,
          type,
          is_read: false
        });
        
      if (error) throw error;
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };
  
  const saveNotes = async () => {
    if (!selectedApplication) return;
    
    try {
      const { error } = await supabase
        .from('visa_applications')
        .update({ 
          notes,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedApplication.id);
        
      if (error) throw error;
      
      // Update local state
      setApplications(applications.map(app => 
        app.id === selectedApplication.id ? { ...app, notes } : app
      ));
      
      toast({
        title: "Notes saved",
        description: "Application notes have been saved."
      });
    } catch (error: any) {
      toast({
        title: "Error saving notes",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Pending</Badge>;
      case 'in_review':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">In Review</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">Rejected</Badge>;
      case 'additional_documents':
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">Needs Documents</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };
  
  const handleSelectApplication = (app: Application) => {
    setSelectedApplication(app);
    setNotes(app.notes || '');
  };
  
  return (
    <AdminLayout title="Applications Management">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Visa Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by applicant name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in_review">In Review</SelectItem>
                  <SelectItem value="additional_documents">Needs Documents</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={visaTypeFilter} onValueChange={setVisaTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by visa type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Visa Types</SelectItem>
                  {visaTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" onClick={fetchApplications}>
                Refresh
              </Button>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No applications found</h3>
              <p className="text-muted-foreground">No visa applications match your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <Card className="lg:col-span-2">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Visa</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredApplications.map((app) => {
                        const user = users[app.user_id];
                        return (
                          <TableRow 
                            key={app.id} 
                            className={`cursor-pointer ${selectedApplication?.id === app.id ? 'bg-muted' : ''}`}
                            onClick={() => handleSelectApplication(app)}
                          >
                            <TableCell>
                              <div className="font-medium">{user?.full_name || 'Unknown'}</div>
                              <div className="text-xs text-muted-foreground">{user?.email}</div>
                            </TableCell>
                            <TableCell>{app.visa_type}</TableCell>
                            <TableCell>{getStatusBadge(app.status)}</TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {formatDistanceToNow(new Date(app.application_date), { addSuffix: true })}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </Card>
              
              <Card className="lg:col-span-3">
                {selectedApplication ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {selectedApplication.visa_type} Application
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Submitted {formatDistanceToNow(new Date(selectedApplication.application_date), { addSuffix: true })}
                        </p>
                      </div>
                      <div>
                        {getStatusBadge(selectedApplication.status)}
                      </div>
                    </div>
                    
                    <Tabs defaultValue="details">
                      <TabsList className="mb-4">
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="notes">Admin Notes</TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="details">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium">Applicant</p>
                              <p className="text-sm text-muted-foreground">
                                {users[selectedApplication.user_id]?.full_name || 'Unknown'}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Email</p>
                              <p className="text-sm text-muted-foreground">
                                {users[selectedApplication.user_id]?.email || 'Unknown'}
                              </p>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <p className="text-sm font-medium mb-2">Change Status</p>
                            <div className="flex flex-wrap gap-2">
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-300"
                                  >
                                    <Clock className="mr-1 h-4 w-4" />
                                    In Review
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Set application to "In Review"?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will notify the applicant that their application is being reviewed.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => updateApplicationStatus(selectedApplication.id, 'in_review')}>
                                      Confirm
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                              
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="bg-green-100 hover:bg-green-200 text-green-800 border-green-300"
                                  >
                                    <CheckCircle className="mr-1 h-4 w-4" />
                                    Approve
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Approve this application?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will notify the applicant that their application has been approved.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => updateApplicationStatus(selectedApplication.id, 'approved')}>
                                      Approve
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                              
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="bg-red-100 hover:bg-red-200 text-red-800 border-red-300"
                                  >
                                    <XCircle className="mr-1 h-4 w-4" />
                                    Reject
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Reject this application?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will notify the applicant that their application has been rejected.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => updateApplicationStatus(selectedApplication.id, 'rejected')}>
                                      Reject
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                              
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300"
                                  >
                                    <FileText className="mr-1 h-4 w-4" />
                                    Request Documents
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Request additional documents?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will notify the applicant that they need to provide additional documents.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => updateApplicationStatus(selectedApplication.id, 'additional_documents')}>
                                      Request Documents
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="notes">
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">Admin Notes</label>
                            <textarea
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              className="w-full h-40 p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Enter administrative notes about this application..."
                            />
                          </div>
                          <Button onClick={saveNotes}>Save Notes</Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="documents">
                        <div className="text-center py-12">
                          <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Document management</h3>
                          <p className="text-muted-foreground mb-4">
                            Document management functionality will be implemented in the future.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Select an application</h3>
                    <p className="text-muted-foreground">
                      Select an application from the list to view details and take actions.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default ApplicationsManagement;
