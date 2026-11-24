import type { Metadata } from "next";
import { contact } from "@/lib/public-site";
import { SitePage } from "@/components/site/site-page";
import { ContactHeroVisual } from "@/components/site/hero-visuals";
import { createSitePageMetadata } from "@/lib/page-metadata";
import styles from "@/components/site/site-pages.module.css";

export const metadata: Metadata = createSitePageMetadata({
  title: "Contacto",
  description: "Contacta a Space Panamá por correo, teléfono o WhatsApp en Ciudad de Panamá.",
  canonical: "/contacto",
});

const contactMethods = [
  {
    label: "Correo electrónico",
    value: contact.email,
    href: contact.emailHref,
  },
  {
    label: "Teléfono",
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    label: "WhatsApp",
    value: "Escribir por WhatsApp",
    href: contact.whatsappHref,
  },
  {
    label: "Instagram",
    value: contact.instagram,
    href: contact.instagramHref,
  },
];

export default function ContactPage() {
  return (
    <SitePage
      visual={<ContactHeroVisual />}
      eyebrow="Contacto"
      title={<>Hablemos de <em>tu proyecto.</em></>}
      description="Contacta a Space Panamá por correo, teléfono, WhatsApp o Instagram."
    >
      <div className={styles.content}>
        <section className={styles.contactLayout} aria-labelledby="contact-methods-title">
          <div className={styles.contactIntro}>
            <p className={styles.eyebrow}>Conversemos</p>
            <h2 id="contact-methods-title">Un primer mensaje puede abrir una idea.</h2>
            <p>Estamos en Ciudad de Panamá. Cuéntanos sobre tu marca, qué necesitas y qué tienes en mente.</p>
          </div>
          <div className={styles.contactCards}>
            {contactMethods.map((method) => (
              <a className={styles.contactCard} href={method.href} key={method.label}>
                <span className={styles.contactCardLabel}><i aria-hidden="true" />{method.label}</span>
                <span className={styles.contactCardValue}>{method.value}</span>
              </a>
            ))}
            <p className={styles.contactLocation}>Ciudad de Panamá.</p>
          </div>
        </section>
      </div>
    </SitePage>
  );
}
