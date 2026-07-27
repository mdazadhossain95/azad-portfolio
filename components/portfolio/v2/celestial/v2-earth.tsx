"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { V2_SCENE_CONFIG } from "@/lib/portfolio/v2-scene-config";
import { v2Runtime } from "@/lib/portfolio/v2-runtime";
import { markV2EntryReady } from "@/lib/portfolio/v2-entry-readiness";

const NIGHT_VERTEX = `
  varying vec2 vUv;
  varying vec3 vWorldNormal;

  void main() {
    vUv = uv;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const NIGHT_FRAGMENT = `
  uniform sampler2D nightMap;
  uniform vec3 sunDirection;
  varying vec2 vUv;
  varying vec3 vWorldNormal;

  void main() {
    vec3 lights = texture2D(nightMap, vUv).rgb;
    float luminance = dot(lights, vec3(0.2126, 0.7152, 0.0722));
    float facingSun = dot(normalize(vWorldNormal), normalize(sunDirection));
    float nightSide = smoothstep(0.12, -0.28, facingSun);
    float alpha = nightSide * smoothstep(0.035, 0.5, luminance) * 0.95;
    gl_FragColor = vec4(lights * 1.45, alpha);
  }
`;

const ATMOSPHERE_VERTEX = `
  varying vec3 vWorldNormal;
  varying vec3 vViewDirection;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewDirection = normalize(cameraPosition - worldPosition.xyz);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const ATMOSPHERE_FRAGMENT = `
  uniform vec3 sunDirection;
  varying vec3 vWorldNormal;
  varying vec3 vViewDirection;

  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDirection = normalize(vViewDirection);
    float fresnel = pow(1.0 - max(0.0, dot(normal, viewDirection)), 2.65);
    float daylight = smoothstep(-0.35, 0.5, dot(normal, normalize(sunDirection)));
    vec3 nightRim = vec3(0.025, 0.16, 0.46);
    vec3 dayRim = vec3(0.18, 0.68, 1.0);
    vec3 atmosphere = mix(nightRim, dayRim, daylight);
    float alpha = fresnel * mix(0.12, 0.4, daylight);
    gl_FragColor = vec4(atmosphere, alpha);
  }
`;

const EARTH_TEXTURES: string[] = [
  "/textures/planets/earth-day-poster.webp",
  "/textures/planets/earth-night.webp",
  "/textures/planets/earth-clouds.webp",
  "/textures/planets/earth-normal.webp",
  "/textures/planets/earth-specular.webp",
];

const CHATTOGRAM_CITY_CENTER = {
  latitude: 22.3569,
  longitude: 91.7832,
} as const;

function latitudeLongitudeToPosition(
  latitude: number,
  longitude: number,
  radius: number,
) {
  const latitudeRadians = THREE.MathUtils.degToRad(latitude);
  const longitudeRadians = THREE.MathUtils.degToRad(longitude);
  const latitudeRadius = Math.cos(latitudeRadians);

  return new THREE.Vector3(
    radius * latitudeRadius * Math.cos(longitudeRadians),
    radius * Math.sin(latitudeRadians),
    -radius * latitudeRadius * Math.sin(longitudeRadians),
  );
}

function createLocationLabelTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 72;
  const context = canvas.getContext("2d");
  if (!context) return null;

  context.fillStyle = "rgba(2, 7, 17, 0.94)";
  context.strokeStyle = "rgba(56, 189, 248, 0.9)";
  context.lineWidth = 3;
  context.beginPath();
  context.roundRect(2, 2, 252, 68, 18);
  context.fill();
  context.stroke();
  context.fillStyle = "#F8FAFC";
  context.font = "700 30px ui-monospace, SFMono-Regular, Menlo, monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("I'M HERE", 128, 37);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

function createMapPinTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 160;
  const context = canvas.getContext("2d");
  if (!context) return null;

  context.shadowColor = "rgba(0, 0, 0, 0.42)";
  context.shadowBlur = 10;
  context.shadowOffsetY = 4;
  context.fillStyle = "#EA4335";
  context.strokeStyle = "#7F1D1D";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(64, 150);
  context.bezierCurveTo(55, 126, 22, 96, 22, 61);
  context.bezierCurveTo(22, 30, 40, 12, 64, 12);
  context.bezierCurveTo(88, 12, 106, 30, 106, 61);
  context.bezierCurveTo(106, 96, 73, 126, 64, 150);
  context.closePath();
  context.fill();
  context.stroke();

  context.shadowColor = "transparent";
  context.fillStyle = "#F8FAFC";
  context.beginPath();
  context.arc(64, 59, 16, 0, Math.PI * 2);
  context.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

function V2EarthLocationMarker() {
  const pinPosition = useMemo(
    () =>
      latitudeLongitudeToPosition(
        CHATTOGRAM_CITY_CENTER.latitude,
        CHATTOGRAM_CITY_CENTER.longitude,
        1.055,
      ),
    [],
  );
  const labelPosition = useMemo(() => {
    const position = latitudeLongitudeToPosition(
      CHATTOGRAM_CITY_CENTER.latitude,
      CHATTOGRAM_CITY_CENTER.longitude,
      1.105,
    );
    position.x -= 0.045;
    position.y += 0.035;
    return position;
  }, []);
  const labelTexture = useMemo(() => createLocationLabelTexture(), []);
  const pinTexture = useMemo(() => createMapPinTexture(), []);

  useEffect(
    () => () => {
      labelTexture?.dispose();
      pinTexture?.dispose();
    },
    [labelTexture, pinTexture],
  );

  return (
    <group>
      {pinTexture ? (
        <sprite position={pinPosition} scale={[0.105, 0.132, 1]}>
          <spriteMaterial
            map={pinTexture}
            transparent
            depthTest
            depthWrite={false}
            toneMapped={false}
          />
        </sprite>
      ) : null}
      {labelTexture ? (
        <sprite position={labelPosition} scale={[0.31, 0.087, 1]}>
          <spriteMaterial
            map={labelTexture}
            transparent
            depthTest
            depthWrite={false}
            toneMapped={false}
          />
        </sprite>
      ) : null}
    </group>
  );
}

export function V2Earth({ paused = false }: { paused?: boolean }) {
  const earthGroup = useRef<THREE.Group>(null);
  const clouds = useRef<THREE.Mesh>(null);
  const { gl, size } = useThree();
  const rawTextures = useTexture(EARTH_TEXTURES) as THREE.Texture[];
  const entryFrameReported = useRef(false);
  const [dayMap, nightMap, cloudMap, normalMap, specularMap] = useMemo(() => {
    const anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
    return rawTextures.map((source, index) => {
      const texture = source.clone();
      texture.colorSpace = index < 3 ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      texture.anisotropy = anisotropy;
      texture.needsUpdate = true;
      return texture;
    });
  }, [gl, rawTextures]);
  const config = V2_SCENE_CONFIG.earth;
  const viewportConfig =
    size.width < 768
      ? config.mobile
      : size.width <= 1024
        ? config.tablet
        : config.desktop;
  const compactPhone = size.width < 360;
  const responsivePosition = useMemo(
    () =>
      config.worldPosition.map(
        (value, index) => {
          if (index === 0 && compactPhone) return value + viewportConfig.positionOffset[index] + 0.35;
          return value + viewportConfig.positionOffset[index];
        },
      ) as [number, number, number],
    [compactPhone, config.worldPosition, viewportConfig.positionOffset],
  );

  const sunDirection = useMemo(
    () => new THREE.Vector3(...config.lighting.dominantPosition).normalize(),
    [config.lighting.dominantPosition],
  );

  useEffect(() => {
    markV2EntryReady("earthTextures");
  }, [rawTextures]);

  const nightMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          nightMap: { value: nightMap },
          sunDirection: { value: sunDirection },
        },
        vertexShader: NIGHT_VERTEX,
        fragmentShader: NIGHT_FRAGMENT,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [nightMap, sunDirection],
  );

  const atmosphereMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          sunDirection: { value: sunDirection },
        },
        vertexShader: ATMOSPHERE_VERTEX,
        fragmentShader: ATMOSPHERE_FRAGMENT,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    [sunDirection],
  );

  useEffect(() => {
    return () => {
      for (const texture of [
        dayMap,
        nightMap,
        cloudMap,
        normalMap,
        specularMap,
      ]) {
        texture.dispose();
      }
      nightMaterial.dispose();
      atmosphereMaterial.dispose();
    };
  }, [
    atmosphereMaterial,
    cloudMap,
    dayMap,
    gl,
    nightMap,
    nightMaterial,
    normalMap,
    specularMap,
  ]);

  useFrame((_, delta) => {
    if (!entryFrameReported.current) {
      entryFrameReported.current = true;
      markV2EntryReady("heroInteractive");
    }
    const group = earthGroup.current;
    if (!group) return;
    group.visible = v2Runtime.debug.activeDestination === config.id;

    const runtime = v2Runtime.earth;
    if (!paused && !runtime.dragging && performance.now() - runtime.lastInteraction > 1500) {
      runtime.targetY += delta * config.rotationSpeed;
    }

    if (!paused) {
      runtime.targetY += runtime.velocityY;
      runtime.targetX = THREE.MathUtils.clamp(
        runtime.targetX + runtime.velocityX,
        -THREE.MathUtils.degToRad(24),
        THREE.MathUtils.degToRad(24),
      );
      runtime.velocityX *= Math.pow(0.055, delta);
      runtime.velocityY *= Math.pow(0.055, delta);
    }

    runtime.currentX = THREE.MathUtils.damp(runtime.currentX, runtime.targetX, 8.5, delta);
    runtime.currentY = THREE.MathUtils.damp(runtime.currentY, runtime.targetY, 8.5, delta);

    group.rotation.set(
      config.rotation[0] + runtime.currentX,
      config.rotation[1] + runtime.currentY,
      config.rotation[2],
    );

    if (!paused && clouds.current) {
      clouds.current.rotation.y += delta * config.rotationSpeed * 1.28;
    }

    v2Runtime.debug.earthRotation = [
      group.rotation.x,
      group.rotation.y,
      group.rotation.z,
    ];
  });

  return (
    <group
      ref={earthGroup}
      position={responsivePosition}
      rotation={config.rotation}
      scale={config.worldScale * viewportConfig.scaleMultiplier * (compactPhone ? 0.92 : 1)}
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.52, 0.52)}
          specularMap={specularMap}
          specular="#a9d5ff"
          shininess={24}
        />
      </mesh>

      <mesh scale={1.002} material={nightMaterial}>
        <sphereGeometry args={[1, 128, 128]} />
      </mesh>

      <mesh ref={clouds} scale={1.011}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial
          map={cloudMap}
          alphaMap={cloudMap}
          transparent
          opacity={0.68}
          alphaTest={0.08}
          depthWrite={false}
          roughness={0.82}
        />
      </mesh>

      <mesh scale={1.024} material={atmosphereMaterial}>
        <sphereGeometry args={[1, 128, 128]} />
      </mesh>

      <V2EarthLocationMarker />
    </group>
  );
}

useTexture.preload(EARTH_TEXTURES);
