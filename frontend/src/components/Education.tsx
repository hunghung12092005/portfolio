import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import fptEducation from "@/assets/image-school-company/fpoly-clean.png";
import vinUniversity from "@/assets/image-school-company/vinuni-clean.png";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

const educationImages = {
  "Cao đẳng FPT Polytechnic": fptEducation,
  "Đại học VinUniversity": vinUniversity,
} as const;

export function Education() {
  return (
    <SectionShell
      id="education"
      eyebrow="Học vấn"
      title="Quá trình học tập và bồi dưỡng AI thực hành"
      description="Nền tảng học tập kết hợp giữa CNTT và hướng tiếp cận AI thực chiến."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {profile.education.map((item, index) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden p-0">
              <div className="grid h-full gap-0 sm:grid-cols-[156px_1fr]">
                <div className="relative flex min-h-[170px] items-center justify-center overflow-hidden bg-white/92 p-6">
                  <img
                    src={educationImages[item.school as keyof typeof educationImages]}
                    alt={item.school}
                    className="max-h-20 w-full object-contain drop-shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] shadow-sm">
                    Learning
                  </div>
                </div>
                <div className="flex h-full flex-col justify-center p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-400/20 bg-[var(--accent-soft)] p-2.5">
                      <GraduationCap className="size-5 text-[var(--accent)]" />
                    </div>
                    <p className="text-sm font-medium text-[var(--accent)]">{item.period}</p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{item.school}</h3>
                  <p className="mt-2 text-[var(--text-secondary)]">{item.major}</p>
                  {item.achievement ? (
                    <p className="mt-3 inline-flex w-fit rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-[var(--text-muted)]">
                      {item.achievement}
                    </p>
                  ) : null}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
