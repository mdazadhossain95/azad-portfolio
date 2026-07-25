import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Azad Portfolio",
  description: "Production Flutter, full-stack, FinTech, and AI-feature development services.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <Link
        href="/"
        className="group mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)]/50 hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to home
      </Link>

      <section className="w-full space-y-10 py-12 md:py-16">
        <SectionTitle
          eyebrow="Services"
          title="Ways to work together"
          description="Each service links to a related shipped case study, not a generic promise."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="surface-card surface-card-hover flex flex-col gap-3 p-6"
            >
              <h2 className="text-lg font-semibold text-[var(--text)]">{service.title}</h2>
              <p className="flex-1 text-sm leading-6 text-[var(--text-muted)]">{service.description}</p>
              <span className="text-sm font-medium text-[var(--accent)]">View details →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
