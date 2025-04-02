
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Navigate Your Path to Portugal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-in">
            Comprehensive guidance for visas, residency, and citizenship in Portugal. Find the right visa, prepare your documents, and track your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" variant="secondary" className="text-primary font-medium">
              <Link to="/tools/eligibility-checker">Check Your Eligibility</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/visas" className="flex items-center">
                Explore Visa Options <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
