import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[var(--text)]">{profile.name}</p>
          <p className="font-mono text-xs text-[var(--muted)]">FinTech Systems Lab · v2</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--muted)]" aria-label="Footer">
          <a href="#systems" className="transition hover:text-[var(--text)]">Systems</a>
          <a href="#matrix" className="transition hover:text-[var(--text)]">Matrix</a>
          <a href="#contact" className="transition hover:text-[var(--text)]">Contact</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[var(--text)]">LinkedIn</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="transition hover:text-[var(--text)]">GitHub</a>
        </nav>

        <p className="text-xs text-[var(--muted)]">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
