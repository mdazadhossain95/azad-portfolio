# Azad Portfolio

Modern portfolio + Firebase CMS for Flutter mobile app developer branding.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Firebase Auth + Firestore + Storage
- Vercel hosting

## Pages

- Home: hero, featured projects, skills, testimonials, contact CTA
- Projects: project grid
- Project detail: dynamic route `/projects/[slug]`
- Articles: article list
- Article detail: dynamic route `/articles/[slug]`
- Travel: personal grid
- Travel detail: dynamic route `/travel/[slug]`
- Contact: social links + email
- Admin: secure login + CRUD dashboard

## Admin Features

- Firebase Auth login (`/admin/login`)
- Protected admin route (`/admin`)
- CRUD for:
	- projects
	- articles
	- reviews
	- travels
	- settings (social links)
- Image upload to Firebase Storage
- Real-time Firestore updates
- Featured project toggle

## Firebase Setup

Firebase project:
https://console.firebase.google.com/u/0/project/azad-portfolio-91647/overview

1. Copy `.env.example` to `.env.local`
2. Fill values from Firebase Web app config
3. Set admin allowlist in `NEXT_PUBLIC_ADMIN_EMAILS` (comma separated emails)
4. Create admin user in Firebase Authentication (Email/Password)
5. Deploy Firestore + Storage rules and replace placeholder admin email in rules files

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Firestore Collections

- `projects`
- `articles`
- `reviews`
- `travels`
- `settings` (`main` document)

## Deploy (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add env vars from `.env.local`
4. Deploy

## Security Note

Admin route guard in UI checks Firebase session + `NEXT_PUBLIC_ADMIN_EMAILS`.
Real write protection must come from Firestore and Storage security rules.
