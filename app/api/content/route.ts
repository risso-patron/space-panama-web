import { contact, navigation, selectedWork, serviceGroups, weddingImages } from "@/lib/public-site";

export async function GET() {
  // Do not expose archived concepts, unapproved clients, or restricted media.
  const content = { navigation, services: serviceGroups, contact, work: { projects: selectedWork, events: { category: "Eventos", images: weddingImages } } };

  return Response.json(
    { content },
    {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    },
  );
}
