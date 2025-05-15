
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Accordion,
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquareQuestion, HelpCircle, FileText } from "lucide-react";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <>
      <Helmet>
        <title>FAQs | MusasProsperas - Portugal Immigration</title>
        <meta name="description" content="Frequently asked questions about moving to Portugal, visa applications, and Portuguese citizenship." />
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
                    Frequently Asked Questions
                  </h1>
                  <p className="text-lg text-white/90 max-w-lg">
                    Find answers to common questions about immigrating to Portugal, visa processes, 
                    requirements, and life in Portugal.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-end">
                  <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 w-full max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <MessageSquareQuestion className="text-white h-8 w-8" />
                      <h2 className="text-xl font-medium text-white">Need more help?</h2>
                    </div>
                    <p className="text-white/80 mb-4">
                      Can't find the answers you're looking for? Our immigration experts are ready to help with 
                      your specific situation.
                    </p>
                    <Link
                      to="/consultation"
                      className="inline-flex items-center bg-white text-portugal-blue px-4 py-2 rounded font-medium hover:bg-white/90 transition-colors"
                    >
                      Book a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="container max-w-6xl mx-auto py-12 px-4">
            <Tabs
              defaultValue="general"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-64 shrink-0">
                  <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                  <TabsList className="flex flex-col w-full bg-transparent space-y-1 h-auto">
                    <TabsTrigger 
                      value="general" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        <span>General</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="visas" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Visas & Permits</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="living" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        <span>Living in Portugal</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="citizenship" 
                      className="w-full justify-start data-[state=active]:bg-portugal-blue-light/10 rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Citizenship</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>

                  <Card className="mt-8 border-portugal-blue/20">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2 text-portugal-blue">Still have questions?</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Our team of experts is ready to answer your specific questions about moving to Portugal.
                      </p>
                      <Link
                        to="/consultation"
                        className="text-sm text-portugal-blue hover:underline"
                      >
                        Contact us →
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1">
                  <TabsContent value="general" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">General Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Why choose Portugal for immigration?</AccordionTrigger>
                        <AccordionContent>
                          Portugal offers many advantages: excellent quality of life, affordable cost of living, 
                          pleasant climate, safety, a strong healthcare system, and a welcoming attitude toward 
                          immigrants. The country also provides various visa options and a relatively straightforward 
                          path to permanent residency and citizenship compared to other European countries.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>How long does the immigration process take?</AccordionTrigger>
                        <AccordionContent>
                          The timeline varies depending on the visa type and individual circumstances. Generally, 
                          the application process takes 3-6 months from submission to approval. After arrival, 
                          you'll need to complete additional steps like obtaining a residence permit, which can take 
                          another 1-2 months. Working with an immigration specialist can help expedite the process 
                          and avoid common delays.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Do I need to learn Portuguese?</AccordionTrigger>
                        <AccordionContent>
                          While not immediately required for most visa applications, basic Portuguese proficiency is 
                          necessary for citizenship (A2 level). Many expats live comfortably in Portugal with only 
                          English, especially in major cities and tourist areas where English is widely spoken. 
                          However, learning Portuguese will significantly enhance your experience, integration, and 
                          employment opportunities.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>What is the cost of living in Portugal?</AccordionTrigger>
                        <AccordionContent>
                          Portugal offers a relatively affordable cost of living compared to other Western European 
                          countries. In major cities like Lisbon and Porto, a single person might need €1,200-1,800 
                          monthly (excluding rent), while smaller cities and rural areas are considerably less 
                          expensive. Rent varies significantly: €600-1,200 for a one-bedroom in Lisbon/Porto city 
                          centers, with lower rates outside main urban areas.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>How is healthcare in Portugal?</AccordionTrigger>
                        <AccordionContent>
                          Portugal has a high-quality public healthcare system (Serviço Nacional de Saúde or SNS) 
                          that provides universal coverage to residents. Legal residents can access this system at 
                          minimal cost. Many expats combine public healthcare with private health insurance 
                          (€40-100/month) for shorter wait times and more language options. Portugal consistently 
                          ranks well in global healthcare quality assessments.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="visas" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Visas & Permits Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="visa-1">
                        <AccordionTrigger>Which Portuguese visa is right for me?</AccordionTrigger>
                        <AccordionContent>
                          The best visa depends on your circumstances:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>D7 Visa: For retirees or those with passive income</li>
                            <li>Golden Visa: For investors</li>
                            <li>Digital Nomad Visa: For remote workers</li>
                            <li>D2 Visa: For entrepreneurs</li>
                            <li>Student Visa: For enrolled students</li>
                            <li>Work Visa: For those with job offers in Portugal</li>
                          </ul>
                          Use our <Link to="/tools/eligibility-checker" className="text-portugal-blue hover:underline">Visa Eligibility Checker</Link> to find the best option for your situation.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="visa-2">
                        <AccordionTrigger>What are the financial requirements for visas?</AccordionTrigger>
                        <AccordionContent>
                          Financial requirements vary by visa type:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>D7 Visa: Approximately €8,460 annual passive income (705€ monthly) for the main applicant</li>
                            <li>Golden Visa: Various investment options, starting at €250,000 for certain investments</li>
                            <li>Digital Nomad Visa: Monthly income of approximately €3,040 (4x minimum wage)</li>
                            <li>D2 Visa: Proof of sufficient funds and a viable business plan</li>
                            <li>Student Visa: Proof of approximately €705 per month for living expenses</li>
                          </ul>
                          These amounts may be adjusted annually and additional funds are required for dependent family members.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="visa-3">
                        <AccordionTrigger>Can I bring my family with me to Portugal?</AccordionTrigger>
                        <AccordionContent>
                          Yes, most Portuguese visas allow you to bring immediate family members (spouse, children under 18, and in some cases, dependent parents) as part of family reunification. 
                          Family members receive the same type of residence permit as the main applicant. You'll need to demonstrate additional financial means to support each family member 
                          (typically 50% of the main applicant's requirement for adults and 30% for children).
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="visa-4">
                        <AccordionTrigger>What documents are needed for visa applications?</AccordionTrigger>
                        <AccordionContent>
                          Common requirements include passport, proof of accommodation in Portugal, proof of financial means, health insurance, criminal record certificate, and visa-specific documentation. 
                          Documents must typically be recent (within 90 days), translated into Portuguese by a certified translator, and apostilled. Use our 
                          <Link to="/tools/document-checklist" className="text-portugal-blue hover:underline ml-1">Document Checklist</Link> tool for personalized requirements.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="visa-5">
                        <AccordionTrigger>How long can I stay in Portugal with each visa?</AccordionTrigger>
                        <AccordionContent>
                          Initial residence permits are typically valid for 2 years, renewable for successive 3-year periods. After 5 years of legal residency, you can apply for permanent residency or citizenship. 
                          Some visas (like Golden Visa) have minimum stay requirements (7 days in the first year and 14 days in subsequent two-year periods), while others (like D7) require you to make Portugal 
                          your primary residence.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="living" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Living in Portugal Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="living-1">
                        <AccordionTrigger>Which cities are best for expats in Portugal?</AccordionTrigger>
                        <AccordionContent>
                          Popular expat destinations include:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Lisbon:</strong> The capital offers vibrant culture, international community, and job opportunities but higher living costs</li>
                            <li><strong>Porto:</strong> Growing expat scene, more affordable than Lisbon, charming historic center</li>
                            <li><strong>Algarve:</strong> Popular with retirees for beaches, golf, and English-speaking communities</li>
                            <li><strong>Cascais:</strong> Upscale coastal town near Lisbon with excellent amenities</li>
                            <li><strong>Madeira:</strong> Island living with growing digital nomad presence</li>
                            <li><strong>Silver Coast:</strong> Affordable coastal living in towns like Nazaré and Peniche</li>
                          </ul>
                          Each region offers different lifestyles, weather patterns, and cost of living.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="living-2">
                        <AccordionTrigger>What's the housing market like in Portugal?</AccordionTrigger>
                        <AccordionContent>
                          Portugal's housing market has seen significant price increases in recent years, especially in Lisbon, Porto, and the Algarve. Renting initially is advisable to explore different areas. 
                          Rental contracts typically require 2 months' deposit and proof of income. Buying property involves approximately 6-8% in additional costs (transfer tax, stamp duty, notary fees). 
                          Non-residents can purchase property without restrictions, making it attractive for investment.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="living-3">
                        <AccordionTrigger>Can I work in Portugal as an immigrant?</AccordionTrigger>
                        <AccordionContent>
                          Work rights depend on your visa type:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>EU/EEA citizens: Full work rights</li>
                            <li>Work Visa holders: Can work for the specific employer</li>
                            <li>Entrepreneur (D2) Visa holders: Can run their business</li>
                            <li>D7 Visa holders: Can work but primary income should remain passive</li>
                            <li>Digital Nomad Visa: Can work remotely for non-Portuguese companies</li>
                            <li>Golden Visa: Includes work rights but is not primarily for employment</li>
                          </ul>
                          Portuguese salaries are generally lower than other Western European countries, with the minimum wage around €820/month (2023) and average wage approximately €1,200-1,500/month.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="living-4">
                        <AccordionTrigger>How is the education system for expat children?</AccordionTrigger>
                        <AccordionContent>
                          Portugal offers several education options:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Public schools:</strong> Free, instruction in Portuguese, good quality but language adjustment may be challenging</li>
                            <li><strong>Private Portuguese schools:</strong> €300-700/month, often with better language support</li>
                            <li><strong>International schools:</strong> €700-1,500/month, following British, American, or IB curricula, instruction in English</li>
                          </ul>
                          Children of legal residents have the right to education. Higher education in Portugal is also well-regarded with relatively affordable tuition compared to many countries.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="living-5">
                        <AccordionTrigger>What are the tax implications of moving to Portugal?</AccordionTrigger>
                        <AccordionContent>
                          Tax residency typically applies after spending 183+ days in Portugal. The Non-Habitual Resident (NHR) tax regime offers significant tax benefits for new residents during their first 10 years, 
                          including tax exemptions or reduced rates (10%) on foreign income and a flat 20% rate on Portuguese income from high-value activities. Standard income tax rates range from 14.5% to 48% 
                          in progressive brackets. Portugal has double taxation agreements with many countries. Consulting a tax advisor before moving is highly recommended as tax legislation can change.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="citizenship" className="mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Citizenship Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="citizenship-1">
                        <AccordionTrigger>How can I get Portuguese citizenship?</AccordionTrigger>
                        <AccordionContent>
                          After 5 years of legal residency, you can apply for Portuguese citizenship. Requirements include:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>5 years of legal residence with valid residence permits</li>
                            <li>Clean criminal record</li>
                            <li>Proof of A2 level Portuguese language proficiency</li>
                            <li>Sufficient connections to the Portuguese community</li>
                            <li>Financial self-sufficiency</li>
                          </ul>
                          The process typically takes 1-2 years after application. Portuguese citizenship grants you an EU passport with the right to live, work, and study anywhere in the European Union.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="citizenship-2">
                        <AccordionTrigger>Can my children become Portuguese citizens?</AccordionTrigger>
                        <AccordionContent>
                          Children born in Portugal to foreign parents can acquire Portuguese citizenship if:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>One parent has been legally resident for at least 2 years at the time of birth</li>
                            <li>The child completes the Portuguese primary education (1st cycle)</li>
                          </ul>
                          Children of parents who obtain Portuguese citizenship can also apply for citizenship, regardless of their age. Minor children included in your residence permit application can apply for citizenship 
                          after the same 5-year period as the main applicant.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="citizenship-3">
                        <AccordionTrigger>Does Portugal allow dual citizenship?</AccordionTrigger>
                        <AccordionContent>
                          Yes, Portugal fully allows dual citizenship. You are not required to renounce your original citizenship when acquiring Portuguese citizenship. However, you should check your home country's laws, 
                          as some countries do not allow their citizens to hold dual nationality. Portuguese citizens with dual nationality are treated exclusively as Portuguese citizens while in Portugal.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="citizenship-4">
                        <AccordionTrigger>What is the Portuguese language requirement for citizenship?</AccordionTrigger>
                        <AccordionContent>
                          Applicants for Portuguese citizenship must demonstrate A2 level proficiency in Portuguese (basic conversational level). This can be proven through:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>CIPLE (Centro de Avaliação de Português Língua Estrangeira) exam certificate</li>
                            <li>Certificate from a recognized Portuguese language school</li>
                            <li>Proof of education in a Portuguese-speaking country</li>
                          </ul>
                          Exceptions exist for applicants over 60 years old and those with health conditions that prevent language learning. Preparing for this requirement early in your residency period is advisable.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="citizenship-5">
                        <AccordionTrigger>What rights do I gain with Portuguese citizenship?</AccordionTrigger>
                        <AccordionContent>
                          Portuguese citizenship provides numerous benefits:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>EU passport allowing free movement, residence, and work throughout the European Union</li>
                            <li>Visa-free or visa-on-arrival travel to 186+ countries</li>
                            <li>Right to vote in Portuguese and European elections</li>
                            <li>Access to Portuguese consular protection worldwide</li>
                            <li>Option to pass citizenship to children born anywhere</li>
                            <li>Unrestricted ability to own property and businesses in Portugal and the EU</li>
                            <li>Permanent right to live in Portugal without visa renewals</li>
                          </ul>
                          Unlike permanent residency, citizenship cannot be revoked due to absence from Portugal.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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

export default FAQPage;
