import { profile } from "@/content/profile";
import { getVersionLabel, versions } from "@/lib/portfolio/versions";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[var(--text)]">{profile.name}</p>
            <p className="font-handwriting text-lg" style={{ color: "var(--v3-gold)" }}>
              Engineering Notebook · v3
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--muted)] sm:grid-cols-3" aria-label="Footer">
            <a href="/v3/projects" className="transition hover:text-[var(--text)]">Projects</a>
            <a href="/v3/articles" className="transition hover:text-[var(--text)]">Articles</a>
            <a href="#sketches" className="transition hover:text-[var(--text)]">Sketches</a>
            <a href="#toolkit" className="transition hover:text-[var(--text)]">Toolkit</a>
            <a href="#contact" className="transition hover:text-[var(--text)]">Contact</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="transition hover:text-[var(--text)]">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[var(--text)]">LinkedIn</a>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="transition hover:text-[var(--text)]">Resume</a>
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-center border-t pt-5" style={{ borderColor: "var(--line)" }}>
          <p className="text-xs text-[var(--muted)]">
            © {year} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
