import type { Metadata } from "next";
import Link from "next/link";
import { serviceGroups } from "@/lib/public-site";
import { SiteContactCallout } from "@/components/site/site-page";
import { DigitalShowcase, MethodSequence, PackagingPiece, SocialGallery, WorldMedia } from "@/components/site/service-evidence";
import { ServicesIndex } from "@/components/site/services-index";
import { createSitePageMetadata } from "@/lib/page-metadata";
import pages from "@/components/site/site-pages.module.css";
import editorial from "@/components/site/site-home.module.css";
import styles from "@/components/site/services-page.module.css";

export const metadata: Metadata = createSitePageMetadata({
  title: "Servicios",
  description: "Qué hacemos y cómo: identidad visual, packaging, social media, contenidos, flyers, desarrollo web y organización de eventos en Ciudad de Panamá.",
  canonical: "/servicios",
});

// Servicios = qué hacemos y cómo (owner, 2026-11-21: option A "Un mundo por capítulo").
// Header with a small linked orbit, a sticky chapter index, each world in two columns (services | real evidence),
// Digital with its showcase and Método as one path. Only hover feedback moves.
const chapterLinks: Record<string, { href: string; label: string } | undefined> = {
  marca: { href: "/trabajo#fenix-refrigeracion", label: "Ver el caso Fénix" },
  comunicacion: { href: "/trabajo#redes-sociales", label: "Ver las publicaciones para redes" },
  experiencias: { href: "/trabajo#casamiento", label: "Ver la boda y los XV Años" },
};

export default function ServicesPage() {
  const worlds = serviceGroups.filter(group => group.id !== "digital");
  const digital = serviceGroups.find(group => group.id === "digital")!;
  const indexItems = [...serviceGroups.map(group => ({ id: group.id, title: group.title })), { id: "metodo", title: "Cómo trabajamos" }];

  return (
    <main className={pages.page} id="main-content" aria-labelledby="page-title">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <p className={pages.eyebrow}>Servicios</p>
            <h1 className={pages.pageTitle} id="page-title">Qué hacemos <em>y cómo lo hacemos.</em></h1>
            <p className={pages.pageLead}>Cuatro mundos de trabajo para pymes, emprendimientos y marcas: Marca, Comunicación, Experiencias y Digital. Cada uno con ejemplos reales de Space.</p>
          </div>
          <nav className={styles.heroOrbit} aria-label="Ir a un mundo de servicio">
            <svg viewBox="0 0 400 260" aria-hidden="true" focusable="false">
              <ellipse cx="200" cy="130" rx="190" ry="78" fill="#3b598d" fillOpacity=".06" />
              <path d="M10 130 A190 78 0 0 1 390 130" fill="none" stroke="#3b598d" strokeOpacity=".25" strokeWidth="1.2" />
              <path d="M10 130 A190 78 0 0 0 390 130" fill="none" stroke="#3b598d" strokeOpacity=".6" strokeWidth="2.4" />
              <ellipse cx="200" cy="172" rx="34" ry="7" fill="#17233b" fillOpacity=".14" />
            </svg>
            <span className={styles.heroCore} aria-hidden="true">Space</span>
            <ol>
              {serviceGroups.map(group => <li key={group.id} data-world={group.id}><a href={`#${group.id}`}><i aria-hidden="true" />{group.title}</a></li>)}
            </ol>
          </nav>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.aside}><ServicesIndex items={indexItems} /></aside>
        <div className={styles.chapters}>
          {worlds.map((group, index) => (
            <section className={`${styles.chapter} ${index % 2 ? styles.tint : ""}`} id={group.id} aria-labelledby={`${group.id}-title`} key={group.id}>
              <div className={styles.chapterCopy}>
                <p className={styles.worldTag}><i aria-hidden="true" />Mundo {group.title}</p>
                <h2 id={`${group.id}-title`}>{group.title}</h2>
                <p className={styles.intro}>{group.intro}</p>
                <ul className={styles.cards}>
                  {group.services.map(service => <li key={service.name}><h3>{service.name}</h3><p>{service.description}</p></li>)}
                </ul>
                {chapterLinks[group.id] && <Link className={pages.inlineLink} href={chapterLinks[group.id]!.href}>{chapterLinks[group.id]!.label}</Link>}
              </div>
              <div className={`${editorial.band} ${editorial.light} ${styles.evidence}`}>
                {group.id === "marca" ? <div className={styles.brandStack}><WorldMedia group="marca" /><PackagingPiece /></div>
                  : group.id === "comunicacion" ? <SocialGallery />
                  : <WorldMedia group={group.id} />}
              </div>
            </section>
          ))}

          <section className={`${editorial.band} ${editorial.light} ${editorial.lightTint} ${editorial.digital} ${styles.wide}`} id="digital" aria-labelledby="digital-title">
            <div className={`${editorial.sectionWrap} ${editorial.digitalGrid}`}>
              <div><p className={styles.worldTag}><i aria-hidden="true" />Mundo {digital.title}</p><h2 id="digital-title">Digital,<br /><em>en todas las pantallas.</em></h2></div>
              <div className={editorial.digitalCopy}>
                <p className={editorial.digitalThesis}>No se trata solo de estar.<br />Se trata de <em>cómo estar.</em></p>
                <ul className={styles.cards}>{digital.services.map(service => <li key={service.name}><h3>{service.name}</h3><p>{service.description}</p></li>)}</ul>
              </div>
            </div>
            <DigitalShowcase />
          </section>

          <section className={`${editorial.band} ${editorial.light} ${editorial.method} ${styles.wide}`} id="metodo" aria-labelledby="method-title">
            <MethodSequence />
          </section>
        </div>
      </div>

      <SiteContactCallout
        title="¿Qué estás buscando para tu marca?"
        description="Cuéntanos tu idea y conversemos sobre el servicio que mejor responde a lo que necesitas."
      />
    </main>
  );
}
