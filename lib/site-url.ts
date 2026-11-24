// Existing official origin; this does not configure or change the domain.
const FALLBACK_URL = "https://spaceventos.com";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const candidate = configured || (productionHost ? `https://${productionHost}` : FALLBACK_URL);

  try {
    const url = new URL(candidate);
    const isLocalDevelopment = process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if (url.username || url.password || (url.protocol !== "https:" && !(url.protocol === "http:" && isLocalDevelopment))) {
      return new URL(FALLBACK_URL);
    }
    return new URL(url.origin);
  } catch {
    return new URL(FALLBACK_URL);
  }
}
