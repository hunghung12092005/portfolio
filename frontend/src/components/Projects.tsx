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
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <SectionShell
      id="projects"
      eyebrow="Dự án"
      title="Dự án tiêu biểu"
      description="Một vài dự án đại diện cho hướng mình đang theo đuổi."
    >
      <div className="grid gap-4">
        <div data-reveal="card">
          <Card className="group overflow-hidden p-0">
            <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[320px] overflow-hidden">
                <img
                  src={projectImages[featuredProject.title as keyof typeof projectImages]}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.42))]" />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="rounded-full border border-white/70 bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] shadow-sm backdrop-blur">
                    Featured build
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="max-w-lg rounded-[1.7rem] border border-white/20 bg-slate-950/26 p-5 backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/88">{featuredProject.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">
                      {featuredProject.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Spotlight project</p>
                <h3 className="mt-3 text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)]">
                  Hệ thống AI với vai trò kết nối nhu cầu thực tế và workflow vận hành.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{featuredProject.description}</p>
                <p className="mt-4 text-sm font-medium text-[var(--text-primary)]">{featuredProject.role}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {featuredProject.techStack.map((tech) => (
                    <Badge key={tech} className="bg-white/80 text-[var(--text-primary)]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <CardFooter className="mt-7">
                  <Button asChild size="sm">
                    <a href="#contact">
                      Trao đổi dự án tương tự <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {secondaryProjects.map((project) => (
            <div key={project.title} data-reveal="card">
              <Card className="group h-full overflow-hidden p-0">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={projectImages[project.title as keyof typeof projectImages]}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.03),rgba(15,23,42,0.22))]" />
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
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
