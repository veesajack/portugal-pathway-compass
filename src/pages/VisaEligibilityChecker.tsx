
import React, { useState } from 'react';
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
  const [answers, setAnswers] = useState({
    purpose: '',
    duration: '',
    income: '',
    investment: '',
    employment: '',
  });
  const [result, setResult] = useState<string | null>(null);

  const questions = [
    {
      id: 'purpose',
      question: 'What is your primary purpose for moving to Portugal?',
      options: [
        { value: 'retirement', label: 'Retirement' },
        { value: 'work', label: 'Work' },
        { value: 'study', label: 'Study' },
        { value: 'investment', label: 'Investment' },
        { value: 'digital_nomad', label: 'Remote Work/Digital Nomad' },
      ],
    },
    {
      id: 'duration',
      question: 'How long do you plan to stay in Portugal?',
      options: [
        { value: 'less_than_1_year', label: 'Less than 1 year' },
        { value: '1_to_5_years', label: '1 to 5 years' },
        { value: 'more_than_5_years', label: 'More than 5 years' },
        { value: 'permanent', label: 'Permanently (seeking citizenship)' },
      ],
    },
    {
      id: 'income',
      question: 'Do you have a stable passive income source?',
      options: [
        { value: 'yes_high', label: 'Yes, more than €10,000/month' },
        { value: 'yes_medium', label: 'Yes, €2,000 to €10,000/month' },
        { value: 'yes_low', label: 'Yes, less than €2,000/month' },
        { value: 'no', label: 'No passive income' },
      ],
    },
    {
      id: 'investment',
      question: 'Are you planning to invest in Portugal?',
      options: [
        { value: 'real_estate_high', label: 'Yes, in real estate (over €500,000)' },
        { value: 'real_estate_low', label: 'Yes, in real estate (less than €500,000)' },
        { value: 'business', label: 'Yes, in a business or startup' },
        { value: 'no', label: 'No investment plans' },
      ],
    },
    {
      id: 'employment',
      question: 'What is your employment situation?',
      options: [
        { value: 'employed_portugal', label: 'Job offer from a Portuguese company' },
        { value: 'remote_work', label: 'Remote work for a non-Portuguese company' },
        { value: 'self_employed', label: 'Self-employed/Freelancer' },
        { value: 'student', label: 'Student (or planning to study)' },
        { value: 'not_employed', label: 'Not employed/Retired' },
      ],
    },
  ];

  const handleAnswer = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Determine visa recommendation based on answers
      determineVisaRecommendation();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const determineVisaRecommendation = () => {
    // Simple logic to determine the recommended visa
    if (answers.purpose === 'retirement' || (answers.income.includes('yes') && answers.purpose !== 'work')) {
      setResult('d7');
    } else if (answers.purpose === 'investment' || answers.investment.includes('real_estate_high') || answers.investment.includes('business')) {
      setResult('golden');
    } else if (answers.purpose === 'study' || answers.employment === 'student') {
      setResult('student');
    } else if (answers.purpose === 'digital_nomad' || answers.employment === 'remote_work') {
      setResult('digital_nomad');
    } else if (answers.employment === 'employed_portugal') {
      setResult('work');
    } else {
      // Default recommendation if no clear match
      setResult('undetermined');
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({
      purpose: '',
      duration: '',
      income: '',
      investment: '',
      employment: '',
    });
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
                  {questions[currentStep].question}
                </CardTitle>
                <CardDescription>
                  {`Question ${currentStep + 1} of ${questions.length}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[questions[currentStep].id as keyof typeof answers]}
                  onValueChange={(value) => handleAnswer(questions[currentStep].id, value)}
                  className="space-y-3"
                >
                  {questions[currentStep].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-secondary transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-grow cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!answers[questions[currentStep].id as keyof typeof answers]}
                >
                  {currentStep < questions.length - 1 ? 'Next' : 'See Results'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
