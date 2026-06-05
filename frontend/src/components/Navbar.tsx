import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-4 py-3 shadow-xl shadow-sky-100/50 backdrop-blur-xl">
        <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-[var(--text-primary)] uppercase">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm">
            <a href="#contact">Liên hệ ngay</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex rounded-full border border-[color:var(--border)] bg-[var(--surface-strong)] p-2 text-[var(--text-primary)] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-4 shadow-xl shadow-sky-100/40 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
