import { Award } from "lucide-react";

import sectionVisuals from "@/assets/section-visuals-generated.webp";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function Certificates() {
  return (
    <SectionShell
      id="certificates"
      eyebrow="Chứng chỉ"
      title="Chứng chỉ bổ sung cho nền tảng lập trình và AI"
      description="Một vài dấu mốc học tập giúp củng cố nền tảng kỹ thuật và định hướng AI ứng dụng."
    >
      <div data-reveal="card">
        <Card className="mb-4 overflow-hidden p-0">
          <div className="grid items-stretch gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[260px] overflow-hidden bg-[var(--surface-strong)]">
              <img
                src={sectionVisuals}
                alt="Minh họa chứng chỉ và học tập"
                className="h-full w-full object-cover object-bottom transition duration-700"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,251,235,0.04),rgba(120,53,15,0.16))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm backdrop-blur">
                Learning • AI
              </div>
              <div className="absolute bottom-5 left-5 h-20 w-20 rounded-full bg-amber-300/20 blur-2xl" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">Learning path</p>
              <h3 className="mt-3 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)]">
                Bổ sung đều cho cả <span className="text-amber-500">nền tảng lập trình</span> và <span className="text-amber-500">AI ứng dụng</span>
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                Chứng chỉ là điểm cộng, còn trọng tâm vẫn là biến kiến thức thành quy trình làm việc rõ ràng và sản phẩm thực tế.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[var(--text-muted)]">
                <span className="rounded-full border border-amber-300/40 bg-amber-100/70 px-3 py-1.5">Continuous learning</span>
                <span className="rounded-full border border-amber-300/40 bg-amber-100/70 px-3 py-1.5">Applied thinking</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {profile.certificates.map((certificate, index) => (
          <div key={certificate} data-reveal="card">
            <Card className={`flex h-full items-center gap-4 p-6 ${index === 1 ? "md:translate-y-8" : ""}`}>
              <div className="rounded-2xl border border-cyan-400/20 bg-[var(--accent-soft)] p-3">
                <Award className="size-6 text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{certificate}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">Chứng chỉ</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
