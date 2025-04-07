import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { extendedSupabase as supabase } from '@/integrations/supabase/types-extension';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileX, FileCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface DocumentUploadProps {
  applicationId: string;
  documentType: string;
  title: string;
  description?: string;
  onUploadComplete?: (filePath: string, fileName: string) => void;
}

const DocumentUpload = ({ 
  applicationId, 
  documentType, 
  title, 
  description, 
  onUploadComplete 
}: DocumentUploadProps) => {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to upload documents.",
        variant: "destructive"
      });
      return;
    }
    
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    
    const file = files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${user.id}/${applicationId}/${documentType}/${fileName}`;
    
    setUploading(true);
    setUploadProgress(0);
    setError(null);
    
    try {
      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file, {
          upsert: true,
          onUploadProgress: (event) => {
            setUploadProgress(Math.round((event.loaded / event.total) * 100));
          }
        });
        
      if (uploadError) {
        throw uploadError;
      }
      
      // Add document record to database
      const { error: dbError } = await supabase
        .from('documents')
        .insert({
          user_id: user.id,
          application_id: applicationId,
          file_name: file.name,
          file_path: filePath,
          document_type: documentType
        });
        
      if (dbError) {
        throw dbError;
      }
      
      setUploadedFile(file.name);
      
      toast({
        title: "Document uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
      
      if (onUploadComplete) {
        onUploadComplete(filePath, file.name);
      }
    } catch (error: any) {
      setError(error.message);
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        
        {uploadedFile ? (
          <div className="flex items-center p-3 border rounded-md bg-green-50">
            <FileCheck className="mr-2 h-5 w-5 text-green-500" />
            <span className="text-sm text-green-700">{uploadedFile}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-auto" 
              onClick={() => setUploadedFile(null)}
            >
              Replace
            </Button>
          </div>
        ) : error ? (
          <div className="flex items-center p-3 border rounded-md bg-red-50">
            <FileX className="mr-2 h-5 w-5 text-red-500" />
            <span className="text-sm text-red-700">{error}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-auto" 
              onClick={() => setError(null)}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center p-6 border-2 border-dashed rounded-md">
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              {uploading ? 'Uploading...' : 'Click to browse or drag and drop'}
            </p>
            
            {uploading && (
              <div className="w-full mt-2">
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs text-center mt-1">{uploadProgress}%</p>
              </div>
            )}
            
            <input 
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              disabled={uploading}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentUpload;
