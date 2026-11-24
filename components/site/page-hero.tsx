import type { ReactNode } from "react";
import pages from "./site-pages.module.css";
import styles from "./page-hero.module.css";

// Shared header for inner pages (owner, 2026-11-21): copy on the left, a page-specific illustration with depth on
// the right, on the light Space sky with a soft orbit in the background. The visual is decorative unless it holds links.
export function PageHero({ eyebrow, title, description, visual, compact, children }: Readonly<{ eyebrow: ReactNode; title: ReactNode; description: ReactNode; visual?: ReactNode; compact?: boolean; children?: ReactNode }>) {
  return (
    <header className={styles.hero}>
      <div className={`${styles.inner} ${visual ? styles.withVisual : ""} ${compact ? styles.compact : ""}`}>
        <div className={styles.copy}>
          <p className={pages.eyebrow}>{eyebrow}</p>
          <h1 className={pages.pageTitle} id="page-title">{title}</h1>
          <p className={pages.pageLead}>{description}</p>
          {children}
        </div>
        {visual && <div className={styles.visual}>{visual}</div>}
      </div>
    </header>
  );
}
