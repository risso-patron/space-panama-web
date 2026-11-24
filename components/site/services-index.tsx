"use client";

import { useEffect, useState } from "react";
import styles from "./services-page.module.css";

type Item = { id: string; title: string };

// Sticky chapter index: the world being read lights up. Links work without JavaScript; the highlight is an enhancement.
export function ServicesIndex({ items }: Readonly<{ items: readonly Item[] }>) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    let frame = 0;
    // The active chapter is the last one whose top has passed 40% of the viewport.
    const update = () => {
      frame = 0;
      let current: string | null = null;
      for (const item of items) {
        const node = document.getElementById(item.id);
        if (node && node.getBoundingClientRect().top <= window.innerHeight * .4) current = item.id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [items]);

  return (
    <nav className={styles.index} aria-label="Mundos de servicio">
      <ol>
        {items.map(item => <li key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}><i aria-hidden="true" />{item.title}</a></li>)}
      </ol>
    </nav>
  );
}
