
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portugal Pathway</h3>
            <p className="text-muted-foreground mb-4">
              Guiding your journey to residency and citizenship in Portugal with expert information and tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Visa Types</h4>
            <ul className="space-y-2">
              <li><Link to="/visas/d7" className="text-foreground/80 hover:text-foreground">D7 Visa</Link></li>
              <li><Link to="/visas/golden" className="text-foreground/80 hover:text-foreground">Golden Visa</Link></li>
              <li><Link to="/visas/student" className="text-foreground/80 hover:text-foreground">Student Visa</Link></li>
              <li><Link to="/visas/work" className="text-foreground/80 hover:text-foreground">Work Visa</Link></li>
              <li><Link to="/visas/digital-nomad" className="text-foreground/80 hover:text-foreground">Digital Nomad Visa</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Tools & Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/tools/eligibility-checker" className="text-foreground/80 hover:text-foreground">Visa Eligibility Checker</Link></li>
              <li><Link to="/tools/document-checklist" className="text-foreground/80 hover:text-foreground">Document Checklist</Link></li>
              <li><Link to="/resources/faq" className="text-foreground/80 hover:text-foreground">FAQ</Link></li>
              <li><Link to="/resources/guides" className="text-foreground/80 hover:text-foreground">Immigration Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact & Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/consultation" className="text-foreground/80 hover:text-foreground">Book a Consultation</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-foreground/80 hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-foreground/80 hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Portugal Pathway Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
