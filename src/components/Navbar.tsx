
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
    navigate(path);
    setIsOpen(false);
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
                <div 
                  onClick={() => handleNavigation('/')} 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                >
                  Home
                </div>
                
                {/* Visas Section Header with Link to Overview */}
                <div 
                  onClick={() => handleNavigation('/visas')} 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                >
                  All Visa Types
                </div>
                
                {/* Visas Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <div onClick={() => handleNavigation('/visas/d7')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    D7 Visa
                  </div>
                  <div onClick={() => handleNavigation('/visas/golden')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Golden Visa
                  </div>
                  <div onClick={() => handleNavigation('/visas/digital-nomad')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Digital Nomad Visa
                  </div>
                  <div onClick={() => handleNavigation('/visas/student')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Student Visa
                  </div>
                  <div onClick={() => handleNavigation('/visas/work-permit')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Work Permit
                  </div>
                </div>
                
                {/* Tools Header */}
                <div 
                  onClick={() => handleNavigation('/tools/eligibility-checker')} 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                >
                  Tools
                </div>
                
                {/* Tools Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <div onClick={() => handleNavigation('/tools/eligibility-checker')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Visa Eligibility Checker
                  </div>
                  <div onClick={() => handleNavigation('/tools/document-checklist')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Document Checklist
                  </div>
                </div>

                {/* Resources Header */}
                <div 
                  onClick={() => handleNavigation('/resources/guides')} 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                >
                  Resources
                </div>
                
                {/* Resources Mobile Menu - Expanded */}
                <div className="border-l-2 border-muted pl-4 py-2 space-y-3">
                  <div onClick={() => handleNavigation('/resources/guides')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    Immigration Guides
                  </div>
                  <div onClick={() => handleNavigation('/resources/faq')} className="block px-2 py-1 text-lg font-medium cursor-pointer">
                    FAQ
                  </div>
                </div>
                
                <div 
                  onClick={() => handleNavigation('/consultation')} 
                  className="px-2 py-1 text-lg font-medium bg-portugal-blue/10 text-portugal-blue font-semibold rounded cursor-pointer"
                >
                  Book Consultation
                </div>
                <div 
                  onClick={() => handleNavigation('/about')} 
                  className="px-2 py-1 text-lg font-medium cursor-pointer"
                >
                  About
                </div>
                
                <div className="border-t my-4"></div>
                
                {user ? (
                  <>
                    <div
                      onClick={() => handleNavigation('/dashboard')}
                      className="px-2 py-1 text-lg font-medium flex items-center cursor-pointer"
                    >
                      <User size={18} className="mr-2" />
                      Dashboard
                    </div>
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
