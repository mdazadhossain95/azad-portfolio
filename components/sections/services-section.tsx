import Link from "next/link";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 space-y-4">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          04. Services
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          How I can help your product
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="surface-card flex flex-col p-6 md:p-8 hover:border-[var(--accent)]/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[var(--text)]">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {service.description}
            </p>
            
            {/* Upwork Packages Grid */}
            {service.packages && service.packages.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[var(--line)]">
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)] mb-3">
                  Upwork Service Catalogs
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.packages.map((pkg, idx) => (
                    <a
                      key={idx}
                      href={pkg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:border-[#14A800] hover:text-[#14A800]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M18.56 5.91a4.91 4.91 0 0 0-4.91 4.9v4.29a3.73 3.73 0 1 1-7.46 0V5.16H2.94v9.94a7.07 7.07 0 1 0 14.13 0v-4.3A1.56 1.56 0 1 1 20.19 12a1.57 1.57 0 0 1-.78 1.34l2.13 2.14a4.88 4.88 0 0 0 1.95-3.87 4.91 4.91 0 0 0-4.93-5.7z"/>
                      </svg>
                      {pkg.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
