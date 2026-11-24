import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsByDate, formatBlogDate, readingMinutes } from "@/lib/blog";
import { createSitePageMetadata } from "@/lib/page-metadata";
import { SiteContactCallout } from "@/components/site/site-page";
import pages from "@/components/site/site-pages.module.css";
import { PageHero } from "@/components/site/page-hero";
import { BlogCover, BlogHeroVisual } from "@/components/site/hero-visuals";
import styles from "@/components/site/blog.module.css";

export const metadata: Metadata = createSitePageMetadata({
  title: "Blog",
  description: "Ideas de Space Panamá sobre marca, comunicación y marketing digital para pymes, emprendimientos y marcas.",
  canonical: "/blog",
});

export default function BlogIndex() {
  return (
    <main className={pages.page} id="main-content" aria-labelledby="page-title">
      <PageHero eyebrow="Blog" title={<>Ideas para <em>hacer crecer marcas.</em></>}
        description="Marca, comunicación y marketing digital, contados desde lo que hacemos cada día en Space."
        visual={<BlogHeroVisual posts={blogPostsByDate} />} />
      <div className={styles.list}>
        <ul>
          {blogPostsByDate.map(post => (
            <li key={post.slug}>
              <article className={styles.card} aria-labelledby={`post-${post.slug}`}>
                <div className={styles.cardCover}><BlogCover slug={post.slug} /></div>
                <p className={styles.meta}><span className={styles.tag}><i aria-hidden="true" />{post.category}</span><time dateTime={post.published}>{formatBlogDate(post.published)}</time><span>{readingMinutes(post)} min de lectura</span></p>
                <h2 id={`post-${post.slug}`}><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.description}</p>
                <span className={styles.more} aria-hidden="true">Leer el artículo</span>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <SiteContactCallout title="¿Hablamos de tu marca?" description="Si algo de esto encaja con lo que necesitas, conversemos sobre tu proyecto." />
    </main>
  );
}
