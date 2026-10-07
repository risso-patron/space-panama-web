"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EARTH_SCROLL } from "./earth-config";

export function EarthMotion({ active }: { active: boolean }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-earth-hero]");
    const skip = root?.querySelector<HTMLAnchorElement>("[data-earth-skip]");
    const manifesto = document.querySelector<HTMLElement>("#manifiesto");
    if (!skip || !manifesto) return;
    const skipToManifesto = (event: MouseEvent) => {
      event.preventDefault();
      const y = manifesto.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "auto" });
      window.setTimeout(() => manifesto.focus({ preventScroll: true }), 50);
    };
    skip.addEventListener("click", skipToManifesto);
    return () => skip.removeEventListener("click", skipToManifesto);
  }, []);

  useEffect(() => {
    if (!active) return;
    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector<HTMLElement>("[data-earth-hero]");
    const section = root?.querySelector<HTMLElement>(".scene--hero");
    const manifesto = document.querySelector<HTMLElement>("#manifiesto");
    if (!root || !section || !manifesto) return;
    const media = gsap.matchMedia();
    media.add({ desktop: "(min-width: 1101px)", tablet: "(min-width: 701px) and (max-width: 1100px)", mobile: "(max-width: 700px)", motion: "(prefers-reduced-motion: no-preference)" }, ({ conditions }) => {
      const { desktop, tablet, motion } = conditions as { desktop: boolean; tablet: boolean; mobile: boolean; motion: boolean };
      if (!motion) return;
      const distance = desktop ? EARTH_SCROLL.desktop : tablet ? EARTH_SCROLL.tablet : EARTH_SCROLL.mobile;
      const releaseBuffer = desktop ? 20 : tablet ? 14 : 8;
      const copyExit = desktop ? [0.74, 0.84] : tablet ? [0.66, 0.76] : [0.6, 0.71];
      const handoffStart = desktop ? 0.82 : tablet ? 0.75 : 0.68;
      const cloudRange = desktop ? [0.76, 0.92] : tablet ? [0.7, 0.88] : [0.62, 0.82];
      const reveal = (value: number, range: number[]) => {
        const linear = gsap.utils.clamp(0, 1, (value - range[0]) / (range[1] - range[0]));
        return linear * linear * (3 - 2 * linear);
      };
      const setTransition = (progress: number) => {
        const handoff = reveal(progress, [handoffStart, 1]);
        root.style.setProperty("--earth-progress", String(progress));
        root.style.setProperty("--earth-handoff", String(handoff));
        root.style.setProperty("--earth-globe-opacity", String(0.82 * (1 - handoff)));
        root.style.setProperty("--earth-copy", String(1 - reveal(progress, copyExit)));
        const cloudCover = reveal(progress, cloudRange);
        root.style.setProperty("--earth-cloud-opacity", String(cloudCover * (1 - reveal(progress, [0.92, 1]))));
        root.style.setProperty("--earth-cloud-back-x", `${(progress - 0.5) * -9}vw`);
        root.style.setProperty("--earth-cloud-mid-x", `${(progress - 0.5) * 13}vw`);
        root.style.setProperty("--earth-cloud-front-x", `${(progress - 0.5) * -17}vw`);
        window.dispatchEvent(new CustomEvent("earth-hero-progress", { detail: { progress } }));
      };
      root.classList.add("earth-hero--motion-ready");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section, start: "top top", end: () => `+=${window.innerHeight * (distance + releaseBuffer) / 100}`,
          pin: section, scrub: 0.4, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: (self) => setTransition(self.progress),
          onRefresh: (self) => setTransition(self.progress),
        },
      });
      timeline.to({}, { duration: 0.2 });
      timeline.to({}, { duration: 0.25 });
      timeline.to({}, { duration: 0.25 });
      timeline.to({}, { duration: 0.2 });
      requestAnimationFrame(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });
      return () => {
        root.classList.remove("earth-hero--motion-ready");
        root.style.removeProperty("--earth-progress");
        root.style.removeProperty("--earth-handoff");
        root.style.removeProperty("--earth-globe-opacity");
        root.style.removeProperty("--earth-copy");
        root.style.removeProperty("--earth-cloud-opacity");
        root.style.removeProperty("--earth-cloud-back-x");
        root.style.removeProperty("--earth-cloud-mid-x");
        root.style.removeProperty("--earth-cloud-front-x");
      };
    });
    return () => media.revert();
  }, [active]);
  return null;
}
