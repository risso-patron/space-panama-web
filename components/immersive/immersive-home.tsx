import { BrandWorkScenes } from "@/components/brand-work-scenes";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { ImmersiveMotion } from "@/components/immersive/immersive-motion";
import { AtmosphericMotion } from "@/components/immersive/atmospheric-motion";
import { SelectedWork } from "@/components/selected-work";
import type { SiteContent } from "@/lib/space-content";

const worlds = [
  { name: "MARCA", color: "#d7bc8a", skills: ["branding", "identidad visual", "diseño gráfico", "packaging"] },
  { name: "COMUNICACIÓN", color: "#e2d2b9", skills: ["social media", "contenido", "campañas", "producción audiovisual"] },
  { name: "EXPERIENCIAS", color: "#b9d0cf", skills: ["eventos", "activaciones", "lanzamientos", "producción"] },
  { name: "DIGITAL", color: "#c8b3d7", skills: ["websites", "estrategia digital", "soluciones web", "tecnología"] },
];
const method = ["ENTENDEMOS", "PENSAMOS", "CREAMOS", "EJECUTAMOS", "MEDIMOS", "MEJORAMOS"];
const digitalNames = ["SOMOS Properties", "HomePower PTY", "SALDO", "Provivir Panamá"];

export function ImmersiveHome({ content }: { content: SiteContent }) {
  const [featuredProject] = content.projects;
  return (
    <main className="immersive" data-immersive>
      <ImmersiveMotion />
      <AtmosphericMotion />
      <div className="atmosphere-canvas" aria-hidden="true">
        <span className="atmosphere-canvas__orb atmosphere-canvas__orb--primary" />
        <span className="atmosphere-canvas__orb atmosphere-canvas__orb--secondary" />
        <span className="atmosphere-canvas__orbit" />
      </div>
      <div className="story-thread" aria-hidden="true"><span className="story-thread__line" /><span className="story-thread__index">SPACE / PANAMÁ</span></div>
      <div className="story-act story-act--opening" data-act="opening"><Hero hero={content.hero} /></div>
      <div className="story-act story-act--manifesto" data-act="manifesto"><Manifesto manifesto={content.manifesto} /></div>
      <div className="selected-work-chapter" id="trabajo" aria-label="Trabajo seleccionado" data-selected-work>
        <header className="selected-work-chapter__rail"><p className="eyebrow">Selected work</p><span data-work-progress>01 / 03</span><span className="selected-work-chapter__progress"><i /></span></header>
        <div className="selected-work-viewport">
          <div className="selected-work-track">
            <div className="selected-work-panel selected-work-panel--ceviche story-act story-act--ceviche" data-act="ceviche"><SelectedWork project={featuredProject} /></div>
            {content.brandWork.map((item, index) => (
              <div className={`selected-work-panel selected-work-panel--${item.slug}`} key={item.slug} data-work-panel={index + 1}>
                <BrandWorkScenes items={[item]} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="thesis-pause" data-act="thesis" aria-label="Tesis de Space">
        <p className="eyebrow">Una marca. Un sistema.</p>
        <h2>No hacemos piezas aisladas.<br /><em>Construimos soluciones</em><br /> alrededor de una marca.</h2>
        <span className="thesis-pause__orbit" aria-hidden="true" />
      </section>
      <section className="worlds-act" data-act="worlds" aria-labelledby="worlds-title">
        <header className="worlds-act__intro"><p className="eyebrow">El universo Space</p><h2 id="worlds-title">Cuatro mundos.<br /><em>Una misma órbita.</em></h2></header>
        <div className="worlds-stage" role="group" aria-label="Cuatro mundos de Space">
          {worlds.map((world, index) => <article className="world-scene" key={world.name} style={{ "--world-color": world.color } as React.CSSProperties} aria-label={`${world.name}, ${index + 1} de 4`} data-world={index}>
            <span className="world-scene__index">0{index + 1} / 04</span><h3>{world.name}</h3><ul>{world.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><span className="world-scene__rule" aria-hidden="true" />
          </article>)}
          <div className="worlds-progress" role="progressbar" aria-label="Progreso por los cuatro mundos" aria-valuemin={1} aria-valuemax={4} aria-valuenow={1}><span /></div>
        </div>
      </section>
      <section className="digital-act" data-act="digital" aria-labelledby="digital-title">
        <div className="digital-act__lead"><p className="eyebrow">Ideas que toman forma en pantalla</p><h2 id="digital-title"><span className="digital-act__word">Digital</span><br /><em>en movimiento.</em></h2><p>Una presencia web clara, útil y pensada alrededor de cada marca.</p></div>
        <div className="digital-orbit" aria-label="Proyectos digitales"><span className="digital-orbit__line" aria-hidden="true" />{digitalNames.map((name, i) => <p className={`digital-name digital-name--${i + 1}`} key={name}><span>0{i + 1}</span>{name}</p>)}</div>
      </section>
      <section className="method-act" data-act="method" aria-labelledby="method-title">
        <header><p className="eyebrow">Cómo trabajamos</p><h2 id="method-title">Una idea lleva<br /><em>a la siguiente.</em></h2><p className="method-act__thesis">No entregamos y desaparecemos.</p></header>
        <div className="method-sequence" aria-label="Entendemos, pensamos, creamos, ejecutamos, medimos y mejoramos">
          {method.map((step, i) => <p className="method-step" key={step} data-method-step={i}><span>0{i + 1} / 06</span>{step}</p>)}
          <div className="method-sequence__progress" role="progressbar" aria-label="Progreso del método" aria-valuemin={1} aria-valuemax={6} aria-valuenow={1}><i /></div>
        </div>
      </section>
      <section className="space-conclusion" data-act="space" aria-labelledby="space-title">
        <p className="eyebrow">Space Panamá · Estudio creativo</p><h2 id="space-title">Estrategia con sensibilidad.<br /><em>Creatividad que se ejecuta.</em></h2>
        <p>Unimos visión, criterio y producción para acompañar a las marcas desde la idea hasta cada punto de contacto.</p>
      </section>
      <footer className="final-act" data-act="closing" aria-labelledby="contact-title">
        <p className="eyebrow">El siguiente capítulo empieza contigo</p><h2 id="contact-title">¿Qué quieres<br /><em>hacer crecer?</em></h2><p className="final-act__invitation">Cuéntanos.</p>
        {content.contact.channels.length > 0 && <nav aria-label="Canales de contacto">{content.contact.channels.map((channel) => <a href={channel.href} key={channel.label}>{channel.label}: {channel.value}</a>)}</nav>}
        <span className="final-act__signature">SPACE · PANAMÁ</span>
      </footer>
    </main>
  );
}
