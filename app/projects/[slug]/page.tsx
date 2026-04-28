import type { Metadata } from "next";
import { ProjectDetailsPage } from "@/components/project-details";
import { portfolioProjects } from "@/lib/projects-catalog";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ProjectDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  return {
    title: `${project?.title ?? slug.replaceAll("-", " ")} | Project | Azad Portfolio`,
  };
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;
  return <ProjectDetailsPage slug={slug} />;
}
