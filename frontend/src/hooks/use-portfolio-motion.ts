import type { RefObject } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function usePortfolioMotion(rootRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            allowMotion: boolean;
            reduceMotion: boolean;
          };

          const headings = gsap.utils.toArray<HTMLElement>(q("[data-reveal='heading']"));
          const cards = gsap.utils.toArray<HTMLElement>(q("[data-reveal='card']"));
          const sections = gsap.utils.toArray<HTMLElement>(q("[data-section]"));
          const sectionLines = gsap.utils.toArray<HTMLElement>(q("[data-section-line]"));
          const floaters = gsap.utils.toArray<HTMLElement>(q("[data-float]"));
          const mouseLight = q("[data-mouse-light]")[0] as HTMLElement | undefined;
          const backgroundBlobs = gsap.utils.toArray<HTMLElement>(q("[data-bg-blob]"));

          if (reduceMotion) {
            gsap.set([...headings, ...cards], { clearProps: "all", autoAlpha: 1 });
            return;
          }

          gsap.set(headings, { autoAlpha: 0, y: 34 });
          gsap.set(cards, { autoAlpha: 0, y: 44 });

          ScrollTrigger.batch(headings, {
            once: true,
            start: "top 84%",
            onEnter: (elements) => {
              gsap.to(elements, {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.82,
                overwrite: true,
              });
            },
          });

          ScrollTrigger.batch(cards, {
            once: true,
            start: "top 88%",
            onEnter: (elements) => {
              gsap.to(elements, {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.78,
                overwrite: true,
              });
            },
          });

          sectionLines.forEach((line) => {
            const section = line.closest("[data-section]");

            if (!section) {
              return;
            }

            gsap.fromTo(
              line,
              { scaleX: 0.22, transformOrigin: "left center" },
              {
                scaleX: 1,
                scrollTrigger: {
                  trigger: section,
                  start: "top 82%",
                  end: "top 38%",
                  scrub: 1,
                },
              },
            );
          });

          sections.forEach((section, index) => {
            const depth = gsap.utils.mapRange(0, Math.max(sections.length - 1, 1), 20, 54, index);

            gsap.fromTo(
              section,
              { y: depth },
              {
                y: 0,
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "top 30%",
                  scrub: 1,
                },
              },
            );
          });

          const drift = gsap.utils.distribute({
            base: 18,
            amount: 12,
            from: "center",
          });

          floaters.forEach((floater, index) => {
            gsap.to(floater, {
              y: -drift(index, floater, floaters),
              x: index % 2 === 0 ? 10 : -10,
              duration: 7 + index * 0.7,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          });

          backgroundBlobs.forEach((blob, index) => {
            gsap.to(blob, {
              xPercent: index % 2 === 0 ? 6 : -6,
              yPercent: index === 1 ? -4 : 5,
              scale: index === 2 ? 1.08 : 1.03,
              duration: 15 + index * 2,
              repeat: -1,
              yoyo: true,
              ease: "none",
            });
          });

          if (mouseLight) {
            const xTo = gsap.quickTo(mouseLight, "x", { duration: 0.55, ease: "power3.out" });
            const yTo = gsap.quickTo(mouseLight, "y", { duration: 0.55, ease: "power3.out" });

            const onPointerMove = (event: PointerEvent) => {
              const { left, top } = root.getBoundingClientRect();

              xTo(event.clientX - left - 220);
              yTo(event.clientY - top - 220);
            };

            root.addEventListener("pointermove", onPointerMove);

            return () => {
              root.removeEventListener("pointermove", onPointerMove);
            };
          }
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );
}
