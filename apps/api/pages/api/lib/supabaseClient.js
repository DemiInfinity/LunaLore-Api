import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment variables');
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default supabase;
