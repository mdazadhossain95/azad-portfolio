import { CaseStudy } from "@/lib/types";

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

export function getPrimaryProjectLink(project: CaseStudy): string | null {
  return project.links.playStore ?? project.links.appStore ?? project.links.website ?? project.links.live ?? null;
}
