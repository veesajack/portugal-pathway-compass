
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, CheckSquare, PlusCircle } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Welcome, {user?.user_metadata?.full_name || 'User'}</h1>
          <p className="text-muted-foreground">Manage your immigration journey to Portugal</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Visa Applications Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Visa Applications
              </CardTitle>
              <CardDescription>Manage your visa application process</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Track your current applications and their status</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/applications">View Applications</Link>
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
              <CardDescription>Manage your consultation appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Schedule and manage meetings with immigration experts</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/consultations">View Consultations</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Document Checklist Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckSquare className="mr-2 h-5 w-5" />
                Document Checklist
              </CardTitle>
              <CardDescription>Prepare your required documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Keep track of necessary documents for your application</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/documents">View Checklist</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12">
          <Button asChild variant="outline" className="flex items-center">
            <Link to="/applications/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start New Visa Application
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
