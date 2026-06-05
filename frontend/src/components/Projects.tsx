import { motion } from "framer-motion";
import { ArrowUpRight, FolderCode } from "lucide-react";

import hotelVisual from "@/assets/project-hotel-generated.webp";
import omichatVisual from "@/assets/project-omnichat-generated.webp";
import payrollVisual from "@/assets/project-payroll-generated.webp";
import schoolAiVisual from "@/assets/project-school-ai.webp";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

const projectImages = {
  "Hệ thống AI hỗ trợ giao tiếp giáo viên - phụ huynh": schoolAiVisual,
  "Phần mềm Omichat quản lý doanh nghiệp và chat đa kênh": omichatVisual,
  "Phần mềm ứng dụng AI tính lương": payrollVisual,
  "Phần mềm quản lý khách sạn Hồ Xuân Hương": hotelVisual,
} as const;

export function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Dự án"
      title="Dự án tiêu biểu"
      description="Một vài dự án đại diện cho hướng mình đang theo đuổi."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <Card className="group h-full overflow-hidden p-0">
              <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={projectImages[project.title as keyof typeof projectImages]}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.03),rgba(15,23,42,0.22))]" />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  {project.featured ? (
                    <span className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] shadow-sm backdrop-blur">
                      Nổi bật
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="p-6">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <FolderCode className="size-5 text-[var(--accent)]" />
                    <span className="text-sm font-medium text-[var(--text-muted)]">{project.period}</span>
                  </div>
                  <CardTitle className="text-lg leading-7">{project.title}</CardTitle>
                  <CardDescription className="mt-3">
                    <span className="block text-[var(--text-secondary)]">{project.role}</span>
                  </CardDescription>
                </CardHeader>
                <p className="text-sm leading-6 text-[var(--text-secondary)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <CardFooter className="mt-6">
                  <Button asChild size="sm">
                    <a href="#contact">
                      Xem chi tiết <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
