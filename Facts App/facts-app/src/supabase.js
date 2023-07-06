import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://agyuwhynyxwnryqpyxps.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneXV3aHlueXh3bnJ5cXB5eHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NDA5MTgsImV4cCI6MjAwNDAxNjkxOH0.isKnSsFsRzjnFzsRu1LJdPjdkIqb-aC7517EaOzch0k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;