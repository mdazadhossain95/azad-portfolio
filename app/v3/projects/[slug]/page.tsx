import { notFound } from "next/navigation";
import { defaultProjects } from "@/lib/default-content";
import { CaseStudy } from "@/lib/types";
import { V3ProjectDetails } from "@/components/portfolio/v3/v3-project-details";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  return getSharedMetadata(
    `${project?.title ?? "Project"} | V3`,
    project?.summary ?? "Project details notebook.",
    `/v3/projects/${slug}`,
    true
  );
}

export default async function V3ProjectDetailPage(props: Props) {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <V3ProjectDetails project={project} />;
}
