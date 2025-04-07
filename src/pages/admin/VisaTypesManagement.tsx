
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
import { Label } from '@/components/ui/label';
import { Pencil, Trash, Plus, FileText } from 'lucide-react';

interface VisaType {
  id: string;
  name: string;
  description: string | null;
  processing_time: string | null;
  fees: string | null;
  requirements: any | null;
  eligibility_criteria: any | null;
}

const VisaTypesManagement = () => {
  const [visaTypes, setVisaTypes] = useState<VisaType[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentVisaType, setCurrentVisaType] = useState<Partial<VisaType>>({
    id: '',
    name: '',
    description: '',
    processing_time: '',
    fees: '',
    requirements: [],
    eligibility_criteria: []
  });
  const [isEditing, setIsEditing] = useState(false);
  
  const fetchVisaTypes = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('visa_types')
        .select('*')
        .order('name');
        
      if (error) throw error;
      
      setVisaTypes(data as VisaType[]);
    } catch (error: any) {
      toast({
        title: "Error fetching visa types",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchVisaTypes();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentVisaType({ ...currentVisaType, [name]: value });
  };
  
  const handleJsonChange = (field: 'requirements' | 'eligibility_criteria', e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsedValue = e.target.value.trim() ? JSON.parse(e.target.value) : null;
      setCurrentVisaType({ ...currentVisaType, [field]: parsedValue });
    } catch (error) {
      // Don't update state if JSON is invalid
      console.error(`Invalid JSON for ${field}:`, error);
    }
  };
  
  const resetForm = () => {
    setCurrentVisaType({
      id: '',
      name: '',
      description: '',
      processing_time: '',
      fees: '',
      requirements: [],
      eligibility_criteria: []
    });
    setIsEditing(false);
  };
  
  const handleAddEdit = async () => {
    try {
      if (!currentVisaType.id || !currentVisaType.name) {
        toast({
          title: "Missing fields",
          description: "Please fill in the ID and name fields.",
          variant: "destructive",
        });
        return;
      }
      
      const visaData = {
        id: currentVisaType.id,
        name: currentVisaType.name,
        description: currentVisaType.description || null,
        processing_time: currentVisaType.processing_time || null,
        fees: currentVisaType.fees || null,
        requirements: currentVisaType.requirements || null,
        eligibility_criteria: currentVisaType.eligibility_criteria || null
      };
      
      if (isEditing) {
        // Update visa type
        const { error } = await supabase
          .from('visa_types')
          .update(visaData)
          .eq('id', currentVisaType.id);
          
        if (error) throw error;
        
        toast({
          title: "Visa type updated",
          description: "The visa type has been updated successfully."
        });
      } else {
        // Add new visa type
        const { error } = await supabase
          .from('visa_types')
          .insert(visaData);
          
        if (error) throw error;
        
        toast({
          title: "Visa type added",
          description: "The visa type has been added successfully."
        });
      }
      
      setDialogOpen(false);
      resetForm();
      fetchVisaTypes();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const handleEdit = (visaType: VisaType) => {
    setCurrentVisaType(visaType);
    setIsEditing(true);
    setDialogOpen(true);
  };
  
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this visa type? This action cannot be undone.")) {
      try {
        const { error } = await supabase
          .from('visa_types')
          .delete()
          .eq('id', id);
          
        if (error) throw error;
        
        setVisaTypes(visaTypes.filter(v => v.id !== id));
        
        toast({
          title: "Visa type deleted",
          description: "The visa type has been deleted successfully."
        });
      } catch (error: any) {
        toast({
          title: "Error deleting visa type",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };
  
  return (
    <AdminLayout title="Visa Types Management">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Visa Types</CardTitle>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                resetForm();
                setDialogOpen(true);
              }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Visa Type
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{isEditing ? 'Edit Visa Type' : 'Add New Visa Type'}</DialogTitle>
                <DialogDescription>
                  {isEditing ? 'Update the visa type details.' : 'Add a new visa type to the system.'}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    ID
                  </Label>
                  <Input
                    id="id"
                    name="id"
                    value={currentVisaType.id || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="e.g. d7, golden, digital_nomad"
                    disabled={isEditing}
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={currentVisaType.name || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="e.g. D7 Passive Income Visa"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="processing_time" className="text-right">
                    Processing Time
                  </Label>
                  <Input
                    id="processing_time"
                    name="processing_time"
                    value={currentVisaType.processing_time || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="e.g. 3-6 months"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="fees" className="text-right">
                    Fees
                  </Label>
                  <Input
                    id="fees"
                    name="fees"
                    value={currentVisaType.fees || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="e.g. €500 - €1,500"
                  />
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="description" className="text-right pt-2">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={currentVisaType.description || ''}
                    onChange={handleInputChange}
                    className="col-span-3"
                    rows={3}
                    placeholder="Description of the visa type..."
                  />
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="requirements" className="text-right pt-2">
                    Requirements (JSON)
                  </Label>
                  <Textarea
                    id="requirements"
                    value={currentVisaType.requirements ? JSON.stringify(currentVisaType.requirements, null, 2) : ''}
                    onChange={(e) => handleJsonChange('requirements', e)}
                    className="col-span-3 font-mono text-sm"
                    rows={5}
                    placeholder='[{"title": "Passport", "description": "Valid for at least 6 months"}]'
                  />
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="eligibility_criteria" className="text-right pt-2">
                    Eligibility Criteria (JSON)
                  </Label>
                  <Textarea
                    id="eligibility_criteria"
                    value={currentVisaType.eligibility_criteria ? JSON.stringify(currentVisaType.eligibility_criteria, null, 2) : ''}
                    onChange={(e) => handleJsonChange('eligibility_criteria', e)}
                    className="col-span-3 font-mono text-sm"
                    rows={5}
                    placeholder='[{"criterion": "Income", "description": "Minimum passive income of €8,460 per year"}]'
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddEdit}>{isEditing ? 'Save Changes' : 'Add Visa Type'}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Processing Time</TableHead>
                  <TableHead>Fees</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">Loading visa types...</TableCell>
                  </TableRow>
                ) : visaTypes.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">No visa types found</TableCell>
                  </TableRow>
                ) : (
                  visaTypes.map((visaType) => (
                    <TableRow key={visaType.id}>
                      <TableCell>{visaType.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{visaType.name}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {visaType.description}
                        </div>
                      </TableCell>
                      <TableCell>{visaType.processing_time || '-'}</TableCell>
                      <TableCell>{visaType.fees || '-'}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(visaType)}
                          className="mr-2"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(visaType.id)}
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

export default VisaTypesManagement;
