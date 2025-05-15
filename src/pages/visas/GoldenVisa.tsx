
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Euro, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GoldenVisa = () => {
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
                  Portugal Golden Visa Program
                </h1>
                <p className="text-xl mb-6 text-white/90 max-w-xl">
                  An investment-based residency program offering a path to Portuguese citizenship for investors and their families.
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
                    src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=1470&auto=format&fit=crop" 
                    alt="Portugal Golden Visa Investment" 
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
                    <h2 className="text-3xl font-bold mb-4">What is the Golden Visa?</h2>
                    <p className="text-lg mb-4">
                      The Portugal Golden Visa, officially known as the Residence Permit for Investment Activity (ARI), is a residency-by-investment program designed to attract non-EU/EEA citizens who invest in Portugal.
                    </p>
                    <p className="text-lg mb-4">
                      Launched in 2012, the program offers a fast-track to Portuguese residency and eventual citizenship for investors and their family members, including spouses, children, and dependent parents.
                    </p>
                    <p className="text-lg">
                      This visa has become popular due to its relatively accessible investment requirements and the benefits of Portuguese residency, including visa-free travel throughout the Schengen Area.
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src="https://images.unsplash.com/photo-1605265054616-e230bc3c0f58?q=80&w=1470&auto=format&fit=crop" 
                        alt="Portuguese Passport" 
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
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Minimal Stay Requirements</h3>
                      <p>Only 7 days in Portugal during the first year, and 14 days in subsequent years.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portugal-blue/20 text-portugal-blue mb-4">
                        <Euro className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Family Inclusion</h3>
                      <p>Spouse, children under 18, dependent children under 26, and dependent parents can be included.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portugal-blue/20 text-portugal-blue mb-4">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Path to Citizenship</h3>
                      <p>Eligible to apply for permanent residency after 5 years and citizenship after 5-6 years.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Recent Program Changes</h3>
                  <p className="text-lg mb-4">
                    As of 2022, the Portuguese government has made significant changes to the Golden Visa program. Notably, residential real estate investments in high-density areas like Lisbon, Porto, and the Algarve are no longer eligible.
                  </p>
                  <p className="text-lg mb-2">
                    The program now focuses more on:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
                    <li>Commercial real estate investments</li>
                    <li>Residential real estate in low-density areas</li>
                    <li>Fund investments with increased minimum amounts</li>
                    <li>Job creation projects</li>
                    <li>Scientific research contributions</li>
                  </ul>
                </div>
              </TabsContent>
              
              {/* Requirements Tab */}
              <TabsContent value="requirements" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Investment Options</h2>
                  <p className="text-lg mb-6">
                    The Portugal Golden Visa offers several investment routes. You must maintain your investment for a minimum of 5 years to qualify for permanent residency or citizenship.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3">Real Estate Investment</h3>
                      <p className="mb-4">Purchase of real estate in Portugal with these options:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>€500,000 or more in commercial properties or residential properties in designated interior areas</li>
                        <li>€350,000 or more for properties over 30 years old or in urban regeneration areas (for renovation)</li>
                        <li>Note: Residential properties in Lisbon, Porto, and coastal areas no longer qualify since January 2022</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3">Capital Transfer</h3>
                      <p className="mb-4">Several options for capital investment:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>€1.5 million or more transfer to a Portuguese bank account</li>
                        <li>€500,000 or more investment in research activities</li>
                        <li>€500,000 or more investment in Portuguese investment funds or venture capital</li>
                        <li>€500,000 or more for the creation of a commercial company in Portugal and creation of 5 permanent jobs</li>
                        <li>€250,000 or more investment in support of artistic production or recovery/maintenance of national cultural heritage</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3">Job Creation</h3>
                      <p className="mb-4">Create at least 10 jobs in Portugal through:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Incorporation of a company in Portugal and creation of 10 full-time positions for a minimum of 3 years</li>
                        <li>No minimum investment amount required, just the creation of the jobs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">Eligibility Criteria</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Non-EU/EEA/Swiss Citizen</h3>
                        <p className="text-lg">You must be a citizen of a country outside the European Union, European Economic Area, or Switzerland.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Clean Criminal Record</h3>
                        <p className="text-lg">Applicants must provide a clean criminal record certificate from their country of origin and from Portugal.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Meet Minimum Stay Requirements</h3>
                        <p className="text-lg">Spend at least 7 days in Portugal during the first year, and 14 days in the subsequent two-year periods.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Maintain Investment</h3>
                        <p className="text-lg">The selected investment must be maintained for a minimum of 5 years from the date the residence permit is granted.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">Health Insurance</h3>
                        <p className="text-lg">Applicants must have health insurance valid in Portugal.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Associated Costs</h3>
                  <p className="text-lg mb-4">
                    In addition to the main investment, applicants should budget for these additional expenses:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Government processing fees: Approximately €5,000-8,000 per application</li>
                    <li>Legal fees: Typically €10,000-15,000 depending on the complexity</li>
                    <li>Property transfer taxes (if applicable): 6-8% of property value</li>
                    <li>Renewal fees: Approximately €2,000-3,000 every two years</li>
                    <li>Travel costs for biometrics and minimum stay requirements</li>
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
                        <h3 className="text-xl font-bold mb-2">Preliminary Evaluation</h3>
                        <p className="text-lg">Consult with immigration experts to determine the best investment option for your circumstances. This typically involves reviewing your financial situation and goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Portuguese Tax Number (NIF)</h3>
                        <p className="text-lg">Obtain a Portuguese tax identification number which is required for any investment in Portugal. This can be done through a representative if you're not in Portugal.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Open Portuguese Bank Account</h3>
                        <p className="text-lg">Set up a local bank account, which is necessary for making your investment and paying application fees. This often requires visiting Portugal or completing the process through certain banks that allow remote opening.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Make the Investment</h3>
                        <p className="text-lg">Complete your chosen investment (real estate purchase, capital transfer, etc.) and obtain all necessary documentation proving the investment has been made.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">5</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Gather Documentation</h3>
                        <p className="text-lg">Prepare all required documents including proof of investment, criminal record certificates, passport copies, health insurance, etc.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">6</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                        <p className="text-lg">File your application with SEF (Portuguese Immigration and Borders Service) through their online portal, followed by scheduling a biometrics appointment.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">7</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Biometrics Appointment</h3>
                        <p className="text-lg">Attend an in-person appointment at SEF offices in Portugal for biometric data collection (fingerprints, photos) for all applicants, including family members.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portugal-blue text-white font-bold text-lg flex-shrink-0">8</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Residence Permit Issuance</h3>
                        <p className="text-lg">Upon approval, receive your temporary residence permit valid for 2 years. This typically takes 6-8 months after application submission.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-3xl font-bold mb-6">Renewal and Path to Citizenship</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">First Renewal (After 2 Years)</h3>
                      <p className="text-lg mb-3">After the initial 2-year period, you'll need to renew your residence permit by:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Demonstrating you've maintained your investment</li>
                        <li>Proving you've met the minimum stay requirement (at least 14 days in Portugal over the 2-year period)</li>
                        <li>Submitting updated documentation (valid passport, health insurance, etc.)</li>
                        <li>Paying renewal fees</li>
                      </ul>
                      <p className="text-lg mt-3">The renewed permit is valid for 3 years.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">Second Renewal (After 5 Years)</h3>
                      <p className="text-lg mb-3">At this point, you have two options:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Apply for permanent residency (valid for 5 years and renewable)</li>
                        <li>Apply for Portuguese citizenship if you meet the requirements</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3">Portuguese Citizenship</h3>
                      <p className="text-lg mb-3">To qualify for citizenship after 5 years of legal residency, you must:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Demonstrate basic knowledge of the Portuguese language (A2 level)</li>
                        <li>Have no criminal record</li>
                        <li>Show ties to the Portuguese community</li>
                        <li>Pass a Portuguese citizenship test (in some cases)</li>
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
                      <h3 className="text-xl font-bold mb-2">Can I include my family in my Golden Visa application?</h3>
                      <p className="text-lg">
                        Yes, your spouse, children under 18, dependent children under 26 (if full-time students and financially dependent), and dependent parents (over 66 or younger if financially dependent) can be included in your application.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Do I need to live in Portugal to maintain my Golden Visa?</h3>
                      <p className="text-lg">
                        No, one of the main attractions of the Golden Visa is its minimal stay requirements. You only need to spend 7 days in Portugal during the first year, and 14 days in each subsequent two-year period. This makes it ideal for investors who don't want to relocate permanently.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Can I work or study in Portugal with a Golden Visa?</h3>
                      <p className="text-lg">
                        Yes, Golden Visa holders have the right to live, work, and study in Portugal. You can start a business, accept employment, or enroll in educational institutions.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">How long does the application process take?</h3>
                      <p className="text-lg">
                        The entire process typically takes 6-8 months from submission of a complete application to approval, though processing times can vary. After approval, you'll need to attend an in-person appointment for biometrics.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Do I need to speak Portuguese to get the Golden Visa?</h3>
                      <p className="text-lg">
                        No, knowledge of Portuguese is not required for the Golden Visa itself. However, if you later apply for citizenship (after 5 years), you'll need to demonstrate a basic understanding of the language (A2 level).
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Can I travel throughout Europe with a Golden Visa?</h3>
                      <p className="text-lg">
                        Yes, the Portuguese residence permit allows visa-free travel throughout the Schengen Area for up to 90 days in any 180-day period. This includes most EU countries.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">When can I sell my investment property?</h3>
                      <p className="text-lg">
                        You must maintain your qualifying investment for at least 5 years from the date your Golden Visa is granted. After this period, you can sell the property without affecting your residency status.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">Are there tax benefits to the Golden Visa?</h3>
                      <p className="text-lg">
                        The Golden Visa itself doesn't provide tax benefits, but Portugal offers a Non-Habitual Resident (NHR) tax regime that Golden Visa holders can apply for. This program offers significant tax advantages for your first 10 years of residence, including potential tax exemptions on foreign income.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Golden Visa Application?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our immigration experts can guide you through every step of the Golden Visa process, from choosing the right investment to obtaining your residence permit.
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

export default GoldenVisa;
