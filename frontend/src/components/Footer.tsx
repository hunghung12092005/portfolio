export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] px-4 py-8 text-center text-sm text-[var(--text-muted)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Đồng Mạnh Hùng.</span>
        <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Built with React, Tailwind and GSAP</span>
      </div>
    </footer>
  );
}
