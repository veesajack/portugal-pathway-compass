
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import D7VisaCard from '@/components/visas/D7VisaCard';
import GoldenVisaCard from '@/components/visas/GoldenVisaCard';
import DigitalNomadVisaCard from '@/components/visas/DigitalNomadVisaCard';
import StudentVisaCard from '@/components/visas/StudentVisaCard';
import WorkPermitCard from '@/components/visas/WorkPermitCard';

const Visas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 border border-portugal-blue/20 rounded-full text-sm font-medium text-portugal-blue bg-portugal-blue/5 mb-4">
            Visa Pathways
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visa Options for Portugal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the various visa pathways available for relocating to Portugal based on your personal situation and goals.
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <D7VisaCard />
          <GoldenVisaCard />
          <DigitalNomadVisaCard />
          <StudentVisaCard />
          <WorkPermitCard />
        </div>
        
        <div className="bg-muted rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Not sure which visa is right for you?</h2>
          <p className="text-muted-foreground mb-6">
            Use our eligibility checker tool to find the best visa option based on your specific situation and goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/tools/eligibility-checker" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Check Your Eligibility
            </a>
            <a href="/consultation" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium">
              Book a Consultation
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Visas;
