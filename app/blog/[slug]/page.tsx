import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogPostsByDate, formatBlogDate, getBlogPost, readingMinutes } from "@/lib/blog";
import { createSitePageMetadata } from "@/lib/page-metadata";
import { getSiteUrl } from "@/lib/site-url";
import { SiteContactCallout } from "@/components/site/site-page";
import pages from "@/components/site/site-pages.module.css";
import { PageHero } from "@/components/site/page-hero";
import { BlogCover } from "@/components/site/hero-visuals";
import styles from "@/components/site/blog.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  const base = createSitePageMetadata({ title: post.title, description: post.description, canonical: `/blog/${post.slug}` });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.published, modifiedTime: post.updated, authors: [post.author] } };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const url = new URL(`/blog/${post.slug}`, getSiteUrl()).toString();
  const jsonLd = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description,
    datePublished: post.published, dateModified: post.updated, inLanguage: "es-PA", mainEntityOfPage: url,
    author: { "@type": "Person", name: "Luis Risso Patrón" },
    publisher: { "@type": "Organization", name: "Space Panamá", logo: { "@type": "ImageObject", url: new URL("/assets/space/logo.png", getSiteUrl()).toString() } },
  };
  const others = blogPostsByDate.filter(item => item.slug !== post.slug);

  return (
    <main className={pages.page} id="main-content" aria-labelledby="page-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <PageHero eyebrow={<span className={styles.crumbs}><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span>{post.category}</span></span>}
          title={post.title} description={post.description} compact
          visual={<div className={styles.postCover}><BlogCover slug={post.slug} label={`Ilustración del artículo: ${post.title}`} /></div>}>
          <p className={`${styles.meta} ${styles.postMeta}`}><span>{post.author}</span><time dateTime={post.published}>{formatBlogDate(post.published)}</time><span>{readingMinutes(post)} min de lectura</span></p>
        </PageHero>
        <div className={styles.body}>
          {post.blocks.map((block, index) => block.type === "h2" ? <h2 key={index}>{block.text}</h2>
            : block.type === "quote" ? <blockquote key={index}><p>{block.text}</p></blockquote>
            : block.type === "list" ? <div key={index} className={styles.listBlock}>{block.label && <p className={styles.listLabel}>{block.label}</p>}<ul>{block.items.map(item => <li key={item}>{item}</li>)}</ul></div>
            : <p key={index}>{block.text}</p>)}
          {post.updated !== post.published && <p className={styles.updated}>Actualizado el <time dateTime={post.updated}>{formatBlogDate(post.updated)}</time>.</p>}
        </div>
      </article>
      <section className={styles.related} aria-labelledby="related-title">
        <h2 id="related-title">Sigue leyendo</h2>
        <ul>{others.map(item => <li key={item.slug}><Link href={`/blog/${item.slug}`}><span className={styles.relatedCover}><BlogCover slug={item.slug} /></span><span className={styles.tag}><i aria-hidden="true" />{item.category}</span><strong>{item.title}</strong></Link></li>)}</ul>
      </section>
      <SiteContactCallout title="¿Hablamos de tu marca?" description="Conversemos sobre tu proyecto y cómo llevar estas ideas a tu negocio." />
    </main>
  );
}
