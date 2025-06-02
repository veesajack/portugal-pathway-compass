
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import MainNav from './MainNav';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <img src="/logo.svg" alt="MusasProsperas" className="h-8 w-8" />
            <span className="font-medium text-xl">MusasProsperas</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <MainNav />
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="px-4">
                <Link to="/dashboard">
                  <User size={16} className="mr-2" />
                  Dashboard
                </Link>
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
                <Link to="/consultation">Book Consultation</Link>
              </Button>
              <Button asChild variant="default" size="sm" className="px-4">
                <Link to="/login">Login</Link>
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
                <Link 
                  to="/" 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                {/* Visas Section Header with Link to Overview */}
                <Link 
                  to="/visas" 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  All Visa Types
                </Link>
                
                {/* Visas Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <Link 
                    to="/visas/d7" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    D7 Visa
                  </Link>
                  <Link 
                    to="/visas/golden" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Golden Visa
                  </Link>
                  <Link 
                    to="/visas/digital-nomad" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Digital Nomad Visa
                  </Link>
                  <Link 
                    to="/visas/student" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Visa
                  </Link>
                  <Link 
                    to="/visas/work-permit" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Work Permit
                  </Link>
                </div>
                
                {/* Tools Header */}
                <Link 
                  to="/tools/eligibility-checker" 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Tools
                </Link>
                
                {/* Tools Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <Link 
                    to="/tools/eligibility-checker" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Visa Eligibility Checker
                  </Link>
                  <Link 
                    to="/tools/document-checklist" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Document Checklist
                  </Link>
                </div>

                {/* Resources Header */}
                <Link 
                  to="/resources/guides" 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
                
                {/* Resources Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <Link 
                    to="/resources/guides" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Immigration Guides
                  </Link>
                  <Link 
                    to="/resources/faq" 
                    className="block px-2 py-1 text-lg font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
                
                <Link 
                  to="/consultation" 
                  className="px-2 py-1 text-lg font-medium bg-portugal-blue/10 text-portugal-blue font-semibold rounded cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation
                </Link>
                <Link 
                  to="/about" 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                <div className="border-t my-4"></div>
                
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="px-2 py-1 text-lg font-medium flex items-center cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <User size={18} className="mr-2" />
                      Dashboard
                    </Link>
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
                  <Button 
                    onClick={() => handleNavigation('/login')} 
                    className="mt-2"
                  >
                    Login
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
