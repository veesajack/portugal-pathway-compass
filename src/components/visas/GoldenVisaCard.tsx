
import React from "react";
import { BadgeDollarSign } from "lucide-react";
import VisaCard from "@/components/VisaCard";

const GoldenVisaCard = () => {
  return (
    <VisaCard
      title="Golden Visa"
      description="Investment-based residency program offering a pathway to Portuguese citizenship for investors."
      icon={<BadgeDollarSign className="h-6 w-6" />}
      link="/visas/golden"
      imageSrc="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1471&auto=format&fit=crop"
    />
  );
};

export default GoldenVisaCard;
