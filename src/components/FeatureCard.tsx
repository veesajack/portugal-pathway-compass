
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
}

const FeatureCard = ({ title, description, icon, imageSrc }: FeatureCardProps) => {
  return (
    <Card className="card-hover h-full overflow-hidden">
      {imageSrc && (
        <div className="relative h-40 overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
