
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link 
            to="/visas" 
            className="inline-block py-2 px-4 mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full animate-fade-in hover:bg-white/30 transition-colors cursor-pointer"
          >
            <span className="text-base font-semibold text-white">
              Your Portugal Journey Starts Here
            </span>
          </Link>
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
            <Button 
              asChild 
              size="lg" 
              className="bg-portugal-blue text-white font-medium border border-white/20 hover:bg-portugal-blue/90"
            >
              <Link to="/consultation">Book Consultation</Link>
            </Button>
          </div>
          <div className="mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <WhatsAppButton 
              message="Hello, I'd like to learn more about relocating to Portugal."
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Chat with us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
