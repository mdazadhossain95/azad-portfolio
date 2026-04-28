"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { defaultProjects } from "@/lib/default-content";
import { findBySlug } from "@/lib/firestore-client";
import { Project } from "@/lib/types";
import { ImageGalleryModal } from "@/components/image-gallery-modal";

type ProjectDetailsProps = {
  slug: string;
};

export function ProjectDetailsPage({ slug }: ProjectDetailsProps) {
  const [project, setProject] = useState<Project | null>(
    defaultProjects.find((item) => item.slug === slug) ?? null,
  );
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    findBySlug<Project>("projects", slug)
      .then((item) => {
        if (mounted && item) {
          setProject(item);
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!project) {
    return (
      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
        <p className="text-[var(--muted)]">Project not found.</p>
        <Link href="/projects" className="mt-4 inline-flex text-sm text-[var(--accent)]">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Link href="/projects" className="text-sm text-[var(--accent)]">
        Back to projects
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setGalleryIndex(0)}
            className="relative block aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--card)]"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </button>
          {project.images.length > 1 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {project.images.slice(1).map((image, index) => (
                <button
                  type="button"
                  key={`${project.slug}-${index + 1}`}
                  onClick={() => setGalleryIndex(index + 1)}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)]"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Project Details</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
              {project.title}
            </h1>
            {project.role ? <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Role: {project.role}</p> : null}
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{project.description}</p>
            {project.details ? (
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.details}</p>
            ) : null}
          </div>

          <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6">
            <p className="text-sm font-semibold text-[var(--text)]">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {project.features?.length ? (
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6">
              <p className="text-sm font-semibold text-[var(--text)]">Highlights</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/projects" className="rounded-full border border-[var(--line)] px-4 py-2 text-[var(--text)] transition hover:bg-[var(--card)]">
              All projects
            </Link>
            {project.links.playStore ? (
              <a href={project.links.playStore} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--text)] px-4 py-2 text-[var(--bg)] transition hover:opacity-90">
                Play Store
              </a>
            ) : null}
            {project.links.appStore ? (
              <a href={project.links.appStore} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-[var(--text)] transition hover:bg-[var(--card)]">
                App Store
              </a>
            ) : null}
            {project.links.website ? (
              <a href={project.links.website} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-[var(--text)] transition hover:bg-[var(--card)]">
                Website
              </a>
            ) : null}
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-[var(--text)] transition hover:bg-[var(--card)]">
                Live Link
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {galleryIndex !== null ? (
        <ImageGalleryModal
          images={project.images}
          initialIndex={galleryIndex}
          title={project.title}
          onClose={() => setGalleryIndex(null)}
        />
      ) : null}
    </section>
  );
}

export const ProjectDetails = ProjectDetailsPage;
