import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ProjectDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  return {
    title: `${slug.replaceAll("-", " ")} | Project | Azad Portfolio`,
  };
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;
  return <ProjectDetail slug={slug} />;
}
