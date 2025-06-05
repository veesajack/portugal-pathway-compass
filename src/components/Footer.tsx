
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="MusasProsperas" className="h-8 w-8" />
              <span className="font-medium text-xl">MusasProsperas</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Guiding your journey to residency and citizenship in Portugal with expert information and tools.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Visa Types</h4>
            <ul className="space-y-3">
              <li><Link to="/visas/d7" className="text-muted-foreground hover:text-foreground transition-colors animated-link">D7 Visa</Link></li>
              <li><Link to="/visas/golden" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Golden Visa</Link></li>
              <li><Link to="/visas/student" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Student Visa</Link></li>
              <li><Link to="/visas/work-permit" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Work Permit</Link></li>
              <li><Link to="/visas/digital-nomad" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Digital Nomad Visa</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/tools/eligibility-checker" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Visa Eligibility Checker</Link></li>
              <li><Link to="/tools/document-checklist" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Document Checklist</Link></li>
              <li><Link to="/consultation" className="text-muted-foreground hover:text-foreground transition-colors animated-link">Book a Consultation</Link></li>
              <li>
                <a 
                  href="https://wa.me/+351936329523?text=Hello,%20I'm%20interested%20in%20Portugal%20immigration%20assistance." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors animated-link"
                >
                  Contact Us
                </a>
              </li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors animated-link">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="py-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MusasProsperas. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
