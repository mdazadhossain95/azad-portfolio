export function V3ParkCodingScene() {
  return (
    <figure
      aria-label="Illustration of a developer sitting on a park bench and coding on a laptop while people walk by"
      className="surface-card v3-anim-settle mx-auto w-full max-w-[420px] overflow-hidden p-4 md:p-5 lg:mx-0"
    >
      <div className="rounded-[24px] border border-[var(--line)] bg-[#f9f1dd] p-3 shadow-[0_10px_24px_rgba(53,50,44,0.08)]">
        <svg
          viewBox="0 0 520 420"
          role="img"
          aria-hidden="true"
          className="v3-park-scene h-auto w-full"
        >
          <defs>
            <linearGradient id="parkSky" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--v3-sky, #f8efd8)" />
              <stop offset="100%" stopColor="var(--v3-ground, #efe0bb)" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="520" height="420" rx="28" fill="url(#parkSky)" />
          <path d="M22 284c54-34 118-47 184-39 48 6 86 27 126 41 59 21 109 18 166-5v104H22z" fill="var(--v3-grass, #d8e4b0)" />
          <path d="M0 292c88-32 149-34 230-18 71 14 136 13 290-25v171H0z" fill="var(--v3-path, #e8cf98)" opacity=".56" />
          <path d="M42 318c34-10 65-17 98-15 40 3 74 15 113 15 43 0 77-11 118-10 42 1 74 11 110 12" fill="none" stroke="var(--line)" strokeWidth="4" strokeLinecap="round" opacity=".75" />

          <g className="v3-park-tree">
            <path d="M404 111c8 55 6 94-6 139" fill="none" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M399 117c28 7 45 24 54 52" fill="none" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M402 122c-27 9-42 26-49 52" fill="none" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <circle cx="412" cy="108" r="35" fill="var(--accent-soft)" />
            <circle cx="382" cy="96" r="28" fill="var(--accent-soft)" />
            <circle cx="438" cy="92" r="24" fill="var(--accent-soft)" />
          </g>

          <g className="v3-park-walker v3-park-walker-one">
            <circle cx="116" cy="182" r="13" fill="var(--v3-ink)" />
            <path d="M116 195v34" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M116 214l-18 23" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M116 214l16 20" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M116 229l-13 32" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M116 229l14 31" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M100 187c7-11 24-15 32-2" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="v3-park-walker v3-park-walker-two">
            <circle cx="166" cy="168" r="11" fill="var(--v3-ink)" />
            <path d="M166 179v29" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M166 197l-18 18" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M166 197l19 18" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M166 208l-10 30" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M166 208l11 30" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M152 170c9-9 24-7 31 4" fill="none" stroke="var(--accent-strong)" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="v3-park-bench">
            <path d="M206 272h159" stroke="var(--v3-ink)" strokeWidth="6" strokeLinecap="round" />
            <path d="M218 271v49" stroke="var(--v3-ink)" strokeWidth="6" strokeLinecap="round" />
            <path d="M332 271v49" stroke="var(--v3-ink)" strokeWidth="6" strokeLinecap="round" />
            <path d="M230 252h103" stroke="var(--v3-ink)" strokeWidth="10" strokeLinecap="round" />
            <path d="M228 246c22 0 36-5 53-5 18 0 31 5 52 5" fill="none" stroke="var(--line)" strokeWidth="10" strokeLinecap="round" />
          </g>

          <g className="v3-park-coder">
            <circle cx="264" cy="207" r="14" fill="var(--v3-ink)" />
            <path d="M264 221v29" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M264 232l-18 13" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M264 232l16 14" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M264 247l-17 22" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M264 247l20 21" stroke="var(--v3-ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M247 224c12-10 31-10 39 1" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
            <rect x="276" y="223" width="43" height="28" rx="4" fill="#f9f9f2" stroke="var(--line)" strokeWidth="3" />
            <path d="M281 228h32" stroke="var(--accent-strong)" strokeWidth="3" strokeLinecap="round" className="v3-laptop-lines" />
            <path d="M281 236h26" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" className="v3-laptop-lines" />
            <path d="M281 244h20" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" className="v3-laptop-lines" />
            <path d="M274 251h52" stroke="var(--v3-ink)" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="v3-note-pad">
            <rect x="311" y="241" width="38" height="32" rx="5" fill="#fff7e8" stroke="var(--line)" strokeWidth="2" />
            <path d="M318 250h24" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M318 257h18" stroke="var(--line)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M318 264h21" stroke="var(--line)" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          <g className="v3-park-note">
            <path d="M63 83c12-10 30-12 44-4" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M63 83c4 12 18 17 31 18" fill="none" stroke="var(--accent-strong)" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-sm text-[var(--muted)]">
        Park-side coding sketch: people passing by, laptop open, notes on the bench.
      </figcaption>
    </figure>
  );
}
