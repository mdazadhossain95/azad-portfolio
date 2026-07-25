import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/content/projects";

const rotations = ["-2deg", "1.5deg", "-1deg", "2deg"];

export function V3ProductSketches() {
  const sketches = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <section id="sketches" className="mx-auto w-full max-w-5xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Product sketches"
        title="Shipped screens, taped in"
        description="Real product screenshots from released apps, with a short note on the decision behind each."
        action={
          <Link href="/projects" className="btn-secondary px-5 py-2.5 text-xs font-medium">
            All projects ↗
          </Link>
        }
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {sketches.map((project, index) => (
          <div key={project.id} style={{ transform: `rotate(${rotations[index % rotations.length]})` }}>
            <Link
              href={`/projects/${project.slug}`}
              className="block bg-[var(--card)] p-3 pb-6 shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="font-handwriting mt-3 text-xl" style={{ color: "var(--v3-gold)" }}>
                {project.shortTitle ?? project.title}
              </p>
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
              {project.technicalDecisions[0]?.explanation ?? project.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
