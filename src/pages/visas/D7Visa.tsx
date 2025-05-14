
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BadgeCheck, BadgePercent, Home } from "lucide-react";

const D7Visa = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div 
        className="bg-cover bg-center py-20" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2670&auto=format&fit=crop')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Passive Income Visa</Badge>
            <h1 className="text-4xl font-bold mb-6 text-white">Portugal D7 Visa</h1>
            <p className="text-xl mb-8 text-white">
              The D7 visa is ideal for retirees and individuals with regular passive income who want to relocate to Portugal.
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
            <h2 className="text-3xl font-bold mb-6 text-center">Your Path to Portugal with Passive Income</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We specialize in guiding retirees and individuals with passive income sources through the D7 visa application process.
              Our team provides personalized assistance to ensure a smooth transition to your new life in Portugal.
            </p>
            <div 
              className="rounded-xl overflow-hidden relative mb-12"
              style={{ height: "350px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1626688445215-3dbd63a694be?q=80&w=2670&auto=format&fit=crop" 
                alt="Relaxing in Portugal" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center z-20 p-8 md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-white">Comprehensive D7 Support</h3>
                <p className="text-white/90">
                  From document preparation to residency application, we handle every step of your D7 visa journey,
                  allowing you to focus on planning your new life in Portugal.
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
                <h2 className="text-2xl font-bold mb-4">About the D7 Visa</h2>
                <p className="mb-4 text-muted-foreground">
                  The Portuguese D7 Visa, also known as the Passive Income Visa or Retirement Visa, is designed for non-EU citizens who have a stable, regular passive income source.
                </p>
                <p className="mb-4 text-muted-foreground">
                  This visa is particularly popular among retirees, investors with dividend income, and individuals with regular income from rentals, pensions, or investments.
                </p>
                <p className="mb-4 text-muted-foreground">
                  The D7 provides a pathway to Portuguese residency and eventual citizenship, while allowing you to enjoy Portugal's high quality of life, excellent healthcare system, and favorable tax benefits.
                </p>
                <div 
                  className="rounded-lg overflow-hidden mt-6"
                  style={{ height: "200px" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1518659526054-190340b15735?q=80&w=2670&auto=format&fit=crop" 
                    alt="Relaxing retirement" 
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
                          <Home className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Live in Portugal</h4>
                          <p className="text-sm text-muted-foreground">Legal residency in Portugal with the ability to live and travel freely</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Healthcare Access</h4>
                          <p className="text-sm text-muted-foreground">Access to Portugal's highly-rated public healthcare system</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <BadgePercent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Tax Advantages</h4>
                          <p className="text-sm text-muted-foreground">Potential tax benefits through the Non-Habitual Resident tax regime</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <BadgeCheck className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Path to Citizenship</h4>
                          <p className="text-sm text-muted-foreground">Eligibility for permanent residency after 5 years and citizenship thereafter</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requirements" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">D7 Visa Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Financial Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Regular passive income (typically at least the Portuguese minimum wage per month)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of sufficient funds in a Portuguese bank account</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Evidence of stable, regular income source (pension, dividends, rental income, etc.)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of tax compliance in your country of origin</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Documentation Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Valid passport with at least 6 months validity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Proof of accommodation in Portugal (rental agreement, property deed)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Criminal record certificate from your country of origin</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Health insurance coverage valid in Portugal</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>Personal statement explaining the purpose of relocating to Portugal</span>
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2670&auto=format&fit=crop')` 
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Our Application Support</h2>
              </div>
            </div>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              We provide comprehensive support throughout your D7 visa application process, ensuring you meet all requirements
              and helping you navigate Portugal's immigration system with ease.
            </p>
            <h2 className="text-2xl font-bold mb-6">D7 Visa Application Process</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Document Preparation</h3>
                  <p className="text-muted-foreground mb-4">
                    Gather all required documents, including proof of income, accommodation arrangements, and health insurance.
                    All documents must be translated into Portuguese by a certified translator.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Portuguese Bank Account</h3>
                  <p className="text-muted-foreground mb-4">
                    Open a Portuguese bank account and transfer sufficient funds to demonstrate financial stability
                    for your stay in Portugal.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consulate Application</h3>
                  <p className="text-muted-foreground mb-4">
                    Submit your D7 visa application at the Portuguese consulate in your country of residence.
                    This typically includes an in-person interview.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enter Portugal</h3>
                  <p className="text-muted-foreground mb-4">
                    Once your D7 visa is approved, you can travel to Portugal and must enter within the visa validity period,
                    typically within 4 months of approval.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-700">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Residence Permit Application</h3>
                  <p className="text-muted-foreground mb-4">
                    After arriving in Portugal, schedule an appointment with SEF (Portuguese Immigration and Borders Service) 
                    to obtain your residence permit.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How much passive income do I need to qualify for the D7 visa?</h3>
                <p className="text-muted-foreground">
                  Generally, you need to demonstrate regular passive income of at least the Portuguese minimum wage 
                  (approximately €760 per month in 2023). For a family, the requirement increases based on the number of dependents.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I work in Portugal with a D7 visa?</h3>
                <p className="text-muted-foreground">
                  Yes, the D7 residence permit allows you to work in Portugal, whether as an employee or self-employed. 
                  However, the primary qualification for the visa must be your passive income source, not employment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I bring my family with me?</h3>
                <p className="text-muted-foreground">
                  Yes, your spouse, children under 18, and dependent adult children can join you in Portugal through family
                  reunification. You will need to demonstrate sufficient income to support all family members.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How long does the D7 visa application process take?</h3>
                <p className="text-muted-foreground">
                  The processing time typically ranges from 2-4 months, depending on the Portuguese consulate in your country.
                  Once approved, the initial visa is valid for 4 months to enter Portugal.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I apply for Portuguese citizenship with a D7 visa?</h3>
                <p className="text-muted-foreground">
                  Yes, after holding legal residency in Portugal for 5 years, you can apply for permanent residency or citizenship.
                  You'll need to demonstrate basic Portuguese language skills (A2 level) and ties to the country.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your D7 Visa Journey?</h2>
            <p className="text-lg mb-8">
              Our experienced immigration consultants are here to guide you through every step of the D7 visa process,
              ensuring a smooth transition to your new life in Portugal.
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

export default D7Visa;
