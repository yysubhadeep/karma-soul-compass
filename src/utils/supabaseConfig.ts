// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mbtnywwjwxxtjebrixfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1idG55d3dqd3h4dGplYnJpeGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjk3NzIsImV4cCI6MjA2NDYwNTc3Mn0.iAlc9Vo4DuuIv_tDE_y8FVp3LhMROYXSd9AxsuKUN1E";

export const supabase = createClient(supabaseUrl, supabaseKey);
