import { ImmersiveHome } from "@/components/immersive/immersive-home";
import { resolveContentAdapter } from "@/lib/adapters/content-adapter";

export default async function Home() {
  const content = await resolveContentAdapter().getSiteContent();
  return <ImmersiveHome content={content} />;
}
