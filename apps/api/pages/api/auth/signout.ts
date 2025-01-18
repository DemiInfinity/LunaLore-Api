import { signOut } from '../../../supabase/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await signOut();
    return res.status(200).json(data); // Successfully signed out
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
