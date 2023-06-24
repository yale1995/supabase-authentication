import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'

export const supabaseURL = process.env.SUPABASE_URL;
export const supabaseApiKey = process.env.SUPABASE_KEY;

if (!supabaseURL || !supabaseApiKey) {
  throw new Error('Supabase URL is required. Please set the SUPABASE_URL environment variable.');
}

export const supabase = createClient(supabaseURL, supabaseApiKey);
