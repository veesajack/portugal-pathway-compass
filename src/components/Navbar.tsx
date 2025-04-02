
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Portugal Pathway Compass" className="h-8 w-8" />
            <span className="font-bold text-xl text-portugal-blue">Portugal Pathway</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/visas" className="text-foreground/80 hover:text-foreground transition-colors">
            Visas
          </Link>
          <Link to="/tools" className="text-foreground/80 hover:text-foreground transition-colors">
            Tools
          </Link>
          <Link to="/resources" className="text-foreground/80 hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link to="/consultation" className="text-foreground/80 hover:text-foreground transition-colors">
            Consultation
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          
          {user ? (
            <>
              <Button asChild variant="ghost" className="flex items-center">
                <Link to="/dashboard">
                  <User size={16} className="mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" onClick={handleSignOut} className="flex items-center">
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </>
          ) : (
            <Button asChild variant="default">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 bg-background p-6 flex flex-col space-y-6 transform transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Link
          to="/visas"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Visas
        </Link>
        <Link
          to="/tools"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Tools
        </Link>
        <Link
          to="/resources"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Resources
        </Link>
        <Link
          to="/consultation"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Consultation
        </Link>
        <Link
          to="/about"
          className="text-lg font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="text-lg font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={18} className="mr-2" />
              Dashboard
            </Link>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="flex items-center justify-center w-full"
            >
              <LogOut size={18} className="mr-2" />
              Sign Out
            </Button>
          </>
        ) : (
          <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
