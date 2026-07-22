"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  summary: string;
  startDate: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  summary: "",
  startDate: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (!form.summary.trim()) next.summary = "Project summary is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Project inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany/Product: ${form.company || "N/A"}\nProject Type: ${form.projectType || "N/A"}\nExpected Start: ${form.startDate || "N/A"}\n\nSummary:\n${form.summary}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            05. What’s next?
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Let’s build something reliable.
          </h2>
          <p className="text-base leading-8 text-[var(--text-muted)]">
            I’m available for Flutter development, existing-app improvement, FinTech and payment features, production fixes, and long-term maintenance.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.links.upwork}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-sm font-medium"
            >
              Discuss Your Project on Upwork
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-secondary px-6 py-3 text-sm font-medium"
            >
              Send an Email
            </a>
          </div>
        </div>

        <div className="surface-card p-6 md:p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <p className="text-lg font-semibold text-[var(--text)]">Thanks for reaching out.</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Your email client should open with a draft message.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="field"
                    placeholder="Your name"
                  />
                  {errors.name ? <p className="mt-1 text-xs text-[var(--danger)]">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="field"
                    placeholder="you@example.com"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-[var(--danger)]">{errors.email}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Company or product</label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="field"
                  placeholder="Company or product name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Project type</label>
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="field"
                  >
                    <option value="">Select one</option>
                    <option value="New Flutter app">New Flutter app</option>
                    <option value="Existing app improvement">Existing app improvement</option>
                    <option value="FinTech / payment features">FinTech / payment features</option>
                    <option value="Release / maintenance">Release / maintenance</option>
                    <option value="AI-powered features">AI-powered features</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="startDate" className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Expected start date</label>
                  <input
                    id="startDate"
                    type="date"
                    value={form.startDate}
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="summary" className="mb-1 block text-xs font-medium text-[var(--text-secondary)]">Project summary</label>
                <textarea
                  id="summary"
                  rows={4}
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  className="field resize-none"
                  placeholder="Tell me about your project, goals, and timeline."
                />
                {errors.summary ? <p className="mt-1 text-xs text-[var(--danger)]">{errors.summary}</p> : null}
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-sm font-medium">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
