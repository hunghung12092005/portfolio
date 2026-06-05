import { motion } from "framer-motion";
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
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden p-0">
              <div className="grid items-stretch gap-0 md:grid-cols-[170px_1fr]">
                <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-white/92 p-6">
                  <div className={companyImages[experience.company as keyof typeof companyImages].wrapperClass}>
                    <img
                      src={companyImages[experience.company as keyof typeof companyImages].src}
                      alt={experience.company}
                      className={companyImages[experience.company as keyof typeof companyImages].className}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.82))]" />
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
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
