# Content Architecture

## Single Source of Truth
The portfolio uses local static files for public content to optimize for performance (Next.js App Router) and avoid unnecessary client-side Firestore reads.

- **Profile & Links**: `content/profile.ts`
- **Projects**: `lib/default-content.ts` (currently holding case studies)
- **Services**: `content/services.ts`
- **Articles**: Markdown files in `content/articles/*.mdx` parsed via `gray-matter`.

## Admin Boundaries
- Public portfolio elements MUST use the static content source.
- Firebase Firestore is reserved strictly for dynamic systems (e.g., managing the admin dashboard, creating draft reviews, or tracking live metrics) where required by the V1-V3 implementations.
