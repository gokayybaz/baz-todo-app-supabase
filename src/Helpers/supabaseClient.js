import { createClient } from '@supabase/supabase-js'

const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWp0dnlibG9iemNuZGl6YWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMjYxMDUsImV4cCI6MjA1MzgwMjEwNX0.Lfx75WL4QyqrYvJStG2zmNv_qrW2y-52oit92Ogxdjc"
const projectURL = "https://igijtvyblobzcndizadi.supabase.co"

const supabase = createClient(projectURL, anonKey)

export default supabase
