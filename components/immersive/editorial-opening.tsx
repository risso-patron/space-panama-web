import Image from "next/image";
import logo from "@/public/assets/space/logo.png";
import type { SiteContent } from "@/lib/space-content";
import { HeroVideo } from "./hero-video";
import { EditorialOpeningTransition } from "./editorial-opening-transition";
import styles from "./editorial-opening.module.css";

export function EditorialOpening({ content }: { content: SiteContent }) {
  const { hero, manifesto } = content;
  const emphasis = "crecer marcas.";
  const hasEmphasis = hero.title.endsWith(emphasis);

  return (
    <div className={styles.opening} data-editorial-opening>
      <EditorialOpeningTransition />
      <section className={`story-act story-act--opening ${styles.hero}`} data-act="opening" data-editorial-hero aria-labelledby="hero-title">
        <HeroVideo />
        <div className={styles.wrap}>
          <header className={styles.mast}>
            <span className={styles.logoPlate}>
              <Image className={styles.logo} src={logo} alt="Space Panamá" sizes="(max-width: 700px) 103px, 134px" loading="eager" />
            </span>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
          </header>
          <h1 id="hero-title" className={styles.title}>
            {hasEmphasis ? <>{hero.title.slice(0, -emphasis.length)}<em>{emphasis}</em></> : hero.title}
          </h1>
          <div className={styles.stage}>
            <div className={styles.statement}>
              <p className={styles.deck}>{hero.deck}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`story-act story-act--manifesto ${styles.manifesto}`} data-act="manifesto" data-editorial-manifesto id="manifiesto" aria-labelledby="manifesto-title" tabIndex={-1}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{manifesto.kicker}</p>
          <div className={styles.manifestIntro}>
            <h2 id="manifesto-title">{manifesto.title}</h2>
            <p>{manifesto.body}</p>
          </div>
          <div className={styles.terms} aria-label="Secuencia del manifiesto">
            {manifesto.terms.map((item, index) => (
              <article className={styles.term} key={item.term} data-editorial-term>
                <div>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")} / {String(manifesto.terms.length).padStart(2, "0")}</span>
                  <h3>{item.term}</h3>
                </div>
                <p>{item.definition}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
