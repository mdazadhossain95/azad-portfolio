"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import {
  V2_SCENE_CONFIG,
  type V2DestinationConfig,
} from "@/lib/portfolio/v2-scene-config";
import { v2Runtime } from "@/lib/portfolio/v2-runtime";
import {
  v2BodyDropFraction,
  v2VisibleHalfHeight,
} from "@/lib/portfolio/v2-framing";

type DestinationKey =
  | "moon"
  | "mars"
  | "jupiter"
  | "deepSpace"
  | "saturn";

function createMilkyWayGeometry(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();
  let state = 7411;
  const random = () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };

  for (let index = 0; index < count; index += 1) {
    const radius = Math.pow(random(), 0.62) * 12.5;
    const arm = index % 4;
    const angle =
      arm * (Math.PI / 2) + radius * 0.62 + (random() - 0.5) * 0.72;
    const coreBias = Math.max(0.12, radius / 12.5);
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] =
      (random() - 0.5) * (0.25 + coreBias * 1.35);
    positions[index * 3 + 2] = Math.sin(angle) * radius;
    const mix = random();
    if (radius < 2.4) color.set("#F8E7C4");
    else if (mix > 0.74) color.set("#A9B8FF");
    else if (mix > 0.5) color.set("#8B5CF6");
    else color.set("#F8FAFC");
    color.multiplyScalar(0.55 + random() * 0.45);
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

function useConfiguredTexture(path: string, alpha = false) {
  const source = useTexture(path);
  const { gl } = useThree();
  const texture = useMemo(() => {
    const next = source.clone();
    next.colorSpace = alpha ? THREE.NoColorSpace : THREE.SRGBColorSpace;
    next.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
    next.needsUpdate = true;
    return next;
  }, [alpha, gl, source]);

  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
}

function useDestinationTransform(key: DestinationKey) {
  const { size } = useThree();
  const config = V2_SCENE_CONFIG[key] as V2DestinationConfig;
  const viewport =
    size.width < 768
      ? config.mobile
      : size.width <= 1024
        ? config.tablet
        : config.desktop;

  /* Each scene views its body from a different distance, so a single world
     offset would drop the Moon and Jupiter by wildly different amounts on
     screen. Derive the drop from this scene's own reading distance instead,
     so every body lands in the same place in its reserved band. */
  const drop = useMemo(() => {
    const fraction = v2BodyDropFraction(size.width);
    if (fraction === 0) return 0;
    const reading = config.camera.reading;
    const distance = Math.hypot(
      reading.position[0] - config.worldPosition[0],
      reading.position[1] - config.worldPosition[1],
      reading.position[2] - config.worldPosition[2],
    );
    const aspect = size.width / Math.max(1, size.height);
    return v2VisibleHalfHeight(reading.fov, aspect, distance) * fraction;
  }, [config, size.height, size.width]);

  return {
    config,
    position: config.worldPosition.map((value, index) =>
      index === 1
        ? value + viewport.positionOffset[index] - drop
        : value + viewport.positionOffset[index],
    ) as [number, number, number],
    scale: config.worldScale * viewport.scaleMultiplier,
  };
}

function TexturedPlanet({
  destination,
  texturePath,
  paused = false,
  roughness = 0.86,
  bumpScale = 0,
}: {
  destination: Exclude<DestinationKey, "saturn" | "solarContact">;
  texturePath: string;
  paused?: boolean;
  roughness?: number;
  bumpScale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const texture = useConfiguredTexture(texturePath);
  const { config, position, scale } = useDestinationTransform(destination);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.visible =
        v2Runtime.debug.activeDestination === config.id;
    }
    if (!paused && mesh.current) {
      mesh.current.rotation.y += delta * config.rotationSpeed;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={config.rotation}
      scale={scale}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 96, 96]} />
      <meshStandardMaterial
        map={texture}
        bumpMap={bumpScale > 0 ? texture : null}
        bumpScale={bumpScale}
        roughness={roughness}
        metalness={0.01}
      />
    </mesh>
  );
}

export function V2MilkyWay({ paused = false }: { paused?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { size } = useThree();
  const count = size.width < 768 ? 1400 : size.width <= 1024 ? 2600 : 5200;
  const geometry = useMemo(() => createMilkyWayGeometry(count), [count]);
  const intro = V2_SCENE_CONFIG.universeIntro;
  const viewport =
    size.width < 768
      ? intro.mobile
      : size.width <= 1024
        ? intro.tablet
        : intro.desktop;
  const position = intro.worldPosition.map(
    (value, index) => value + viewport.positionOffset[index],
  ) as [number, number, number];

  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.visible =
      v2Runtime.debug.activeDestination === V2_SCENE_CONFIG.universeIntro.id;
    if (!paused) group.current.rotation.y += delta * 0.006;
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={intro.rotation}
      scale={intro.worldScale * viewport.scaleMultiplier}
    >
      <points geometry={geometry}>
        <pointsMaterial
          size={0.07}
          sizeAttenuation
          transparent
          opacity={0.82}
          vertexColors
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.1, 96]} />
        <meshBasicMaterial
          color="#E6D8FF"
          transparent
          opacity={0.055}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export function V2Moon({ paused = false }: { paused?: boolean }) {
  return (
    <TexturedPlanet
      destination="moon"
      texturePath="/textures/planets/moon.webp"
      paused={paused}
      roughness={0.96}
      bumpScale={0.045}
    />
  );
}

export function V2Mars({ paused = false }: { paused?: boolean }) {
  return (
    <TexturedPlanet
      destination="mars"
      texturePath="/textures/planets/mars.webp"
      paused={paused}
      roughness={0.94}
      bumpScale={0.022}
    />
  );
}

export function V2Jupiter({ paused = false }: { paused?: boolean }) {
  return (
    <TexturedPlanet
      destination="jupiter"
      texturePath="/textures/planets/jupiter.webp"
      paused={paused}
      roughness={0.82}
    />
  );
}

export function V2DeepSpace({ paused = false }: { paused?: boolean }) {
  return (
    <TexturedPlanet
      destination="deepSpace"
      texturePath="/textures/planets/neptune.webp"
      paused={paused}
      roughness={0.74}
    />
  );
}

export function V2Saturn({ paused = false }: { paused?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const colorMap = useConfiguredTexture("/textures/planets/saturn.webp");
  const ringMap = useConfiguredTexture(
    "/textures/planets/2k_saturn_ring_alpha.png",
    true,
  );
  const { config, position, scale } = useDestinationTransform("saturn");

  useFrame((_, delta) => {
    if (group.current) {
      group.current.visible =
        v2Runtime.debug.activeDestination === config.id;
    }
    if (!paused && group.current) {
      group.current.rotation.y += delta * config.rotationSpeed;
    }
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={config.rotation}
      scale={scale}
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial map={colorMap} roughness={0.88} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[1.24, 2.24, 128]} />
        <meshStandardMaterial
          map={ringMap}
          alphaMap={ringMap}
          color="#D8C9A4"
          transparent
          alphaTest={0.08}
          opacity={0.82}
          roughness={0.9}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
