import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { selectedWork, archiveWork, digitalWork, developerWork, fenixIdentity, socialPieces, packagingPieces, eventCases, heroesCampaign, serviceGroups } from "@/lib/public-site";
import { createSitePageMetadata } from "@/lib/page-metadata";
import { SiteContactCallout } from "@/components/site/site-page";
import { WorldMedia } from "@/components/site/service-evidence";
import { WorkFilter } from "@/components/site/work-filter";
import { PageHero } from "@/components/site/page-hero";
import { WorkHeroVisual } from "@/components/site/hero-visuals";
import pages from "@/components/site/site-pages.module.css";
import editorial from "@/components/site/site-home.module.css";
import styles from "@/components/site/work-page.module.css";

export const metadata: Metadata = createSitePageMetadata({
  title: "Trabajo",
  description: "Trabajo de Space Panamá: redes para Don Ceviche, EMC, Total Import y Pappagallo; identidad y web de Fénix; sitios web, packaging y eventos.",
  canonical: "/trabajo",
});

// Trabajo = la prueba completa (owner, 2026-11-21: option A "El trabajo, por mundos").
// Featured cases first, then every case grouped by its main world, each in two columns (copy | mosaic).
// Cases keep their historical anchors (#don-ceviche, #casamiento, #fenix-refrigeracion…).
type WorkCase = { id: string; worlds: string[]; eyebrow: string; title: string; headline: string; body: ReactNode; link: { href: string; label: string }; media: ReactNode };
type Img = { src: string; alt: string; width: number; height: number };

const worldTitle = (id: string) => serviceGroups.find(group => group.id === id)?.title ?? id;
const pic = (image: Img, sizes = "(max-width: 760px) 92vw, 30vw") => <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} />;

function Worlds({ worlds }: Readonly<{ worlds: readonly string[] }>) {
  return (
    <p className={styles.worlds}>
      <span className={styles.srOnly}>Mundos: {worlds.map(worldTitle).join(" y ")}.</span>
      <span aria-hidden="true">{serviceGroups.map(group => <span key={group.id} data-on={worlds.includes(group.id)}><i />{group.title}</span>)}</span>
    </p>
  );
}

export default function WorkPage() {
  const [ceviche, emc] = selectedWork;
  const prevengo = archiveWork.find(project => project.id === "prevengo")!;
  const heroes = archiveWork.find(project => project.id === "heroes-de-panama")!;
  const [wedding, xv] = eventCases;

  const cases: Record<string, WorkCase[]> = {
    marca: [
      {
        id: "fenix-refrigeracion", worlds: ["marca", "digital"], eyebrow: "Identidad y sitio web", title: "Fénix Refrigeración", headline: "Del logo a la web.",
        body: <p>Space creó la identidad de Fénix Refrigeración y desarrolló su sitio web: una empresa de reparación, limpieza y mantenimiento de aires acondicionados, con un ave azul como símbolo y una web que presenta sus servicios, proveedores y su forma de trabajar. Logo y presentación del sitio publicados por Space en spaceventos.com.</p>,
        link: { href: "/servicios#marca", label: "Explorar Marca" },
        media: <div className={styles.fenix}><figure className={styles.white}>{pic(fenixIdentity, "(max-width: 760px) 40vw, 14vw")}</figure><figure>{pic(digitalWork[0], "(max-width: 760px) 92vw, 34vw")}</figure></div>,
      },
      {
        id: "identidades", worlds: ["marca"], eyebrow: "Identidad visual", title: "Identidades", headline: "Diez logos y tres tarjetas.",
        body: <p>Logotipos y aplicaciones sobre tarjeta para marcas de salud, belleza, servicios, comercio y cultura, publicados por Space en spaceventos.com/identidad-visual.</p>,
        link: { href: "/servicios#marca", label: "Explorar Marca" },
        media: <div className={`${editorial.band} ${editorial.light}`}><WorldMedia group="marca" /></div>,
      },
    ],
    comunicacion: [
      {
        id: "don-ceviche", worlds: ["comunicacion"], eyebrow: ceviche.category, title: ceviche.client, headline: ceviche.title,
        body: <p>{ceviche.description} {ceviche.context}</p>,
        link: { href: "/servicios#comunicacion", label: "Explorar Comunicación" },
        media: <div className={styles.grid2}>{ceviche.images.map(image => <figure key={image.src}>{pic(image, "(max-width: 760px) 46vw, 18vw")}</figure>)}</div>,
      },
      {
        id: "emc-panama", worlds: ["comunicacion"], eyebrow: emc.category, title: emc.client, headline: emc.title,
        body: <p>{emc.description} {emc.context}</p>,
        link: { href: "/servicios#comunicacion", label: "Explorar Comunicación" },
        media: <figure>{pic(emc.images[0], "(max-width: 760px) 92vw, 40vw")}</figure>,
      },
      {
        id: "redes-sociales", worlds: ["comunicacion"], eyebrow: "Social media", title: "Publicaciones para redes", headline: "Cada marca, su tono.",
        body: <p>Ocho publicaciones para Don Ceviche, Total Import, Pappagallo Automation y WeCareShare: producto, promoción y convocatoria, cada una con la voz visual de su marca. Piezas publicadas por Space en spaceventos.com/social-media.</p>,
        link: { href: "/servicios#comunicacion", label: "Explorar Comunicación" },
        media: <ul className={styles.grid4}>{socialPieces.map(piece => <li key={piece.src}><figure>{pic(piece, "(max-width: 760px) 44vw, 10vw")}<figcaption>{piece.client}</figcaption></figure></li>)}</ul>,
      },
      {
        id: "prevengo", worlds: ["comunicacion", "marca"], eyebrow: "Comunicación y packaging · Salud", title: prevengo.client, headline: prevengo.title,
        body: <p>{prevengo.description} También el diseño de su empaque, publicado por Space en spaceventos.com/diseno-de-packaging.</p>,
        link: { href: "/servicios#comunicacion", label: "Explorar Comunicación" },
        media: <div className={styles.grid2}><figure className={styles.white}>{pic(prevengo.images[0], "(max-width: 760px) 46vw, 18vw")}</figure><figure>{pic(packagingPieces[0], "(max-width: 760px) 46vw, 18vw")}</figure></div>,
      },
    ],
    experiencias: [
      {
        id: "heroes-de-panama", worlds: ["comunicacion", "experiencias"], eyebrow: heroes.category, title: heroes.client, headline: heroes.title,
        body: <p>{heroes.description}</p>,
        link: { href: "/servicios#experiencias", label: "Explorar Experiencias" },
        media: <div className={styles.heroes}><figure>{pic(heroes.images[0], "(max-width: 760px) 60vw, 16vw")}</figure><ul className={styles.grid4} aria-label="Piezas de la campaña de convocatoria">{heroesCampaign.map(piece => <li key={piece.src}><figure>{pic(piece, "(max-width: 760px) 22vw, 7vw")}</figure></li>)}</ul></div>,
      },
      ...eventCases.map(event => ({
        id: event === wedding ? "casamiento" : event.id, worlds: ["experiencias"], eyebrow: `Experiencias · ${event.date}`, title: event.title, headline: event.headline,
        body: <><p>{event.intro}</p><dl className={styles.scope}>{event.scope.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}</dl><p className={styles.quote}>{event.quote} Nosotros nos encargamos de todo.</p></>,
        link: { href: "/servicios#experiencias", label: "Explorar Experiencias" },
        media: <ul className={event === xv ? styles.grid2 : styles.masonry}>{event.images.map(image => <li key={image.src}><figure>{pic(image, "(max-width: 760px) 46vw, 14vw")}</figure></li>)}</ul>,
      })),
    ],
    digital: [
      {
        id: "sitios-web", worlds: ["digital"], eyebrow: "Desarrollo web", title: "Más sitios", headline: "Cada uno con su voz.",
        body: <><p>El sitio de una firma de abogados, desarrollado por Space sobre la identidad que la firma ya tenía, y Comparo360, una web de comparativas de software para pequeñas empresas.</p><p className={styles.note}>{developerWork.name}: {developerWork.credit}. Capturas reales del {developerWork.captured.split("-").reverse().join("/")}.</p></>,
        link: { href: "/servicios#digital", label: "Explorar Digital" },
        media: <div className={styles.stack}>
          <figure id={digitalWork[1].id} className={styles.panel}>{pic(digitalWork[1], "(max-width: 760px) 92vw, 40vw")}<figcaption><strong>{digitalWork[1].name}</strong> · {digitalWork[1].scope}</figcaption></figure>
          <figure id={developerWork.id} className={styles.panel}><div className={styles.shots}>{developerWork.images.map(image => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={image.view === "móvil" ? "(max-width: 760px) 24vw, 9vw" : "(max-width: 760px) 66vw, 30vw"} />)}</div><figcaption><strong>{developerWork.name}</strong> · {developerWork.summary}</figcaption></figure>
        </div>,
      },
    ],
  };

  const featured = [
    { id: "heroes-de-panama", title: heroes.client, headline: heroes.title, worlds: ["comunicacion", "experiencias"], image: heroes.images[0] },
    { id: "fenix-refrigeracion", title: "Fénix Refrigeración", headline: "Del logo a la web.", worlds: ["marca", "digital"], image: digitalWork[0] },
    { id: "emc-panama", title: emc.client, headline: emc.title, worlds: ["comunicacion"], image: emc.images[0] },
  ];
  const groups = serviceGroups.map(group => ({ id: group.id, title: group.title, intro: group.intro }));

  return (
    <main className={pages.page} id="main-content" aria-labelledby="page-title">
      <PageHero eyebrow="Trabajo seleccionado" title={<>Distintas marcas.<br /><em>Una mirada Space.</em></>}
        description="Identidad, comunicación, experiencias y sitios web. Una selección del trabajo realizado por Space, ordenada por mundos."
        visual={<WorkHeroVisual />}>
        <WorkFilter worlds={groups} />
      </PageHero>

      <div className={styles.board} data-work-board>
        <section className={styles.featured} id="trabajo-destacado" aria-labelledby="featured-title" data-work-featured>
          <h2 id="featured-title" className={styles.groupTitle}>Destacados</h2>
          <ul>
            {featured.map(item => <li key={item.id}><a href={`#${item.id}`}>
              <span className={styles.featuredMedia}><Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} sizes="(max-width: 760px) 92vw, 30vw" /></span>
              <Worlds worlds={item.worlds} />
              <strong>{item.title}</strong><em>{item.headline}</em>
            </a></li>)}
          </ul>
        </section>

        {groups.map((group, index) => (
          <section className={`${styles.group} ${index % 2 ? styles.tint : ""}`} id={`grupo-${group.id}`} aria-labelledby={`grupo-${group.id}-title`} key={group.id} data-work-group>
            <header className={styles.groupHeader}>
              <p className={styles.groupTag}><i aria-hidden="true" />Mundo</p>
              <h2 id={`grupo-${group.id}-title`} className={styles.groupTitle}>{group.title}</h2>
              <p>{group.intro}</p>
            </header>
            {cases[group.id].map(item => (
              <article className={styles.case} id={item.id} key={item.id} aria-labelledby={`${item.id}-title`} data-work-case data-worlds={item.worlds.join(" ")}>
                <div className={styles.copy}>
                  <Worlds worlds={item.worlds} />
                  <p className={styles.eyebrow}>{item.eyebrow}</p>
                  <h3 id={`${item.id}-title`}>{item.title}<br /><em>{item.headline}</em></h3>
                  {item.body}
                  <Link className={pages.inlineLink} href={item.link.href}>{item.link.label}</Link>
                </div>
                <div className={styles.media}>{item.media}</div>
              </article>
            ))}
          </section>
        ))}
      </div>

      <SiteContactCallout title="¿Qué quieres hacer crecer?" description="Conversemos sobre tu marca, el proyecto y lo que necesitas comunicar." />
    </main>
  );
}
