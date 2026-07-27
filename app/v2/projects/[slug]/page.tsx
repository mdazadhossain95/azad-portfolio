import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { V2ProjectDetail } from "@/components/portfolio/v2/v2-project-detail";
import type { CaseStudy } from "@/lib/types";

type V2ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: V2ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item: CaseStudy) => item.slug === slug);

  return {
    title: `${project?.title ?? slug.replaceAll("-", " ")} | V2 Project | Azad Portfolio`,
    description: project?.summary,
    alternates: {
      canonical: `https://azadhossain.dev/projects/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function V2ProjectDetailPage({
  params,
}: V2ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item: CaseStudy) => item.slug === slug);

  if (!project) notFound();

  return <V2ProjectDetail project={project} />;
}
