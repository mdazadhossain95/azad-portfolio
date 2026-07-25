# Azad Portfolio

Modern portfolio for Flutter mobile app developer branding. Content is static, sourced from `content/`.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Vercel hosting

## Versions

Four presentations share one content tree:

- `/` and `/v4` — canonical, indexed
- `/v1`, `/v2`, `/v3` — alternate presentations, `noindex`

## Pages

- Home: hero, featured projects, skills, testimonials, contact CTA
- Projects: project grid, `/projects/[slug]` detail
- Articles: article list (`content/articles/*.mdx`), `/articles/[slug]` detail
- Travel: personal grid, `/travel/[slug]` detail
- Contact: social links + email

## Content

All content lives in `content/` (`profile.ts`, `projects.ts`, `services.ts`, `skills.ts`, `experience.ts`, `articles/*.mdx`) — edit there directly, no CMS or database involved.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Deploy
