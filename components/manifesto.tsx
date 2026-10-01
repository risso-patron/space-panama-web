import type { SiteContent } from "@/lib/space-content";

type ManifestoProps = { manifesto: SiteContent["manifesto"] };

export function Manifesto({ manifesto }: ManifestoProps) {
  return (
    <section className="scene scene--manifesto motion-scope" id="manifiesto" aria-labelledby="manifesto-title">
      <div className="manifesto__track" aria-hidden="true" />
      <div className="manifesto__stage">
        <div className="manifesto__intro">
          <p className="eyebrow">{manifesto.kicker}</p>
          <h2 id="manifesto-title">{manifesto.title}</h2>
          <p>{manifesto.body}</p>
        </div>
        <div className="manifesto__sequence" aria-label="Secuencia del manifiesto">
          {manifesto.terms.map((item, index) => (
            <article className="manifesto-step" key={item.term} aria-label={`${index + 1} de ${manifesto.terms.length}: ${item.term}`}>
              <span className="manifesto-step__index">{String(index + 1).padStart(2, "0")} / {String(manifesto.terms.length).padStart(2, "0")}</span>
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
            </article>
          ))}
          <div className="manifesto__progress" role="progressbar" aria-label="Progreso del manifiesto" aria-valuemin={1} aria-valuemax={manifesto.terms.length} aria-valuenow={1}>
            <span className="manifesto__progress-fill" />
            <span className="manifesto__progress-label">01 — {String(manifesto.terms.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
