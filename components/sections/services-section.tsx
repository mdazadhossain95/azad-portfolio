import Link from "next/link";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 space-y-4">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          03. Services
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          How I can help your product
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="surface-card surface-card-hover p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-[var(--text)]">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {service.description}
            </p>
            <Link
              href={`/projects/${service.caseStudySlug}`}
              className="mt-5 inline-flex items-center text-sm font-medium text-[var(--accent)] transition hover:underline"
            >
              See related case study →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
