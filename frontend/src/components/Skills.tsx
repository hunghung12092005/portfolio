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


      <div className="grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div key={group.title} data-reveal="card">
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-[var(--accent-soft)] p-3">
                      <Icon className="size-5 text-[var(--accent)]" />
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">{group.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/70 bg-white/76 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {group.items.length} items
                  </span>
                </div>
                <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(13,136,168,0.4),rgba(255,255,255,0))]" />
                <div className="mt-5 flex flex-1 content-start flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Badge key={item} className="bg-white/76 text-[var(--text-primary)]">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
