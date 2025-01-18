import { supabase } from "./client";

// Example: Fetch all users
export const fetchUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    throw error;
  }
  return data;
};

// Example: Fetch all users with pagination.
export const fetchUsersPagination = async (offset: number, limit: number) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .range(offset, offset + limit - 1); // Supabase uses inclusive ranges

  if (error) {
    console.error("Error fetching users:", error.message);
    throw new Error(error.message);
  }
  return data;
};

// Example: Fetch a user by ID
export const fetchUserById = async (userId: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) {
    throw error;
  }
  return data;
};

// Fetch a user by email
export const fetchUserByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  if (error) {
    throw error;
  }
  return data;
};

export const getUserRoles = async () => {
  const { data, error } = await supabase
    .from("roles")
    .select("*")
  if (error) {
    throw error;
  }
  return data;
};
