export async function GET() {
  return Response.json({
    ok: true,
    service: "space-panama-web",
  }, {
    headers: { "Cache-Control": "no-store" },
  });
}
