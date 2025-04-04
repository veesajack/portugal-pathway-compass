
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const portugalImages = [
  '/lovable-uploads/a449fae1-f206-4a35-b7f6-f59dc4df2f65.png',
  'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1470&auto=format&fit=crop', // Lisboa
  'https://images.unsplash.com/photo-1589470288084-ecad61835905?q=80&w=1470&auto=format&fit=crop', // Porto
  'https://images.unsplash.com/photo-1516730416069-9b5475e61acf?q=80&w=1470&auto=format&fit=crop', // Algarve
  'https://images.unsplash.com/photo-1517844386809-a2aca5eec3d9?q=80&w=1470&auto=format&fit=crop', // Sintra
  'https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1470&auto=format&fit=crop', // Cascais
  'https://images.unsplash.com/photo-1575540203949-44ecbb2a3ae3?q=80&w=1470&auto=format&fit=crop' // Douro Valley
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portugalImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Reduced opacity from 0.9 (90%) to 0.7 (70%) */}
      <div className="absolute inset-0 bg-gradient-to-r from-portugal-blue-dark to-portugal-blue opacity-70 z-10"></div>
      
      {portugalImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${img}")` }}
        ></div>
      ))}
      
      {/* Increased pattern opacity from 0.1 (10%) to 0.15 (15%) */}
      <div 
        className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-15 z-20"
        style={{ backgroundSize: '30px' }}
      ></div>
      
      <div className="container relative z-30 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 items-center">
          <div className="space-y-6 text-left md:col-span-4">
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
          <div className="relative hidden md:block md:col-span-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-portugal-red to-portugal-green opacity-40 blur-sm"></div>
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
