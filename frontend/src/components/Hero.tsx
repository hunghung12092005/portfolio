import { motion } from "framer-motion";
import { Download, Globe2, Link2, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function Hero() {
  const contactItems = [
    { icon: Mail, value: profile.email },
    { icon: Phone, value: profile.phone },
    { icon: MapPin, value: profile.location },
  ];

  return (
    <section id="home" className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:self-start">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Card className="relative overflow-hidden border-white/40 bg-white/50 p-5 shadow-[0_30px_90px_rgba(96,165,250,0.14)] md:p-6 lg:flex lg:h-[calc(100vh-8rem)] lg:flex-col">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--card-gradient-start),transparent_36%,var(--card-gradient-end))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.86),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(165,243,252,0.18),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(196,181,253,0.18),transparent_28%)]" />
          <div className="absolute -left-16 top-14 h-44 w-44 rounded-full bg-cyan-200/35 blur-3xl" />
          <div className="absolute -right-10 top-24 h-36 w-36 rounded-full bg-violet-200/30 blur-3xl" />
          <div className="orbit-ring absolute left-10 top-12 h-36 w-36 rounded-full opacity-30" />
          <div className="orbit-ring absolute right-8 top-20 h-24 w-24 rounded-full opacity-25" />
          <div className="relative lg:flex lg:h-full lg:flex-col">
            <div className="mb-4 flex items-center justify-between lg:mb-3">
              <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Portfolio
              </span>
            </div>

            <div className="relative h-[240px] overflow-hidden rounded-[1.75rem] border border-white/50 bg-[linear-gradient(180deg,rgba(252,254,255,0.94)_0%,rgba(237,246,255,0.92)_58%,rgba(246,248,255,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:h-[280px] lg:h-[210px]">
              <motion.div
                className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl"
                animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -right-6 bottom-6 h-24 w-24 rounded-full bg-violet-200/22 blur-3xl"
                animate={{ x: [0, -6, 0], y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_34%)]" />
              <div className="tech-grid absolute inset-0 opacity-30" />
              <div className="network-lines absolute inset-0 opacity-35" />
              <div className="absolute left-1/2 top-1/2 z-[1] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55 blur-3xl sm:h-52 sm:w-52 lg:h-40 lg:w-40" />
              <div className="orbit-ring absolute left-1/2 top-1/2 z-[1] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 sm:h-48 sm:w-48 lg:h-36 lg:w-36" />
              <div className="orbit-ring absolute left-1/2 top-1/2 z-[1] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 sm:h-64 sm:w-64 lg:h-48 lg:w-48" />
              <div className="data-node absolute left-[24%] top-[34%] z-[2] h-2.5 w-2.5 rounded-full bg-cyan-200/95" />
              <div className="data-node absolute right-[25%] top-[30%] z-[2] h-2 w-2 rounded-full bg-sky-200/95" />
              <div className="data-node absolute bottom-[26%] left-[31%] z-[2] h-2 w-2 rounded-full bg-violet-200/95" />
              <div className="absolute left-[24%] top-[34%] z-[1] h-px w-[28%] rotate-[12deg] bg-gradient-to-r from-cyan-300/60 to-white/0" />
              <div className="absolute right-[25%] top-[30%] z-[1] h-px w-[24%] -rotate-[20deg] bg-gradient-to-r from-sky-300/60 to-white/0" />
              <div className="absolute bottom-[26%] left-[31%] z-[1] h-px w-[20%] -rotate-[16deg] bg-gradient-to-r from-violet-300/55 to-white/0" />
              {/* <img
                src={imageMain}
                alt="AI in Action poster"
                className="absolute left-1/2 top-1/2 z-[3] h-[78%] w-auto -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-white/70 object-cover shadow-[0_24px_44px_rgba(15,23,42,0.22)] sm:h-[82%] lg:h-[86%]"
              /> */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/84 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] shadow-sm backdrop-blur">
                AI in Action
              </div>
            </div>

            <div className="mt-5">
              <h1 className="text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--text-primary)] sm:text-[2.15rem] lg:text-[2rem]">
                Đồng Mạnh Hùng
              </h1>
              <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[0.82rem]">
                Full Stack Developer / AI Engineer
              </p>
              {/* <p className="mt-3 max-w-[24rem] text-sm leading-6 text-[var(--text-secondary)]">
                Web app, API backend và AI workflow theo hướng thực tế.
              </p> */}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild>
                <a href="/cv.pdf" download>
                  Tải CV <Download className="size-4" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#projects">Xem dự án</a>
              </Button>
            </div>

            <div className="mt-5 grid gap-2">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.value}
                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[var(--surface-strong)] px-3.5 py-3 text-[var(--text-secondary)]"
                  >
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="size-5" />
                    </div>
                    <span className="min-w-0 text-sm font-medium leading-5 text-[var(--text-primary)] [overflow-wrap:anywhere]">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 lg:mt-auto">
              <Button asChild variant="ghost" size="sm">
                <a href={profile.socialLinks.github} target="" rel="noreferrer">
                  <Link2 className="size-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <Globe2 className="size-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
