import type { Metadata } from "next";

const siteLogo = {
  url: "/assets/space/social-card.jpg",
  width: 1200,
  height: 630,
  alt: "Logo de Space Panamá",
};

type SitePageMetadataInput = {
  title: string;
  description: string;
  canonical: string;
};

export function createSitePageMetadata({ title, description, canonical }: SitePageMetadataInput): Metadata {
  const socialTitle = `${title} | Space Panamá`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      url: canonical,
      siteName: "Space Panamá",
      locale: "es_PA",
      images: [siteLogo],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [siteLogo.url],
    },
  };
}
