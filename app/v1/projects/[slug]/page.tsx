import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailsPage } from "@/components/project-details";
import { defaultProjects } from "@/lib/default-content";
import { Suspense } from "react";
import { CaseStudy } from "@/lib/types";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ProjectDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  return {
    title: `${project?.title ?? slug.replaceAll("-", " ")} | V1 Project | Azad Portfolio`,
    description: project?.summary,
    alternates: {
      canonical: `https://azadhossain.dev/v1/projects/${slug}`,
    },
  };
}

export default async function V1ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--line)] border-t-[var(--accent)]" />
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
          Loading case study...
        </p>
      </div>
    }>
      <ProjectDetailsPage project={project} baseUrl="/v1/projects" />
    </Suspense>
  );
}
