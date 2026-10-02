import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Panamá — Estrategia, creatividad y dirección digital",
  description:
    "Estudio creativo en Panamá. Unimos estrategia, creatividad y dirección digital para convertir ideas en experiencias de marca claras y memorables.",
  metadataBase: getSiteUrl(),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Space Panamá — Estrategia, creatividad y dirección digital",
    description:
      "Estudio creativo en Panamá. Estrategia, creatividad y dirección digital para marcas.",
    type: "website",
    locale: "es_PA",
    images: [{ url: "/assets/space/logo.png", width: 2275, height: 1166, alt: "Logo de Space Panamá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Panamá — Estrategia, creatividad y dirección digital",
    description:
      "Estudio creativo en Panamá. Estrategia, creatividad y dirección digital para marcas.",
    images: ["/assets/space/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
