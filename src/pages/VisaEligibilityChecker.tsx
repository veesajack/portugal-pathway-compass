
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const VisaEligibilityChecker = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);

  // First step - select visa type
  const visaTypes = [
    { value: 'retirement', label: 'Retirement / Passive Income' },
    { value: 'work', label: 'Work' },
    { value: 'study', label: 'Study' },
    { value: 'investment', label: 'Investment' },
    { value: 'digital_nomad', label: 'Remote Work/Digital Nomad' },
  ];
  
  // Question sets for each visa type
  const questionsByVisaType: Record<string, any[]> = {
    retirement: [
      {
        id: 'passive_income',
        question: 'Do you have a stable passive income source?',
        options: [
          { value: 'yes_high', label: 'Yes, more than €10,000/month' },
          { value: 'yes_medium', label: 'Yes, €2,000 to €10,000/month' },
          { value: 'yes_low', label: 'Yes, less than €2,000/month' },
          { value: 'no', label: 'No passive income' },
        ],
      },
      {
        id: 'assets',
        question: 'Do you have significant assets or savings?',
        options: [
          { value: 'high', label: 'Yes, over €100,000' },
          { value: 'medium', label: 'Yes, between €50,000 and €100,000' },
          { value: 'low', label: 'Yes, less than €50,000' },
          { value: 'no', label: 'No significant assets' },
        ],
      },
      {
        id: 'duration',
        question: 'How long do you plan to stay in Portugal?',
        options: [
          { value: 'short', label: 'Less than 1 year' },
          { value: 'medium', label: '1 to 5 years' },
          { value: 'long', label: 'More than 5 years' },
          { value: 'permanent', label: 'Permanently (seeking citizenship)' },
        ],
      },
    ],
    work: [
      {
        id: 'job_offer',
        question: 'Do you have a job offer from a Portuguese company?',
        options: [
          { value: 'yes_permanent', label: 'Yes, permanent position' },
          { value: 'yes_temporary', label: 'Yes, temporary/contract position' },
          { value: 'in_process', label: 'In the process of getting an offer' },
          { value: 'no', label: 'No job offer yet' },
        ],
      },
      {
        id: 'qualification',
        question: 'What is your highest qualification level?',
        options: [
          { value: 'phd', label: 'PhD or Doctoral degree' },
          { value: 'masters', label: 'Master's degree' },
          { value: 'bachelors', label: 'Bachelor's degree' },
          { value: 'high_school', label: 'High school diploma or below' },
        ],
      },
      {
        id: 'industry',
        question: 'Which industry do you work in?',
        options: [
          { value: 'tech', label: 'Technology & IT' },
          { value: 'healthcare', label: 'Healthcare & Life Sciences' },
          { value: 'education', label: 'Education & Research' },
          { value: 'service', label: 'Service industry' },
          { value: 'other', label: 'Other industry' },
        ],
      },
    ],
    study: [
      {
        id: 'admission',
        question: 'Have you been admitted to a Portuguese educational institution?',
        options: [
          { value: 'yes_university', label: 'Yes, to a university' },
          { value: 'yes_language', label: 'Yes, to a language school' },
          { value: 'yes_vocational', label: 'Yes, to a vocational school' },
          { value: 'no', label: 'Not yet admitted' },
        ],
      },
      {
        id: 'program_duration',
        question: 'How long is your study program?',
        options: [
          { value: 'short', label: 'Less than 1 year' },
          { value: 'medium', label: '1 to 3 years' },
          { value: 'long', label: 'More than 3 years' },
        ],
      },
      {
        id: 'financial_support',
        question: 'How will your studies be financially supported?',
        options: [
          { value: 'self', label: 'Self-financed' },
          { value: 'scholarship', label: 'Scholarship' },
          { value: 'family', label: 'Family support' },
          { value: 'loan', label: 'Student loan' },
        ],
      },
    ],
    investment: [
      {
        id: 'investment_type',
        question: 'What type of investment are you planning to make?',
        options: [
          { value: 'real_estate_high', label: 'Real estate (over €500,000)' },
          { value: 'real_estate_low', label: 'Real estate (€280,000 - €500,000)' },
          { value: 'business', label: 'Business creation (minimum €500,000)' },
          { value: 'capital_transfer', label: 'Capital transfer (minimum €1,500,000)' },
          { value: 'research', label: 'Research or cultural support (minimum €250,000)' },
        ],
      },
      {
        id: 'timeline',
        question: 'When are you planning to make your investment?',
        options: [
          { value: 'immediate', label: 'Immediately' },
          { value: 'six_months', label: 'Within 6 months' },
          { value: 'year', label: 'Within a year' },
          { value: 'undecided', label: 'Still undecided' },
        ],
      },
      {
        id: 'citizenship',
        question: 'Are you interested in Portuguese citizenship through investment?',
        options: [
          { value: 'yes', label: 'Yes, it's a primary goal' },
          { value: 'maybe', label: 'Yes, but it's not the main reason' },
          { value: 'no', label: 'No, just interested in residency' },
        ],
      },
    ],
    digital_nomad: [
      {
        id: 'employment',
        question: 'What is your current employment status?',
        options: [
          { value: 'remote_employee', label: 'Remote employee for a foreign company' },
          { value: 'freelancer', label: 'Freelancer with foreign clients' },
          { value: 'entrepreneur', label: 'Online business owner' },
          { value: 'mixed', label: 'Mix of different remote income sources' },
        ],
      },
      {
        id: 'income_level',
        question: 'What is your average monthly income?',
        options: [
          { value: 'high', label: 'More than €4,000/month' },
          { value: 'medium', label: 'Between €2,800 and €4,000/month' },
          { value: 'low', label: 'Less than €2,800/month' },
        ],
      },
      {
        id: 'stay_duration',
        question: 'How long do you plan to stay in Portugal?',
        options: [
          { value: 'short', label: 'Less than 6 months' },
          { value: 'medium', label: '6 months to 1 year' },
          { value: 'long', label: '1 to 2 years' },
          { value: 'permanent', label: 'More than 2 years' },
        ],
      },
    ],
  };

  useEffect(() => {
    if (selectedVisa) {
      setCurrentQuestions(questionsByVisaType[selectedVisa]);
    }
  }, [selectedVisa]);

  const handleVisaSelect = (value: string) => {
    setSelectedVisa(value);
    setAnswers({});
    setCurrentStep(1);
  };

  const handleAnswer = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (!selectedVisa) {
      return;
    }
    
    if (currentStep < currentQuestions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      determineVisaRecommendation();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else if (currentStep === 1) {
      // Go back to visa type selection
      setSelectedVisa(null);
      setCurrentStep(0);
    }
  };

  const determineVisaRecommendation = () => {
    if (!selectedVisa) return;

    // Logic to determine the best visa based on answers and selected visa type
    switch (selectedVisa) {
      case 'retirement':
        if (answers.passive_income?.includes('yes_medium') || answers.passive_income?.includes('yes_high')) {
          setResult('d7');
        } else if (answers.assets?.includes('high')) {
          setResult('d7');
        } else {
          setResult('undetermined');
        }
        break;
      
      case 'work':
        if (answers.job_offer?.includes('yes')) {
          setResult('work');
        } else if (answers.qualification === 'phd' || answers.qualification === 'masters') {
          setResult('highly_qualified');
        } else {
          setResult('undetermined');
        }
        break;
      
      case 'study':
        if (answers.admission?.includes('yes')) {
          setResult('student');
        } else {
          setResult('undetermined');
        }
        break;
      
      case 'investment':
        if (answers.investment_type?.includes('real_estate')) {
          setResult('golden');
        } else if (answers.investment_type) {
          setResult('golden');
        } else {
          setResult('undetermined');
        }
        break;
      
      case 'digital_nomad':
        if (answers.income_level === 'high' || answers.income_level === 'medium') {
          setResult('digital_nomad');
        } else {
          setResult('undetermined');
        }
        break;
      
      default:
        setResult('undetermined');
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedVisa(null);
    setAnswers({});
    setResult(null);
  };

  const renderResult = () => {
    const resultData = {
      d7: {
        title: 'D7 Passive Income Visa',
        description: 'Based on your answers, the D7 Visa appears to be the best fit for your situation. This visa is designed for retirees and individuals with stable passive income.',
        requirements: [
          'Proof of regular passive income',
          'Health insurance valid in Portugal',
          'Criminal record certificate',
          'Proof of accommodation in Portugal',
        ],
        url: '/visas/d7'
      },
      golden: {
        title: 'Golden Visa',
        description: 'Based on your answers, the Golden Visa program appears to be the best fit for your situation. This is an investment-based residency permit for non-EU citizens.',
        requirements: [
          'Capital investment (various options from €280,000 to €500,000+)',
          'Clean criminal record',
          'Health insurance',
          'Minimum stay requirement of 7 days in the first year',
        ],
        url: '/visas/golden'
      },
      student: {
        title: 'Student Visa',
        description: 'Based on your answers, the Student Visa appears to be the best fit for your situation. This visa is for studying at a Portuguese institution.',
        requirements: [
          'Acceptance at a Portuguese educational institution',
          'Proof of sufficient funds to support yourself',
          'Health insurance valid in Portugal',
          'Clean criminal record',
        ],
        url: '/visas/student'
      },
      digital_nomad: {
        title: 'Digital Nomad Visa',
        description: 'Based on your answers, the Digital Nomad Visa appears to be the best fit for your situation. This visa is for remote workers employed by non-Portuguese companies.',
        requirements: [
          'Proof of employment or regular income from foreign sources',
          'Minimum income of approximately €2,800/month',
          'Health insurance valid in Portugal',
          'Clean criminal record',
        ],
        url: '/visas/digital-nomad'
      },
      work: {
        title: 'Work Visa',
        description: 'Based on your answers, the Work Visa appears to be the best fit for your situation. This visa is for individuals with employment contracts with Portuguese companies.',
        requirements: [
          'Employment contract with a Portuguese company',
          'Health insurance valid in Portugal',
          'Clean criminal record',
          'Proof of accommodation in Portugal',
        ],
        url: '/visas/work'
      },
      highly_qualified: {
        title: 'Highly Qualified Activity Visa',
        description: 'Based on your qualifications, the Highly Qualified Activity Visa might be suitable. This visa is for specialized professionals in scientific, technical, or cultural fields.',
        requirements: [
          'Proof of high qualification (Masters degree or higher)',
          'Job offer or contract for a highly qualified position',
          'Health insurance valid in Portugal',
          'Clean criminal record',
        ],
        url: '/visas/work'
      },
      undetermined: {
        title: 'Multiple Options Available',
        description: 'Based on your unique situation, you may qualify for multiple visa types. We recommend consulting with an immigration expert to determine the best path forward.',
        requirements: [
          'Your specific circumstances need personalized assessment',
          'Different visa types have different requirements and benefits',
          'An expert can help evaluate your best long-term strategy',
        ],
        url: '/consultation'
      }
    };

    const visaResult = result ? resultData[result as keyof typeof resultData] : null;

    return visaResult ? (
      <Card className="w-full max-w-3xl mx-auto animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">Recommended Visa: {visaResult.title}</CardTitle>
          <CardDescription className="text-base mt-2">{visaResult.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h4 className="font-semibold">Key Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {visaResult.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={resetQuiz}>
            Start Over
          </Button>
          <Button onClick={() => navigate(visaResult.url)}>
            Learn More About This Visa
          </Button>
        </CardFooter>
      </Card>
    ) : null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Visa Eligibility Checker</h1>
          <p className="text-center text-muted-foreground mb-12">
            Answer a few questions to find the best visa option for your move to Portugal.
          </p>
          
          {result ? (
            renderResult()
          ) : (
            <Card className="w-full animate-fade-in">
              <CardHeader>
                <CardTitle>
                  {currentStep === 0 
                    ? "What is your primary purpose for moving to Portugal?" 
                    : currentQuestions[currentStep - 1]?.question}
                </CardTitle>
                {currentStep !== 0 && (
                  <CardDescription>
                    {`Question ${currentStep} of ${currentQuestions.length}`}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {currentStep === 0 ? (
                  <RadioGroup
                    value={selectedVisa || ''}
                    onValueChange={handleVisaSelect}
                    className="space-y-3"
                  >
                    {visaTypes.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-secondary transition-colors">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-grow cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <RadioGroup
                    value={answers[currentQuestions[currentStep - 1]?.id] || ''}
                    onValueChange={(value) => handleAnswer(currentQuestions[currentStep - 1]?.id, value)}
                    className="space-y-3"
                  >
                    {currentQuestions[currentStep - 1]?.options.map((option: any) => (
                      <div key={option.value} className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-secondary transition-colors">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-grow cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                {currentStep === 0 ? (
                  <Button 
                    onClick={() => handleNext()}
                    disabled={!selectedVisa}
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNext}
                    disabled={!currentQuestions[currentStep - 1] || !answers[currentQuestions[currentStep - 1]?.id]}
                  >
                    {currentStep < currentQuestions.length ? 'Next' : 'See Results'} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisaEligibilityChecker;
