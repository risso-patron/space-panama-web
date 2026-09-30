export type FutureSupabaseConfig = {
  url?: string;
  anonKey?: string;
};

export function getFutureSupabaseConfig(): FutureSupabaseConfig {
  return {
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY,
  };
}

export const supabaseBoundaryNote =
  "Future Supabase tables exposed to clients must ship with RLS enabled and intentional policies. Never expose service_role keys in public code.";
