import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { blogPosts } from "@/lib/blog";

const publicRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/servicios", changeFrequency: "monthly", priority: 0.8 },
  { path: "/trabajo", changeFrequency: "yearly", priority: 0.8 },
  { path: "/nosotros", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    ...publicRoutes.map((route) => ({
      url: new URL(route.path, siteUrl).toString(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({ url: new URL(`/blog/${post.slug}`, siteUrl).toString(), lastModified: post.updated, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
