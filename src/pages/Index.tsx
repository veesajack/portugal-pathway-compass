
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, FileCheck, Globe, Calendar, CheckCircle2, Briefcase, Plane, Home, GraduationCap, Laptop } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import VisaCard from '@/components/VisaCard';

const Index = () => {
  const features = [
    {
      title: 'Visa Eligibility Checker',
      description: 'Answer a few questions to find the right visa type for your situation and goals.',
      icon: <CheckCircle2 className="h-6 w-6" />
    },
    {
      title: 'Document Checklist Generator',
      description: 'Get a personalized list of all required documents for your specific visa application.',
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: 'Application Tracking',
      description: 'Monitor the status of your application with regular updates and notifications.',
      icon: <Compass className="h-6 w-6" />
    },
    {
      title: 'Expert Consultation',
      description: 'Book one-on-one sessions with immigration experts for personalized guidance.',
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  const visaTypes = [
    {
      title: 'D7 Passive Income Visa',
      description: 'For retirees and individuals with regular passive income looking to relocate to Portugal.',
      icon: <Home className="h-6 w-6" />,
      link: '/visas/d7'
    },
    {
      title: 'Golden Visa',
      description: 'Investment-based residency program offering a fast track to Portuguese citizenship.',
      icon: <Briefcase className="h-6 w-6" />,
      link: '/visas/golden'
    },
    {
      title: 'Student Visa',
      description: 'For international students enrolled in Portuguese educational institutions.',
      icon: <GraduationCap className="h-6 w-6" />,
      link: '/visas/student'
    },
    {
      title: 'Digital Nomad Visa',
      description: 'For remote workers and digital professionals looking to live in Portugal.',
      icon: <Laptop className="h-6 w-6" />,
      link: '/visas/digital-nomad'
    },
    {
      title: 'Work Visa',
      description: 'For individuals with job offers from Portuguese companies.',
      icon: <Briefcase className="h-6 w-6" />,
      link: '/visas/work'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools to Simplify Your Immigration Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From visa eligibility to document preparation, we provide everything you need to navigate the Portuguese immigration process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/tools" className="flex items-center">
                  Explore Our Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Visa Types Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Path to Portugal</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the different visa types available for relocating to Portugal based on your unique situation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visaTypes.map((visa, index) => (
                <VisaCard 
                  key={index}
                  title={visa.title}
                  description={visa.description}
                  icon={visa.icon}
                  link={visa.link}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary" className="bg-white border border-primary text-primary hover:bg-primary/5">
                <Link to="/visas" className="flex items-center">
                  Compare All Visa Types <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Portugal Journey?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Get personalized guidance from immigration experts to make your move to Portugal smooth and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="text-primary font-medium">
                  <Link to="/consultation">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/tools/eligibility-checker">Check Your Eligibility</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
