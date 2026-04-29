"use client";

import { useEffect, useMemo, useState } from "react";
import { ProjectGrid } from "@/components/project-grid";
import { defaultProjects } from "@/lib/default-content";
import { watchCollection } from "@/lib/firestore-client";
import { Project } from "@/lib/types";

type LiveProjectsProps = {
  featuredOnly?: boolean;
  limit?: number;
};

export function LiveProjects({ featuredOnly = false, limit }: LiveProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    const unsubscribe = watchCollection<Project>("projects", (items) => {
      if (items.length === 0) {
        setProjects(defaultProjects);
        return;
      }

      // Firestore can be partial during content updates. Merge with local catalog so no project disappears.
      const itemBySlug = new Map(items.map((item) => [item.slug, item]));
      const merged = [
        ...items,
        ...defaultProjects.filter((project) => !itemBySlug.has(project.slug)),
      ];

      setProjects(merged);
    });

    return unsubscribe;
  }, []);

  const visibleProjects = useMemo(
    () => {
      const base = featuredOnly ? projects.filter((item) => item.featured) : projects;
      return typeof limit === "number" ? base.slice(0, limit) : base;
    },
    [featuredOnly, limit, projects],
  );

  return <ProjectGrid projects={visibleProjects} groupByCategory={!featuredOnly} />;
}
