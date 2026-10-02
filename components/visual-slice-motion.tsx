"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VisualSliceMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from(".motion-headline", { yPercent: 18, opacity: 0, duration: 1.15, ease: "power3.out" });
      gsap.from(".hero__atmosphere", { scale: 0.88, yPercent: 8, duration: 1.8, ease: "power2.out" });
      gsap.to(".hero__atmosphere", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ".scene--hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      const manifesto = document.querySelector<HTMLElement>(".scene--manifesto");
      const steps = gsap.utils.toArray<HTMLElement>(".manifesto-step");
      const progress = document.querySelector<HTMLElement>(".manifesto__progress-fill");
      const progressLabel = document.querySelector<HTMLElement>(".manifesto__progress-label");
      const progressBar = document.querySelector<HTMLElement>(".manifesto__progress");
      if (manifesto && steps.length && window.matchMedia("(min-width: 1101px)").matches) {
        manifesto.classList.add("is-pinned");
        gsap.set(steps, { autoAlpha: 0, y: 28 });
        gsap.set(steps[0], { autoAlpha: 1, y: 0 });
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: manifesto, start: "top top", end: () => `+=${window.innerHeight * steps.length}`,
            pin: ".manifesto__stage", scrub: 0.65, invalidateOnRefresh: true,
          },
        });
        steps.forEach((step, index) => {
          if (index > 0) timeline.to(steps[index - 1], { autoAlpha: 0, y: -24, duration: 0.35 }, index - 0.35);
          if (index > 0) timeline.fromTo(step, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.45 }, index);
          timeline.call(() => {
            const current = String(index + 1).padStart(2, "0");
            if (progressLabel) progressLabel.textContent = `${current} — ${String(steps.length).padStart(2, "0")}`;
            progressBar?.setAttribute("aria-valuenow", String(index + 1));
          }, [], index);
        });
        if (progress) timeline.to(progress, { scaleX: 1, duration: steps.length }, 0);
      }

      const workScene = document.querySelector<HTMLElement>(".scene--work");
      const workMedia = document.querySelector<HTMLElement>(".work-story__main");
      if (workScene && workMedia && window.matchMedia("(min-width: 1101px)").matches) {
        gsap.fromTo(workMedia, { clipPath: "inset(16% 18% 16% 18% round 1.5rem)", scale: 0.84 }, {
          clipPath: "inset(0% 0% 0% 0% round 1.5rem)", scale: 1,
          scrollTrigger: { trigger: workScene, start: "top 68%", end: "center center", scrub: 0.7 },
        });
        gsap.fromTo(".work-story__layer--one", { xPercent: 32, yPercent: 20, autoAlpha: 0 }, {
          xPercent: 0, yPercent: 0, autoAlpha: 1,
          scrollTrigger: { trigger: workMedia, start: "top 45%", end: "center center", scrub: 0.8 },
        });
        gsap.fromTo(".work-story__layer--two", { xPercent: -28, yPercent: -18, autoAlpha: 0 }, {
          xPercent: 0, yPercent: 0, autoAlpha: 1,
          scrollTrigger: { trigger: workMedia, start: "center 52%", end: "bottom 35%", scrub: 0.8 },
        });
      }
    });
    return () => {
      context.revert();
      document.querySelector(".scene--manifesto")?.classList.remove("is-pinned");
    };
  }, []);
  return null;
}