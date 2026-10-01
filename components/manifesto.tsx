import type { SiteContent } from "@/lib/space-content";

type ManifestoProps = {
  manifesto: SiteContent["manifesto"];
};

export function Manifesto({ manifesto }: ManifestoProps) {
  return (
    <section
      className="scene scene--manifesto motion-scope"
      id="manifiesto"
      aria-labelledby="manifesto-title"
    >
      <div className="scene__rail" aria-hidden="true">
        <span>02</span>
        <span>Manifiesto</span>
      </div>

      <div className="manifesto__intro motion-reveal">
        <p className="eyebrow">{manifesto.kicker}</p>
        <h2 id="manifesto-title">{manifesto.title}</h2>
        <p>{manifesto.body}</p>
      </div>

      <div className="manifesto__terms" aria-label="Principios de marca">
        {manifesto.terms.map((item, index) => (
          <article className="term-card manifesto-step" key={item.term}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.term}</h3>
            <p>{item.definition}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
