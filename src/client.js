import { createClient } from '@supabase/supabase-js'

const URL = "https://lslodlvqydzmeuipksbw.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbG9kbHZxeWR6bWV1aXBrc2J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MzYwMTMsImV4cCI6MTk5NTUxMjAxM30.4h1-NmIswf9VfdaYEemz0EM7gTf4vV0NvVEATp2AAJ8";


export const supabase = createClient(URL, API_KEY);


