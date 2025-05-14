
import React from "react";
import { GraduationCap } from "lucide-react";
import VisaCard from "@/components/VisaCard";

const StudentVisaCard = () => {
  return (
    <VisaCard
      title="Student Visa"
      description="For international students looking to pursue education at Portuguese universities and educational institutions."
      icon={<GraduationCap className="h-6 w-6" />}
      link="/visas/student"
      imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
    />
  );
};

export default StudentVisaCard;
