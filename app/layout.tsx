import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { SiteShell } from "@/components/site/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Space Panamá — Agencia creativa de marketing digital",
    template: "%s | Space Panamá",
  },
  description:
    "Agencia creativa en Ciudad de Panamá. Estrategia de marketing digital, identidad visual, contenido, desarrollo web, packaging y organización de eventos.",
  metadataBase: getSiteUrl(),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Space Panamá — Agencia creativa de marketing digital",
    description:
      "Estrategia de marketing digital, identidad visual, contenido, desarrollo web y organización de eventos en Ciudad de Panamá.",
    type: "website",
    siteName: "Space Panamá",
    url: "/",
    locale: "es_PA",
    images: [{ url: "/assets/space/social-card.jpg", width: 1200, height: 630, alt: "Space Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Panamá — Agencia creativa de marketing digital",
    description:
      "Estrategia de marketing digital, identidad visual, contenido, desarrollo web y organización de eventos en Ciudad de Panamá.",
    images: ["/assets/space/social-card.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
