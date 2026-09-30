import type { Project } from "@/lib/space-content";

type SelectedWorkProps = {
  project: Project;
};

export function SelectedWork({ project }: SelectedWorkProps) {
  return (
    <section className="scene scene--work" id="don-ceviche" aria-labelledby="work-title">
      <div className="scene__rail" aria-hidden="true">
        <span>03</span>
        <span>Selected work</span>
      </div>

      <div className="work-card">
        <div className="work-card__visual" aria-hidden="true">
          <span>Don</span>
          <span>Ceviche</span>
        </div>

        <div className="work-card__copy">
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
