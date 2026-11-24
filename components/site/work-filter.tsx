"use client";

import { useState, type MouseEvent } from "react";
import styles from "./work-page.module.css";

type World = { id: string; title: string };

// Filters the cases on /trabajo by world. Each chip is also a link to its group, so without JavaScript
// (or for search engines) every case stays visible and reachable.
export function WorkFilter({ worlds }: Readonly<{ worlds: readonly World[] }>) {
  const [active, setActive] = useState("todos");

  function choose(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setActive(id);
    const board = document.querySelector<HTMLElement>("[data-work-board]");
    if (!board) return;
    board.querySelectorAll<HTMLElement>("[data-work-case]").forEach(node => {
      node.hidden = id !== "todos" && !(node.dataset.worlds ?? "").split(" ").includes(id);
    });
    board.querySelectorAll<HTMLElement>("[data-work-group]").forEach(group => {
      group.hidden = id !== "todos" && !group.querySelector("[data-work-case]:not([hidden])");
    });
    const featured = board.querySelector<HTMLElement>("[data-work-featured]");
    if (featured) featured.hidden = id !== "todos";
    board.scrollIntoView({ block: "start" });
  }

  return (
    <nav className={styles.filter} aria-label="Filtrar el trabajo por mundo">
      <ul>
        <li><a href="#trabajo-destacado" aria-current={active === "todos" ? "true" : undefined} onClick={event => choose(event, "todos")}><i aria-hidden="true" />Todos</a></li>
        {worlds.map(world => <li key={world.id}><a href={`#grupo-${world.id}`} aria-current={active === world.id ? "true" : undefined} onClick={event => choose(event, world.id)}><i aria-hidden="true" />{world.title}</a></li>)}
      </ul>
      <p className={styles.filterStatus} aria-live="polite">{active === "todos" ? "Mostrando todo el trabajo." : `Mostrando el trabajo de ${worlds.find(world => world.id === active)?.title}.`}</p>
    </nav>
  );
}
