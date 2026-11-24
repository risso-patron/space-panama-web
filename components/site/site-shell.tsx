import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/space/logo.png";
import { SiteNavigation } from "./site-navigation";
import { contact, navigation } from "@/lib/public-site";
import styles from "./site-shell.module.css";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.root}>
      <a className={styles.skipLink} href="#main-content">Saltar al contenido</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="Space Panamá, inicio">
            <Image src={logo} alt="Space Panamá" preload sizes="(max-width: 700px) 116px, 148px" />
          </Link>
          <SiteNavigation />
          <Link className={styles.headerCta} href="/contacto">Hablemos</Link>
        </div>
      </header>

      {children}

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerIntro}>
            <Link className={styles.footerLogo} href="/" aria-label="Space Panamá, inicio"><Image src={logo} alt="Space Panamá" sizes="160px" /></Link>
            <p className={styles.footerDescription}>Agencia creativa de marketing digital y organización de eventos, desde Ciudad de Panamá.</p>
          </div>
          <nav className={styles.footerNav} aria-label="Navegación del pie de página">
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <div className={styles.footerContact}>
            <p className={styles.footerLabel}>Contacto</p>
            <a href={contact.emailHref}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.whatsappHref}>WhatsApp</a>
            <a href={contact.instagramHref} rel="me noopener">Instagram · {contact.instagram}</a>
          </div>
          <div className={styles.footerBottom}>
            <span>Space Panamá · Ciudad de Panamá</span>
            <Link href="/contacto">Conversemos sobre tu proyecto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
