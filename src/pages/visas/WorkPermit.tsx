
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FileText, BadgeCheck, BadgePercent } from "lucide-react";

const WorkPermit = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Employment Visa</Badge>
            <h1 className="text-4xl font-bold mb-6">Portugal Work Permit Visa</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The Work Permit visa is designed for non-EU citizens who have secured a job offer from a Portuguese employer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/tools/eligibility-checker">Check Your Eligibility</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About the Work Permit Visa</h2>
                <p className="mb-4 text-muted-foreground">
                  The Portuguese Work Permit visa is a type of residence visa that allows non-EU/EEA citizens to live and work in Portugal based on employment with a Portuguese company. 
                </p>
                <p className="mb-4 text-muted-foreground">
                  This visa is suitable for professionals who have received a formal job offer from a Portuguese employer and want to relocate to Portugal for work purposes.
                </p>
                <p className="mb-4 text-muted-foreground">
                  After holding a valid work permit for a period of time, you may become eligible to apply for permanent residency and eventually, Portuguese citizenship.
                </p>
              </div>
              <div>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <Briefcase className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Legal Employment</h4>
                          <p className="text-sm text-muted-foreground">Work legally for your Portuguese employer with full labor protections</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <FileText className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Access to Social Services</h4>
                          <p className="text-sm text-muted-foreground">Gain access to Portugal's healthcare system and other social benefits</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <BadgePercent className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Family Reunification</h4>
                          <p className="text-sm text-muted-foreground">Bring your spouse and dependent children to live with you in Portugal</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <BadgeCheck className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Path to Citizenship</h4>
                          <p className="text-sm text-muted-foreground">Potential pathway to permanent residency and citizenship after 5 years</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requirements" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Visa Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Main Applicant Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Valid job offer from a Portuguese employer</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Valid passport with at least 6 months validity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Proof of accommodation in Portugal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Criminal record certificate from your country of origin</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Health insurance valid in Portugal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Employment contract or promise of employment contract</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Declaration from Portuguese employer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Family Member Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Valid passports with at least 6 months validity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Proof of family relationship (marriage/birth certificates)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Criminal record certificates for family members over 16</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Health insurance valid in Portugal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>Proof that the main applicant can support family members</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Application Process</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-700">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure a Job Offer</h3>
                  <p className="text-muted-foreground mb-4">
                    Find a Portuguese employer willing to hire you. The employer must be approved by the Portuguese authorities to hire foreign workers.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-700">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gather Required Documents</h3>
                  <p className="text-muted-foreground mb-4">
                    Collect all necessary documents including your employment contract, accommodation proof, health insurance, and criminal record certificate.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-700">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Apply at the Portuguese Consulate</h3>
                  <p className="text-muted-foreground mb-4">
                    Submit your application at the Portuguese consulate or embassy in your home country. Pay the required visa application fee.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-700">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Receive Work Visa</h3>
                  <p className="text-muted-foreground mb-4">
                    Once approved, you will receive a temporary work visa that allows you to enter Portugal and begin working.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-700">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Apply for Residence Permit</h3>
                  <p className="text-muted-foreground mb-4">
                    After arriving in Portugal, you must schedule an appointment with SEF (Immigration and Borders Service) to obtain your residence permit.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How long is the work permit visa valid for?</h3>
                <p className="text-muted-foreground">
                  The initial residence permit is usually valid for 2 years, after which it can be renewed for successive periods of 3 years.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can my family members work in Portugal?</h3>
                <p className="text-muted-foreground">
                  Yes, once your family members receive their residence permits through family reunification, they have the right to work in Portugal.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">What happens if I lose my job?</h3>
                <p className="text-muted-foreground">
                  If you become unemployed, you have a grace period to find a new job. You should notify SEF (Immigration and Borders Service) of any changes in your employment status.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How long does the application process take?</h3>
                <p className="text-muted-foreground">
                  The processing time can vary, but it typically takes 2-3 months from the date of application to receive a decision.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I apply for permanent residency later?</h3>
                <p className="text-muted-foreground">
                  Yes, after legally residing in Portugal for 5 consecutive years, you can apply for permanent residency, which doesn't expire.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPermit;
