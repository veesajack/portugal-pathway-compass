
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Users, 
  FileText, 
  Calendar, 
  BarChart4,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalApplications: 0,
    pendingApplications: 0,
    todayConsultations: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Get total users count
        const { count: usersCount, error: usersError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });
          
        if (usersError) throw usersError;
        
        // Get applications stats
        const { data: applications, error: applicationsError } = await supabase
          .from('visa_applications')
          .select('id, status');
          
        if (applicationsError) throw applicationsError;
        
        // Get today's consultations
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const { data: consultations, error: consultationsError } = await supabase
          .from('consultations')
          .select('*')
          .gte('consultation_date', today.toISOString())
          .lt('consultation_date', new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString());
          
        if (consultationsError) throw consultationsError;
        
        setStats({
          totalUsers: usersCount || 0,
          totalApplications: applications.length,
          pendingApplications: applications.filter(app => app.status === 'pending').length,
          todayConsultations: consultations.length
        });
      } catch (error: any) {
        console.error('Error fetching admin stats:', error);
        toast({
          title: "Error loading dashboard data",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users, applications, and content</p>
          </div>
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">Registered accounts</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Visa Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : stats.totalApplications}</div>
              <p className="text-xs text-muted-foreground">Total submitted</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <AlertCircle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : stats.pendingApplications}</div>
              <p className="text-xs text-muted-foreground">Applications awaiting action</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Today's Consultations</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '...' : stats.todayConsultations}</div>
              <p className="text-xs text-muted-foreground">Scheduled for today</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Dashboard Content */}
        <Tabs defaultValue="applications">
          <TabsList className="mb-4">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Manage and process visa applications</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">Loading applications...</div>
                ) : (
                  <p>Applications management interface will be implemented here.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">Loading users...</div>
                ) : (
                  <p>User management interface will be implemented here.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="consultations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Consultations</CardTitle>
                <CardDescription>Manage upcoming consultation appointments</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">Loading consultations...</div>
                ) : (
                  <p>Consultations management interface will be implemented here.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Website Content</CardTitle>
                <CardDescription>Manage website content and FAQs</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">Loading content...</div>
                ) : (
                  <p>Content management interface will be implemented here.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
