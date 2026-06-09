import { type MouseEvent, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const navItems = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Dự án", href: "#projects" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Liên hệ", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      const shell = shellRef.current;

      if (!shell) {
        return;
      }

      gsap.from(shell, {
        autoAlpha: 0,
        y: -22,
        duration: 0.72,
      });

      ScrollTrigger.create({
        start: 24,
        end: 99999,
        onUpdate: (self) => {
          gsap.to(shell, {
            y: self.direction === 1 ? -4 : 0,
            borderColor: self.scroll() > 24 ? "rgba(140, 180, 218, 0.38)" : "rgba(145, 160, 185, 0.22)",
            boxShadow:
              self.scroll() > 24
                ? "0 18px 44px rgba(15, 23, 42, 0.12)"
                : "0 10px 30px rgba(56, 189, 248, 0.10)",
            duration: 0.28,
            overwrite: true,
          });
        },
      });

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) {
          return;
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveHref(item.href);
            }
          },
        });
      });
  }, { scope: headerRef });

  useGSAP(
    () => {
      const menu = mobileMenuRef.current;

      if (!menu) {
        return;
      }

      if (isOpen) {
        gsap.fromTo(
          menu,
          { autoAlpha: 0, y: -14, height: 0 },
          {
            autoAlpha: 1,
            y: 0,
            height: "auto",
            duration: 0.35,
            pointerEvents: "auto",
          },
        );
        return;
      }

      gsap.to(menu, {
        autoAlpha: 0,
        y: -14,
        height: 0,
        duration: 0.28,
        pointerEvents: "none",
      });
    },
    {
      scope: headerRef,
      dependencies: [isOpen],
      revertOnUpdate: true,
    },
  );

  const handleAnchorClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveHref(href);
    setIsOpen(false);
    gsap.to(window, {
      duration: 1.05,
      ease: "power3.inOut",
      scrollTo: {
        y: href,
        offsetY: 104,
      },
    });
  };

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-[70] px-4 py-4 sm:px-6">
      <div
        ref={shellRef}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/82 px-4 py-3 shadow-[0_18px_44px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
      >
        <a href="#home" onClick={handleAnchorClick("#home")} className="leading-none text-[var(--text-primary)]">
          <span className="block text-sm font-semibold uppercase tracking-[0.22em]">{profile.name}</span>
          <span className="mt-1 block text-[11px] font-medium tracking-[0.14em] text-[var(--text-secondary)]">
            {profile.role}
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleAnchorClick(item.href)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeHref === item.href
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-[var(--text-secondary)] hover:bg-white hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Open to collaborate
          </span>
          <Button asChild size="sm">
            <a href="#contact" onClick={handleAnchorClick("#contact")}>
              Liên hệ ngay
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex rounded-full border border-white/80 bg-white/88 p-2 text-[var(--text-primary)] shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="pointer-events-none mx-auto mt-3 h-0 max-w-7xl overflow-hidden rounded-[2rem] border border-white/80 bg-white/88 opacity-0 shadow-[0_18px_44px_rgba(15,23,42,0.10)] backdrop-blur-2xl md:hidden"
      >
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleAnchorClick(item.href)}
              className={`rounded-2xl px-4 py-3 text-sm transition ${
                activeHref === item.href
                  ? "bg-slate-900 text-white"
                  : "text-[var(--text-secondary)] hover:bg-white hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
