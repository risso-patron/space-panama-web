import Image from "next/image";
import type { BrandWork } from "@/lib/space-content";

type BrandWorkScenesProps = { items: BrandWork[] };

export function BrandWorkScenes({ items }: BrandWorkScenesProps) {
  return (
    <>
      {items.map((item, index) => (
        <section
          className={`scene brand-work brand-work--${item.slug}`}
          key={item.slug}
          aria-labelledby={`brand-work-${item.slug}-title`}
        >
          <div className="scene__rail" aria-hidden="true">
            <span>{String(index + 4).padStart(2, "0")}</span>
            <span>Selected work</span>
          </div>
          <div className="brand-work__content">
            <header className="brand-work__intro">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2 id={`brand-work-${item.slug}-title`}>{item.title}</h2>
              <p className="brand-work__headline">{item.headline}</p>
              {item.slug === "sissy" && (
                <p className="brand-work__description">{item.description}</p>
              )}
            </header>

            {item.slug === "sissy" ? (
              <div className="brand-work__visuals brand-work__visuals--sissy">
                <figure className="brand-work__video-card">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    aria-label="Video de 5 acciones para tener orden y tranquilidad"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </figure>
                <figure className="brand-work__image-card brand-work__image-card--sissy">
                  <Image
                    src={item.campaignImage}
                    alt="Pieza de campaña: 5 acciones que te darán orden y tranquilidad"
                    fill
                    sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 30vw"
                  />
                </figure>
              </div>
            ) : (
              <div className="brand-work__visuals brand-work__visuals--psicojazmin">
                <figure className="brand-work__image-card">
                  <Image
                    src={item.notebook}
                    alt="Cuaderno con la identidad de PsicoJazmin"
                    fill
                    sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 40vw"
                  />
                </figure>
                <figure className="brand-work__image-card">
                  <Image
                    src={item.mugs}
                    alt="Tazas con la identidad de PsicoJazmin"
                    fill
                    sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 40vw"
                  />
                </figure>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
