"use client";

import { getFirebaseApp, hasFirebaseConfig } from "@/lib/firebase";

export default function Home() {
  const firebaseApp = getFirebaseApp();

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-20 font-sans dark:bg-black">
      <main className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Firebase Setup Status
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Project: <span className="font-medium">azad-portfolio-91647</span>
        </p>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Config Check
          </p>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            {hasFirebaseConfig
              ? "All NEXT_PUBLIC_FIREBASE_* vars present."
              : "Missing Firebase env vars. Add keys in .env.local."}
          </p>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            App Init: {firebaseApp ? "Success" : "Skipped (waiting for config)"}
          </p>
        </div>

        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Open Firebase project settings and create web app.</li>
          <li>Copy SDK config values into .env.local.</li>
          <li>Restart dev server after env update.</li>
        </ol>

        <a
          className="mt-6 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          href="https://console.firebase.google.com/u/0/project/azad-portfolio-91647/overview"
          target="_blank"
          rel="noreferrer"
        >
          Open Firebase Console
        </a>
      </main>
    </div>
  );
}
