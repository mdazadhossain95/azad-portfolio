import { profile } from "@/content/profile";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function UpworkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.4 14.4c-1.3 0-2.5-.6-3.4-1.6l-1.1 4.7H10l1.2-5.4c.4-1.9 0-3.8 0-3.8L10.1 7.2h-2V13c0 1.2-1 2.2-2.2 2.2S3.6 14.2 3.6 13V3H1v10c0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8v-1l.3-1.6c.3.9.8 1.8 1.3 2.6l-1.4 6H13l1.1-4.7c1 .8 2.2 1.3 3.4 1.3 3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5c-2.4 0-4.3 1.5-5.1 3.6-.3-.8-.5-1.6-.5-2.5h-2.5c0 1.4.4 2.8 1 4-.1.5-.1 1.1-.2 1.6.6 1.4 1.5 2.6 2.7 3.5-.3.6-.6 1.1-.9 1.7C16.3 14 16.8 14.4 17.4 14.4z" />
    </svg>
  );
}

function MediumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );
}

function StackOverflowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.72-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z"/>
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]/50">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[var(--text)]">{profile.name}</p>
            <p className="text-xs text-[var(--text-muted)]">
              Full-Stack App Developer · SaaS · FinTech · AI Apps
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--text-muted)] transition hover:text-[var(--text)]"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--text-muted)] transition hover:text-[var(--text)]"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={profile.links.upwork}
              target="_blank"
              rel="noreferrer"
              aria-label="Upwork"
              className="text-[var(--text-muted)] transition hover:text-[var(--text)]"
            >
              <UpworkIcon size={20} />
            </a>
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              className="text-[var(--text-muted)] transition hover:text-[var(--text)]"
            >
              <MediumIcon size={20} />
            </a>
            <a
              href={profile.links.stackoverflow}
              target="_blank"
              rel="noreferrer"
              aria-label="Stack Overflow"
              className="text-[var(--text-muted)] transition hover:text-[var(--text)]"
            >
              <StackOverflowIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex border-t border-[var(--line)] pt-8 text-xs text-[var(--text-muted)] items-center justify-center">
          <p>© {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
