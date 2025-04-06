
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';

const Consultation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Expert Immigration Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized guidance from our immigration specialists to navigate the complexities of Portugal's visa system.
            </p>
          </div>
          
          <ConsultationForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consultation;
