
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/contexts/UserProfileContext';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const { signOut } = useAuth();
  const { isAdmin } = useUserProfile();
  const navigate = useNavigate();
  
  // Redirect if not admin
  React.useEffect(() => {
    if (isAdmin === false) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access the admin area.",
        variant: "destructive",
      });
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);
  
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: 'Users', path: '/admin/users', icon: <Users className="h-5 w-5" /> },
    { name: 'Applications', path: '/admin/applications', icon: <FileText className="h-5 w-5" /> },
    { name: 'Consultations', path: '/admin/consultations', icon: <Calendar className="h-5 w-5" /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings className="h-5 w-5" /> },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-background border-r">
          <div className="p-6">
            <h2 className="text-lg font-bold">Admin Panel</h2>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-1 p-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 mt-auto">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <header className="bg-background sticky top-0 z-10 border-b">
            <div className="container flex h-16 items-center justify-between py-4">
              <h1 className="text-2xl font-bold">{title}</h1>
              
              <div className="md:hidden">
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Separator />
          </header>
          
          <main className="container py-6">
            {children}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminLayout;
