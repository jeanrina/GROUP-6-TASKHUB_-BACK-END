import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jsqhzqblpkhsumpqhngv.supabase.co'; // replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcWh6cWJscGtoc3VtcHFobmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMzE3NzgsImV4cCI6MjA0OTcwNzc3OH0.wjuBCdD75q9s7IdJxGljsgr7R4WA0BevLr80g79psEk'; // replace with your Supabase API Key
export const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;