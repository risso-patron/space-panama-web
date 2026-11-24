import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team, teamPhoto } from "@/lib/public-site";
import { createSitePageMetadata } from "@/lib/page-metadata";
import { SitePage } from "@/components/site/site-page";
import { AboutHeroVisual } from "@/components/site/hero-visuals";
import styles from "@/components/site/site-pages.module.css";

export const metadata: Metadata = createSitePageMetadata({
  title: "Nosotros",
  description: "Conoce a Space Panamá, agencia creativa de marketing digital para pymes, emprendimientos y marcas, desde Ciudad de Panamá.",
  canonical: "/nosotros",
});

export default function AboutPage() {
  return (
    <SitePage
      visual={<AboutHeroVisual />}
      eyebrow="Nosotros"
      title={<>Una agencia creativa <em>desde Panamá.</em></>}
      description="Space es una agencia creativa de marketing digital con un profundo amor por las personas, los lugares, la cultura y la tecnología."
    >
      <div className={styles.content}>
        <section className={styles.aboutIntro} aria-label="Space Panamá">
          <p>
            Desde Ciudad de Panamá, reunimos estrategia y dirección, contenido, identidad visual, diseño web y organización de eventos.
          </p>
        </section>

        <section className={styles.aboutStatement} aria-labelledby="about-statement-title">
          <p className={styles.eyebrow}>Una mirada Space</p>
          <h2 id="about-statement-title">Creatividad con lugar para <em>las personas.</em></h2>
          <p>
            Partimos de lo que la marca necesita comunicar y de las personas a las que se dirige. Definimos una dirección y elegimos los formatos adecuados: identidad, contenido, web o eventos.
          </p>
        </section>

        {team.length > 0 && <section className={styles.teamSection} aria-labelledby="team-title">
          <p className={styles.eyebrow}>Equipo</p>
          <h2 className={styles.aboutAudienceTitle} id="team-title">Las personas <em>detrás de Space.</em></h2>
          {teamPhoto && <figure className={styles.teamPhoto}><Image src={teamPhoto.src} alt={teamPhoto.alt} width={teamPhoto.width} height={teamPhoto.height} sizes="(max-width: 760px) 92vw, 85vw" /></figure>}
          <ul className={styles.teamGrid}>
            {team.map(member => <li key={member.name}>
              <Image src={member.photo.src} alt={member.photo.alt} width={member.photo.width} height={member.photo.height} sizes="(max-width: 760px) 44vw, 22vw" />
              <h3>{member.name}</h3><p className={styles.teamRole}>{member.role}</p><p>{member.bio}</p>
            </li>)}
          </ul>
        </section>}

        <section className={styles.aboutIntro} aria-labelledby="about-audience-title">
          <p className={styles.eyebrow}>Con quién trabajamos</p>
          <h2 className={styles.aboutAudienceTitle} id="about-audience-title">Pymes, emprendimientos y marcas.</h2>
          <Link className={styles.calloutLink} href="/servicios">Conocer los servicios</Link>
        </section>
      </div>
    </SitePage>
  );
}
