
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  avatar_url: string | null;
  content: string;
  rating: number | null;
  visa_type: string | null;
}

interface TestimonialsProps {
  limit?: number;
  showFeaturedOnly?: boolean;
}

const Testimonials = ({ limit = 3, showFeaturedOnly = true }: TestimonialsProps) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      
      try {
        let query = supabase.from('testimonials').select('*');
        
        if (showFeaturedOnly) {
          query = query.eq('is_featured', true);
        }
        
        const { data, error } = await query
          .order('created_at', { ascending: false })
          .limit(limit);
          
        if (error) throw error;
        
        setTestimonials(data as Testimonial[]);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTestimonials();
  }, [limit, showFeaturedOnly]);
  
  const renderStars = (rating: number | null) => {
    if (!rating) return null;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };
  
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(limit)].map((_, i) => (
          <Card key={i} className="bg-muted/30">
            <CardContent className="p-6 flex items-center justify-center h-48">
              <p className="text-muted">Loading testimonials...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="border border-gray-200">
          <CardHeader className="pb-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar_url || ''} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  {testimonial.visa_type && (
                    <p className="text-sm text-muted-foreground">{testimonial.visa_type}</p>
                  )}
                </div>
              </div>
              {testimonial.rating !== null && (
                <div>{renderStars(testimonial.rating)}</div>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="relative">
              <Quote className="h-6 w-6 text-muted-foreground/20 absolute -left-2 -top-2" />
              <p className="text-muted-foreground pl-4">{testimonial.content}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;
