"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupSceneContinuity } from "@/components/motion/scene-continuity";

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

        setupSceneContinuity(desktop);

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

        const brandScenes = gsap.utils.toArray<HTMLElement>(".brand-work");
        brandScenes.forEach((scene) => {
          const intro = scene.querySelector<HTMLElement>(".brand-work__intro");

          if (intro) {
            gsap.fromTo(
              intro,
              { autoAlpha: 0.55, y: 20 },
              {
                autoAlpha: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: intro,
                  start: desktop ? "top 82%" : "top 90%",
                  end: desktop ? "top 46%" : "top 56%",
                  scrub: 0.55,
                },
              },
            );
          }

          const isSissy = scene.classList.contains("brand-work--sissy");
          if (isSissy) {
            const visuals = scene.querySelector<HTMLElement>(".brand-work__visuals--sissy");
            const video = scene.querySelector<HTMLElement>(".brand-work__video-card");
            const campaign = scene.querySelector<HTMLElement>(".brand-work__image-card--sissy");
            if (visuals && video && campaign) {
              const sequence = gsap.timeline({
                scrollTrigger: {
                  trigger: visuals,
                  start: desktop ? "top 88%" : "top 92%",
                  end: desktop ? "bottom 12%" : "bottom 18%",
                  scrub: desktop ? 1 : 0.7,
                  invalidateOnRefresh: true,
                },
              });
              sequence.fromTo(video,
                { autoAlpha: 0.15, x: desktop ? -96 : -28, y: desktop ? 42 : 20, scale: 0.91, clipPath: "inset(12% 0 18% 0 round 1rem)" },
                { autoAlpha: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 1.2, ease: "none" },
              );
              sequence.fromTo(campaign,
                { autoAlpha: 0, x: desktop ? 110 : 32, y: desktop ? 34 : 18, scale: 0.94, clipPath: "inset(0 0 0 42% round 1rem)" },
                { autoAlpha: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 1, ease: "none" },
                "+=0.28",
              );
              sequence.to(video, { y: desktop ? -32 : -14, scale: 0.96, autoAlpha: 0.72, duration: 0.65, ease: "none" }, "-=0.2");
            }
            return;
          }

          const identity = scene.querySelector<HTMLElement>(".brand-work__identity-card");
          const notebook = scene.querySelector<HTMLElement>(".brand-work__image-card--notebook");
          const mugs = scene.querySelector<HTMLElement>(".brand-work__image-card--mugs");
          const visuals = scene.querySelector<HTMLElement>(".brand-work__visuals--psicojazmin");
          if (visuals && identity && notebook && mugs) {
            const sequence = gsap.timeline({
              scrollTrigger: {
                trigger: visuals,
                start: desktop ? "top 88%" : "top 92%",
                end: desktop ? "bottom 10%" : "bottom 16%",
                scrub: desktop ? 1 : 0.7,
                invalidateOnRefresh: true,
              },
            });
            sequence.fromTo(identity,
              { autoAlpha: 0.08, scale: 0.78, y: desktop ? 58 : 30, clipPath: "inset(14% 10% 14% 10% round 1rem)" },
              { autoAlpha: 1, scale: 1, y: 0, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.9, ease: "none" },
            );
            sequence.fromTo(notebook,
              { autoAlpha: 0, x: desktop ? -120 : -34, y: 24, clipPath: "inset(0 38% 0 0 round 1rem)" },
              { autoAlpha: 1, x: 0, y: 0, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.85, ease: "none" },
              "+=0.18",
            );
            sequence.fromTo(mugs,
              { autoAlpha: 0, x: desktop ? 120 : 34, y: 20, scale: 0.96, clipPath: "inset(0 0 0 38% round 1rem)" },
              { autoAlpha: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.85, ease: "none" },
              "+=0.18",
            );
          }
        });

        if (!desktop) {
          const manifestoSteps = gsap.utils.toArray<HTMLElement>(".scene--manifesto .manifesto-step");
          manifestoSteps.forEach((step) => {
            gsap.fromTo(
              step,
              { autoAlpha: 0.35, y: 20, scale: 0.985, clipPath: "inset(0 0 12% 0)" },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                clipPath: "inset(0 0 0% 0)",
                ease: "none",
                scrollTrigger: {
                  trigger: step,
                  start: "top 82%",
                  end: "top 38%",
                  scrub: 0.55,
                  invalidateOnRefresh: true,
                },
              },
            );
          });

          const workScene = document.querySelector<HTMLElement>(".scene--work");
          const workMedia = document.querySelector<HTMLElement>(".work-story__main");
          const workSceneVisual = document.querySelector<HTMLElement>(".work-story__scene");
          const workLayers = gsap.utils.toArray<HTMLElement>(".scene--work .work-story__layer");
          const workOutro = document.querySelector<HTMLElement>(".work-story__outro");

          if (workScene && workSceneVisual && workMedia && workLayers.length === 2 && workOutro) {
            const sequence = gsap.timeline({
              scrollTrigger: {
                trigger: workScene,
                start: "top 88%",
                end: "bottom 14%",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
            sequence.fromTo(workMedia,
              { clipPath: "inset(18% 22% 18% 22% round 1rem)", scale: 0.82 },
              { clipPath: "inset(0 0 0 0 round 1rem)", scale: 1, duration: 1.2, ease: "none" },
            );
            sequence.fromTo(workLayers[0],
              { xPercent: 38, yPercent: 18, autoAlpha: 0, clipPath: "inset(0 0 0 48% round 1rem)" },
              { xPercent: 0, yPercent: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.85, ease: "none" },
              "+=0.12",
            );
            sequence.fromTo(workLayers[1],
              { xPercent: -34, yPercent: -18, autoAlpha: 0, clipPath: "inset(0 48% 0 0 round 1rem)" },
              { xPercent: 0, yPercent: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.85, ease: "none" },
              "+=0.12",
            );
            sequence.fromTo(workOutro,
              { autoAlpha: 0.25, y: 38, clipPath: "inset(0 0 18% 0)" },
              { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0 0)", duration: 0.75, ease: "none" },
              "+=0.25",
            );
            sequence.to(workSceneVisual, { scale: 0.96, yPercent: -3, autoAlpha: 0.78, duration: 0.45, ease: "none" });
          }

          requestAnimationFrame(() => ScrollTrigger.refresh());
          return;
        }

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
              end: () => `+=${window.innerHeight * (steps.length - 1 + 0.42)}`,
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
          timeline.to(
            steps[steps.length - 1],
            { autoAlpha: 0.68, y: -14, scale: 0.97, duration: 0.42, ease: "none" },
            steps.length - 1,
          );
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

      const sceneVisual = workScene.querySelector<HTMLElement>(".work-story__scene");
      const layers = gsap.utils.toArray<HTMLElement>(".work-story__layer");
      const outro = document.querySelector<HTMLElement>(".work-story__outro");
      if (!sceneVisual || layers.length !== 2 || !outro) return;
      const sequence = gsap.timeline({
        scrollTrigger: { trigger: workScene, start: "top 86%", end: "bottom 10%", scrub: 1.1, invalidateOnRefresh: true },
      });
      sequence.fromTo(workMedia,
        { clipPath: "inset(18% 22% 18% 22% round 1.25rem)", scale: 0.82 },
        { clipPath: "inset(0 0 0 0 round 1.25rem)", scale: 1, duration: 1.2, ease: "none" },
      );
      sequence.fromTo(layers[0],
        { xPercent: 40, yPercent: 18, autoAlpha: 0, clipPath: "inset(0 48% 0 0 round 1rem)" },
        { xPercent: 0, yPercent: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.9, ease: "none" }, "+=0.1");
      sequence.fromTo(layers[1],
        { xPercent: -36, yPercent: -18, autoAlpha: 0, clipPath: "inset(0 0 0 48% round 1rem)" },
        { xPercent: 0, yPercent: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0 round 1rem)", duration: 0.9, ease: "none" }, "+=0.1");
      sequence.fromTo(outro,
        { autoAlpha: 0.25, y: 40, clipPath: "inset(0 0 18% 0)" },
        { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0 0)", duration: 0.8, ease: "none" }, "+=0.25");
      sequence.to(sceneVisual, { scale: 0.96, yPercent: -3, autoAlpha: 0.78, duration: 0.45, ease: "none" });
    });

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const reveals = gsap.utils.toArray<HTMLElement>("[data-story-reveal]");
      reveals.forEach((element, index) => {
        gsap.fromTo(element,
          { autoAlpha: 0.18, y: window.innerWidth <= 700 ? 30 : 58, clipPath: "inset(0 0 22% 0)" },
          { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0 0)", ease: "none", scrollTrigger: {
            trigger: element, start: window.innerWidth <= 700 ? "top 90%" : "top 84%", end: window.innerWidth <= 700 ? "top 45%" : "top 38%", scrub: window.innerWidth <= 700 ? 0.4 : 0.7, invalidateOnRefresh: true,
          } },
        );
        if (element.classList.contains("world")) {
          gsap.fromTo(element.querySelector("h3"), { x: 24 + (index % 2) * 12, autoAlpha: 0.5 }, { x: 0, autoAlpha: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 82%", end: "top 38%", scrub: 0.55 } });
        }
      });
      const pause = document.querySelector<HTMLElement>(".story-pause h2");
      if (pause) gsap.fromTo(pause, { y: 64, autoAlpha: 0.45, clipPath: "inset(0 0 24% 0)" }, { y: 0, autoAlpha: 1, clipPath: "inset(0 0 0 0)", ease: "none", scrollTrigger: { trigger: ".story-pause", start: "top 82%", end: "center 44%", scrub: 0.65 } });
      const cta = document.querySelector<HTMLElement>(".final-cta h2");
      if (cta) gsap.fromTo(cta, { y: 44, autoAlpha: 0.4 }, { y: 0, autoAlpha: 1, ease: "none", scrollTrigger: { trigger: ".final-cta", start: "top 82%", end: "center 46%", scrub: 0.6 } });
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => motion.revert();
  }, []);

  return null;
}
