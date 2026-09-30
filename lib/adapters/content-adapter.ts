import { siteContent, type SiteContent } from "@/lib/space-content";

export type ContentAdapter = {
  getSiteContent: () => Promise<SiteContent>;
};

export const staticContentAdapter: ContentAdapter = {
  async getSiteContent() {
    return siteContent;
  },
};

export function resolveContentAdapter(): ContentAdapter {
  const adapter = process.env.SPACE_CONTENT_ADAPTER ?? "static";

  if (adapter === "static") {
    return staticContentAdapter;
  }

  if (adapter === "supabase") {
    throw new Error(
      "Supabase content adapter is intentionally not connected yet. Add credentials and implementation in a future gate.",
    );
  }

  throw new Error(`Unknown SPACE_CONTENT_ADAPTER: ${adapter}`);
}
