
import type { Database as GeneratedDatabase, Json } from './types';

// Extend the generated database types with our new tables
export interface Database extends GeneratedDatabase {
  public: {
    Tables: {
      profiles: GeneratedDatabase['public']['Tables']['profiles'];
      consultations: GeneratedDatabase['public']['Tables']['consultations'];
      visa_applications: GeneratedDatabase['public']['Tables']['visa_applications'];
      testimonials: {
        Row: {
          id: string;
          name: string;
          avatar_url: string | null;
          content: string;
          rating: number | null;
          visa_type: string | null;
          is_featured: boolean | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          avatar_url?: string | null;
          content: string;
          rating?: number | null;
          visa_type?: string | null;
          is_featured?: boolean | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          avatar_url?: string | null;
          content?: string;
          rating?: number | null;
          visa_type?: string | null;
          is_featured?: boolean | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          message: string;
          created_at: string | null;
          is_read: boolean | null;
          type: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          message: string;
          created_at?: string | null;
          is_read?: boolean | null;
          type?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          message?: string;
          created_at?: string | null;
          is_read?: boolean | null;
          type?: string | null;
        };
        Relationships: [];
      };
      documents: {
        Row: {
          id: string;
          user_id: string;
          application_id: string;
          file_name: string;
          file_path: string;
          document_type: string;
          uploaded_at: string | null;
          status: string | null;
          admin_notes: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          application_id: string;
          file_name: string;
          file_path: string;
          document_type: string;
          uploaded_at?: string | null;
          status?: string | null;
          admin_notes?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          application_id?: string;
          file_name?: string;
          file_path?: string;
          document_type?: string;
          uploaded_at?: string | null;
          status?: string | null;
          admin_notes?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "documents_application_id_fkey";
            columns: ["application_id"];
            isOneToOne: false;
            referencedRelation: "visa_applications";
            referencedColumns: ["id"];
          }
        ];
      };
      visa_types: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          requirements: Json | null;
          processing_time: string | null;
          fees: string | null;
          eligibility_criteria: Json | null;
        };
        Insert: {
          id: string;
          name: string;
          description?: string | null;
          requirements?: Json | null;
          processing_time?: string | null;
          fees?: string | null;
          eligibility_criteria?: Json | null;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          requirements?: Json | null;
          processing_time?: string | null;
          fees?: string | null;
          eligibility_criteria?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: GeneratedDatabase['public']['Views'];
    Functions: GeneratedDatabase['public']['Functions'];
    Enums: GeneratedDatabase['public']['Enums'];
    CompositeTypes: GeneratedDatabase['public']['CompositeTypes'];
  };
}

// Add this client with our extended types
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://sppdahhxkzsxvvgnbnqj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcGRhaGh4a3pzeHZ2Z25ibnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MDUwNjYsImV4cCI6MjA1OTE4MTA2Nn0.0TYzgAPGg57f6ug9ByfLlaJE9Sad3tm9AY_K7HHnz38";

export const extendedSupabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
