# Four-Version Portfolio Baseline Audit

## Audit Information
- **Current Branch**: `portfolio-redesign-v2`
- **Existing Work**: V4 redesign styling (Midnight Navy theme, CursorGlow, right-aligned nav, animated splash screen, unified content files) is present in the `app`, `components`, and `content` directories.
- **Current Routes**: `/` (homepage), `/resume`, `/articles`, `/projects`, `/services/[slug]`. Admin routes present.

## Architecture
- **Reusable Components**: `SiteHeader`, `SiteFooter`, `SocialRails`, `SplashScreen`, `CursorGlow`, `ThemeToggle`, `ProjectGrid`.
- **Content Sources**: Hardcoded and unified under `content/profile.ts` and `lib/default-content.ts`. Markdown files for articles in `content/articles/*.mdx`.
- **Firebase/Admin Features**: Preserved. `firestore.rules` and `storage.rules` are present.
- **Duplicate Sources**: Reduced to zero due to recent refactors.

## Quality & Errors
- **Build/Lint Failures**:
  - `app/articles/page.tsx`: ESLint error `no-explicit-any`.
  - `app/services/[slug]/page.tsx`: ESLint error `react/no-unescaped-entities`.
  - `components/splash-screen.tsx`: ESLint error `react-hooks/set-state-in-effect` (calling setState synchronously in an effect).
  - Hydration mismatch in `components/theme-toggle.tsx` regarding `aria-label` changing on the client.
- **Missing/Broken Assets**: Missing placeholder static images (e.g. `/project-assets/vpn/1.png` returned 404).
- **Résumé Status**: Link points to `/azad-hossain-resume.pdf`. Needs verification if the PDF exists.
- **Accessibility**: Hydration warning on SVG tags in theme toggle.
- **Responsive Behavior**: Mostly stable, but missing some V1/V2/V3 structural planning.
- **Splash/Nav/Contact Issues**: Splash screen logic triggered a lint error. Contact section needs independent routing check.
- **Unsupported Claims**: None detected.

## Files to Preserve
- All `.agents` and `.claude` skill folders.
- `firebase.json`, `firestore.rules`, `storage.rules`.
- `content/profile.ts`.
- `app/layout.tsx` (excluding minor fixes).
