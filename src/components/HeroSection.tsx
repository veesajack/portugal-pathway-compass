
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-portugal-blue-dark to-portugal-blue opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/lovable-uploads/a449fae1-f206-4a35-b7f6-f59dc4df2f65.png")' }}
      ></div>
      <div 
        className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-10"
        style={{ backgroundSize: '30px' }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="space-y-6 text-left md:col-span-2">
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm">
              Your Portugal Journey Starts Here
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Simplify Your Path to Portugal Residency
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-md">
              Expert guidance and tools to navigate the Portuguese visa and residency process with confidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-white text-portugal-blue hover:bg-white/90">
                <Link to="/tools/eligibility-checker">
                  Check Your Eligibility
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/consultation" className="flex items-center">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block md:col-span-1">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-portugal-red to-portugal-green opacity-30 blur-sm"></div>
            <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1574629173115-01ba37282238?q=80&w=1374&auto=format&fit=crop" 
                alt="Porto riverside view with colorful buildings"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-center">
                  <p className="text-xl font-bold text-white">5+</p>
                  <p className="text-xs text-white/80">Visa Types</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-center">
                  <p className="text-xl font-bold text-white">98%</p>
                  <p className="text-xs text-white/80">Success Rate</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-center">
                  <p className="text-xl font-bold text-white">500+</p>
                  <p className="text-xs text-white/80">Happy Clients</p>
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
