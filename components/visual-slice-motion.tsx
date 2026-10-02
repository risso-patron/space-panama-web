"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VisualSliceMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia();

    motion.add(
      {
        desktop: "(min-width: 1101px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) return;

        gsap.from(".motion-headline", {
          yPercent: 12,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(".hero__atmosphere", {
          scale: 0.92,
          yPercent: 5,
          duration: 1.5,
          ease: "power2.out",
        });

        if (!desktop) return;

        gsap.to(".hero__atmosphere", {
          yPercent: 9,
          ease: "none",
          scrollTrigger: {
            trigger: ".scene--hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        const manifesto = document.querySelector<HTMLElement>(".scene--manifesto");
        const steps = gsap.utils.toArray<HTMLElement>(".manifesto-step");
        const progress = document.querySelector<HTMLElement>(".manifesto__progress-fill");
        const progressLabel = document.querySelector<HTMLElement>(".manifesto__progress-label");
        const progressBar = document.querySelector<HTMLElement>(".manifesto__progress");

        if (manifesto && steps.length) {
          manifesto.classList.add("is-pinned");
          gsap.set(steps, { autoAlpha: 0, y: 20 });
          gsap.set(steps[0], { autoAlpha: 1, y: 0 });
          steps.forEach((step, index) => step.setAttribute("aria-hidden", String(index !== 0)));
          progressBar?.setAttribute("aria-valuenow", "1");
          if (progressLabel) {
            progressLabel.textContent = `01 — ${String(steps.length).padStart(2, "0")}`;
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: manifesto,
              start: "top top",
              end: () => `+=${window.innerHeight * (steps.length - 1)}`,
              pin: ".manifesto__stage",
              scrub: 0.65,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const activeIndex = Math.round(self.progress * (steps.length - 1));
                steps.forEach((step, index) => {
                  step.setAttribute("aria-hidden", String(index !== activeIndex));
                });
                const current = String(activeIndex + 1).padStart(2, "0");
                if (progressLabel) {
                  progressLabel.textContent = `${current} — ${String(steps.length).padStart(2, "0")}`;
                }
                progressBar?.setAttribute("aria-valuenow", String(activeIndex + 1));
              },
            },
          });

          steps.forEach((step, index) => {
            if (index === 0) return;
            const at = index;
            timeline.to(steps[index - 1], { autoAlpha: 0, y: -16, duration: 0.28 }, at - 0.28);
            timeline.fromTo(
              step,
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 0.28 },
              at,
            );
          });
          if (progress) timeline.to(progress, { scaleX: 1, duration: steps.length - 1 }, 0);

          requestAnimationFrame(() => ScrollTrigger.refresh());
          return () => manifesto.classList.remove("is-pinned");
        }
      },
    );

    motion.add("(min-width: 1101px) and (prefers-reduced-motion: no-preference)", () => {
      const workScene = document.querySelector<HTMLElement>(".scene--work");
      const workMedia = document.querySelector<HTMLElement>(".work-story__main");
      if (!workScene || !workMedia) return;

      gsap.fromTo(
        workMedia,
        { clipPath: "inset(12% 14% 12% 14% round 1.25rem)", scale: 0.9 },
        {
          clipPath: "inset(0% 0% 0% 0% round 1.25rem)",
          scale: 1,
          scrollTrigger: {
            trigger: workScene,
            start: "top 72%",
            end: "center center",
            scrub: 0.7,
          },
        },
      );
      gsap.fromTo(
        ".work-story__layer--one",
        { xPercent: 24, yPercent: 14, autoAlpha: 0 },
        {
          xPercent: 0,
          yPercent: 0,
          autoAlpha: 1,
          scrollTrigger: { trigger: workMedia, start: "top 48%", end: "center center", scrub: 0.8 },
        },
      );
      gsap.fromTo(
        ".work-story__layer--two",
        { xPercent: -20, yPercent: -12, autoAlpha: 0 },
        {
          xPercent: 0,
          yPercent: 0,
          autoAlpha: 1,
          scrollTrigger: { trigger: workMedia, start: "center 55%", end: "bottom 38%", scrub: 0.8 },
        },
      );
    });

    return () => motion.revert();
  }, []);

  return null;
}
