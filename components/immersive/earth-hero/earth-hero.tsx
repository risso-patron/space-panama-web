"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SiteContent } from "@/lib/space-content";
import { EARTH_TEXTURE } from "./earth-config";
import { EarthMotion } from "./earth-motion";
import styles from "./earth-hero.module.css";

export function EarthHero({ hero }: { hero: SiteContent["hero"] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<import("./earth-scene").EarthSceneHandle | null>(null);
  const [ready, setReady] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [status, setStatus] = useState<"static" | "loading" | "ready" | "failed">("static");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let mountedScene: typeof sceneRef.current = null;
    const teardown = () => {
      mountedScene?.dispose(); mountedScene = null; sceneRef.current = null;
      setReady(false); setMotionAllowed(false);
    };
    const setup = async () => {
      teardown();
      if (preference.matches || !canvasRef.current) { setStatus("static"); return; }
      setStatus("loading");
      try {
        const [{ createEarthScene }, gsapModule, scrollModule] = await Promise.all([
          import("./earth-scene"), import("gsap"), import("gsap/ScrollTrigger"),
        ]);
        if (cancelled || preference.matches || !canvasRef.current) return;
        const scene = await createEarthScene(canvasRef.current, () => {});
        if (cancelled || preference.matches) { scene.dispose(); return; }
        mountedScene = scene; sceneRef.current = scene;
        gsapModule.default.registerPlugin(scrollModule.ScrollTrigger);
        setStatus("ready"); setReady(true); setMotionAllowed(true);
      } catch {
        if (!cancelled) { teardown(); setStatus("failed"); }
      }
    };
    const change = () => { if (preference.matches) { teardown(); setStatus("static"); } else void setup(); };
    void setup();
    preference.addEventListener("change", change);
    return () => { cancelled = true; preference.removeEventListener("change", change); teardown(); };
  }, []);

  const descriptionId = "earth-hero-description";
  return <div className={styles.root} data-earth-hero data-render-state={status}>
    <EarthMotion active={motionAllowed && ready} />
    <section className={`scene scene--hero motion-scope ${styles.scene}`} aria-labelledby="hero-title" aria-describedby={`${descriptionId} earth-hero-scene-description`}>
      <div className={`scene__rail ${styles.rail}`} aria-hidden="true"><span>01</span><span>Space Panamá</span></div>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.staticGlobe} style={{ backgroundImage: `linear-gradient(145deg,rgba(105,146,183,.32),rgba(3,8,14,.62)),url("${EARTH_TEXTURE}")` }} />
        <div className={styles.halo} />
        <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
        <span className={styles.panama}>PANAMÁ</span>
      </div>
      <div className={`hero__content ${styles.content}`}>
        <div className="hero__brand"><Image src="/assets/space/logo.png" alt="Space Panamá" width={260} height={134} priority /></div>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title" className="motion-headline">Creamos experiencias que hacen crecer marcas.</h1>
        <p id={descriptionId} className="hero__deck">{hero.deck}</p>
        <p id="earth-hero-scene-description" className={styles.hiddenDescription}>Una esfera terrestre se orienta hacia Panamá y se disuelve en una atmósfera abstracta de Space al avanzar por la página.</p>
        <a className={styles.skip} href="#manifiesto" data-earth-skip>Saltar introducción <span aria-hidden="true">↘</span></a>
      </div>
      <p className={styles.scrollHint} aria-hidden="true"><span />Desliza para descubrir</p>
      <div className="hero__atmosphere" aria-hidden="true" />
    </section>
  </div>;
}
