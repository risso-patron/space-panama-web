"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, type MouseEvent } from "react";
import { navigation } from "@/lib/public-site";
import styles from "./site-shell.module.css";

function NavigationLinks({ onNavigate }: { onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  const pathname = usePathname();

  return navigation.map(({ href, label }) => (
    <Link
      className={styles.navLink}
      href={href}
      key={href}
      aria-current={pathname === href ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  ));
}

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function SiteNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <div className={styles.navigation}>
      <nav className={styles.desktopNav} aria-label="Navegación principal">
        <NavigationLinks />
      </nav>
      <details ref={menu} className={styles.mobileMenu} onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}>
        <summary>
          <span>Menú</span>
          <span className={styles.menuGlyph} aria-hidden="true">+</span>
        </summary>
        <nav className={styles.mobileNav} aria-label="Navegación principal móvil">
          <NavigationLinks onNavigate={closeMobileMenu} />
        </nav>
      </details>
    </div>
  );
}
