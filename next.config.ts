import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      { pathname: "/assets/space/logo.png", search: "" },
      { pathname: "/assets/space/casamiento-space-luces.webp", search: "" },
      { pathname: "/assets/space/casamiento-space-mesa.webp", search: "" },
      { pathname: "/assets/space/social-card.jpg", search: "" },
      { pathname: "/assets/selected/don-ceviche-alimentacion.webp", search: "" },
      { pathname: "/assets/selected/don-ceviche-guacho.webp", search: "" },
      { pathname: "/assets/selected/emc-redes.webp", search: "" },
      { pathname: "/assets/selected/prevengo-comunicacion-historica.webp", search: "" },
      { pathname: "/assets/selected/heroes-panama-convocatoria.webp", search: "" },
      { pathname: "/assets/services-refinement/identity/*", search: "" },
      { pathname: "/assets/digital/*", search: "" },
      { pathname: "/assets/spaceventos/social/*", search: "" },
      { pathname: "/assets/spaceventos/packaging/*", search: "" },
      { pathname: "/assets/casos/boda/*", search: "" },
      { pathname: "/assets/casos/xv/*", search: "" },
      { pathname: "/assets/casos/heroes/*", search: "" },
      { pathname: "/_next/static/media/**", search: "" },
    ],
    remotePatterns: [],
    qualities: [75],
    dangerouslyAllowSVG: false,
  },
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      { source: "/identidad-visual", destination: "/servicios#marca", permanent: true },
      { source: "/diseno-de-packaging", destination: "/servicios#marca", permanent: true },
      { source: "/social-media", destination: "/servicios#comunicacion", permanent: true },
      { source: "/diseno-de-flyers", destination: "/servicios#comunicacion", permanent: true },
      { source: "/desarrollo-web", destination: "/servicios#digital", permanent: true },
      // Blog articles first published on WordPress (owner's articles, 2026-11-21).
      { source: "/marketing-de-afiliados-en-2025-el-poder-de-conectar-desde-lo-humano-y-lo-digital", destination: "/blog/marketing-de-afiliados-humano-y-digital", permanent: true },
      { source: "/branding-para-empresas-claves-para-construir-una-identidad-de-marca-solida", destination: "/blog/branding-para-empresas-identidad-de-marca", permanent: true },
      { source: "/psicologia-y-marketing-como-entender-la-mente-del-consumidor-para-vender-mas", destination: "/blog/psicologia-del-consumidor-marketing", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
