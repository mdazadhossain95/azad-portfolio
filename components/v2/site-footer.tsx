import Link from "next/link";
import { profile } from "@/content/profile";
import { getVersionLabel, versions } from "@/lib/portfolio/versions";

const NAV = [
  { href: "/v2#projects", label: "Missions" },
  { href: "/v2#transmissions", label: "Articles" },
  { href: "/v2/projects", label: "All projects" },
  { href: "/v2/articles", label: "All articles" },
  { href: "/v2#contact", label: "Contact" },
];

const SOCIAL = [
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.upwork, label: "Upwork" },
  { href: profile.links.medium, label: "Medium" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t bg-[var(--v2-void)] text-[var(--text)]" style={{ borderColor: "var(--v2-panel-edge)" }}>
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-[var(--text)]">{profile.name}</p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-6 w-fit items-center text-[14px] text-[var(--muted)] underline-offset-4 transition hover:text-[var(--text)] hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-6 w-fit items-center text-[14px] text-[var(--muted)] underline-offset-4 transition hover:text-[var(--text)] hover:underline"
              >
                {item.label} ↗
              </a>
            ))}
          </div>
        </div>



        <p
          className="mt-10 border-t pt-6 text-[13px] text-[var(--muted)]"
          style={{ borderColor: "var(--v2-panel-edge)" }}
        >
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
