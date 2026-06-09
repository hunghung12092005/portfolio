import { Briefcase } from "lucide-react";

import bit8Logo from "@/assets/image-school-company/bit8-clean.png";
import tesopLogo from "@/assets/image-school-company/tesop.jpeg";
import vinSmartLogo from "@/assets/image-school-company/vinsmart-clean.png";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { experiences } from "@/data/experience";

const companyImages = {
  "TESOP Technology Joint Stock Company": {
    src: tesopLogo,
    className: "max-h-20 w-full rounded-[1.5rem] object-contain shadow-[0_12px_24px_rgba(37,99,235,0.16)]",
    wrapperClass: "",
  },
  "8-bit Technology Innovation Center": {
    src: bit8Logo,
    className: "max-h-24 w-full object-contain opacity-90 [filter:brightness(0.22)_saturate(1.15)]",
    wrapperClass: "",
  },
  "VinSmart Future VSF": {
    src: vinSmartLogo,
    className: "max-h-20 w-full object-contain drop-shadow-[0_10px_30px_rgba(239,68,68,0.12)]",
    wrapperClass: "",
  },
} as const;

export function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Kinh nghiệm"
      title="Hành trình làm việc"
      description="Những môi trường giúp mình rèn cả kỹ thuật, vận hành và khả năng đưa sản phẩm vào thực tế."
    >
      <div className="relative grid gap-4 before:absolute before:bottom-0 before:left-[1.35rem] before:top-0 before:w-px before:bg-[linear-gradient(180deg,rgba(13,136,168,0.2),rgba(13,136,168,0.02))] md:before:left-1/2">
        {experiences.map((experience, index) => (
          <div key={experience.company} data-reveal="card" className="relative md:grid md:grid-cols-2 md:gap-8">
            <div className={`${index % 2 === 0 ? "md:pr-8" : "md:col-start-2 md:pl-8"}`}>
              <Card className="overflow-hidden p-0">
                <div className="grid items-stretch gap-0 sm:grid-cols-[148px_1fr]">
                  <div className="relative flex min-h-[168px] items-center justify-center overflow-hidden bg-white/92 p-6">
                    <div className={companyImages[experience.company as keyof typeof companyImages].wrapperClass}>
                      <img
                        src={companyImages[experience.company as keyof typeof companyImages].src}
                        alt={experience.company}
                        className={companyImages[experience.company as keyof typeof companyImages].className}
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] shadow-sm">
                      Experience
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="rounded-2xl border border-cyan-400/20 bg-[var(--accent-soft)] p-2.5">
                        <Briefcase className="size-5 text-[var(--accent)]" />
                      </div>
                      <p className="text-sm font-medium text-[var(--accent)]">{experience.period}</p>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{experience.company}</h3>
                    <p className="mt-2 font-medium text-[var(--text-secondary)]">{experience.role}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">{experience.summary}</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="absolute left-[1.35rem] top-7 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_0_0_6px_rgba(239,245,251,1)] md:left-1/2">
              <span className="size-2.5 rounded-full bg-[var(--accent)]" />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
