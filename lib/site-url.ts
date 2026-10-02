const FALLBACK_URL = "https://space-panama-web.vercel.app";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const candidate = configured || (productionHost ? `https://${productionHost}` : FALLBACK_URL);

  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:" && !(url.hostname === "localhost" && process.env.NODE_ENV !== "production")) {
      return new URL(FALLBACK_URL);
    }
    return new URL(url.origin);
  } catch {
    return new URL(FALLBACK_URL);
  }
}
