"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultProjects } from "@/lib/default-content";
import { watchCollection } from "@/lib/firestore-client";
import { Project } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";

type LiveProjectsProps = {
  featuredOnly?: boolean;
};

export function LiveProjects({ featuredOnly = false }: LiveProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    const unsubscribe = watchCollection<Project>("projects", (items) => {
      if (items.length > 0) {
        setProjects(items);
      }
    });

    return unsubscribe;
  }, []);

  const visibleProjects = useMemo(
    () => (featuredOnly ? projects.filter((item) => item.featured) : projects),
    [featuredOnly, projects],
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
