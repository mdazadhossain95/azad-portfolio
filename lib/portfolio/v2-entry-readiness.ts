"use client";

export const V2_ENTRY_READINESS_EVENT = "v2:entry-readiness";
export const V2_ENTRY_FAILURE_EVENT = "v2:entry-failure";

export type V2EntryReadinessKey =
  | "html"
  | "fonts"
  | "visual"
  | "webglRuntime"
  | "earthPoster"
  | "earthTextures"
  | "heroInteractive";

const WEIGHTS: Record<V2EntryReadinessKey, number> = {
  html: 15,
  fonts: 10,
  visual: 10,
  webglRuntime: 20,
  earthPoster: 10,
  earthTextures: 20,
  heroInteractive: 15,
};

const readiness = new Set<V2EntryReadinessKey>();
let lastFailure: "webgl" | "texture" | "context" | null = null;

export function markV2EntryReady(key: V2EntryReadinessKey) {
  if (readiness.has(key)) return;
  readiness.add(key);
  window.dispatchEvent(
    new CustomEvent(V2_ENTRY_READINESS_EVENT, {
      detail: getV2EntryReadiness(),
    }),
  );
}

export function getV2EntryReadiness() {
  const progress = Object.entries(WEIGHTS).reduce(
    (total, [key, weight]) =>
      total + (readiness.has(key as V2EntryReadinessKey) ? weight : 0),
    0,
  );
  return {
    progress,
    ready: [...readiness],
    failure: lastFailure,
  };
}

export function reportV2EntryFailure(reason: "webgl" | "texture" | "context") {
  lastFailure = reason;
  window.dispatchEvent(
    new CustomEvent(V2_ENTRY_FAILURE_EVENT, { detail: { reason } }),
  );
}
