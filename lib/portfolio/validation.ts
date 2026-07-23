import { EvidenceLevel } from "@/lib/types";

export function validateClaim(statement: string, level: EvidenceLevel, sourceUrl?: string) {
  if (level === "public" && !sourceUrl) {
    console.warn(`Public claim missing source URL: "${statement}"`);
  }
  return {
    statement,
    level,
    sourceUrl,
    isValid: level !== "unverified" || Boolean(sourceUrl)
  };
}
