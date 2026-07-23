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
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.5 7.5c-2.4 0-4.1 1.7-4.1 4.1s1.7 4.1 4.1 4.1 4.1-1.7 4.1-4.1-1.7-4.1-4.1-4.1zm-4.7 7.7c-.5.9-1.2 1.7-2 2.3l-2.6 5.5H6l2.3-4.8c-.8-.5-1.5-1.2-2.1-2-1-1.3-1.6-3-1.6-4.9V3h2.8v8.3c0 1.5.5 2.8 1.3 3.8.8.9 1.9 1.4 3.1 1.4 1 0 1.9-.3 2.7-.9z" />
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
