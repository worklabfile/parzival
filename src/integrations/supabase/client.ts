// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://huqxusetvjzpfiajmtue.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1cXh1c2V0dmp6cGZpYWptdHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MzgwMTYsImV4cCI6MjA2MzIxNDAxNn0.hs0oQzXjkQF1tUtH0VN05rdil7iIWK3sP7mZlszLpeM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);