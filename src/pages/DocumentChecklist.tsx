
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileText, Check, Download, Printer } from 'lucide-react';

const DocumentChecklist = () => {
  const [selectedVisa, setSelectedVisa] = useState('');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const visaTypes = [
    { value: 'd7', label: 'D7 Passive Income Visa' },
    { value: 'golden', label: 'Golden Visa' },
    { value: 'student', label: 'Student Visa' },
    { value: 'digital_nomad', label: 'Digital Nomad Visa' },
    { value: 'work', label: 'Work Visa' },
  ];

  const documentsByVisa: Record<string, Array<{ id: string, name: string, description: string, required: boolean }>> = {
    'd7': [
      { id: 'd7_1', name: 'Passport', description: 'Valid for at least 6 months beyond your intended stay', required: true },
      { id: 'd7_2', name: 'Passport Photos', description: '2 recent color photos (3.5cm x 4.5cm) with white background', required: true },
      { id: 'd7_3', name: 'Visa Application Form', description: 'Completed and signed visa application form', required: true },
      { id: 'd7_4', name: 'Proof of Accommodation', description: 'Rental agreement or property deed in Portugal', required: true },
      { id: 'd7_5', name: 'Proof of Income', description: 'Bank statements for the last 6 months showing regular income', required: true },
      { id: 'd7_6', name: 'Criminal Record Certificate', description: 'From your country of residence for the past year', required: true },
      { id: 'd7_7', name: 'Health Insurance', description: 'Valid in Portugal for the duration of your stay', required: true },
      { id: 'd7_8', name: 'Personal Statement', description: 'Letter explaining your reasons for moving to Portugal', required: true },
      { id: 'd7_9', name: 'Proof of Financial Means', description: 'Bank statements showing sufficient funds to support yourself', required: true },
      { id: 'd7_10', name: 'Travel Insurance', description: 'Valid for initial entry into Portugal', required: true },
      { id: 'd7_11', name: 'Tax Identification Number (NIF)', description: 'Portuguese tax number', required: false },
      { id: 'd7_12', name: 'Marriage/Birth Certificates', description: 'If applying with family members', required: false },
    ],
    'golden': [
      { id: 'golden_1', name: 'Passport', description: 'Valid for at least 6 months beyond your intended stay', required: true },
      { id: 'golden_2', name: 'Passport Photos', description: '2 recent color photos (3.5cm x 4.5cm) with white background', required: true },
      { id: 'golden_3', name: 'Residence Permit Application Form', description: 'Completed and signed application form', required: true },
      { id: 'golden_4', name: 'Proof of Investment', description: 'Documentation proving the qualifying investment in Portugal', required: true },
      { id: 'golden_5', name: 'Criminal Record Certificate', description: 'From your country of residence for the past year', required: true },
      { id: 'golden_6', name: 'Health Insurance', description: 'Valid in Portugal for the duration of your stay', required: true },
      { id: 'golden_7', name: 'Tax Identification Number (NIF)', description: 'Portuguese tax number', required: true },
      { id: 'golden_8', name: 'Declaration from Tax Authority', description: 'Proving no debts to Portuguese Tax Authority', required: true },
      { id: 'golden_9', name: 'Declaration from Social Security', description: 'Proving no debts to Portuguese Social Security', required: true },
      { id: 'golden_10', name: 'Proof of Accommodation', description: 'Address in Portugal', required: true },
      { id: 'golden_11', name: 'Power of Attorney', description: 'If using a legal representative', required: false },
      { id: 'golden_12', name: 'Marriage/Birth Certificates', description: 'If applying with family members', required: false },
    ],
    'student': [
      { id: 'student_1', name: 'Passport', description: 'Valid for at least 6 months beyond your intended stay', required: true },
      { id: 'student_2', name: 'Passport Photos', description: '2 recent color photos (3.5cm x 4.5cm) with white background', required: true },
      { id: 'student_3', name: 'Visa Application Form', description: 'Completed and signed visa application form', required: true },
      { id: 'student_4', name: 'Acceptance Letter', description: 'From a Portuguese educational institution', required: true },
      { id: 'student_5', name: 'Proof of Financial Means', description: 'Bank statements showing sufficient funds to support yourself', required: true },
      { id: 'student_6', name: 'Criminal Record Certificate', description: 'From your country of residence for the past year', required: true },
      { id: 'student_7', name: 'Health Insurance', description: 'Valid in Portugal for the duration of your stay', required: true },
      { id: 'student_8', name: 'Proof of Accommodation', description: 'Address in Portugal', required: true },
      { id: 'student_9', name: 'Academic Records', description: 'Transcripts and diplomas from previous education', required: true },
      { id: 'student_10', name: 'Travel Insurance', description: 'Valid for initial entry into Portugal', required: true },
      { id: 'student_11', name: 'Statement of Purpose', description: 'Letter explaining your study plans in Portugal', required: false },
    ],
    'digital_nomad': [
      { id: 'digital_1', name: 'Passport', description: 'Valid for at least 6 months beyond your intended stay', required: true },
      { id: 'digital_2', name: 'Passport Photos', description: '2 recent color photos (3.5cm x 4.5cm) with white background', required: true },
      { id: 'digital_3', name: 'Visa Application Form', description: 'Completed and signed visa application form', required: true },
      { id: 'digital_4', name: 'Employment Contract', description: 'With a company outside Portugal', required: true },
      { id: 'digital_5', name: 'Proof of Income', description: 'Bank statements for the last 3 months showing regular income', required: true },
      { id: 'digital_6', name: 'Criminal Record Certificate', description: 'From your country of residence for the past year', required: true },
      { id: 'digital_7', name: 'Health Insurance', description: 'Valid in Portugal for the duration of your stay', required: true },
      { id: 'digital_8', name: 'Proof of Accommodation', description: 'Address in Portugal', required: true },
      { id: 'digital_9', name: 'Statement of Responsibility', description: 'Letter stating you will work remotely while in Portugal', required: true },
      { id: 'digital_10', name: 'Tax Residency Certificate', description: 'From your current country of tax residence', required: false },
      { id: 'digital_11', name: 'Travel Insurance', description: 'Valid for initial entry into Portugal', required: true },
    ],
    'work': [
      { id: 'work_1', name: 'Passport', description: 'Valid for at least 6 months beyond your intended stay', required: true },
      { id: 'work_2', name: 'Passport Photos', description: '2 recent color photos (3.5cm x 4.5cm) with white background', required: true },
      { id: 'work_3', name: 'Visa Application Form', description: 'Completed and signed visa application form', required: true },
      { id: 'work_4', name: 'Work Contract', description: 'With a Portuguese company (signed by both parties)', required: true },
      { id: 'work_5', name: 'Declaration from IEFP', description: 'Portuguese Institute of Employment approval', required: true },
      { id: 'work_6', name: 'Criminal Record Certificate', description: 'From your country of residence for the past year', required: true },
      { id: 'work_7', name: 'Health Insurance', description: 'Valid in Portugal for the duration of your stay', required: true },
      { id: 'work_8', name: 'Proof of Accommodation', description: 'Address in Portugal', required: true },
      { id: 'work_9', name: 'Professional Qualifications', description: 'Diplomas or certificates relevant to your job', required: true },
      { id: 'work_10', name: 'Travel Insurance', description: 'Valid for initial entry into Portugal', required: true },
      { id: 'work_11', name: 'Tax Identification Number (NIF)', description: 'Portuguese tax number', required: false },
    ],
  };

  const handleVisaChange = (value: string) => {
    setSelectedVisa(value);
    // Initialize all checkboxes as unchecked
    const documents = documentsByVisa[value] || [];
    const initialCheckedState: Record<string, boolean> = {};
    documents.forEach(doc => {
      initialCheckedState[doc.id] = false;
    });
    setCheckedItems(initialCheckedState);
  };

  const toggleCheckbox = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getCompletionPercentage = () => {
    if (!selectedVisa) return 0;
    
    const documents = documentsByVisa[selectedVisa] || [];
    const requiredDocs = documents.filter(doc => doc.required);
    
    if (requiredDocs.length === 0) return 0;
    
    const checkedRequiredDocs = requiredDocs.filter(doc => checkedItems[doc.id]);
    return Math.round((checkedRequiredDocs.length / requiredDocs.length) * 100);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Document Checklist Generator</h1>
          <p className="text-center text-muted-foreground mb-12">
            Create a personalized checklist of documents needed for your Portuguese visa application.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Select Your Visa Type</CardTitle>
                  <CardDescription>
                    Choose the visa type you want to apply for to see the required documents.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select value={selectedVisa} onValueChange={handleVisaChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      {visaTypes.map((visa) => (
                        <SelectItem key={visa.value} value={visa.value}>
                          {visa.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {selectedVisa && (
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Completion Progress</p>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-300"
                            style={{ width: `${getCompletionPercentage()}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-right">{getCompletionPercentage()}% Complete</p>
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <Button
                          onClick={handlePrint}
                          className="w-full"
                          variant="outline"
                        >
                          <Printer className="mr-2 h-4 w-4" /> Print Checklist
                        </Button>
                        <Button
                          className="w-full"
                          disabled
                        >
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Required Documents</CardTitle>
                  <CardDescription>
                    {selectedVisa 
                      ? `Check off each document as you prepare it.` 
                      : `Select a visa type to see the required documents.`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedVisa ? (
                    <div className="space-y-4">
                      <h3 className="font-medium">Required Documents:</h3>
                      {documentsByVisa[selectedVisa]
                        ?.filter(doc => doc.required)
                        .map((doc) => (
                          <div 
                            key={doc.id} 
                            className="flex items-start space-x-3 p-3 rounded-md border transition-colors hover:bg-secondary/50"
                          >
                            <Checkbox 
                              id={doc.id} 
                              checked={checkedItems[doc.id]} 
                              onCheckedChange={() => toggleCheckbox(doc.id)}
                              className="mt-1"
                            />
                            <div className="space-y-1">
                              <Label 
                                htmlFor={doc.id} 
                                className={`font-medium cursor-pointer ${checkedItems[doc.id] ? 'line-through text-muted-foreground' : ''}`}
                              >
                                {doc.name}
                              </Label>
                              <p className="text-sm text-muted-foreground">{doc.description}</p>
                            </div>
                            {checkedItems[doc.id] && (
                              <div className="ml-auto">
                                <Check className="h-4 w-4 text-green-500" />
                              </div>
                            )}
                          </div>
                        ))}
                      
                      {documentsByVisa[selectedVisa]?.some(doc => !doc.required) && (
                        <>
                          <h3 className="font-medium mt-8">Additional Documents (if applicable):</h3>
                          {documentsByVisa[selectedVisa]
                            ?.filter(doc => !doc.required)
                            .map((doc) => (
                              <div 
                                key={doc.id} 
                                className="flex items-start space-x-3 p-3 rounded-md border transition-colors hover:bg-secondary/50"
                              >
                                <Checkbox 
                                  id={doc.id} 
                                  checked={checkedItems[doc.id]} 
                                  onCheckedChange={() => toggleCheckbox(doc.id)}
                                  className="mt-1"
                                />
                                <div className="space-y-1">
                                  <Label 
                                    htmlFor={doc.id} 
                                    className={`font-medium cursor-pointer ${checkedItems[doc.id] ? 'line-through text-muted-foreground' : ''}`}
                                  >
                                    {doc.name}
                                  </Label>
                                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                                </div>
                                {checkedItems[doc.id] && (
                                  <div className="ml-auto">
                                    <Check className="h-4 w-4 text-green-500" />
                                  </div>
                                )}
                              </div>
                            ))}
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-60 text-center text-muted-foreground">
                      <FileText className="h-16 w-16 mb-4 opacity-20" />
                      <p>Select a visa type from the dropdown menu to generate your personalized document checklist.</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Note:</span> Requirements may change. Always verify with the Portuguese consulate.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocumentChecklist;
