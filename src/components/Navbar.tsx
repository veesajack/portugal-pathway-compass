
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import MainNav from './MainNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="MusasProsperas" className="h-8 w-8" />
            <span className="font-medium text-xl">MusasProsperas</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <MainNav />
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="px-4">
                <a href="/dashboard">
                  <User size={16} className="mr-2" />
                  Dashboard
                </a>
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="px-4">
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="px-4 text-portugal-blue border-portugal-blue hover:bg-portugal-blue/10"
              >
                <a href="/consultation">Book Consultation</a>
              </Button>
              <Button asChild variant="default" size="sm" className="px-4">
                <a href="/login">Login</a>
              </Button>
            </div>
          )}

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pr-0">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </a>
                
                {/* Visas Section Header with Link to Overview */}
                <a href="/visas" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  All Visa Types
                </a>
                
                {/* Visas Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <a href="/visas/d7" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    D7 Visa
                  </a>
                  <a href="/visas/golden" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Golden Visa
                  </a>
                  <a href="/visas/digital-nomad" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Digital Nomad Visa
                  </a>
                  <a href="/visas/student" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Student Visa
                  </a>
                  <a href="/visas/work-permit" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Work Permit
                  </a>
                </div>
                
                {/* Tools Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <a href="/tools/eligibility-checker" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Visa Eligibility Checker
                  </a>
                  <a href="/tools/document-checklist" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Document Checklist
                  </a>
                </div>

                {/* Resources Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <a href="/resources/guides" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Immigration Guides
                  </a>
                  <a href="/resources/faq" className="block px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    FAQ
                  </a>
                </div>
                
                <a href="/consultation" className="px-2 py-1 text-lg font-medium bg-portugal-blue/10 text-portugal-blue font-semibold rounded" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </a>
                <a href="/about" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </a>
                
                <div className="border-t my-4"></div>
                
                {user ? (
                  <>
                    <a
                      href="/dashboard"
                      className="px-2 py-1 text-lg font-medium flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <User size={18} className="mr-2" />
                      Dashboard
                    </a>
                    <Button
                      variant="outline"
                      onClick={handleSignOut}
                      className="mt-2"
                    >
                      <LogOut size={18} className="mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button asChild className="mt-2" onClick={() => setIsOpen(false)}>
                    <a href="/login">Login</a>
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
