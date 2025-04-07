
import { extendedSupabase as supabase } from '@/integrations/supabase/types-extension';

export const insertSampleTestimonials = async () => {
  const testimonials = [
    {
      name: "João Silva",
      content: "The team at Portugal Pathway made our D7 visa process incredibly smooth. Their expertise and guidance helped us through every step of the process.",
      rating: 5,
      visa_type: "D7 Visa",
      is_featured: true,
    },
    {
      name: "Maria Gonzalez",
      content: "I was initially very nervous about applying for the Golden Visa, but the team provided exceptional support. They were always available to answer my questions.",
      rating: 4,
      visa_type: "Golden Visa",
      is_featured: true,
    },
    {
      name: "Thomas Muller",
      content: "As a digital nomad, I needed to make sure I had the correct visa to work remotely from Portugal. Their team helped me secure the right visa quickly.",
      rating: 5,
      visa_type: "Digital Nomad Visa",
      is_featured: true,
    },
    {
      name: "Sarah Johnson",
      content: "The document checklist feature saved me so much time. I knew exactly what I needed for my application without any back-and-forth communication.",
      rating: 5,
      visa_type: "D7 Visa",
      is_featured: false,
    },
    {
      name: "Alex Rodriguez",
      content: "I appreciated the transparent communication throughout my visa application process. No hidden fees or surprises.",
      rating: 4,
      visa_type: "Golden Visa",
      is_featured: false,
    }
  ];

  try {
    const { data, error } = await supabase
      .from('testimonials')
      .insert(testimonials)
      .select();
      
    if (error) throw error;
    console.log("Sample testimonials inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting sample testimonials:", error);
    throw error;
  }
};

export const insertSampleVisaTypes = async () => {
  const visaTypes = [
    {
      id: "d7",
      name: "D7 Passive Income Visa",
      description: "The D7 Visa is for non-EU/EEA citizens who have sufficient and stable passive income to support themselves and their family members during their stay in Portugal.",
      processing_time: "3-6 months",
      fees: "€90 for visa application + €83 for residence permit",
      requirements: [
        { title: "Valid passport", description: "Valid passport with at least 6 months validity" },
        { title: "Proof of accommodation", description: "Proof of accommodation in Portugal (rental agreement or property deed)" },
        { title: "Proof of income", description: "Proof of regular passive income (pension, rental income, dividends, etc.)" },
        { title: "Criminal record", description: "Clean criminal record certificate from your country of origin" },
        { title: "Health insurance", description: "Valid health insurance covering Portugal" }
      ],
      eligibility_criteria: [
        { criterion: "Income", description: "Minimum passive income of €8,460 per year for the main applicant" },
        { criterion: "Accommodation", description: "Secure accommodation in Portugal" },
        { criterion: "Clean criminal record", description: "No criminal record in Portugal or in your country of residence" }
      ]
    },
    {
      id: "golden",
      name: "Golden Visa",
      description: "The Golden Visa Program is a residency-by-investment program designed for non-EU/EEA citizens who make a significant investment in Portugal.",
      processing_time: "6-12 months",
      fees: "€533 for application + renewal fees",
      requirements: [
        { title: "Valid passport", description: "Valid passport with at least 6 months validity" },
        { title: "Proof of investment", description: "Documentation proving the qualifying investment" },
        { title: "Criminal record", description: "Clean criminal record certificate from your country of origin" },
        { title: "Health insurance", description: "Valid health insurance covering Portugal" },
        { title: "Tax identification number", description: "Portuguese tax number (NIF)" }
      ],
      eligibility_criteria: [
        { criterion: "Capital transfer", description: "Capital transfer of €1.5 million" },
        { criterion: "Real estate", description: "Real estate purchase of €500,000 or €350,000 (for properties needing renovation)" },
        { criterion: "Job creation", description: "Creation of 10 jobs in Portugal" },
        { criterion: "Research activities", description: "Investment of €500,000 in research activities" }
      ]
    },
    {
      id: "digital_nomad",
      name: "Digital Nomad Visa",
      description: "The Digital Nomad Visa allows remote workers and freelancers to live in Portugal while working for companies or clients outside Portugal.",
      processing_time: "2-3 months",
      fees: "€75 for application + €72 for residence permit",
      requirements: [
        { title: "Valid passport", description: "Valid passport with at least 6 months validity" },
        { title: "Proof of remote work", description: "Employment contract or service contracts with entities outside Portugal" },
        { title: "Proof of income", description: "Proof of regular income of at least 4x the Portuguese minimum wage" },
        { title: "Accommodation", description: "Proof of accommodation in Portugal" },
        { title: "Health insurance", description: "Valid health insurance covering Portugal" }
      ],
      eligibility_criteria: [
        { criterion: "Remote work", description: "Must work remotely for employers or clients outside of Portugal" },
        { criterion: "Income", description: "Minimum income of approximately €3,040 per month" },
        { criterion: "Health insurance", description: "Valid health insurance policy" }
      ]
    }
  ];

  try {
    const { data, error } = await supabase
      .from('visa_types')
      .insert(visaTypes)
      .select();
      
    if (error) throw error;
    console.log("Sample visa types inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting sample visa types:", error);
    throw error;
  }
};

export const insertSampleData = async () => {
  try {
    await insertSampleTestimonials();
    await insertSampleVisaTypes();
    return true;
  } catch (error) {
    console.error("Error inserting sample data:", error);
    return false;
  }
};
