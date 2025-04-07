
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { extendedSupabase as supabase } from '@/integrations/supabase/types-extension';
import { toast } from '@/hooks/use-toast';

type DocumentType = 'passport' | 'visa' | 'residence_permit' | 'proof_of_income' | 'criminal_record' | 'other';

interface UploadOptions {
  applicationId: string;
  documentType: DocumentType | string;
  onProgress?: (progress: number) => void;
}

interface DocumentMetadata {
  name: string;
  type: string;
  size: number;
  lastModified: number;
}

export function useDocumentStorage() {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  
  const uploadDocument = async (file: File, options: UploadOptions) => {
    if (!user) {
      throw new Error('User must be authenticated to upload documents');
    }
    
    setUploading(true);
    
    try {
      // Generate a unique file path
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${user.id}/${options.applicationId}/${options.documentType}/${fileName}`;
      
      // Upload file to storage
      const { error: uploadError, data } = await supabase.storage
        .from('documents')
        .upload(filePath, file, { upsert: true });
        
      if (uploadError) {
        throw uploadError;
      }
      
      // Simulate progress since we can't use onUploadProgress
      if (options.onProgress) {
        options.onProgress(100);
      }
      
      // Create metadata
      const metadata: DocumentMetadata = {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
      };
      
      // Add document record to database
      const { data: docData, error: dbError } = await supabase
        .from('documents')
        .insert({
          user_id: user.id,
          application_id: options.applicationId,
          file_name: file.name,
          file_path: filePath,
          document_type: options.documentType,
        })
        .select()
        .single();
        
      if (dbError) {
        throw dbError;
      }
      
      const { data: publicUrlData } = supabase.storage
        .from('documents')
        .getPublicUrl(filePath);
      
      return { 
        documentId: docData.id,
        filePath, 
        fileName: file.name,
        url: publicUrlData.publicUrl
      };
    } catch (error: any) {
      toast({
        title: 'Upload failed',
        description: error.message,
        variant: 'destructive',
      });
      throw error;
    } finally {
      setUploading(false);
    }
  };
  
  const getDocumentsByApplication = async (applicationId: string) => {
    if (!user) return [];
    
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('application_id', applicationId)
        .eq('user_id', user.id);
        
      if (error) throw error;
      
      return data || [];
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  };
  
  const deleteDocument = async (documentId: string) => {
    if (!user) return false;
    
    try {
      // Get document details
      const { data, error: fetchError } = await supabase
        .from('documents')
        .select('file_path')
        .eq('id', documentId)
        .eq('user_id', user.id)
        .single();
        
      if (fetchError) throw fetchError;
      
      // Delete file from storage
      const { error: storageError } = await supabase.storage
        .from('documents')
        .remove([data.file_path]);
        
      if (storageError) throw storageError;
      
      // Delete database record
      const { error: dbError } = await supabase
        .from('documents')
        .delete()
        .eq('id', documentId)
        .eq('user_id', user.id);
        
      if (dbError) throw dbError;
      
      return true;
    } catch (error: any) {
      toast({
        title: 'Delete failed',
        description: error.message,
        variant: 'destructive',
      });
      return false;
    }
  };
  
  return {
    uploadDocument,
    getDocumentsByApplication,
    deleteDocument,
    uploading
  };
}
