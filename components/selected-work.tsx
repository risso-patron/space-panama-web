import type { Project } from "@/lib/space-content";
import Image from "next/image";

type SelectedWorkProps = {
  project: Project;
};

export function SelectedWork({ project }: SelectedWorkProps) {
  return (
    <section
      className="scene scene--work motion-scope"
      id="don-ceviche"
      aria-labelledby="work-title"
    >
      <div className="scene__rail" aria-hidden="true">
        <span>03</span>
        <span>Selected work</span>
      </div>

      <div className="work-card">
        <div className="work-card__visual motion-card">
          {project.assets.video ? (
            <video
              aria-label="Video horizontal de Don Ceviche preparado para campañas"
              className="work-card__video"
              autoPlay
              loop
              muted
              playsInline
              poster={project.assets.poster}
            >
              <source src={project.assets.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.assets.poster}
              alt="Pieza visual de Don Ceviche desarrollada por Space Panamá"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              priority={false}
            />
          )}
          <Image
            className="work-card__poster"
            src={project.assets.poster}
            alt="Post de Don Ceviche con fotografía gastronómica"
            width={640}
            height={640}
          />
          <Image
            className="work-card__secondary"
            src={project.assets.secondary}
            alt="Sistema visual complementario de Don Ceviche"
            width={420}
            height={420}
          />
        </div>

        <div className="work-card__copy motion-reveal">
          <p className="eyebrow">{project.category} · {project.year}</p>
          <h2 id="work-title">{project.title}</h2>
          <p className="work-card__summary">{project.summary}</p>
          <dl className="work-card__details">
            <div>
              <dt>Señal creativa</dt>
              <dd>{project.signal}</dd>
            </div>
            <div>
              <dt>Paleta</dt>
              <dd>{project.palette}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
