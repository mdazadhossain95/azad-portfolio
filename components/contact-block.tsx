"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { defaultSettings } from "@/lib/default-content";
import { db } from "@/lib/firebase-client";
import { Settings } from "@/lib/types";

export function ContactBlock() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    if (!db) {
      return;
    }

    const unsubscribe = onSnapshot(doc(db, "settings", "main"), (snapshot) => {
      if (snapshot.exists()) {
        setSettings({
          id: snapshot.id,
          ...(snapshot.data() as Omit<Settings, "id">),
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <section className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-7">
      <h3 className="text-xl font-semibold text-[var(--text)]">Let&apos;s build your next app</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        Need fintech, healthcare, or AI-powered Flutter app with strong architecture and clean delivery pipeline.
      </p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href={`mailto:${settings.email}`}>
          {settings.email}
        </a>
        <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href="https://wa.me/8801711728799" target="_blank" rel="noreferrer">
          WhatsApp: +8801711728799
        </a>
        <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href={settings.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href={settings.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href={settings.upwork} target="_blank" rel="noreferrer">
          Upwork
        </a>
        {settings.stackoverflow && (
          <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href={settings.stackoverflow} target="_blank" rel="noreferrer">
            Stack Overflow
          </a>
        )}
        {settings.medium && (
          <a className="rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--card)]" href={settings.medium} target="_blank" rel="noreferrer">
            Medium
          </a>
        )}
        <a href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing" target="_blank" rel="noreferrer" className="rounded-full bg-[var(--text)] px-4 py-2 text-[var(--bg)] transition hover:opacity-90">
          View resume
        </a>
      </div>
    </section>
  );
}
