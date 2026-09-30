import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Panamá — Estudio creativo editorial",
  description:
    "Base inicial de la nueva web de Space Panamá: estrategia, narrativa y dirección visual premium.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Space Panamá — Estudio creativo editorial",
    description:
      "Vertical slice inicial con Hero, Manifiesto y Don Ceviche como trabajo seleccionado.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
