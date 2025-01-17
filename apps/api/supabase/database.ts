import { supabase } from './client';

// Example: Fetch all users
export const fetchUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) {
    throw error;
  }
  return data;
};

// Example: Fetch a user by ID
export const fetchUserById = async (userId: string) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', userId).single();
  if (error) {
    throw error;
  }
  return data;
};

// Fetch a user by email
export const fetchUserByEmail = async (email: string) => {
  const { data, error } = await supabase.from('users').select('*').eq('email', email).single();
  if (error) {
    throw error;
  }
  return data;
};