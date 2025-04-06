
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProfile } from '@/contexts/UserProfileContext';
import { toast } from '@/hooks/use-toast';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: profileLoading } = useUserProfile();
  const location = useLocation();
  const loading = authLoading || profileLoading;

  useEffect(() => {
    if (!loading && user && !isAdmin) {
      toast({
        title: "Access Denied",
        description: "You need administrator privileges to access this area.",
        variant: "destructive",
      });
    }
  }, [loading, user, isAdmin]);

  // If still loading, show loading spinner
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // If not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in but not admin, redirect to dashboard
  if (!isAdmin) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  // If admin, show the protected content
  return <>{children}</>;
};

export default AdminProtectedRoute;
