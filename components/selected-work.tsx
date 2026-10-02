import type { Project } from "@/lib/space-content";
import Image from "next/image";

type SelectedWorkProps = { project: Project };

export function SelectedWork({ project }: SelectedWorkProps) {
  return (
    <section className="scene scene--work motion-scope" id="don-ceviche" aria-labelledby="work-title">
      <div className="scene__rail" aria-hidden="true"><span>03</span><span>Selected work</span></div>
      <div className="work-story">
        <header className="work-story__intro">
          <p className="eyebrow">{project.category} · {project.year}</p>
          <h2 id="work-title">{project.title}</h2>
          <p className="work-story__lead">{project.summary}</p>
        </header>
        <div className="work-story__scene" aria-label={`Narrativa visual de ${project.title}`}>
          <figure className="work-story__main">
            {project.assets.video ? (
              <video className="work-story__video" autoPlay loop muted playsInline poster={project.assets.poster} aria-label="Video horizontal de Don Ceviche">
                <source src={project.assets.video} type="video/mp4" />
              </video>
            ) : (
              <Image src={project.assets.poster} alt="Pieza visual principal de Don Ceviche" fill sizes="(max-width: 900px) 100vw, 78vw" />
            )}
          </figure>
          <figure className="work-story__layer work-story__layer--one">
            <Image src={project.assets.poster} alt="Pieza de campaña de Don Ceviche" width={640} height={640} />
          </figure>
          <figure className="work-story__layer work-story__layer--two">
            <Image src={project.assets.secondary} alt="Segunda pieza de campaña de Don Ceviche" width={420} height={420} />
          </figure>
          <span className="work-story__caption">Don Ceviche · Sistema visual de campaña</span>
        </div>
        <footer className="work-story__outro">
          <p>{project.signal}</p>
          <dl><div><dt>Paleta</dt><dd>{project.palette}</dd></div></dl>
        </footer>
      </div>
    </section>
  );
}
