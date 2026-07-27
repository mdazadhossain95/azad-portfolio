export type V2Vector3 = readonly [number, number, number];

export type V2CameraState = {
  readonly position: V2Vector3;
  readonly target: V2Vector3;
  readonly fov: number;
};

export type V2SafeZone = {
  readonly content: readonly [number, number];
  readonly visual: readonly [number, number];
};

export type V2ViewportConfiguration = {
  readonly scaleMultiplier: number;
  readonly positionOffset: V2Vector3;
  readonly cameraMode: "cinematic" | "static";
  readonly particleMultiplier: number;
};

export type V2DestinationConfig = {
  readonly id: string;
  readonly section: string;
  readonly sceneType: "intro" | "destination";
  readonly celestialBody: "galaxy" | "earth" | "moon" | "mars" | "jupiter" | "neptune" | "saturn" | "sun";
  readonly worldPosition: V2Vector3;
  readonly worldScale: number;
  readonly rotation: V2Vector3;
  readonly rotationSpeed: number;
  readonly visibleFrom: number;
  readonly visibleUntil: number;
  readonly camera: {
    readonly approach: V2CameraState;
    readonly reading: V2CameraState;
    readonly departure: V2CameraState;
  };
  readonly scroll: {
    readonly readingStart: number;
    readonly readingEnd: number;
  };
  readonly lighting: {
    readonly ambient: number;
    readonly dominantIntensity: number;
    readonly dominantPosition: V2Vector3;
  };
  readonly environment: {
    readonly color: string;
    readonly haze: string;
  };
  readonly atmosphere: {
    readonly density: number;
    readonly accent: string;
  };
  readonly postProcessing: {
    readonly bloom: number;
    readonly exposure: number;
  };
  readonly journeyPathState: "hidden" | "approach" | "active" | "complete";
  readonly fallbackArtwork: string;
  readonly safeZone: V2SafeZone;
  readonly desktop: V2ViewportConfiguration;
  readonly tablet: V2ViewportConfiguration;
  readonly mobile: V2ViewportConfiguration;
  readonly reducedMotion: V2ViewportConfiguration;
  readonly assetsToPreload: readonly string[];
};

const CINEMATIC_DESKTOP = {
  scaleMultiplier: 1,
  positionOffset: [0, 0, 0],
  cameraMode: "cinematic",
  particleMultiplier: 1,
} as const;

const STATIC_TABLET = {
  scaleMultiplier: 0.88,
  positionOffset: [1.05, -3.2, 0],
  cameraMode: "static",
  particleMultiplier: 0.45,
} as const;

const STATIC_MOBILE = {
  scaleMultiplier: 0.74,
  positionOffset: [1.55, -3.05, 0],
  cameraMode: "static",
  particleMultiplier: 0.2,
} as const;

const REDUCED = {
  scaleMultiplier: 0.72,
  positionOffset: [0, 0, 0],
  cameraMode: "static",
  particleMultiplier: 0,
} as const;

const GALAXY_TABLET = {
  scaleMultiplier: 0.45,
  positionOffset: [0, 0, 0],
  cameraMode: "static",
  particleMultiplier: 0.4,
} as const;

const GALAXY_MOBILE = {
  scaleMultiplier: 0.32,
  positionOffset: [0, 0.8, 0],
  cameraMode: "static",
  particleMultiplier: 0.18,
} as const;

const RIGHT_VISUAL_ZONE = {
  content: [6, 48],
  visual: [52, 110],
} as const;

const LEFT_VISUAL_ZONE = {
  content: [52, 94],
  visual: [-10, 48],
} as const;

/**
 * The only source of spatial truth for V2. Components consume this data;
 * they do not author their own camera positions, scales, or safe zones.
 */
export const V2_SCENE_CONFIG = {
  universeIntro: {
    id: "milky-way-entry",
    section: "#universe-intro",
    sceneType: "intro",
    celestialBody: "galaxy",
    worldPosition: [8.5, 0.8, 15],
    worldScale: 0.62,
    rotation: [-1.22, 0, 0.18],
    rotationSpeed: 0.002,
    visibleFrom: 0,
    visibleUntil: 0.08,
    camera: {
      approach: { position: [0, 7.5, 39], target: [1.5, 0, 15], fov: 46 },
      reading: { position: [0, 5.5, 34], target: [1.8, 0, 15], fov: 44 },
      departure: { position: [0, 1.2, 15], target: [1.2, 0, 0], fov: 43 },
    },
    scroll: { readingStart: 0.12, readingEnd: 0.58 },
    lighting: {
      ambient: 0.18,
      dominantIntensity: 1.4,
      dominantPosition: [5, 7, 25],
    },
    environment: { color: "#020711", haze: "#8B5CF6" },
    atmosphere: { density: 0.2, accent: "#8B5CF6" },
    postProcessing: { bloom: 0.18, exposure: 1.02 },
    journeyPathState: "hidden",
    fallbackArtwork: "/textures/2k_stars_milky_way.jpg",
    safeZone: RIGHT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: GALAXY_TABLET,
    mobile: GALAXY_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: ["/textures/2k_stars_milky_way.jpg"],
  },
  earth: {
    id: "earth-orbit",
    section: "#hero",
    sceneType: "destination",
    celestialBody: "earth",
    worldPosition: [4.15, -0.15, 0],
    worldScale: 2.55,
    // Open over South Asia so the verified Chattogram city marker is visible
    // on arrival; visitors can still rotate freely around the full globe.
    rotation: [0.08, -3.55, -0.05],
    rotationSpeed: 0.018,
    visibleFrom: 0.055,
    visibleUntil: 0.17,
    camera: {
      approach: { position: [0, 0.1, 9.4], target: [1.25, -0.05, 0], fov: 42 },
      reading: { position: [0, 0, 8.35], target: [1.35, -0.08, 0], fov: 42 },
      departure: { position: [0.1, 0.1, -3.5], target: [2.2, -0.1, -2], fov: 44 },
    },
    scroll: { readingStart: 0.16, readingEnd: 0.72 },
    lighting: {
      ambient: 0.34,
      dominantIntensity: 3.1,
      dominantPosition: [8, 4.5, 7],
    },
    environment: { color: "#020711", haze: "#0B1F3A" },
    atmosphere: { density: 0.14, accent: "#38BDF8" },
    postProcessing: { bloom: 0.08, exposure: 1.12 },
    journeyPathState: "approach",
    fallbackArtwork: "/textures/planets/2k_earth_daymap.jpg",
    safeZone: RIGHT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: [
      "/textures/planets/2k_earth_daymap.jpg",
      "/textures/planets/2k_earth_nightmap.jpg",
      "/textures/planets/2k_earth_clouds.jpg",
      "/textures/planets/2k_earth_normal.jpg",
      "/textures/planets/2k_earth_specular.jpg",
    ],
  },
  moon: {
    id: "moon-flyby",
    section: "#about",
    sceneType: "destination",
    celestialBody: "moon",
    worldPosition: [-4.6, -0.25, -21],
    worldScale: 1.15,
    rotation: [0.04, 0.4, 0],
    rotationSpeed: 0.008,
    visibleFrom: 0.1,
    visibleUntil: 0.34,
    camera: {
      approach: { position: [0.1, 0.1, -8], target: [-1.2, 0, -21], fov: 44 },
      reading: { position: [0, 0, -13.5], target: [-1.35, -0.15, -21], fov: 43 },
      departure: { position: [0.25, 0.15, -28], target: [-1.7, 0, -25], fov: 44 },
    },
    scroll: { readingStart: 0.24, readingEnd: 0.7 },
    lighting: { ambient: 0.12, dominantIntensity: 2.5, dominantPosition: [8, 4.5, 7] },
    environment: { color: "#020711", haze: "#102A4C" },
    atmosphere: { density: 0.08, accent: "#A9B8FF" },
    postProcessing: { bloom: 0.04, exposure: 1.06 },
    journeyPathState: "active",
    fallbackArtwork: "/textures/planets/2k_moon.jpg",
    safeZone: LEFT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: ["/textures/planets/2k_moon.jpg"],
  },
  mars: {
    id: "mars-trajectory",
    section: "#experience",
    sceneType: "destination",
    celestialBody: "mars",
    worldPosition: [5.15, -0.15, -46],
    worldScale: 1.85,
    rotation: [0.03, -0.55, 0],
    rotationSpeed: 0.012,
    visibleFrom: 0.24,
    visibleUntil: 0.5,
    camera: {
      approach: { position: [0, 0.1, -30], target: [1.35, 0, -46], fov: 44 },
      reading: { position: [0, 0, -37], target: [1.5, -0.1, -46], fov: 43 },
      departure: { position: [-0.2, 0.15, -58], target: [1.8, 0, -52], fov: 44 },
    },
    scroll: { readingStart: 0.2, readingEnd: 0.78 },
    lighting: { ambient: 0.16, dominantIntensity: 2.7, dominantPosition: [8, 4.5, 7] },
    environment: { color: "#030711", haze: "#7F1D1D" },
    atmosphere: { density: 0.13, accent: "#7F1D1D" },
    postProcessing: { bloom: 0.05, exposure: 1.08 },
    journeyPathState: "active",
    fallbackArtwork: "/textures/planets/2k_mars.jpg",
    safeZone: RIGHT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: ["/textures/planets/2k_mars.jpg"],
  },
  jupiter: {
    id: "jupiter-system",
    section: "#projects",
    sceneType: "destination",
    celestialBody: "jupiter",
    worldPosition: [-7.3, -0.4, -76],
    worldScale: 5.1,
    rotation: [0.02, 0.85, 0],
    rotationSpeed: 0.005,
    visibleFrom: 0.42,
    visibleUntil: 0.67,
    camera: {
      approach: { position: [0, 0.1, -61], target: [-2, 1.2, -76], fov: 46 },
      reading: { position: [0, 0, -66], target: [-2.2, 1.1, -76], fov: 44 },
      departure: { position: [0.2, 0.1, -90], target: [-2.4, 0.5, -84], fov: 45 },
    },
    scroll: { readingStart: 0.18, readingEnd: 0.76 },
    lighting: { ambient: 0.2, dominantIntensity: 2.9, dominantPosition: [8, 4.5, 7] },
    environment: { color: "#030711", haze: "#243B63" },
    atmosphere: { density: 0.12, accent: "#A9B8FF" },
    postProcessing: { bloom: 0.06, exposure: 1.08 },
    journeyPathState: "active",
    fallbackArtwork: "/textures/planets/2k_jupiter.jpg",
    safeZone: LEFT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: ["/textures/planets/2k_jupiter.jpg"],
  },
  deepSpace: {
    id: "deep-space",
    section: "#transmissions",
    sceneType: "destination",
    celestialBody: "neptune",
    worldPosition: [5.35, 0.2, -106],
    worldScale: 3.35,
    rotation: [0, 0.2, 0],
    rotationSpeed: 0.003,
    visibleFrom: 0.58,
    visibleUntil: 0.8,
    camera: {
      approach: { position: [0, 0.1, -92], target: [1.4, 0, -106], fov: 45 },
      reading: { position: [0, 0, -97], target: [1.55, 0.05, -106], fov: 44 },
      departure: { position: [-0.1, 0.1, -119], target: [1.8, 0, -114], fov: 45 },
    },
    scroll: { readingStart: 0.2, readingEnd: 0.72 },
    lighting: { ambient: 0.22, dominantIntensity: 2.3, dominantPosition: [8, 4.5, 7] },
    environment: { color: "#020711", haze: "#8B5CF6" },
    atmosphere: { density: 0.18, accent: "#8B5CF6" },
    postProcessing: { bloom: 0.12, exposure: 1.04 },
    journeyPathState: "active",
    fallbackArtwork: "/textures/planets/2k_neptune.jpg",
    safeZone: RIGHT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: ["/textures/planets/2k_neptune.jpg"],
  },
  saturn: {
    id: "saturn-system",
    section: "#capabilities",
    sceneType: "destination",
    celestialBody: "saturn",
    worldPosition: [-6.4, -0.35, -141],
    worldScale: 4.55,
    rotation: [0.08, 0.3, -0.16],
    rotationSpeed: 0.006,
    visibleFrom: 0.72,
    visibleUntil: 0.93,
    camera: {
      approach: { position: [0.1, 0.1, -122], target: [-1.6, -0.1, -141], fov: 46 },
      reading: { position: [0, 0, -130], target: [-1.9, -0.25, -141], fov: 44 },
      departure: { position: [0, -0.1, -154], target: [-2.1, -0.2, -149], fov: 45 },
    },
    scroll: { readingStart: 0.2, readingEnd: 0.76 },
    lighting: { ambient: 0.2, dominantIntensity: 2.5, dominantPosition: [8, 4.5, 7] },
    environment: { color: "#020711", haze: "#D4A62A" },
    atmosphere: { density: 0.1, accent: "#A9B8FF" },
    postProcessing: { bloom: 0.06, exposure: 1.08 },
    journeyPathState: "active",
    fallbackArtwork: "/textures/planets/2k_saturn.jpg",
    safeZone: LEFT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: [
      "/textures/planets/2k_saturn.jpg",
      "/textures/planets/2k_saturn_ring_alpha.png",
    ],
  },
  solarContact: {
    id: "solar-horizon",
    section: "#contact",
    sceneType: "destination",
    celestialBody: "sun",
    worldPosition: [0, -38.2, -300],
    worldScale: 2,
    rotation: [0, 0, 0],
    rotationSpeed: 0,
    visibleFrom: 0.88,
    visibleUntil: 1,
    camera: {
      approach: { position: [0, 0, -157], target: [0, -3.5, -260], fov: 45 },
      reading: { position: [0, -0.2, -169], target: [0, -4.2, -300], fov: 43 },
      departure: { position: [0, -0.2, -174], target: [0, -4.2, -300], fov: 43 },
    },
    scroll: { readingStart: 0.2, readingEnd: 0.86 },
    lighting: { ambient: 0.14, dominantIntensity: 2, dominantPosition: [0, -4, -260] },
    environment: { color: "#020711", haze: "#D4A62A" },
    atmosphere: { density: 0.08, accent: "#D4A62A" },
    postProcessing: { bloom: 0.1, exposure: 1.02 },
    journeyPathState: "complete",
    fallbackArtwork: "/textures/sun.webp",
    safeZone: RIGHT_VISUAL_ZONE,
    desktop: CINEMATIC_DESKTOP,
    tablet: STATIC_TABLET,
    mobile: STATIC_MOBILE,
    reducedMotion: REDUCED,
    assetsToPreload: ["/textures/sun.webp"],
  },
} as const satisfies Record<string, V2DestinationConfig>;

export const V2_SCENES = Object.values(V2_SCENE_CONFIG);
