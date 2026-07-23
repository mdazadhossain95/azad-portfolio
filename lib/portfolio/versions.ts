export type PortfolioVersion = "v1" | "v2" | "v3" | "v4";

export interface VersionInfo {
  id: PortfolioVersion;
  name: string;
  description: string;
  path: string;
}

export const versions: VersionInfo[] = [
  { id: "v1", name: "Corporate FinTech", description: "V1: Enterprise-grade FinTech portfolio.", path: "/v1" },
  { id: "v2", name: "AI & Startups", description: "V2: Fast-paced AI engineering portfolio.", path: "/v2" },
  { id: "v3", name: "DevTools", description: "V3: CLI and DevTools portfolio.", path: "/v3" },
  { id: "v4", name: "Mobile Engineer", description: "V4: Comprehensive Mobile Engineering.", path: "/v4" },
];
