"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { defaultProjects } from "@/lib/default-content";
import { findBySlug } from "@/lib/firestore-client";
import { Project } from "@/lib/types";

type ProjectDetailProps = {
  slug: string;
};

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const [project, setProject] = useState<Project | null>(
    defaultProjects.find((item) => item.slug === slug) ?? null,
  );

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
      <section className="mx-auto w-full max-w-4xl px-5 py-20 md:px-8">
        <p className="text-[var(--muted)]">Project not found.</p>
        <Link href="/projects" className="mt-4 inline-flex text-[var(--accent)]">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-20 md:px-8">
      <Link href="/projects" className="text-sm text-[var(--accent)]">
        Back to projects
      </Link>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">{project.title}</h1>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{project.description}</p>
      <div
        className="mt-8 h-80 rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images[0] ?? ""})` }}
      />
      <div className="mt-7 flex flex-wrap gap-2">
        {project.techStack.map((item) => (
          <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        {project.links.playStore ? (
          <a href={project.links.playStore} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2">
            Play Store
          </a>
        ) : null}
        {project.links.appStore ? (
          <a href={project.links.appStore} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2">
            App Store
          </a>
        ) : null}
        {project.links.live ? (
          <a href={project.links.live} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2">
            Live Link
          </a>
        ) : null}
      </div>
    </section>
  );
}
