import { Project } from "@/lib/types";

export type ProjectCategory =
  | "FinTech & Payments"
  | "AI & Smart Apps"
  | "Social / Utility Apps"
  | "E-commerce & Lifestyle";

export const categoryOrder: ProjectCategory[] = [
  "FinTech & Payments",
  "AI & Smart Apps",
  "Social / Utility Apps",
  "E-commerce & Lifestyle",
];

type ProjectMeta = {
  category: ProjectCategory;
  priority: number;
};

const projectMetaBySlug: Record<string, ProjectMeta> = {
  "nexopay": { category: "FinTech & Payments", priority: 1 },
  "nxfund": { category: "FinTech & Payments", priority: 2 },
  "nexgro": { category: "FinTech & Payments", priority: 3 },
  "ummah-charity": { category: "Social / Utility Apps", priority: 4 },
  "fibervpn": { category: "Social / Utility Apps", priority: 5 },
  "codegopay-individual": { category: "FinTech & Payments", priority: 10 },
  "codegopay-business": { category: "FinTech & Payments", priority: 11 },
  "studygenie-ai": { category: "AI & Smart Apps", priority: 12 },
  "nxmart": { category: "E-commerce & Lifestyle", priority: 13 },
  "nexo-mart": { category: "E-commerce & Lifestyle", priority: 14 },
  "runava": { category: "Social / Utility Apps", priority: 15 },
  "kream-suger": { category: "Social / Utility Apps", priority: 16 },
  "nexflix": { category: "E-commerce & Lifestyle", priority: 17 },
};

export function getProjectMeta(project: Project): ProjectMeta {
  return projectMetaBySlug[project.slug] ?? {
    category: "Social / Utility Apps",
    priority: 999,
  };
}

export function getPrimaryProjectLink(project: Project): string | null {
  return project.links.playStore ?? project.links.appStore ?? project.links.website ?? project.links.live ?? null;
}
