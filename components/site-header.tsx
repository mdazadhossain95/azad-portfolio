import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/travel", label: "Travel" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)/0.85] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-[0.14em] text-[var(--text)] uppercase">
          AZAD
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--line)] px-4 py-1.5 text-xs font-medium text-[var(--text)] transition hover:bg-[var(--card)]"
          >
            View resume
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
