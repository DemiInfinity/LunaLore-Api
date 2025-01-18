import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Sign out the user
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    return res.status(200).json({ message: 'Successfully signed out' });
  } catch (error: any) {
    console.error("Sign-out error:", error);
    return res.status(400).json({ error: error.message });
  }
}
