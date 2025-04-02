
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Portugal Pathway Compass" className="h-8 w-8" />
            <span className="font-medium text-xl">Portugal Pathway</span>
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
            <Button asChild variant="default" size="sm" className="hidden md:inline-flex px-4">
              <Link to="/login">Login</Link>
            </Button>
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
                <Link to="/" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link to="/visas" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Visas
                </Link>
                <Link to="/tools" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Tools
                </Link>
                <Link to="/resources" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>
                <Link to="/consultation" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Consultation
                </Link>
                <Link to="/about" className="px-2 py-1 text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                
                <div className="border-t my-4"></div>
                
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="px-2 py-1 text-lg font-medium flex items-center"
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
                  <Button asChild className="mt-2" onClick={() => setIsOpen(false)}>
                    <Link to="/login">Login</Link>
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
