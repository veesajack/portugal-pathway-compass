
import React from "react";
import { Laptop } from "lucide-react";
import VisaCard from "@/components/VisaCard";

const DigitalNomadVisaCard = () => {
  return (
    <VisaCard
      title="Digital Nomad Visa"
      description="For remote workers and digital professionals looking to live in Portugal while maintaining employment abroad."
      icon={<Laptop className="h-6 w-6" />}
      link="/visas/digital-nomad"
      imageSrc="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1470&auto=format&fit=crop"
    />
  );
};

export default DigitalNomadVisaCard;
