import { motion } from "framer-motion";

import sectionVisuals from "@/assets/section-visuals-generated.webp";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Kỹ năng"
      title="Công nghệ chính"
      description="Những công nghệ mình dùng nhiều nhất khi làm backend, AI workflow và triển khai sản phẩm."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <Card className="mb-4 overflow-hidden p-0">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Tech stack</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                Tập trung vào <span className="text-[var(--accent)]">API</span>, <span className="text-[var(--accent)]">dữ liệu</span> và <span className="text-[var(--accent)]">AI ứng dụng</span>
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                Ưu tiên stack rõ ràng, thực dụng và dễ mở rộng khi sản phẩm đi vào vận hành thật.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[var(--text-muted)]">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5">Backend-first</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5">Automation-ready</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1.5">Production mindset</span>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden bg-[var(--surface-strong)]">
              <img
                src={sectionVisuals}
                alt="Minh họa công nghệ chính"
                className="h-full w-full object-cover object-top transition duration-700"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.06),rgba(15,23,42,0.14))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm backdrop-blur">
                API • AI • Data
              </div>
              <div className="absolute bottom-5 right-5 h-20 w-20 rounded-full bg-cyan-300/20 blur-2xl" />
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-[var(--accent-soft)] p-3">
                    <Icon className="size-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
