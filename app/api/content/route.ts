import { resolveContentAdapter } from "@/lib/adapters/content-adapter";

export async function GET() {
  const content = await resolveContentAdapter().getSiteContent();

  return Response.json(
    {
      content,
      adapter: process.env.SPACE_CONTENT_ADAPTER ?? "static",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    },
  );
}
