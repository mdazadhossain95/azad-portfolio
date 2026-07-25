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
    title: `${project?.title ?? slug.replaceAll("-", " ")} | Project | Azad Portfolio`,
    description: project?.summary,
    alternates: {
      canonical: `https://azadhossain.dev/projects/${slug}`,
    },
  };
}

function ProjectJsonLd({ project }: { project: CaseStudy }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: project.coverImage,
    url: `https://azadhossain.dev/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Md Azad Hossain Tutul",
    },
    keywords: project.technologies.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;
  const project = defaultProjects.find((item: CaseStudy) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectJsonLd project={project} />
      <Suspense fallback={<div className="p-8 text-center">Loading case study...</div>}>
        <ProjectDetailsPage project={project} />
      </Suspense>
    </>
  );
}
