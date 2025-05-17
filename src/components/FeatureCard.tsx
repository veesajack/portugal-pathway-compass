
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const FeatureCard = ({ title, description, icon, imageSrc }: FeatureCardProps) => {
  return (
    <div className="bg-background h-full rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white flex items-center gap-2">
            {icon}
            <h3 className="font-medium">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
