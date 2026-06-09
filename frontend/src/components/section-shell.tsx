import type { PropsWithChildren } from "react";

type SectionShellProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionShellProps) {
  return (
    <section id={id} data-section className={`scroll-mt-28 px-4 py-16 sm:px-6 lg:px-0 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div data-reveal="heading" className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full border border-[var(--line-soft)] bg-[var(--accent-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {eyebrow}
          </span>
          <div data-section-line className="mt-4 h-px w-28 bg-[linear-gradient(90deg,var(--accent),rgba(255,255,255,0))]" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-[2.25rem]">
            {title}
          </h2>
          {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
