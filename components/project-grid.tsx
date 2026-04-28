import { ProjectCard } from "@/components/project-card";
import { categoryOrder, getProjectMeta, type ProjectCategory } from "@/lib/project-taxonomy";
import { Project } from "@/lib/types";

type ProjectGridProps = {
  projects: Project[];
  groupByCategory?: boolean;
};

function sortProjects(items: Project[]) {
  return [...items].sort((a, b) => {
    const aMeta = getProjectMeta(a);
    const bMeta = getProjectMeta(b);
    return aMeta.priority - bMeta.priority || a.title.localeCompare(b.title);
  });
}

export function ProjectGrid({ projects, groupByCategory = false }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--line)] p-10 text-center text-sm text-[var(--muted)]">
        No projects available.
      </div>
    );
  }

  const sortedProjects = sortProjects(projects);

  if (!groupByCategory) {
    return (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }

  const grouped = sortedProjects.reduce<Record<ProjectCategory, Project[]>>((acc, project) => {
    const { category } = getProjectMeta(project);
    acc[category].push(project);
    return acc;
  }, {
    "FinTech & Payments": [],
    "AI & Smart Apps": [],
    "Social / Utility Apps": [],
    "E-commerce & Lifestyle": [],
  });

  return (
    <div className="space-y-10">
      {categoryOrder.map((category) => (
        grouped[category].length > 0 ? (
          <section key={category} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text)] md:text-2xl">{category}</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {grouped[category].map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ) : null
      ))}
    </div>
  );
}
