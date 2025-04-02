
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
}

const VisaCard = ({ title, description, icon, link, color = "bg-card" }: VisaCardProps) => {
  return (
    <Card className={`card-hover ${color} border-none overflow-hidden`}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
          <Link to={link} className="flex items-center text-primary font-medium">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VisaCard;
