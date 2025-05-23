
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
import Visas from "./pages/Visas";
import VisaEligibilityChecker from "./pages/VisaEligibilityChecker";
import DocumentChecklist from "./pages/DocumentChecklist";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Consultation from "./pages/Consultation";
import UserProfile from "./pages/UserProfile";
import ApplicationForm from "./pages/ApplicationForm";
import Applications from "./pages/Applications";
import FAQ from "./pages/resources/FAQ";
import ImmigrationGuides from "./pages/resources/ImmigrationGuides";
import About from "./pages/About";

// Visa pages
import WorkPermit from "./pages/visas/WorkPermit";
import D7Visa from "./pages/visas/D7Visa";
import StudentVisa from "./pages/visas/StudentVisa";
import GoldenVisa from "./pages/visas/GoldenVisa";
import DigitalNomadVisa from "./pages/visas/DigitalNomadVisa";

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
              <Route path="/about" element={<About />} />
              <Route path="/visas" element={<Visas />} />
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
              
              {/* Resource pages */}
              <Route path="/resources/faq" element={<FAQ />} />
              <Route path="/resources/guides" element={<ImmigrationGuides />} />
              
              {/* Visa routes */}
              <Route path="/visas/work-permit" element={<WorkPermit />} />
              <Route path="/visas/d7" element={<D7Visa />} />
              <Route path="/visas/student" element={<StudentVisa />} />
              <Route path="/visas/golden" element={<GoldenVisa />} />
              <Route path="/visas/digital-nomad" element={<DigitalNomadVisa />} />
              
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
