
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5" /> Return to Homepage
          </Link>
        </Button>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
