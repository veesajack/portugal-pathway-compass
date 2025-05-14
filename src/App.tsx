
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { UserProfileProvider } from "@/contexts/UserProfileContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisaEligibilityChecker from "./pages/VisaEligibilityChecker";
import DocumentChecklist from "./pages/DocumentChecklist";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Consultation from "./pages/Consultation";
import UserProfile from "./pages/UserProfile";
import ApplicationForm from "./pages/ApplicationForm";
import Applications from "./pages/Applications";

// Visa pages
import WorkPermit from "./pages/visas/WorkPermit";

// Admin pages
import UsersManagement from "./pages/admin/UsersManagement";
import ApplicationsManagement from "./pages/admin/ApplicationsManagement";
import TestimonialsManagement from "./pages/admin/TestimonialsManagement";
import VisaTypesManagement from "./pages/admin/VisaTypesManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <UserProfileProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tools/eligibility-checker" element={<VisaEligibilityChecker />} />
              <Route path="/tools/document-checklist" element={<DocumentChecklist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              } />
              <Route path="/applications" element={
                <ProtectedRoute>
                  <Applications />
                </ProtectedRoute>
              } />
              <Route path="/applications/new" element={
                <ProtectedRoute>
                  <ApplicationForm />
                </ProtectedRoute>
              } />
              
              {/* Visa routes */}
              <Route path="/visas/work-permit" element={<WorkPermit />} />
              
              {/* Admin routes */}
              <Route path="/admin" element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <AdminProtectedRoute>
                  <UsersManagement />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/applications" element={
                <AdminProtectedRoute>
                  <ApplicationsManagement />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/testimonials" element={
                <AdminProtectedRoute>
                  <TestimonialsManagement />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/visa-types" element={
                <AdminProtectedRoute>
                  <VisaTypesManagement />
                </AdminProtectedRoute>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </UserProfileProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
