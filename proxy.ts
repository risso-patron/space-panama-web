import { NextResponse, type NextRequest } from "next/server";
import { publicAssets } from "./lib/public-site";

// Preserve historical media on disk without publishing it by accident.
// This is a publication allowlist, not an authentication boundary.
export function proxy(request: NextRequest) {
  let pathname: string;
  try {
    pathname = decodeURIComponent(request.nextUrl.pathname);
  } catch {
    return new Response("Not found", { status: 404 });
  }
  if (pathname.toLowerCase().startsWith("/assets/") && !publicAssets.some((asset) => asset === pathname)) {
    return new Response("Not found", {
      status: 404,
      headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    });
  }
  return NextResponse.next();
}
