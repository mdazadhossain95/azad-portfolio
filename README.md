# Azad Portfolio (Next.js + Firebase)

## Firebase Setup

Firebase project:
https://console.firebase.google.com/u/0/project/azad-portfolio-91647/overview

1. In Firebase Console, open Project settings -> General.
2. Under Your apps, create/select Web app and copy SDK config.
3. Create `.env.local` in project root with:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Install dependencies:

```bash
npm install
```

5. Run dev server:

```bash
npm run dev
```

6. Open `http://localhost:3000` and confirm "Config Check" + "App Init" status.

## Project Notes

- Firebase initializer: `lib/firebase.ts`
- Status UI: `app/page.tsx`
- Env files are gitignored by default (`.env*` in `.gitignore`).
