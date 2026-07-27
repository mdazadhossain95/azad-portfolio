import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailsPage } from "@/components/project-details";
import { defaultProjects } from "@/lib/default-content";
import { Suspense } from "react";
import { CaseStudy } from "@/lib/types";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ProjectDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  return getSharedMetadata(
    `${project?.title ?? slug.replaceAll("-", " ")} | Project`,
    project?.summary ?? "Project details",
    `/v4/projects/${slug}`
  );
}

export default async function V4ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="p-8 text-center text-[var(--text-muted)]">Loading case study...</div>}>
      <ProjectDetailsPage project={project} baseUrl="/v4/projects" />
    </Suspense>
  );
}
