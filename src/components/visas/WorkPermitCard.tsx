
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import VisaCard from '@/components/VisaCard';

const WorkPermitCard = () => {
  return (
    <VisaCard
      title="Work Permit"
      description="For non-EU citizens with a job offer from a Portuguese employer."
      icon={<Briefcase className="h-6 w-6" />}
      link="/visas/work-permit"
      color="bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
    />
  );
};

export default WorkPermitCard;
