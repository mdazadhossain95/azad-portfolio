"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { defaultProjects } from "@/lib/default-content";
import { findBySlug } from "@/lib/firestore-client";
import { Project } from "@/lib/types";
import { ImageGalleryModal } from "./image-gallery-modal";

type ProjectDetailsProps = {
  slug: string;
};

export function ProjectDetailsPage({ slug }: ProjectDetailsProps) {
  const [project, setProject] = useState<Project | null>(
    defaultProjects.find((item) => item.slug === slug) ?? null,
  );
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  useEffect(() => {
    setActiveSlide(0);
  }, [project?.slug]);

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

  const hasManyImages = project.images.length > 1;
  const prevSlide = () => {
    if (!hasManyImages) return;
    setActiveSlide((i) => (i - 1 + project.images.length) % project.images.length);
  };

  const nextSlide = () => {
    if (!hasManyImages) return;
    setActiveSlide((i) => (i + 1) % project.images.length);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Link href="/projects" className="text-sm text-[var(--accent)]">
        Back to projects
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="surface-card relative aspect-[4/3] w-full overflow-hidden">
            <button
              type="button"
              onClick={() => setGalleryIndex(activeSlide)}
              className="relative block h-full w-full"
            >
              <Image
                src={project.images[activeSlide]}
                alt={`${project.title} screenshot ${activeSlide + 1}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
            </button>

            {hasManyImages ? (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white transition hover:bg-black/70"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white transition hover:bg-black/70"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2 py-1">
                  {project.images.map((_, index) => (
                    <button
                      key={`${project.slug}-dot-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        index === activeSlide ? "bg-white" : "bg-white/45 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {hasManyImages ? (
            <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
              {project.images.map((image, index) => (
                <button
                  type="button"
                  key={`${project.slug}-${index}`}
                  onClick={() => setActiveSlide(index)}
                  className={`surface-card relative aspect-[4/3] overflow-hidden border-2 transition ${
                    index === activeSlide ? "border-[var(--accent)]" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 20vw, 33vw"
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

          <div className="surface-card p-6">
            <p className="text-sm font-semibold text-[var(--text)]">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span key={item} className="soft-chip text-xs text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {project.features?.length ? (
            <div className="surface-card p-6">
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
            <Link href="/projects" className="btn-secondary px-4 py-2 text-[var(--text)]">
              All projects
            </Link>
            {project.links.playStore ? (
              <a href={project.links.playStore} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-[var(--bg)]">
                Play Store
              </a>
            ) : null}
            {project.links.appStore ? (
              <a href={project.links.appStore} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-[var(--text)]">
                App Store
              </a>
            ) : null}
            {project.links.website ? (
              <a href={project.links.website} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-[var(--text)]">
                Website
              </a>
            ) : null}
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-[var(--text)]">
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
