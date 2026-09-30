import { supabaseBoundaryNote } from "@/lib/adapters/supabase-boundary";

export async function GET() {
  return Response.json({
    ok: true,
    service: "space-panama-web",
    adapters: {
      content: process.env.SPACE_CONTENT_ADAPTER ?? "static",
      contact: process.env.SPACE_CONTACT_ADAPTER ?? "memory",
    },
    supabase: {
      connected: false,
      note: supabaseBoundaryNote,
    },
  });
}
