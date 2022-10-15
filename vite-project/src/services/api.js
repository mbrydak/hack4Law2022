import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lobzzurbbjkwsbephave.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvYnp6dXJiYmprd3NiZXBoYXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU4MjM0MzcsImV4cCI6MTk4MTM5OTQzN30.6zDRqU2w4elRIwKSww5UQj3LDvkxFwgulGOahUsyNh4';
const api = createClient(supabaseUrl, supabaseKey);
export default api;
