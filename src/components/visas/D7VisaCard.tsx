
import React from "react";
import { FileText } from "lucide-react";
import VisaCard from "@/components/VisaCard";

const D7VisaCard = () => {
  return (
    <VisaCard
      title="D7 Passive Income Visa"
      description="For retirees and individuals with regular passive income sources looking to relocate to Portugal."
      icon={<FileText className="h-6 w-6" />}
      link="/visas/d7"
      imageSrc="https://images.unsplash.com/photo-1477239439998-839196943351?q=80&w=2670&auto=format&fit=crop"
    />
  );
};

export default D7VisaCard;
