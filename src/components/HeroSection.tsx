
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Single background image instead of slideshow */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/a449fae1-f206-4a35-b7f6-f59dc4df2f65.png')` 
        }}
      ></div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-r from-portugal-green via-white to-portugal-red opacity-[0.02] z-20"
      ></div>
      
      <div className="container relative z-30 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 items-center">
          <div className="space-y-6 text-left md:col-span-4">
            <a 
              href="/visas" 
              className="inline-block py-2 px-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-base font-semibold text-white shadow-lg hover:bg-white/40 transition-colors cursor-pointer"
            >
              Your Portugal Journey Starts Here
            </a>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Simplify Your Path to Portugal Residency
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-md">
              Expert guidance and tools to navigate the Portuguese visa and residency process with confidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-white text-portugal-blue hover:bg-white/90">
                <a href="/tools/eligibility-checker">
                  Check Your Eligibility
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white bg-portugal-blue/90 text-white font-medium hover:bg-portugal-blue hover:text-white"
              >
                <a href="/consultation" className="flex items-center">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <WhatsAppButton 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 bg-green-600/80"
              >
                WhatsApp Us
              </WhatsAppButton>
            </div>
          </div>
          <div className="relative hidden md:block md:col-span-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-portugal-green to-portugal-red opacity-40 blur-sm"></div>
            <div className="relative p-2 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513735492246-483525079686?q=80&w=1374&auto=format&fit=crop" 
                  alt="Lisbon view"
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="bg-white/30 backdrop-blur-sm p-1.5 rounded-lg text-center">
                  <p className="text-xs font-bold text-white">5+</p>
                  <p className="text-[10px] text-white/80">Visa Types</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm p-1.5 rounded-lg text-center">
                  <p className="text-xs font-bold text-white">98%</p>
                  <p className="text-[10px] text-white/80">Success</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm p-1.5 rounded-lg text-center">
                  <p className="text-xs font-bold text-white">500+</p>
                  <p className="text-[10px] text-white/80">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
