import { resolveContentAdapter } from "@/lib/adapters/content-adapter";

export async function GET() {
  const content = await resolveContentAdapter().getSiteContent();

  return Response.json(
    { content },
    {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    },
  );
}
