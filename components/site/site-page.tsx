import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./site-pages.module.css";
import { PageHero } from "./page-hero";

type SitePageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  visual?: ReactNode;
  children: ReactNode;
};

export function SitePage({ eyebrow, title, description, visual, children }: SitePageProps) {
  return (
    <main className={styles.page} id="main-content" aria-labelledby="page-title">
      <PageHero eyebrow={eyebrow} title={title} description={description} visual={visual} />
      {children}
    </main>
  );
}

export function SiteContactCallout({ title, description }: { title: string; description: string }) {
  return (
    <section className={styles.callout} aria-labelledby="contact-callout-title">
      <div>
        <p className={styles.eyebrow}>Siguiente paso</p>
        <h2 id="contact-callout-title">{title}</h2>
        <p>{description}</p>
      </div>
      <Link className={styles.calloutLink} href="/contacto">Contactar a Space</Link>
    </section>
  );
}
