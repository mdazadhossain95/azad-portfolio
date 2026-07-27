export type PortfolioVersion = "v1" | "v2" | "v3" | "v4";

export interface VersionInfo {
  id: PortfolioVersion;
  name: string;
  description: string;
  path: string;
}

export const versions: VersionInfo[] = [
  { id: "v1", name: "Classic", description: "V1: Enterprise-grade FinTech portfolio.", path: "/v1" },
  { id: "v2", name: "Orbit", description: "V2: Immersive cosmic and design-led portfolio.", path: "/v2" },
  { id: "v3", name: "Notebook", description: "V3: Personality, process, and product sketches.", path: "/v3" },
  { id: "v4", name: "Terminal", description: "V4: Comprehensive Mobile Engineering.", path: "/v4" },
];

export function getVersionLabel(version: VersionInfo, current: PortfolioVersion) {
  return current === version.id ? `V${version.id.slice(1).toUpperCase()} ${version.name}` : version.id.toUpperCase();
}
