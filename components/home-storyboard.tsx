import Image from "next/image";

const worlds = [
  { title: "MARCA", items: ["branding", "identidad visual", "diseño gráfico", "packaging"] },
  { title: "COMUNICACIÓN", items: ["social media", "contenido", "campañas", "producción audiovisual"] },
  { title: "EXPERIENCIAS", items: ["eventos", "activaciones", "lanzamientos", "producción"] },
  { title: "DIGITAL", items: ["websites", "estrategia digital", "soluciones web", "tecnología"] },
];

const digitalProjects = ["SOMOS Properties", "HomePower PTY", "SALDO", "Provivir Panamá"];
const process = ["ENTENDEMOS", "PENSAMOS", "CREAMOS", "EJECUTAMOS", "MEDIMOS", "MEJORAMOS"];

export function HomeStoryboard() {
  return (
    <>
      <section className="story-pause" aria-labelledby="story-pause-title" data-motion-scene>
        <p className="eyebrow">De lo seleccionado a lo que hacemos</p>
        <h2 id="story-pause-title">No hacemos piezas aisladas.<br /><span>Construimos soluciones alrededor de una marca.</span></h2>
      </section>

      <section className="worlds scene" aria-labelledby="worlds-title" data-motion-scene>
        <div className="scene__rail" aria-hidden="true"><span>07</span><span>Lo que hacemos</span></div>
        <div className="worlds__content">
          <header className="story-heading"><p className="eyebrow">Cuatro mundos · una misma mirada</p><h2 id="worlds-title">Ideas que toman forma.</h2></header>
          <div className="worlds__list">
            {worlds.map((world, index) => (
              <article className="world" key={world.title} data-story-reveal>
                <span className="world__index">0{index + 1}</span>
                <h3>{world.title}</h3>
                <ul>{world.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="digital-story scene" aria-labelledby="digital-title" data-motion-scene>
        <div className="scene__rail" aria-hidden="true"><span>08</span><span>Digital</span></div>
        <div className="digital-story__content">
          <div className="story-heading"><p className="eyebrow">Digital / web</p><h2 id="digital-title">Digital products<br />&amp; web experiences.</h2><p>Una selección de proyectos digitales.</p></div>
          <ol className="digital-projects" aria-label="Proyectos digitales seleccionados">
            {digitalProjects.map((project, index) => <li data-story-reveal key={project}><span>0{index + 1}</span><strong>{project}</strong><span aria-hidden="true">↗</span></li>)}
          </ol>
          <p className="story-note">La ficha visual y el alcance de cada proyecto quedan pendientes de validación.</p>
        </div>
      </section>

      <section className="process-story scene" aria-labelledby="process-title" data-motion-scene>
        <div className="scene__rail" aria-hidden="true"><span>09</span><span>Proceso</span></div>
        <div className="process-story__content">
          <header className="story-heading"><p className="eyebrow">Cómo trabajamos</p><h2 id="process-title">De la primera pregunta<br />a lo que sigue.</h2></header>
          <ol className="process-list">{process.map((step, index) => <li data-story-reveal key={step}><span>0{index + 1}</span><h3>{step}</h3></li>)}</ol>
          <p className="process-story__promise">No entregamos y desaparecemos.</p>
        </div>
      </section>

      <section className="behind-story scene" aria-labelledby="behind-title" data-motion-scene>
        <div className="scene__rail" aria-hidden="true"><span>10</span><span>Detrás del trabajo</span></div>
        <div className="behind-story__content">
          <header className="story-heading"><p className="eyebrow">Behind the Work</p><h2 id="behind-title">El trabajo, más allá del resultado.</h2><p>Algunas piezas reales del trabajo seleccionado.</p></header>
          <div className="behind-story__assets">
            <figure data-story-reveal><Image src="/assets/sissy/five-actions.webp" alt="Pieza de campaña de Sissy Méndez" width={720} height={1270} sizes="(max-width: 700px) 90vw, 38vw" /><figcaption>Sissy Méndez · pieza de campaña</figcaption></figure>
            <figure data-story-reveal><Image src="/assets/psicojazmin/notebook.webp" alt="Cuaderno con identidad visual de PsicoJazmin" width={1200} height={900} sizes="(max-width: 700px) 90vw, 38vw" /><figcaption>PsicoJazmin · identidad aplicada</figcaption></figure>
          </div>
          <p className="story-note">No hay material documental de making-of verificado disponible todavía; esta escena muestra piezas finales reales, no imágenes de backstage.</p>
        </div>
      </section>

      <section className="about-story scene" aria-labelledby="about-title" data-motion-scene>
        <div className="scene__rail" aria-hidden="true"><span>11</span><span>Space</span></div>
        <div className="about-story__content"><p className="eyebrow">Nosotros</p><h2 id="about-title">Una casa creativa para marcas en movimiento.</h2><p>Space une estrategia, creatividad y dirección digital para construir experiencias de marca.</p></div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title" data-motion-scene>
        <p className="eyebrow">La siguiente órbita empieza aquí</p>
        <h2 id="final-cta-title">¿Qué quieres hacer crecer?</h2>
        <a href="#contacto" className="final-cta__link">Cuéntanos. <span aria-hidden="true">↘</span></a>
      </section>
      {/* Evidence-gated: testimonials and results stay out of public render until verified source material exists. */}
    </>
  );
}
