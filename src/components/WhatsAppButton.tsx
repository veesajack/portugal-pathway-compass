
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  phoneNumber = "+351936329523", 
  message = "Hello, I'm interested in Portugal immigration assistance.", 
  variant = "default",
  className = "",
  children
}: WhatsAppButtonProps) => {
  // Format the phone number to remove any non-digit characters
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  
  const handleClick = () => {
    window.open(`https://wa.me/${formattedNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      variant={variant} 
      className={`flex items-center ${className}`} 
      onClick={handleClick}
    >
      <Phone className="mr-2 h-4 w-4" />
      {children || "Contact via WhatsApp"}
    </Button>
  );
};

export default WhatsAppButton;
