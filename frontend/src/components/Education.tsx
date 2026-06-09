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
          <div key={item.school} data-reveal="card">
            <Card className={`h-full overflow-hidden p-0 ${index === 1 ? "xl:translate-y-10" : ""}`}>
              <div className="grid h-full gap-0 sm:grid-cols-[180px_1fr]">
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
                <div className="flex h-full flex-col justify-center p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-400/20 bg-[var(--accent-soft)] p-2.5">
                      <GraduationCap className="size-5 text-[var(--accent)]" />
                    </div>
                    <p className="text-sm font-medium text-[var(--accent)]">{item.period}</p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{item.school}</h3>
                  <p className="mt-2 text-[var(--text-secondary)]">{item.major}</p>
                  {item.achievement ? (
                    <p className="mt-4 inline-flex w-fit rounded-full border border-white/70 bg-white/82 px-3 py-1.5 text-sm font-medium text-[var(--text-muted)]">
                      {item.achievement}
                    </p>
                  ) : null}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
