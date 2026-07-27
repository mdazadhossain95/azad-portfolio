export type V2RuntimeDebugSnapshot = {
  activeDestination: string;
  progress: number;
  localProgress: number;
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  earthRotation: [number, number, number];
  drawCalls: number;
  triangles: number;
  textures: number;
  dpr: number;
  fps: number;
  qualityTier: "high" | "standard" | "tablet" | "mobile";
};

type EarthRuntime = {
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  velocityX: number;
  velocityY: number;
  dragging: boolean;
  interactionEnabled: boolean;
  lastInteraction: number;
};

export const v2Runtime: {
  journeyProgress: number;
  simplified: boolean;
  earth: EarthRuntime;
  debug: V2RuntimeDebugSnapshot;
} = {
  journeyProgress: 0,
  simplified: false,
  earth: {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    velocityX: 0,
    velocityY: 0,
    dragging: false,
    interactionEnabled: true,
    lastInteraction: 0,
  },
  debug: {
    activeDestination: "earth-orbit",
    progress: 0,
    localProgress: 0,
    cameraPosition: [0, 0, 0],
    cameraTarget: [0, 0, 0],
    earthRotation: [0, 0, 0],
    drawCalls: 0,
    triangles: 0,
    textures: 0,
    dpr: 1,
    fps: 0,
    qualityTier: "standard",
  },
};

export const V2_STATIC_MODE_EVENT = "v2-static-mode-change";
