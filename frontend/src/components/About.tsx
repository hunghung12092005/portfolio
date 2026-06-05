import { Brain, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

const pillars = [
  {
    icon: Server,
    title: "Nền tảng Full Stack",
    description: "Xây dựng web app, API backend và quy trình vận hành có khả năng mở rộng.",
  },
  {
    icon: Brain,
    title: "Tập trung AI Application",
    description: "Tích hợp LLM workflow, automation và bài toán AI thực tế vào sản phẩm.",
  },
  {
    icon: Database,
    title: "Tư duy hệ thống & dữ liệu",
    description: "Làm việc với PostgreSQL, data pipeline và kiến trúc hướng đến triển khai thật.",
  },
];

export function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Giới thiệu"
      title="Tập trung vào sản phẩm có thể triển khai thật"
      description={profile.about}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="h-full p-6">
                <Icon className="size-8 text-[var(--accent)]" />
                <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{pillar.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
