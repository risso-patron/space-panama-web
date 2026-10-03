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
      const handoffStart = desktop ? 0.73 : tablet ? 0.68 : 0.62;
      const setTransition = (progress: number) => {
        const handoff = Math.max(0, Math.min(1, (progress - handoffStart) / (1 - handoffStart)));
        const panama = Math.max(0, Math.min(1, (progress - 0.38) / 0.17)) * (1 - handoff);
        root.style.setProperty("--earth-progress", String(progress));
        root.style.setProperty("--earth-panama", String(panama));
        root.style.setProperty("--earth-handoff", String(handoff));
        root.style.setProperty("--earth-copy", String(1 - Math.max(0, Math.min(1, (progress - (handoffStart - 0.08)) / 0.28))));
        root.style.setProperty("--earth-bridge-y", `${(1 - handoff) * 18}px`);
        updateBridgeOpacity();
        window.dispatchEvent(new CustomEvent("earth-hero-progress", { detail: { progress } }));
      };
      const updateBridgeOpacity = () => {
        const handoff = Number(root.style.getPropertyValue("--earth-handoff")) || 0;
        const entered = Number(root.style.getPropertyValue("--earth-manifest-entry")) || 0;
        root.style.setProperty("--earth-bridge-opacity", String(handoff * (1 - entered)));
      };
      root.classList.add("earth-hero--motion-ready");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section, start: "top top", end: () => `+=${window.innerHeight * distance / 100}`,
          pin: section, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: (self) => setTransition(self.progress),
          onRefresh: (self) => setTransition(self.progress),
        },
      });
      timeline.to({}, { duration: 0.2 });
      timeline.to({}, { duration: 0.25 });
      timeline.to({}, { duration: 0.25 });
      timeline.to({}, { duration: 0.2 });
      const firstStep = manifesto.querySelector<HTMLElement>(".manifesto-step");
      const entry = ScrollTrigger.create({
        trigger: manifesto, start: "top bottom", end: "top 55%", scrub: true, invalidateOnRefresh: true,
        onUpdate: (self) => {
          root.style.setProperty("--earth-manifest-entry", String(self.progress));
          if (firstStep) {
            firstStep.style.opacity = String(self.progress);
            firstStep.style.visibility = self.progress > 0.001 ? "visible" : "hidden";
          }
          updateBridgeOpacity();
        },
        onRefresh: (self) => {
          root.style.setProperty("--earth-manifest-entry", String(self.progress));
          if (firstStep) {
            firstStep.style.opacity = String(self.progress);
            firstStep.style.visibility = self.progress > 0.001 ? "visible" : "hidden";
          }
          updateBridgeOpacity();
        },
      });
      requestAnimationFrame(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); });
      return () => {
        entry.kill();
        if (firstStep) { firstStep.style.removeProperty("opacity"); firstStep.style.removeProperty("visibility"); }
        root.classList.remove("earth-hero--motion-ready");
        root.style.removeProperty("--earth-progress");
        root.style.removeProperty("--earth-panama");
        root.style.removeProperty("--earth-handoff");
        root.style.removeProperty("--earth-copy");
        root.style.removeProperty("--earth-bridge-y");
        root.style.removeProperty("--earth-manifest-entry");
        root.style.removeProperty("--earth-bridge-opacity");
      };
    });
    return () => media.revert();
  }, [active]);
  return null;
}
