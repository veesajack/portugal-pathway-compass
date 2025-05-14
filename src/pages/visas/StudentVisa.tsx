
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Book, Users } from "lucide-react";

const StudentVisa = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div 
        className="bg-cover bg-center py-20" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Education Visa</Badge>
            <h1 className="text-4xl font-bold mb-6 text-white">Portugal Student Visa</h1>
            <p className="text-xl mb-8 text-white">
              The Student Visa allows non-EU/EEA nationals to study at Portuguese educational institutions, 
              offering a pathway to quality education in Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white">
                <Link to="/tools/eligibility-checker">Check Your Eligibility</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Study in Portugal with Expert Guidance</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We specialize in helping international students navigate the Portuguese student visa process. 
              Our experienced team provides comprehensive support from university applications to visa approval.
            </p>
            <div 
              className="rounded-xl overflow-hidden relative mb-12"
              style={{ height: "350px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Students at a university" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center z-20 p-8 md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-white">Academic Excellence</h3>
                <p className="text-white/90">
                  Portugal offers high-quality education at competitive prices with diverse programs taught in English and Portuguese. 
                  Experience a rich cultural environment while gaining an internationally recognized degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <h2 className="text-2xl font-bold mb-4">About the Student Visa</h2>
                <p className="mb-4 text-muted-foreground">
                  The Portuguese Student Visa is designed for non-EU/EEA nationals who have been accepted to study at a recognized 
                  Portuguese educational institution. This visa allows you to legally reside in Portugal for the duration of your studies.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Portugal has become an increasingly popular destination for international students due to its high-quality education, 
                  relatively affordable tuition fees, and excellent quality of life.
                </p>
                <p className="mb-4 text-muted-foreground">
                  With a Student Visa, you can also work part-time during your studies and potentially transition to other residency 
                  options after graduation, including work visas or even permanent residency.
                </p>
                <div 
                  className="rounded-lg overflow-hidden mt-6"
                  style={{ height: "200px" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                    alt="University campus in Portugal" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <GraduationCap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Quality Education</h4>
                          <p className="text-sm text-muted-foreground">Access to Portugal's high-quality educational institutions with internationally recognized degrees</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <Book className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Work While Studying</h4>
                          <p className="text-sm text-muted-foreground">Legal permission to work part-time (up to 20 hours per week) during the academic year</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">European Experience</h4>
                          <p className="text-sm text-muted-foreground">Travel throughout the Schengen Area without additional visas during your studies</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Pathway to Residency</h4>
                          <p className="text-sm text-muted-foreground">Potential pathway to permanent residency after completing your studies</p>
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
                  <h3 className="text-xl font-bold mb-4">Main Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Acceptance letter from a recognized Portuguese educational institution</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Valid passport with at least 6 months validity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of accommodation in Portugal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Criminal record certificate from your country of origin</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Health insurance valid in Portugal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of financial means (minimum of €705/month for the duration of stay)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of payment of tuition fees (at least for the first year)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Document Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Completed visa application form</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Recent passport-sized photographs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Statement of purpose explaining your study plans</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Academic transcripts and certificates</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of language proficiency (Portuguese or English)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Return travel ticket or proof of funds to purchase one</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <div 
              className="bg-cover bg-center rounded-xl overflow-hidden mb-8 relative"
              style={{ 
                height: "250px",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')` 
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Our Application Support</h2>
              </div>
            </div>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              We guide you through every step of your student visa application, from university admission 
              to document preparation and visa interviews, ensuring a smooth transition to student life in Portugal.
            </p>
            <h2 className="text-2xl font-bold mb-6">Application Process</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">University Admission</h3>
                  <p className="text-muted-foreground mb-4">
                    Apply to and secure admission from a recognized Portuguese educational institution. 
                    Once accepted, you'll receive an official acceptance letter needed for your visa application.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gather Required Documents</h3>
                  <p className="text-muted-foreground mb-4">
                    Collect all necessary documents including your acceptance letter, financial proof, 
                    health insurance, accommodation proof, and criminal record certificate.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Submit Visa Application</h3>
                  <p className="text-muted-foreground mb-4">
                    Apply at the Portuguese embassy or consulate in your home country. Pay the required visa application fee 
                    and schedule an interview if required.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Receive Student Visa</h3>
                  <p className="text-muted-foreground mb-4">
                    Upon approval, you'll receive a temporary student visa that allows you to enter Portugal 
                    and begin your studies.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Apply for Residence Permit</h3>
                  <p className="text-muted-foreground mb-4">
                    After arriving in Portugal, schedule an appointment with SEF (Immigration and Borders Service) 
                    to obtain your student residence permit, valid for the duration of your program.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How long does it take to process a student visa?</h3>
                <p className="text-muted-foreground">
                  Processing times vary by embassy/consulate, but typically take 4-8 weeks. We recommend applying at least 
                  3 months before your course start date to allow sufficient time for processing.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I work with a student visa in Portugal?</h3>
                <p className="text-muted-foreground">
                  Yes, student visa holders can work part-time (up to 20 hours per week) during the academic year 
                  and full-time during official holiday periods.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Do I need to speak Portuguese to study in Portugal?</h3>
                <p className="text-muted-foreground">
                  Not necessarily. While Portuguese universities offer many programs in Portuguese, there are 
                  increasing numbers of programs taught entirely in English, especially at the master's and doctoral levels.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How much money do I need to show for a student visa?</h3>
                <p className="text-muted-foreground">
                  You need to demonstrate that you have at least €705 per month for the duration of your stay. 
                  This can be shown through bank statements, scholarships, or a sponsor's financial guarantee.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I extend my student visa?</h3>
                <p className="text-muted-foreground">
                  Yes, student residence permits can be renewed as long as you continue to meet the requirements, 
                  including ongoing enrollment in your educational program and sufficient financial means.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Student Journey?</h2>
            <p className="text-lg mb-8">
              Our experienced education consultants will guide you through every step of the application process, 
              helping you achieve your academic goals in Portugal.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-white/90">
              <Link to="/consultation">Schedule Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentVisa;
