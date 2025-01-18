import { signInWithEmail } from '../../../supabase/auth';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Ensure JWT_SECRET is defined
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Authenticate the user with Supabase
    const data = await signInWithEmail(email, password);

    if (!data || !data.user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        id: data.user.id,
        email: data.user.email,
      },
      process.env.JWT_SECRET as string, // Secret key for signing the token
      { expiresIn: '1h' } // Token expiration (adjust as needed)
    );

    // Return the token and user data
    return res.status(200).json({
      user: {
        email: data.user.email,
        ...data.user,
      },
      token,
    });
  } catch (error: any) {
    console.error('Error in login handler:', error.message);
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
}
