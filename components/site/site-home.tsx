import Image from "next/image";
import Link from "next/link";
import { contact, selectedWork, archiveWork, serviceGroups, digitalWork, fenixIdentity } from "@/lib/public-site";
import { SpaceOrbit } from "./space-orbit";
import { ManifestoPath } from "./manifesto-path";
import styles from "./site-home.module.css";

const principles = [
  ["Estrategia", "Encontrar el ángulo antes de empezar a crear."],
  ["Creatividad", "Dar a cada idea una expresión visual propia."],
  ["Experiencias", "Llevar la marca de la pantalla al encuentro."],
  ["Digital", "Conectar el mensaje con su espacio en la web."],
  ["Crecimiento", "Pensar cada paso como parte de un recorrido."],
];

// The same gold points as the Hero satellites, lit for the worlds a case touches. Text for assistive technology.
function WorldMarks({ worlds }: Readonly<{ worlds: readonly string[] }>) {
  const names = serviceGroups.filter(group => worlds.includes(group.id)).map(group => group.title);
  return (
    <p className={styles.worldMarks}>
      <span className={styles.srOnly}>Mundos: {names.join(" y ")}.</span>
      <span aria-hidden="true">{serviceGroups.map(group => <span key={group.id} data-on={worlds.includes(group.id)}><i />{group.title}</span>)}</span>
    </p>
  );
}

export function SiteHome() {
  const emc = selectedWork[1];
  const heroes = archiveWork.find(project => project.id === "heroes-de-panama")!;
  return (
    <main className={styles.page} id="main-content">
      <div className={styles.opening}>
        <section className={styles.hero} aria-labelledby="home-title" data-chapter="hero">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Space Panamá · Estudio creativo</p>
              <h1 id="home-title"><span data-hero-line>Creamos experiencias</span>{" "}<span data-hero-line>que hacen</span>{" "}<em data-hero-line>crecer marcas.</em></h1>
              <p className={styles.heroDeck}><strong className={styles.heroServices}>Estrategia, diseño, comunicación y eventos.</strong>{" "}Somos una agencia creativa en Ciudad de Panamá: conectamos las ideas con sus distintas formas de estar en el mundo.</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#trabajo">Explorar nuestro trabajo <span aria-hidden="true">↓</span></a>
                <Link className={styles.textAction} href="/nosotros">Conocer a Space</Link>
              </div>
            </div>
            <SpaceOrbit />
          </div>
          <div className={styles.chapterRail} aria-hidden="true" />
        </section>

        <section className={`${styles.manifesto} ${styles.light}`} id="manifiesto" aria-labelledby="manifesto-title" data-chapter="manifiesto">
          <div className={styles.sectionWrap}>
            <p className={styles.eyebrow}>Manifiesto · La mirada Space</p>
            <div className={styles.manifestoLead}>
              <h2 id="manifesto-title">Del brief al crecimiento: <em>estrategia y creatividad.</em></h2>
              <p>Una marca no vive en un solo lugar. Vive en una identidad, una pantalla, una conversación o un encuentro. Unimos estrategia y creatividad para que esos puntos de contacto hablen el mismo idioma.</p>
            </div>
            <ManifestoPath>
              <ul className={styles.principles}>
                {principles.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}
              </ul>
            </ManifestoPath>
          </div>
        </section>
      </div>

      <section className={`${styles.work} ${styles.light} ${styles.lightTint}`} id="trabajo" aria-labelledby="work-title" data-chapter="selected-work">
        <div className={styles.sectionWrap}>
          <header className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Trabajo seleccionado</p><h2 id="work-title">La mirada toma <em>forma.</em></h2></div>
            <p>No todas las marcas hablan igual. El trabajo empieza por encontrar su propia voz.</p>
          </header>
          {/* Owner (2026-11-21): Héroes de Panamá replaces Don Ceviche as the first featured case. No results or credits beyond the poster. */}
          <article className={styles.case} aria-labelledby="heroes-title">
            <div className={styles.caseCopy}>
              <WorldMarks worlds={["comunicacion", "experiencias"]} />
              <h3 id="heroes-title">{heroes.client}</h3>
              <p className={styles.caseThesis}>{heroes.title}</p>
              <p>{heroes.description}</p>
              <Link className={styles.textAction} href="/trabajo#heroes-de-panama">Ver la convocatoria</Link>
            </div>
            <figure className={`${styles.caseImage} ${styles.posterImage}`}>
              <Image src={heroes.images[0].src} alt={heroes.images[0].alt} width={heroes.images[0].width} height={heroes.images[0].height} sizes="(max-width: 680px) 80vw, 30vw" />
              <figcaption>{heroes.images[0].caption}</figcaption>
            </figure>
          </article>
        </div>
        <article className={`${styles.fenixCase} ${styles.light}`} aria-labelledby="fenix-home-title">
          <div className={`${styles.sectionWrap} ${styles.case} ${styles.caseReverse}`}>
            <div className={styles.caseCopy}>
              <WorldMarks worlds={["marca", "digital"]} />
              <h3 id="fenix-home-title">{digitalWork[0].name}</h3>
              <p className={styles.caseThesis}>Del logo a la web.</p>
              <p>Space creó la identidad de Fénix, con un ave azul como símbolo, y desarrolló el sitio donde presenta sus servicios de reparación y mantenimiento de aires acondicionados.</p>
              <Link className={styles.textAction} href="/trabajo#fenix-refrigeracion">Ver el caso</Link>
            </div>
            <figure className={styles.fenixMedia}>
              <div className={styles.fenixLogo}><Image src={fenixIdentity.src} alt={fenixIdentity.alt} width={fenixIdentity.width} height={fenixIdentity.height} sizes="(max-width: 680px) 34vw, 16vw" /></div>
              <Image className={styles.fenixWeb} src={digitalWork[0].src} alt={digitalWork[0].alt} width={digitalWork[0].width} height={digitalWork[0].height} sizes="(max-width: 680px) 92vw, 46vw" />
              <figcaption>Fénix Refrigeración · Identidad y sitio web de Space</figcaption>
            </figure>
          </div>
        </article>
        <article className={`${styles.emcCase} ${styles.light} ${styles.lightTint}`} aria-labelledby="emc-title">
          <div className={`${styles.sectionWrap} ${styles.case}`}>
            <div className={styles.caseCopy}>
              <WorldMarks worlds={["comunicacion"]} />
              <h3 id="emc-title">{emc.client}</h3>
              <p className={styles.caseThesis}>{emc.title}</p>
              <p>{emc.description}</p>
              <Link className={styles.textAction} href="/trabajo#emc-panama">Ver el proyecto</Link>
            </div>
            <figure className={styles.caseImage}>
              <Image src={emc.images[0].src} alt={emc.images[0].alt} width={1600} height={1066} sizes="(max-width: 680px) 92vw, 58vw" />
              <figcaption>{emc.images[0].caption}</figcaption>
            </figure>
          </div>
        </article>
        <div className={`${styles.sectionWrap} ${styles.workAll}`}>
          <p>Publicaciones para Don Ceviche y otras marcas, packaging, sitios web y ambientación de eventos.</p>
          <Link className={styles.primaryAction} href="/trabajo">Ver todo el trabajo</Link>
        </div>
      </section>

      <section className={`${styles.worlds} ${styles.light}`} id="servicios" aria-labelledby="worlds-title" data-chapter="cuatro-mundos">
        <div className={styles.sectionWrap}>
          <header className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>El universo Space</p><h2 id="worlds-title">Cuatro mundos.<br /><em>Una misma órbita.</em></h2></div>
            <p>La especialidad cambia. La intención de conectar cada parte, no.</p>
          </header>
          {/* Owner (2026-11-21): only the orbit remains. Each world is a link to its section in Servicios; it changes colour on hover/focus. No motion. */}
          <nav className={styles.worldOrbit} aria-label="Los cuatro mundos de Space: ir a Servicios">
            <svg viewBox="0 0 1200 260" aria-hidden="true" focusable="false" preserveAspectRatio="none">
              <defs><radialGradient id="world-core" cx="35%" cy="30%" r="80%"><stop stopColor="#6f8fc4" /><stop offset=".55" stopColor="#3b598d" /><stop offset="1" stopColor="#1d2c48" /></radialGradient></defs>
              <defs><radialGradient id="world-plane" cx="50%" cy="50%" r="50%"><stop stopColor="#3b598d" stopOpacity=".16" /><stop offset=".7" stopColor="#3b598d" stopOpacity=".05" /><stop offset="1" stopColor="#3b598d" stopOpacity="0" /></radialGradient></defs>
              {/* Perspective: the orbit plane, a faint far half and a stronger near half. */}
              <ellipse cx="600" cy="140" rx="540" ry="104" fill="url(#world-plane)" />
              <ellipse cx="600" cy="192" rx="70" ry="12" fill="#17233b" fillOpacity=".14" />
              <path d="M80 140 A520 96 0 0 1 1120 140" fill="none" stroke="currentColor" strokeOpacity=".22" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M80 140 A520 96 0 0 0 1120 140" fill="none" stroke="currentColor" strokeOpacity=".55" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
              <ellipse cx="600" cy="140" rx="440" ry="70" fill="none" stroke="#e0bf8b" strokeOpacity=".45" strokeWidth="1.2" strokeDasharray="2 7" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className={styles.orbitCore} aria-hidden="true"><span>Space</span></span>
            <ol>
              {serviceGroups.map(group => <li key={group.id} data-world={group.id}><a href={`/servicios#${group.id}`} aria-label={`${group.title}: ${group.intro} Ver en Servicios`}><span className={styles.orbitDot} aria-hidden="true" />{group.title}</a></li>)}
            </ol>
          </nav>
          <Link className={`${styles.textAction} ${styles.orbitMore}`} href="/servicios">Ver todos los servicios</Link>
        </div>
      </section>



      <section className={styles.closing} aria-labelledby="closing-title" data-chapter="cierre">
        <div className={styles.sectionWrap}>
          <p className={styles.eyebrow}>Space Panamá · Estudio creativo</p>
          <h2 id="closing-title">Estrategia con sensibilidad.<br /><em>Creatividad que se ejecuta.</em></h2>
          <p className={styles.closingDeck}>Marketing digital con amor por las personas, los lugares, la cultura y la tecnología.</p>
          <div className={styles.contactGrid}>
            <div><p className={styles.eyebrow}>El siguiente capítulo empieza contigo</p><h3>¿Qué quieres<br /><em>hacer crecer?</em></h3></div>
            <div className={styles.contactLinks}><p>Cuéntanos.</p><a href={contact.emailHref}>{contact.email}</a><a href={contact.whatsappHref}>WhatsApp · {contact.phone}</a><a href={contact.instagramHref} rel="me noopener">Instagram · {contact.instagram}</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
