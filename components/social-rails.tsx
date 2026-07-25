import { profile } from "@/content/profile";

export function SocialRails() {
  return (
    <>
      {/* Left Social Rail */}
      <div className="hidden xl:flex fixed bottom-0 left-8 z-40 flex-col items-center gap-6 after:block after:h-24 after:w-[1px] after:bg-[var(--line)]">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href={profile.links.upwork}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
          aria-label="Upwork"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.4 14.4c-1.3 0-2.5-.6-3.4-1.6l-1.1 4.7H10l1.2-5.4c.4-1.9 0-3.8 0-3.8L10.1 7.2h-2V13c0 1.2-1 2.2-2.2 2.2S3.6 14.2 3.6 13V3H1v10c0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8v-1l.3-1.6c.3.9.8 1.8 1.3 2.6l-1.4 6H13l1.1-4.7c1 .8 2.2 1.3 3.4 1.3 3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5c-2.4 0-4.3 1.5-5.1 3.6-.3-.8-.5-1.6-.5-2.5h-2.5c0 1.4.4 2.8 1 4-.1.5-.1 1.1-.2 1.6.6 1.4 1.5 2.6 2.7 3.5-.3.6-.6 1.1-.9 1.7C16.3 14 16.8 14.4 17.4 14.4z" />
          </svg>
        </a>
        <a
          href={profile.links.medium}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
          aria-label="Medium"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        </a>
        <a
          href={profile.links.stackoverflow}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
          aria-label="Stack Overflow"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.72-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z"/>
          </svg>
        </a>
      </div>

      {/* Right Email Rail */}
      <div className="hidden xl:flex fixed bottom-0 right-8 z-40 flex-col items-center gap-6 after:block after:h-24 after:w-[1px] after:bg-[var(--line)]">
        <a
          href={`mailto:${profile.email}`}
          className="mono text-sm tracking-widest text-[var(--text-muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
          style={{ writingMode: "vertical-rl" }}
        >
          {profile.email}
        </a>
      </div>
    </>
  );
}
