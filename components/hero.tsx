import type { SiteContent } from "@/lib/space-content";
import Image from "next/image";

type HeroProps = { hero: SiteContent["hero"] };

export function Hero({ hero }: HeroProps) {
  return (
    <section className="scene scene--hero motion-scope" aria-labelledby="hero-title">
      <div className="scene__rail" aria-hidden="true"><span>01</span><span>Space Panamá</span></div>
      <div className="hero__content">
        <div className="hero__brand motion-reveal">
          <Image src="/assets/space/logo.png" alt="Space Panamá" width={260} height={134} priority />
        </div>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title" className="motion-headline">{hero.title}</h1>
        <p className="hero__deck motion-reveal">{hero.deck}</p>
        <div className="hero__actions motion-reveal" aria-label="Acciones principales">
          <a href="#don-ceviche" className="button button--primary">{hero.primaryCta}</a>
          <a href="#manifiesto" className="button button--ghost">{hero.secondaryCta}</a>
        </div>
      </div>
      <div className="hero__atmosphere" aria-hidden="true" />
    </section>
  );
}
