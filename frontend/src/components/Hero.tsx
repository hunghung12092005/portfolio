import { useRef } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CustomEase, gsap, SplitText, useGSAP } from "@/lib/gsap";

const skillTags = ["AI Engineer", "Full Stack Developer", "Automation", "Backend Systems"];

const statCards = [
  { label: "Focus", value: "AI Applications" },
  { label: "Stack", value: "FastAPI • Next.js" },
  { label: "Style", value: "Practical Products" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const title = titleRef.current;
      const visual = visualRef.current;

      if (!section || !title || !visual) {
        return;
      }

      const q = gsap.utils.selector(section);
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
          const titleSplit = SplitText.create(title, {
            type: "lines",
            linesClass: "hero-title-line++",
          });
          const introEase = CustomEase.create("hero-simple-ease", "0.16,0.84,0.24,1");

          const badge = q("[data-hero-badge]");
          const role = q("[data-hero-role]");
          const copy = q("[data-hero-copy]");
          const tags = gsap.utils.toArray<HTMLElement>(q("[data-hero-tag]"));
          const ctas = gsap.utils.toArray<HTMLElement>(q("[data-hero-cta]"));
          const stats = gsap.utils.toArray<HTMLElement>(q("[data-hero-stat]"));
          const lines = gsap.utils.toArray<HTMLElement>(q("[data-hero-line]"));
          const glow = q("[data-hero-glow]")[0] as HTMLElement | undefined;

          if (reduceMotion) {
            gsap.set([badge, role, copy, tags, ctas, stats, lines, glow].flat(), {
              clearProps: "all",
              autoAlpha: 1,
            });
            titleSplit.revert();
            return () => {
              titleSplit.revert();
            };
          }

          gsap.set(stats, { autoAlpha: 0, y: 24 });
          gsap.set(visual, { autoAlpha: 0, y: 22, scale: 0.96 });
          gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

          const intro = gsap.timeline({
            defaults: {
              ease: introEase,
            },
          });

          intro
            .from(badge, { autoAlpha: 0, y: 18, duration: 0.46 })
            .from(role, { autoAlpha: 0, y: 12, duration: 0.38 }, 0.1)
            .from(titleSplit.lines, { yPercent: 105, autoAlpha: 0, stagger: 0.08, duration: 0.82 }, 0.16)
            .from(copy, { autoAlpha: 0, y: 16, duration: 0.42 }, 0.3)
            .from(tags, { autoAlpha: 0, y: 10, scale: 0.94, stagger: 0.05, duration: 0.3 }, 0.4)
            .from(ctas, { autoAlpha: 0, y: 12, stagger: 0.08, duration: 0.34 }, 0.48)
            .to(visual, { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, ease: "power3.out" }, 0.22)
            .to(lines, { scaleX: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" }, 0.48)
            .to(stats, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.4 }, 0.54);

          stats.forEach((stat, index) => {
            gsap.to(stat, {
              y: index % 2 === 0 ? -8 : 8,
              duration: 5 + index * 0.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          });

          if (glow) {
            gsap.to(glow, {
              xPercent: 8,
              yPercent: -8,
              scale: 1.08,
              duration: 8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }

          const xTo = gsap.quickTo(visual, "x", { duration: 0.45, ease: "power3.out" });
          const yTo = gsap.quickTo(visual, "y", { duration: 0.45, ease: "power3.out" });

          const onMove = (event: PointerEvent) => {
            const bounds = section.getBoundingClientRect();
            const ratioX = gsap.utils.mapRange(bounds.left, bounds.right, -1, 1, event.clientX);
            const ratioY = gsap.utils.mapRange(bounds.top, bounds.bottom, -1, 1, event.clientY);

            xTo(ratioX * 10);
            yTo(ratioY * 8);

            gsap.to(visual, {
              rotateY: ratioX * 3,
              rotateX: ratioY * -2,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          };

          const onLeave = () => {
            gsap.to(visual, {
              x: 0,
              y: 0,
              rotateY: 0,
              rotateX: 0,
              duration: 0.55,
              ease: "power3.out",
              overwrite: true,
            });
          };

          section.addEventListener("pointermove", onMove);
          section.addEventListener("pointerleave", onLeave);

          return () => {
            section.removeEventListener("pointermove", onMove);
            section.removeEventListener("pointerleave", onLeave);
            titleSplit.revert();
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section id="home" ref={sectionRef} data-section className="scroll-mt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(244,248,255,0.98))] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 md:px-10 md:py-10 xl:px-12 xl:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.94),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(125,211,252,0.2),transparent_24%),radial-gradient(circle_at_78%_80%,rgba(196,181,253,0.14),transparent_24%)]" />
        <div data-hero-glow className="absolute right-[-6%] top-[8%] h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl" />

        <div className="relative z-[1] grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
          <div className="max-w-2xl">
            <div
              data-hero-badge
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/84 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-700 shadow-sm"
            >
              <Sparkles className="size-3.5 text-cyan-500" />
              Simple Personal Header
            </div>

            <p data-hero-role className="mt-5 text-sm font-semibold tracking-[0.22em] text-slate-600 sm:text-base">
              DONG MANH HUNG • AI Engineer | Full Stack Developer
            </p>

            <h1
              ref={titleRef}
              className="mt-6 max-w-[11ch] text-[3rem] font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950 sm:text-[4.3rem] xl:text-[5.3rem]"
            >
              Building practical digital products with AI inside.
            </h1>

            <p data-hero-copy className="mt-6 max-w-[38rem] text-base leading-8 text-slate-600 sm:text-lg">
              Mình tập trung vào AI application, backend system và automation workflow, với mục tiêu tạo ra những sản
              phẩm gọn gàng, dễ dùng và có thể triển khai thực tế.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  data-hero-tag
                  className="rounded-full border border-white/90 bg-white/84 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild data-hero-cta size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild data-hero-cta variant="secondary" size="lg" className="border-cyan-200/80 bg-white/80">
                <a href="/cv.pdf" download>
                  Download CV <Download className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div
            ref={visualRef}
            className="relative rounded-[1.8rem] border border-white/90 bg-white/78 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(196,181,253,0.12),transparent_26%)]" />
            <div className="relative z-[1]">
              <div className="rounded-[1.4rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,249,255,0.9))] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700">Profile Snapshot</p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-900">Clean, practical, builder-focused.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Kết hợp tư duy kỹ thuật với trải nghiệm sản phẩm để tạo ra giải pháp AI và web app có giá trị sử dụng thật.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {statCards.map((card) => (
                  <div
                    key={card.label}
                    data-hero-stat
                    className="rounded-[1.3rem] border border-white/90 bg-white/84 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">{card.label}</p>
                      <div data-hero-line className="h-px w-20 bg-gradient-to-r from-cyan-400/80 to-transparent" />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-800">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
