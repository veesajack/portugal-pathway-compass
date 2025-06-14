
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VisaCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
  imageSrc?: string;
}

const VisaCard = ({ title, description, icon, link, color = "bg-card", imageSrc }: VisaCardProps) => {
  return (
    <Link to={link} className="block h-full">
      <Card className={`card-hover ${color} border-none overflow-hidden group h-full transition-transform duration-300 hover:scale-[1.02]`}>
        {imageSrc && (
          <div className="relative h-52 overflow-hidden cursor-pointer">
            {/* Enhanced gradient for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            
            {/* Larger text with improved visibility */}
            <span className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 drop-shadow-md">
              View {title} Details
            </span>
            
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <span className="flex items-center text-primary font-medium">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VisaCard;
