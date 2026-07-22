import { ProjectGrid } from "@/components/project-grid";
import { defaultProjects } from "@/lib/default-content";

type LiveProjectsProps = {
  featuredOnly?: boolean;
  limit?: number;
};

export function LiveProjects({ featuredOnly = false, limit }: LiveProjectsProps) {
  const visibleProjects = (() => {
    const base = featuredOnly ? defaultProjects.filter((item) => item.featured) : defaultProjects;
    return typeof limit === "number" ? base.slice(0, limit) : base;
  })();

  return <ProjectGrid projects={visibleProjects} groupByCategory={!featuredOnly} />;
}
