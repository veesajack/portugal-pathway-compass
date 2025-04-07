
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { extendedSupabase as supabase } from '@/integrations/supabase/types-extension';
import { toast } from '@/hooks/use-toast';
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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search, User, Trash, UserCheck, Shield } from 'lucide-react';

interface UserData {
  id: string;
  email?: string; // Make email optional to match profile data
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  nationality: string | null;
  role: string;
  created_at: string;
}

const UsersManagement = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Fetch users from profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*');
        
      if (profileError) throw profileError;
      
      // Fetch user emails from auth users (if you have access)
      const { data: userData, error: userError } = await supabase.auth.admin.listUsers();
      
      let userProfiles: UserData[] = [];
      
      // If auth users are accessible, merge the data
      if (userData && !userError) {
        userProfiles = profileData.map(profile => {
          const matchingUser = userData.users.find(user => user.id === profile.id);
          return {
            ...profile,
            email: matchingUser?.email || 'No email access'
          } as UserData;
        });
      } else {
        // If we can't access auth users, use just the profiles
        userProfiles = profileData as UserData[];
      }
      
      setUsers(userProfiles);
    } catch (error: any) {
      // If admin.listUsers fails (likely due to permissions), fall back to using just profiles
      try {
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*');
          
        if (profileError) throw profileError;
        
        setUsers(profileData as UserData[]);
      } catch (fallbackError: any) {
        toast({
          title: "Error fetching users",
          description: fallbackError.message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const updateUserRole = async (userId: string, role: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role })
        .eq('id', userId);
        
      if (error) throw error;
      
      setUsers(users.map(user => 
        user.id === userId ? { ...user, role } : user
      ));
      
      toast({
        title: "Role updated",
        description: "User role has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error updating role",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())) || 
      (user.full_name && user.full_name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = !selectedRole || user.role === selectedRole;
    
    return matchesSearch && matchesRole;
  });
  
  return (
    <AdminLayout title="Users Management">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All roles</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" onClick={fetchUsers}>
              Refresh
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8">Loading users...</TableCell>
                  </TableRow>
                ) : filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8">No users found</TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <User className="h-8 w-8 rounded-full bg-muted p-1" />
                          <div>
                            <div className="font-medium">{user.full_name || 'Unnamed User'}</div>
                            <div className="text-sm text-muted-foreground">{user.email || 'Email not available'}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                          {user.role || 'user'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {user.phone && <div className="text-sm">{user.phone}</div>}
                        {user.nationality && (
                          <div className="text-sm text-muted-foreground">{user.nationality}</div>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {user.role !== 'admin' ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateUserRole(user.id, 'admin')}
                            className="mr-2"
                          >
                            <Shield className="mr-1 h-4 w-4" />
                            Make Admin
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateUserRole(user.id, 'user')}
                            className="mr-2"
                          >
                            <UserCheck className="mr-1 h-4 w-4" />
                            Make User
                          </Button>
                        )}
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

export default UsersManagement;
