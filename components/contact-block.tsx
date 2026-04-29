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
    <section className="surface-card space-y-6 p-8">

      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-[var(--text)]">Let&apos;s work together</h3>
        <p className="text-sm leading-6 text-[var(--muted)] max-w-lg">
          Have a mobile app idea or an existing product that needs work? Reach out — I respond within 24 hours.
        </p>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${settings.email}`}
          className="btn-primary gap-2 px-5 py-2.5 text-sm font-medium"
        >
          <span>✉</span> Email me
        </a>
        <a
          href="https://wa.me/8801711728799"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary gap-2 px-5 py-2.5 text-sm font-medium"
        >
          <span>💬</span> WhatsApp
        </a>
        <a
          href={settings.upwork}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary gap-2 px-5 py-2.5 text-sm font-medium"
        >
          Hire on Upwork ↗
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--line)]" />

      {/* Social links */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-[var(--muted)]">Find me on</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.github} target="_blank" rel="noreferrer">GitHub</a>
          {settings.medium && (
            <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.medium} target="_blank" rel="noreferrer">Medium</a>
          )}
          {settings.stackoverflow && (
            <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.stackoverflow} target="_blank" rel="noreferrer">Stack Overflow</a>
          )}
          <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
        </div>
      </div>

    </section>
  );
}
