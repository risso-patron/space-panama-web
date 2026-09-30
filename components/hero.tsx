import type { SiteContent } from "@/lib/space-content";

type HeroProps = {
  hero: SiteContent["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section className="scene scene--hero" aria-labelledby="hero-title">
      <div className="scene__rail" aria-hidden="true">
        <span>01</span>
        <span>Hero</span>
      </div>

      <div className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero__deck">{hero.deck}</p>
        <div className="hero__actions" aria-label="Acciones principales">
          <a href="#don-ceviche" className="button button--primary">
            {hero.primaryCta}
          </a>
          <a href="#manifiesto" className="button button--ghost">
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="orbital-card" aria-label="Dirección visual editorial de Space Panamá">
        <span className="orbital-card__tag">Vertical slice</span>
        <div className="orbital-card__planet" />
        <p>Scroll timeline · estrategia · narrativa · digital product</p>
      </div>
    </section>
  );
}
