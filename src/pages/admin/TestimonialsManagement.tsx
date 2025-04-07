
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { extendedSupabase as supabase } from '@/integrations/supabase/types-extension';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Star, Pencil, Trash, Plus } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  avatar_url: string | null;
  content: string;
  rating: number | null;
  visa_type: string | null;
  is_featured: boolean;
}

const TestimonialsManagement = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Partial<Testimonial>>({
    name: '',
    content: '',
    rating: 5,
    visa_type: '',
    is_featured: false
  });
  const [isEditing, setIsEditing] = useState(false);
  
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setTestimonials(data as Testimonial[]);
    } catch (error: any) {
      toast({
        title: "Error fetching testimonials",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchTestimonials();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentTestimonial({ ...currentTestimonial, [name]: value });
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setCurrentTestimonial({ ...currentTestimonial, is_featured: checked });
  };
  
  const handleRatingChange = (rating: number) => {
    setCurrentTestimonial({ ...currentTestimonial, rating });
  };
  
  const resetForm = () => {
    setCurrentTestimonial({
      name: '',
      content: '',
      rating: 5,
      visa_type: '',
      is_featured: false
    });
    setIsEditing(false);
  };
  
  const handleAddEdit = async () => {
    try {
      if (
        !currentTestimonial.name ||
        !currentTestimonial.content
      ) {
        toast({
          title: "Missing fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
      
      if (isEditing && currentTestimonial.id) {
        // Update testimonial
        const { error } = await supabase
          .from('testimonials')
          .update({
            name: currentTestimonial.name,
            content: currentTestimonial.content,
            rating: currentTestimonial.rating,
            visa_type: currentTestimonial.visa_type,
            is_featured: currentTestimonial.is_featured
          })
          .eq('id', currentTestimonial.id);
          
        if (error) throw error;
        
        toast({
          title: "Testimonial updated",
          description: "The testimonial has been updated successfully."
        });
      } else {
        // Add new testimonial
        const { error } = await supabase
          .from('testimonials')
          .insert({
            name: currentTestimonial.name,
            content: currentTestimonial.content,
            rating: currentTestimonial.rating,
            visa_type: currentTestimonial.visa_type,
            is_featured: currentTestimonial.is_featured
          });
          
        if (error) throw error;
        
        toast({
          title: "Testimonial added",
          description: "The testimonial has been added successfully."
        });
      }
      
      setDialogOpen(false);
      resetForm();
      fetchTestimonials();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const handleEdit = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setIsEditing(true);
    setDialogOpen(true);
  };
  
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      try {
        const { error } = await supabase
          .from('testimonials')
          .delete()
          .eq('id', id);
          
        if (error) throw error;
        
        setTestimonials(testimonials.filter(t => t.id !== id));
        
        toast({
          title: "Testimonial deleted",
          description: "The testimonial has been deleted successfully."
        });
      } catch (error: any) {
        toast({
          title: "Error deleting testimonial",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };
  
  const toggleFeatured = async (id: string, isFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ is_featured: !isFeatured })
        .eq('id', id);
        
      if (error) throw error;
      
      setTestimonials(testimonials.map(t => 
        t.id === id ? { ...t, is_featured: !isFeatured } : t
      ));
      
      toast({
        title: `Testimonial ${!isFeatured ? 'featured' : 'unfeatured'}`,
        description: `The testimonial has been ${!isFeatured ? 'featured' : 'unfeatured'} successfully.`
      });
    } catch (error: any) {
      toast({
        title: "Error updating testimonial",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const renderStars = (rating: number | null, interactive = false) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < (rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            onClick={interactive ? () => handleRatingChange(i + 1) : undefined}
            style={interactive ? { cursor: 'pointer' } : {}}
          />
        ))}
      </div>
    );
  };
  
  return (
    <AdminLayout title="Testimonials Management">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Testimonials</CardTitle>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                resetForm();
                setDialogOpen(true);
              }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}</DialogTitle>
                <DialogDescription>
                  {isEditing ? 'Update the testimonial details.' : 'Add a new client testimonial.'}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={currentTestimonial.name || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="visa_type" className="text-right">
                    Visa Type
                  </Label>
                  <Input
                    id="visa_type"
                    name="visa_type"
                    value={currentTestimonial.visa_type || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="e.g. D7, Golden Visa"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="rating" className="text-right">
                    Rating
                  </Label>
                  <div className="col-span-3">
                    {renderStars(currentTestimonial.rating || 5, true)}
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="is_featured" className="text-right">
                    Featured
                  </Label>
                  <div className="col-span-3">
                    <Switch
                      id="is_featured"
                      checked={currentTestimonial.is_featured || false}
                      onCheckedChange={handleSwitchChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-start gap-2">
                  <Label htmlFor="content" className="text-right pt-2">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={currentTestimonial.content || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    rows={5}
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddEdit}>{isEditing ? 'Save Changes' : 'Add Testimonial'}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Visa Type</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">Loading testimonials...</TableCell>
                  </TableRow>
                ) : testimonials.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">No testimonials found</TableCell>
                  </TableRow>
                ) : (
                  testimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                      <TableCell>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {testimonial.content}
                        </div>
                      </TableCell>
                      <TableCell>{renderStars(testimonial.rating)}</TableCell>
                      <TableCell>{testimonial.visa_type || '-'}</TableCell>
                      <TableCell>
                        <Switch
                          checked={testimonial.is_featured || false}
                          onCheckedChange={() => toggleFeatured(testimonial.id, testimonial.is_featured || false)}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(testimonial)}
                          className="mr-2"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(testimonial.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default TestimonialsManagement;
