
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Laptop, Globe, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DigitalNomadVisa = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-portugal-blue-dark to-portugal-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Portugal Digital Nomad Visa
                </h1>
                <p className="text-xl mb-6 text-white/90 max-w-xl">
                  Live and work remotely in Portugal while maintaining employment from abroad with the Digital Nomad Visa program.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-portugal-blue hover:bg-white/90">
                    <Link to="/consultation">Book a Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Link to="/tools/eligibility-checker">Check Eligibility</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1470&auto=format&fit=crop" 
                    alt="Digital nomad working in Portugal" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">What is the Digital Nomad Visa?</h2>
                    <p className="text-lg mb-4">
                      The Portugal Digital Nomad Visa, officially introduced in October 2022, is a specialized residence permit that allows remote workers, freelancers, and digital professionals to live in Portugal while working for employers or clients based outside the country.
                    </p>
                    <p className="text-lg mb-4">
                      This visa is part of Portugal's initiative to attract skilled professionals and diversify its economy by embracing the growing global remote work trend.
                    </p>
                    <p className="text-lg">
                      It offers a legal pathway for digital nomads to experience Portugal's high quality of life, favorable climate, and vibrant culture while maintaining their international work arrangements.
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" 
                        alt="Remote working in Portugal" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portugal-blue/20 text-portugal-blue mb-4">
                        <Laptop className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Work Flexibility</h3>
                      <p>Maintain your remote job or business while enjoying Portugal's lifestyle and environment.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portugal-blue/20 text-portugal-blue mb-4">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">EU Access</h3>
                      <p>Travel freely within the Schengen Area for up to 90 days in any 180-day period.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portugal-blue/20 text-portugal-blue mb-4">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Path to Permanent Residency</h3>
                      <p>Opportunity to apply for permanent residency after 5 years and citizenship thereafter.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Two Main Options</h3>
                  <p className="text-lg mb-4">
                    Portugal offers two main pathways for digital nomads:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-xl font-bold mb-2">Temporary Stay Visa</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>For stays up to 1 year</li>
                        <li>Can be renewed for up to 2 additional years</li>
                        <li>Faster processing time</li>
                        <li>Does not count toward permanent residency or citizenship</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-xl font-bold mb-2">Residence Visa (D8)</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>For long-term stays (over 1 year)</li>
                        <li>Initial 2-year period, renewable for 3-year periods</li>
                        <li>Counts toward permanent residency and citizenship</li>
                        <li>More extensive documentation requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Requirements Tab */}
              <TabsContent value="requirements" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Eligibility Requirements</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Remote Work Proof</h3>
                        <p className="text-lg">You must provide evidence that you work remotely for employers or clients outside of Portugal. This can include an employment contract, service agreements, or business registration documents for freelancers.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Minimum Income Requirement</h3>
                        <p className="text-lg">You must demonstrate a stable monthly income of at least four times the Portuguese minimum wage (approximately €3,040 per month or €36,480 annually as of 2023). This income must come from sources outside Portugal.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Clean Criminal Record</h3>
                        <p className="text-lg">You must provide a criminal record certificate from your country of origin or current residence, issued within the last 90 days.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Health Insurance</h3>
                        <p className="text-lg">Valid health insurance that covers your stay in Portugal, including emergency medical care and repatriation.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Accommodation in Portugal</h3>
                        <p className="text-lg">Proof of accommodation for at least your initial stay in Portugal. This could be a rental agreement, property deed, or hotel reservation for the first few weeks.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">Required Documentation</h2>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                    <h3 className="text-xl font-bold mb-3">Personal Documents</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Valid passport (valid for at least 3 months beyond your intended stay)</li>
                      <li>Two recent passport-size photos</li>
                      <li>Completed visa application form</li>
                      <li>Criminal record certificate from your country of origin/residence</li>
                      <li>Proof of health insurance coverage in Portugal</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md mt-6 space-y-4">
                    <h3 className="text-xl font-bold mb-3">Professional Documents</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Employment contract or service agreements with companies outside Portugal</li>
                      <li>For freelancers/entrepreneurs: business registration, client contracts, or portfolio of work</li>
                      <li>Tax returns from the previous year</li>
                      <li>Bank statements showing regular income over the past 3-6 months</li>
                      <li>Declaration from employer confirming remote work arrangement (if applicable)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md mt-6 space-y-4">
                    <h3 className="text-xl font-bold mb-3">Accommodation/Financial Documents</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Proof of accommodation in Portugal</li>
                      <li>Bank statements showing financial stability</li>
                      <li>Portuguese NIF (tax identification number)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Tax Considerations</h3>
                  <p className="text-lg mb-4">
                    While the Digital Nomad Visa allows you to work for foreign companies, there are important tax implications to consider:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>If you become a tax resident in Portugal (staying 183+ days per year), you'll be subject to Portuguese taxation on your worldwide income</li>
                    <li>Portugal has a special Non-Habitual Resident (NHR) tax regime that may offer tax benefits for the first 10 years</li>
                    <li>Under the NHR program, foreign-source income may be exempt from Portuguese taxation in certain circumstances</li>
                    <li>Portugal has double taxation treaties with many countries to avoid being taxed twice on the same income</li>
                    <li>Consulting with a tax professional familiar with Portuguese tax law is highly recommended</li>
                  </ul>
                </div>
              </TabsContent>
              
              {/* Process Tab */}
              <TabsContent value="process" className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-3xl font-bold mb-6">Application Process</h2>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Choose Your Visa Type</h3>
                        <p className="text-lg">Decide between the Temporary Stay Visa (up to 1 year) or the Residence Visa (D8) for long-term stays. Your choice should depend on your intended length of stay and whether you're interested in eventually pursuing permanent residency.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Gather Required Documents</h3>
                        <p className="text-lg">Collect all necessary documentation, including proof of remote work, income verification, health insurance, and accommodation details. Have all non-Portuguese documents translated and apostilled or legalized.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                        <p className="text-lg">Apply at the Portuguese consulate or embassy in your country of residence. Some consulates may require scheduling an appointment in advance. You'll need to submit your application form and all supporting documents in person.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Visa Approval Process</h3>
                        <p className="text-lg">The consulate will review your application, which typically takes 30-60 days. If approved, you'll receive a visa in your passport valid for 4 months, allowing you to enter Portugal.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">5</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Travel to Portugal</h3>
                        <p className="text-lg">Once you have your visa, you can travel to Portugal. Upon arrival, you should register with the local authorities within 3 days if you're staying in private accommodation (hotels typically handle this registration).</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">6</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Schedule Appointment with SEF</h3>
                        <p className="text-lg">For Residence Visa holders: Within those 4 months, you must schedule an appointment with SEF (Portuguese Immigration and Border Service) to apply for your residence permit. It's advisable to book this appointment as soon as possible, as slots can fill up quickly.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">7</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Residence Permit Issuance</h3>
                        <p className="text-lg">Attend your SEF appointment with all required documents. Your biometric data will be collected, and if approved, you'll receive a residence permit valid for 2 years (for D8 visa holders).</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-3xl font-bold mb-6">Renewal and Long-term Options</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Temporary Stay Visa Renewal</h3>
                      <p className="text-lg mb-3">If you hold a Temporary Stay Visa:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>You can renew it for up to two additional years</li>
                        <li>You must apply for renewal before your current visa expires</li>
                        <li>You'll need to demonstrate that you still meet all requirements, including remote work and income</li>
                      </ul>
                      <p className="text-lg mt-3">Note that time spent on this visa does not count toward permanent residency or citizenship.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">Residence Permit Renewal (D8)</h3>
                      <p className="text-lg mb-3">For D8 Residence Permit holders:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The initial permit is valid for 2 years</li>
                        <li>You can renew for consecutive 3-year periods</li>
                        <li>You must maintain the same conditions: remote work, sufficient income, health insurance</li>
                        <li>Apply for renewal 30-60 days before your current permit expires</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">Path to Permanent Residency & Citizenship</h3>
                      <p className="text-lg mb-3">After holding a D8 Residence Permit for 5 years, you may be eligible for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Permanent residency: Valid for 5 years and renewable</li>
                        <li>Portuguese citizenship: Requires basic knowledge of Portuguese language (A2 level) and ties to the Portuguese community</li>
                        <li>Both options require a clean criminal record and legal residence in Portugal for 5 years</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Can I bring my family with me on a Digital Nomad Visa?</h3>
                      <p className="text-lg">
                        Yes, your spouse, children under 18, dependent adult children who are studying, and dependent parents can apply for family reunification visas once you have your residence permit. They must prove their family relationship to you and meet general visa requirements such as having health insurance.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Do I need to pay taxes in Portugal as a digital nomad?</h3>
                      <p className="text-lg">
                        If you become a tax resident in Portugal (staying 183+ days per year), you'll be subject to Portuguese taxes on your worldwide income. However, Portugal's Non-Habitual Resident (NHR) tax regime may offer significant tax benefits for your first 10 years, including possible exemptions on foreign income. Consult a tax professional for personalized advice.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Can I work for Portuguese clients or companies?</h3>
                      <p className="text-lg">
                        The Digital Nomad Visa is specifically designed for those working remotely for non-Portuguese companies or clients. If you want to work for Portuguese entities, you would typically need a different type of work visa or would need to establish a business in Portugal.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Do I need to speak Portuguese to get the Digital Nomad Visa?</h3>
                      <p className="text-lg">
                        No, knowledge of Portuguese is not required for the Digital Nomad Visa application. However, learning the language will significantly enhance your experience living in Portugal and is required if you eventually want to apply for citizenship (A2 level proficiency).
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">How long does the application process take?</h3>
                      <p className="text-lg">
                        The initial visa application typically takes 30-60 days to process. After arriving in Portugal on a D8 visa, obtaining the residence permit may take an additional 2-3 months, depending on appointment availability with SEF.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Can I apply for the Digital Nomad Visa while already in Portugal?</h3>
                      <p className="text-lg">
                        Generally, you should apply at the Portuguese consulate or embassy in your country of residence before coming to Portugal. However, in some cases, if you're already legally in Portugal (e.g., on a tourist visa), you might be able to apply for a change of status, though this process is more complex and not guaranteed.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">What happens if I lose my remote job while on the Digital Nomad Visa?</h3>
                      <p className="text-lg">
                        Since maintaining remote work and income is a condition of the visa, you should find new employment or clients quickly. Significant changes in your work situation should be reported to Portuguese immigration authorities. If your situation changes permanently, you might need to apply for a different type of visa or permit to remain in Portugal legally.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Are there Portuguese cities that are particularly popular with digital nomads?</h3>
                      <p className="text-lg">
                        Lisbon and Porto are the most popular cities due to their robust digital infrastructure, coworking spaces, and international communities. However, many digital nomads also choose coastal areas like the Algarve, Ericeira, and Madeira (which has developed a specific Digital Nomad Village), or smaller cities like Coimbra and Braga, which offer a lower cost of living and a more authentic Portuguese lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Remotely from Portugal?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our immigration experts can help you navigate the Digital Nomad Visa application process and transition to living in Portugal while working remotely.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/tools/document-checklist">Get Document Checklist</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalNomadVisa;
