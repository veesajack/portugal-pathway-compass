
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronDown, FileText, BookOpen as BookIcon } from "lucide-react";

const ImmigrationGuidesPage = () => {
  const [activeTab, setActiveTab] = useState("getting-started");

  return (
    <>
      <Helmet>
        <title>Immigration Guides | MusasProsperas - Portugal Immigration</title>
        <meta name="description" content="Comprehensive guides on Portugal immigration, visa application processes, and settling in Portugal." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-portugal-blue-dark to-portugal-blue py-12 px-4 md:px-8 lg:py-16">
            <div className="container max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="lg:w-1/2 space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Immigration Guides
                  </h1>
                  <p className="text-lg text-white/90 max-w-lg">
                    Step-by-step guides to help you navigate the Portuguese immigration process 
                    with confidence and clarity.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-end">
                  <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 w-full max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <BookOpen className="text-white h-8 w-8" />
                      <h2 className="text-xl font-medium text-white">Expert Guidance</h2>
                    </div>
                    <p className="text-white/80 mb-4">
                      Our detailed guides are written by immigration specialists with years of experience 
                      helping people make Portugal their home.
                    </p>
                    <Link
                      to="/consultation"
                      className="inline-flex items-center bg-white text-portugal-blue px-4 py-2 rounded font-medium hover:bg-white/90 transition-colors"
                    >
                      Get Personalized Help
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guides Content */}
          <div className="container max-w-6xl mx-auto py-12 px-4">
            <Tabs
              defaultValue="getting-started"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-64 shrink-0">
                  <h2 className="text-2xl font-semibold mb-4">Guide Categories</h2>
                  <TabsList className="flex flex-col w-full bg-transparent space-y-1 h-auto">
                    <TabsTrigger 
                      value="getting-started" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <BookIcon className="h-4 w-4" />
                        <span>Getting Started</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="visa-guides" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Visa Application Guides</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="relocating" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <BookIcon className="h-4 w-4" />
                        <span>Relocating & Settling</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="citizenship" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Citizenship Path</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>

                  <Card className="mt-8 border-portugal-blue/20">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2 text-portugal-blue">Need personalized guidance?</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Book a consultation with our immigration experts for tailored advice.
                      </p>
                      <Link
                        to="/consultation"
                        className="text-sm text-portugal-blue hover:underline"
                      >
                        Book now →
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1">
                  {/* Getting Started Guides */}
                  <TabsContent value="getting-started" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Getting Started with Portugal Immigration</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <GuideCard 
                        title="First Steps to Portugal Immigration" 
                        description="An overview of the process and initial steps for moving to Portugal."
                        image="/lovable-uploads/a449fae1-f206-4a35-b7f6-f59dc4df2f65.png"
                        timeToRead="8 min read"
                      />
                      <GuideCard 
                        title="Choosing the Right Visa Pathway" 
                        description="Learn about different visa options and how to select the best fit for your situation."
                        image="/lovable-uploads/dab6fa77-edc6-46ce-9658-99683bd8a920.png"
                        timeToRead="10 min read"
                      />
                      <GuideCard 
                        title="Portugal Immigration Timeline" 
                        description="Understand the realistic timeframes for each step of the immigration process."
                        image="/placeholder.svg"
                        timeToRead="7 min read"
                      />
                      <GuideCard 
                        title="Cost of Moving to Portugal" 
                        description="Breakdown of expenses associated with relocating to Portugal."
                        image="/placeholder.svg"
                        timeToRead="12 min read"
                      />
                    </div>

                    <div className="mt-10">
                      <h3 className="text-xl font-medium mb-4">Essential Information</h3>
                      
                      <Collapsible className="w-full border rounded-md mb-4">
                        <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50">
                          Before You Begin: Important Considerations
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 pt-0 text-sm">
                          <p className="mb-3">
                            Before starting your Portugal immigration journey, it's important to assess your eligibility, financial requirements, and long-term plans. 
                            Consider these key factors:
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Eligibility for different visa types based on your income, assets, or professional status</li>
                            <li>Financial requirements including proof of funds for visa applications</li>
                            <li>Tax implications in both Portugal and your home country</li>
                            <li>Healthcare needs and insurance requirements</li>
                            <li>Language considerations and integration plans</li>
                            <li>Long-term goals: residency, citizenship, or temporary stay</li>
                          </ul>
                          <p className="mt-3">
                            Taking time to research these aspects thoroughly will help you make informed decisions throughout your immigration process.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible className="w-full border rounded-md mb-4">
                        <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50">
                          Document Preparation Essentials
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 pt-0 text-sm">
                          <p className="mb-3">
                            Proper document preparation is crucial for a smooth application process:
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Ensure all personal documents (birth certificates, marriage certificates) are apostilled</li>
                            <li>Obtain a police clearance certificate from your country of residence (valid for 90 days)</li>
                            <li>Prepare financial documents showing stable income or sufficient savings</li>
                            <li>Secure comprehensive health insurance valid in Portugal</li>
                            <li>Have documents professionally translated to Portuguese if required</li>
                            <li>Prepare proof of accommodation in Portugal (rental agreement or property deed)</li>
                          </ul>
                          <p className="mt-3">
                            Use our <Link to="/tools/document-checklist" className="text-portugal-blue hover:underline">Document Checklist Tool</Link> to get a personalized list based on your visa type.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible className="w-full border rounded-md">
                        <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50">
                          Common Pitfalls to Avoid
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 pt-0 text-sm">
                          <p className="mb-3">
                            Many applicants encounter delays or rejections due to these common mistakes:
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Incomplete applications:</strong> Missing documents or information</li>
                            <li><strong>Expired documents:</strong> Many documents need to be recent (within 90 days)</li>
                            <li><strong>Incorrect translations:</strong> Using non-certified translators</li>
                            <li><strong>Insufficient financial proof:</strong> Not meeting the minimum requirements</li>
                            <li><strong>Poor planning:</strong> Not accounting for appointment wait times</li>
                            <li><strong>DIY approach:</strong> Trying to navigate complex processes without guidance</li>
                          </ul>
                          <p className="mt-3">
                            Working with an immigration specialist can help you avoid these common pitfalls and increase your chances of a successful application.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </TabsContent>

                  {/* Visa Application Guides */}
                  <TabsContent value="visa-guides" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Visa Application Guides</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <GuideCard 
                        title="D7 Visa Application Process" 
                        description="Step-by-step guide to applying for the D7 passive income visa."
                        image="/placeholder.svg"
                        timeToRead="15 min read"
                      />
                      <GuideCard 
                        title="Golden Visa Investment Options" 
                        description="Comprehensive guide to Golden Visa investment routes and application process."
                        image="/placeholder.svg"
                        timeToRead="18 min read"
                      />
                      <GuideCard 
                        title="Digital Nomad Visa Guide" 
                        description="How to apply for and maintain Portugal's digital nomad visa status."
                        image="/placeholder.svg"
                        timeToRead="12 min read"
                      />
                      <GuideCard 
                        title="Student Visa Application Guide" 
                        description="Requirements and process for obtaining a student visa for Portugal."
                        image="/placeholder.svg"
                        timeToRead="10 min read"
                      />
                    </div>

                    <div className="mt-8">
                      <Card className="bg-muted/50 border-portugal-blue/10">
                        <CardHeader>
                          <CardTitle className="text-xl">Preparing for Your Visa Interview</CardTitle>
                          <CardDescription>Essential tips for consular interviews</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">
                            Most visa applications include an interview at the Portuguese consulate. Here's how to prepare:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Review your application thoroughly and be familiar with all documents</li>
                            <li>Prepare to explain your connection to Portugal and reasons for moving</li>
                            <li>Practice answering questions about your financial situation and plans</li>
                            <li>Dress professionally and arrive early for your appointment</li>
                            <li>Bring original documents plus copies of everything</li>
                          </ul>
                          <p>
                            Remember that consular officers are primarily assessing whether you have genuine intentions and meet the requirements for your selected visa category.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <Link to="/consultation">Book Interview Preparation Session</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Relocating & Settling Guides */}
                  <TabsContent value="relocating" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Relocating & Settling in Portugal</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <GuideCard 
                        title="Finding Housing in Portugal" 
                        description="Tips for finding short and long-term accommodation in different regions."
                        image="/placeholder.svg"
                        timeToRead="14 min read"
                      />
                      <GuideCard 
                        title="Setting Up Your Life in Portugal" 
                        description="Essential first steps after arrival: NIF, bank account, healthcare, utilities."
                        image="/placeholder.svg"
                        timeToRead="20 min read"
                      />
                      <GuideCard 
                        title="Portuguese Healthcare System" 
                        description="Guide to accessing public and private healthcare as a resident."
                        image="/placeholder.svg"
                        timeToRead="12 min read"
                      />
                      <GuideCard 
                        title="Education Options for Expats" 
                        description="Overview of public, private, and international schools for families."
                        image="/placeholder.svg"
                        timeToRead="11 min read"
                      />
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-medium mb-4">Popular Expat Destinations</h3>
                      
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <CityCard
                          name="Lisbon"
                          description="Vibrant capital with international community and job opportunities"
                          costOfLiving="High"
                        />
                        <CityCard
                          name="Porto"
                          description="Historic charm with growing tech scene and lower cost than Lisbon"
                          costOfLiving="Medium"
                        />
                        <CityCard
                          name="Algarve"
                          description="Southern coastal region popular with retirees and sun-seekers"
                          costOfLiving="Medium-High"
                        />
                        <CityCard
                          name="Cascais"
                          description="Upscale coastal town with excellent amenities and international schools"
                          costOfLiving="High"
                        />
                        <CityCard
                          name="Madeira"
                          description="Island living with growing digital nomad community"
                          costOfLiving="Medium"
                        />
                        <CityCard
                          name="Silver Coast"
                          description="Affordable coastal living within reach of Lisbon"
                          costOfLiving="Medium-Low"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  {/* Citizenship Path Guides */}
                  <TabsContent value="citizenship" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Path to Portuguese Citizenship</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <GuideCard 
                        title="Citizenship Requirements" 
                        description="Detailed explanation of requirements for Portuguese citizenship after 5 years."
                        image="/placeholder.svg"
                        timeToRead="16 min read"
                      />
                      <GuideCard 
                        title="Portuguese Language Preparation" 
                        description="Resources and tips for passing the required A2 language test."
                        image="/placeholder.svg"
                        timeToRead="10 min read"
                      />
                      <GuideCard 
                        title="Citizenship Application Process" 
                        description="Step-by-step guide to applying for Portuguese citizenship."
                        image="/placeholder.svg"
                        timeToRead="14 min read"
                      />
                      <GuideCard 
                        title="Dual Citizenship Considerations" 
                        description="Legal implications of holding Portuguese citizenship alongside your original nationality."
                        image="/placeholder.svg"
                        timeToRead="9 min read"
                      />
                    </div>

                    <div className="mt-10 bg-muted p-6 rounded-lg border border-muted-foreground/20">
                      <h3 className="text-xl font-medium mb-3">Portuguese Citizenship Timeline</h3>
                      
                      <div className="relative border-l-2 border-portugal-blue pl-6 space-y-8 ml-4">
                        <div className="relative">
                          <div className="absolute -left-[29px] w-6 h-6 bg-portugal-blue rounded-full flex items-center justify-center text-white">1</div>
                          <h4 className="font-medium">Years 1-5: Maintain Legal Residency</h4>
                          <p className="mt-2 text-sm">
                            Maintain valid residence permits without significant absences from Portugal. Renew your temporary 
                            residence permit as required (typically after 2 years, then after 3 more years).
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[29px] w-6 h-6 bg-portugal-blue rounded-full flex items-center justify-center text-white">2</div>
                          <h4 className="font-medium">Year 4-5: Language Preparation</h4>
                          <p className="mt-2 text-sm">
                            Begin Portuguese language studies to achieve the required A2 level proficiency. Find a certified 
                            language school or prepare for the CIPLE exam.
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[29px] w-6 h-6 bg-portugal-blue rounded-full flex items-center justify-center text-white">3</div>
                          <h4 className="font-medium">Year 5+: Citizenship Application</h4>
                          <p className="mt-2 text-sm">
                            Prepare and submit your citizenship application with all required documents, including language certification, 
                            criminal record certificates, and proof of integration into Portuguese society.
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[29px] w-6 h-6 bg-portugal-blue rounded-full flex items-center justify-center text-white">4</div>
                          <h4 className="font-medium">Processing Period (12-24 months)</h4>
                          <p className="mt-2 text-sm">
                            Wait for your application to be processed. The current processing time is approximately 1-2 years, 
                            though this can vary. You may be contacted for additional information during this period.
                          </p>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-[29px] w-6 h-6 bg-portugal-blue rounded-full flex items-center justify-center text-white">5</div>
                          <h4 className="font-medium">Portuguese Citizenship Granted</h4>
                          <p className="mt-2 text-sm">
                            Once approved, you'll receive official notification. You can then apply for your Portuguese passport 
                            and enjoy the full benefits of EU citizenship.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

const GuideCard = ({ title, description, image, timeToRead }: { 
  title: string; 
  description: string; 
  image: string;
  timeToRead: string;
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="w-full">
        <AspectRatio ratio={16/9} className="bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">{timeToRead}</span>
        <Button variant="outline" size="sm" asChild>
          <Link to="#">Read Guide</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CityCard = ({ name, description, costOfLiving }: {
  name: string;
  description: string;
  costOfLiving: string;
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">Cost of Living: {costOfLiving}</p>
      </CardFooter>
    </Card>
  );
};

export default ImmigrationGuidesPage;
