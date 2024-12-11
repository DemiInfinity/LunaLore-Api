import { signUpWithEmail } from '../../../supabase/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    const data = await signUpWithEmail(email, password);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
