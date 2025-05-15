
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-portugal-blue-dark to-portugal-blue py-12 px-4 md:px-8 lg:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                About MusasProsperas
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Your trusted partner in navigating the journey to Portuguese residency and citizenship.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20 text-white">
                <blockquote className="italic text-lg">
                  "Our mission is to empower immigrants with knowledge, guidance, and support throughout their journey to Portugal."
                </blockquote>
                <p className="mt-4 text-right font-medium">- MusasProsperas Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <Tabs defaultValue="story" className="container mx-auto py-12 px-4">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="story">Our Story</TabsTrigger>
            <TabsTrigger value="mission">Mission & Values</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                <p className="mb-4 text-muted-foreground">
                  MusasProsperas was founded in 2018 by a team of immigration specialists and former immigrants who experienced firsthand the challenges of navigating Portugal's immigration system.
                </p>
                <p className="mb-4 text-muted-foreground">
                  After helping friends and family successfully relocate to Portugal, our founders recognized the need for clear, accessible information and personalized guidance for those seeking to make Portugal their home.
                </p>
                <p className="text-muted-foreground">
                  Today, we've assisted over 500 individuals and families from more than 30 countries in successfully obtaining Portuguese residency and citizenship.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  alt="MusasProsperas team"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Milestones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-white/80">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-portugal-blue mb-2">2018</p>
                    <p className="font-medium">Company Founded</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Established in Lisbon with a small team of 3 consultants
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-portugal-blue mb-2">2020</p>
                    <p className="font-medium">Digital Expansion</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Launched online consultation services to reach clients worldwide
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-portugal-blue mb-2">2022</p>
                    <p className="font-medium">Service Expansion</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Added comprehensive support for digital nomad visas
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-portugal-blue mb-2">2024</p>
                    <p className="font-medium">Client Milestone</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Successfully assisted over 500 clients with their immigration process
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mission" className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="mb-4 text-muted-foreground">
                  At MusasProsperas, our mission is to empower individuals and families with the knowledge, resources, and personalized support they need to successfully navigate the Portuguese immigration system.
                </p>
                <p className="text-muted-foreground">
                  We strive to make the immigration process transparent, accessible, and stress-free, allowing our clients to focus on building their new lives in Portugal.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="max-w-sm w-full bg-gradient-to-br from-portugal-blue to-purple-600 rounded-lg p-8 text-white">
                  <Globe className="h-16 w-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Vision</h3>
                  <p>
                    We believe in a world where geographical borders don't limit opportunities for growth, connection, and belonging.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-portugal-blue/10 p-3 mb-4">
                      <Heart className="h-8 w-8 text-portugal-blue" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Client-Centered</h3>
                    <p className="text-muted-foreground">
                      We put our clients' needs and goals at the center of everything we do, providing tailored solutions and support.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-portugal-blue/10 p-3 mb-4">
                      <Award className="h-8 w-8 text-portugal-blue" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We maintain the highest standards of expertise, professionalism, and service quality in all aspects of our work.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-portugal-blue/10 p-3 mb-4">
                      <Users className="h-8 w-8 text-portugal-blue" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Integrity</h3>
                    <p className="text-muted-foreground">
                      We operate with complete transparency, honesty, and ethical practices in all our client relationships.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">João Silva</h3>
                  <p className="text-sm text-portugal-blue font-medium mb-3">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    With 15+ years in immigration law, João founded MusasProsperas to make immigration simpler for everyone.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Maria Santos</h3>
                  <p className="text-sm text-portugal-blue font-medium mb-3">Immigration Specialist</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    A former immigration officer with deep knowledge of Portuguese visa requirements and procedures.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">António Martins</h3>
                  <p className="text-sm text-portugal-blue font-medium mb-3">Client Success Manager</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dedicated to ensuring clients have a smooth transition and integration into Portuguese culture and society.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sofia Almeida</h3>
                  <p className="text-sm text-portugal-blue font-medium mb-3">Document Specialist</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Expert in document preparation, verification, and translation for visa applications.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Miguel Costa</h3>
                  <p className="text-sm text-portugal-blue font-medium mb-3">Real Estate Advisor</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specializes in helping clients find housing and investment properties throughout Portugal.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Ana Rodrigues</h3>
                  <p className="text-sm text-portugal-blue font-medium mb-3">Legal Consultant</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Attorney specializing in immigration law, ensuring all applications meet legal requirements.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8 text-muted-foreground">
                  Have questions about our services or need personalized advice? We're here to help you navigate your journey to Portugal.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-portugal-blue/10 p-2 mt-1">
                      <svg className="h-5 w-5 text-portugal-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+351 912 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-portugal-blue/10 p-2 mt-1">
                      <svg className="h-5 w-5 text-portugal-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@musasprosperas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-portugal-blue/10 p-2 mt-1">
                      <svg className="h-5 w-5 text-portugal-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">Avenida da Liberdade 110, Lisbon, Portugal</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/consultation">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted rounded-lg overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2674463722537!2d-9.144040684686394!3d38.72158947959712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933880e9a1feb%3A0x8b02d1a95ab4fe97!2sAv.%20da%20Liberdade%20110%2C%201250-146%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2sus!4v1651506422489!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="false"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <section className="bg-gradient-to-r from-portugal-blue to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Portugal Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our team of experts guide you through every step of the process, from visa application to settling into your new life in Portugal.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white">
            <Link to="/consultation">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
