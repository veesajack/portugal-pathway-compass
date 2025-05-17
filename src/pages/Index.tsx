import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, FileCheck, Compass, Calendar, Briefcase, Plane, Home, GraduationCap, Laptop } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import VisaCard from '@/components/VisaCard';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const features = [
    {
      title: 'Visa Eligibility Checker',
      description: 'Answer a few questions to find the right visa type for your situation and goals.',
      icon: <CheckCircle2 className="h-6 w-6" />,
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop',
      link: '/tools/eligibility-checker'
    },
    {
      title: 'Document Checklist Generator',
      description: 'Get a personalized list of all required documents for your specific visa application.',
      icon: <FileCheck className="h-6 w-6" />,
      imageSrc: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop',
      link: '/tools/document-checklist'
    },
    {
      title: 'Application Tracking',
      description: 'Monitor the status of your application with regular updates and notifications.',
      icon: <Compass className="h-6 w-6" />,
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
      link: '/applications'
    },
    {
      title: 'Expert Consultation',
      description: 'Book one-on-one sessions with immigration experts for personalized guidance.',
      icon: <Calendar className="h-6 w-6" />,
      imageSrc: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1470&auto=format&fit=crop',
      link: '/consultation'
    }
  ];

  const visaTypes = [
    {
      title: 'D7 Passive Income Visa',
      description: 'For retirees and individuals with regular passive income looking to relocate to Portugal.',
      icon: <Home className="h-6 w-6" />,
      link: '/visas/d7',
      imageSrc: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Golden Visa',
      description: 'Investment-based residency program offering a fast track to Portuguese citizenship.',
      icon: <Briefcase className="h-6 w-6" />,
      link: '/visas/golden',
      imageSrc: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1471&auto=format&fit=crop'
    },
    {
      title: 'Student Visa',
      description: 'For international students enrolled in Portuguese educational institutions.',
      icon: <GraduationCap className="h-6 w-6" />,
      link: '/visas/student',
      imageSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Digital Nomad Visa',
      description: 'For remote workers and digital professionals looking to live in Portugal.',
      icon: <Laptop className="h-6 w-6" />,
      link: '/visas/digital-nomad',
      imageSrc: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1470&auto=format&fit=crop'
    },
    {
      title: 'Work Visa',
      description: 'For individuals with job offers from Portuguese companies.',
      icon: <Briefcase className="h-6 w-6" />,
      link: '/visas/work',
      imageSrc: 'https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=1470&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block py-1 px-3 border border-portugal-blue/20 rounded-full text-sm font-medium text-portugal-blue bg-portugal-blue/5 mb-4">
                Our Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simplify Your Immigration Journey</h2>
              <p className="text-xl text-muted-foreground">
                From visa eligibility to document preparation, we provide everything you need to navigate the Portuguese immigration process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Link to={feature.link} key={index}>
                  <FeatureCard 
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    imageSrc={feature.imageSrc}
                  />
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="px-6">
                <Link to="/tools/eligibility-checker" className="flex items-center">
                  Explore Our Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Visa Types Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block py-1 px-3 border border-portugal-blue/20 rounded-full text-sm font-medium text-portugal-blue bg-portugal-blue/5 mb-4">
                Visa Options
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Path to Portugal</h2>
              <p className="text-xl text-muted-foreground">
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
                  imageSrc={visa.imageSrc}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-portugal-blue text-portugal-blue hover:bg-portugal-blue/5 px-6">
                <Link to="/visas/d7" className="flex items-center">
                  Compare All Visa Types <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-portugal-blue-dark to-portugal-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto backdrop-blur-sm py-16 px-8 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Portugal Journey?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-xl mx-auto">
                Get personalized guidance from immigration experts to make your move to Portugal smooth and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-portugal-blue hover:bg-white/90 px-6">
                  <Link to="/consultation">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6">
                  <Link to="/tools/eligibility-checker">Check Your Eligibility</Link>
                </Button>
                <WhatsAppButton 
                  message="Hello, I'd like to learn more about relocating to Portugal." 
                  variant="outline"
                  className="bg-green-600/80 border-white text-white hover:bg-green-700/60 px-6"
                >
                  WhatsApp Chat Now
                </WhatsAppButton>
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
