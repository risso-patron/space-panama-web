"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./manifesto-path.module.css";

// «Dos líneas, un rumbo»: Estrategia (straight, brand blue) and Creatividad (free curve, cream) leave the same Brief,
// cross at Experiencias, merge at Digital and rise together to Crecimiento.
// The full drawing is the default (SSR, no JS, reduced motion). With motion allowed, and only if the section is still
// below the fold when the page hydrates, the lines draw once (< 3 s) when it enters the viewport. No scroll scrubbing.
type Stage = "static" | "armed" | "play";

export function ManifestoPath({ children }: Readonly<{ children: React.ReactNode }>) {
  const root = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("static");

  useEffect(() => {
    const element = root.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * .9) return; // Already visible: never hide content.
    // Arm only after hydration, while the drawing is still off screen.
    setStage("armed");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setStage("play");
      observer.disconnect();
    }, { threshold: .3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className={styles.path} data-manifesto-path data-stage={stage}>
      <svg className={styles.drawing} viewBox="0 0 1200 340" aria-hidden="true" focusable="false">
        {/* Depth (same treatment as the Hero): a shaded plane, ground shadows under the lines, lit gradients and spherical stations. */}
        <defs>
          <radialGradient id="mp-plane" cx="50%" cy="50%" r="50%"><stop stopColor="#3b598d" stopOpacity=".13" /><stop offset=".7" stopColor="#3b598d" stopOpacity=".04" /><stop offset="1" stopColor="#3b598d" stopOpacity="0" /></radialGradient>
          <linearGradient id="mp-strategy" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#29436f" /><stop offset=".6" stopColor="#3b598d" /><stop offset="1" stopColor="#6f8fc4" /></linearGradient>
          <linearGradient id="mp-creativity" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#b9c9e6" /><stop offset="1" stopColor="#7f9bcf" /></linearGradient>
          <radialGradient id="mp-gold" cx="35%" cy="30%" r="70%"><stop stopColor="#fff3d6" /><stop offset=".45" stopColor="#e0bf8b" /><stop offset="1" stopColor="#9c7a45" /></radialGradient>
          <radialGradient id="mp-blue" cx="35%" cy="30%" r="70%"><stop stopColor="#c9d9f2" /><stop offset=".45" stopColor="#3b598d" /><stop offset="1" stopColor="#1b2a46" /></radialGradient>
          <radialGradient id="mp-grey" cx="35%" cy="30%" r="70%"><stop stopColor="#ffffff" /><stop offset=".5" stopColor="#8a9ab3" /><stop offset="1" stopColor="#4f5e75" /></radialGradient>
          <filter id="mp-soft" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>
        <ellipse cx="600" cy="230" rx="600" ry="110" fill="url(#mp-plane)" />
        <g className={styles.shadow} filter="url(#mp-soft)">
          <path d="M30 268 L1170 68" />
          <path d="M30 268 C150 268 240 323 360 323 C470 323 540 218 600 168 C650 126 690 58 745 63 C795 68 815 118 840 125.9" />
        </g>
        <path data-line="estrategia" className={styles.strategy} d="M30 250 L1170 50" pathLength={1} />
        <path data-line="creatividad" className={styles.creativity} d="M30 250 C150 250 240 305 360 305 C470 305 540 200 600 150 C650 108 690 40 745 45 C795 50 815 100 840 107.9" pathLength={1} />
        <g className={styles.stations}>
          <g className={styles.stationShadows} filter="url(#mp-soft)"><circle cx="30" cy="266" r="7" /><circle cx="120" cy="250" r="6" /><circle cx="360" cy="321" r="6" /><circle cx="600" cy="168" r="9" /><circle cx="840" cy="126" r="9" /><circle cx="1080" cy="86" r="13" /></g>
          <circle className={styles.brief} cx="30" cy="250" r="8" />
          <circle cx="120" cy="234.2" r="7" />
          <circle cx="360" cy="305" r="7" />
          <circle className={styles.cross} cx="600" cy="150" r="10" />
          <circle className={styles.cross} cx="840" cy="107.9" r="10" />
          <circle className={styles.growthHalo} cx="1080" cy="65.8" r="24" />
          <circle className={styles.growth} cx="1080" cy="65.8" r="14" />
        </g>
        <text className={styles.briefLabel} x="30" y="282">Brief</text>
      </svg>
      {/* Mobile: the same idea, vertical. Estrategia is the straight rule, Creatividad the free curve beside it. */}
      <svg className={styles.drawingVertical} viewBox="0 0 48 500" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path className={styles.strategy} d="M18 0 L18 500" pathLength={1} />
        <path className={styles.creativity} d="M18 0 C18 40 44 70 44 110 C44 160 4 190 18 250 C26 290 40 320 18 375" pathLength={1} />
      </svg>
      {children}
    </div>
  );
}
