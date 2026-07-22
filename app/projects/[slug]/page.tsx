import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailsPage } from "@/components/project-details";
import { defaultProjects } from "@/lib/default-content";
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
    title: `${project?.title ?? slug.replaceAll("-", " ")} | Project | Azad Portfolio`,
    description: project?.summary,
  };
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsPage project={project} />;
}
