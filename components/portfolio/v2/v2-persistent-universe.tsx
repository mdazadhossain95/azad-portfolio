"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { V2CameraRig } from "./v2-camera-rig";
import { V2Earth } from "./celestial/v2-earth";
import {
  V2Moon,
  V2Mars,
  V2Jupiter,
  V2DeepSpace,
  V2Saturn,
  V2MilkyWay,
} from "./celestial/v2-celestial-bodies";
import { useScenePaused } from "./v2-scene-hooks";
import {
  V2_SCENE_CONFIG,
  V2_SCENES,
  type V2DestinationConfig,
} from "@/lib/portfolio/v2-scene-config";
import { v2Runtime, V2_STATIC_MODE_EVENT } from "@/lib/portfolio/v2-runtime";
import {
  markV2EntryReady,
  reportV2EntryFailure,
} from "@/lib/portfolio/v2-entry-readiness";

function V2Telemetry() {
  const { gl } = useThree();
  const elapsed = useRef(0);
  const frames = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;
    frames.current += 1;
    if (elapsed.current < 0.5) return;

    v2Runtime.debug.drawCalls = gl.info.render.calls;
    v2Runtime.debug.triangles = gl.info.render.triangles;
    v2Runtime.debug.textures = gl.info.memory.textures;
    v2Runtime.debug.dpr = gl.getPixelRatio();
    v2Runtime.debug.fps = Math.round(frames.current / elapsed.current);
    elapsed.current = 0;
    frames.current = 0;
  });

  return null;
}

function QualityManager() {
  const { setDpr, size } = useThree();

  useEffect(() => {
    const mobile = size.width < 768;
    const tablet = size.width >= 768 && size.width <= 1024;
    const cores = navigator.hardwareConcurrency || 4;
    const tier = mobile
      ? "mobile"
      : tablet
        ? "tablet"
        : cores >= 8
          ? "high"
          : "standard";
    const cap = tier === "high" ? 1.5 : tier === "standard" ? 1.25 : tier === "tablet" ? 1.1 : 1;
    setDpr(Math.min(window.devicePixelRatio, cap));
    v2Runtime.debug.qualityTier = tier;
  }, [setDpr, size.width]);

  return null;
}

function SceneManager() {
  const [stage, setStage] = useState(0);
  const paused = useScenePaused();

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      if (progress > 0.6) setStage(3);
      else if (progress > 0.3) setStage((current) => Math.max(current, 2));
      else if (progress > 0.04) setStage((current) => Math.max(current, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <V2MilkyWay paused={paused} />
      <V2Earth paused={paused} />
      {stage >= 1 && (
        <Suspense fallback={null}>
          <V2Moon paused={paused} />
          <V2Mars paused={paused} />
        </Suspense>
      )}
      {stage >= 2 && (
        <Suspense fallback={null}>
          <V2Jupiter paused={paused} />
          <V2DeepSpace paused={paused} />
        </Suspense>
      )}
      {stage >= 3 && (
        <Suspense fallback={null}>
          <V2Saturn paused={paused} />
        </Suspense>
      )}
    </>
  );
}

function SceneLighting() {
  const ambient = useRef<THREE.AmbientLight>(null);
  const key = useRef<THREE.DirectionalLight>(null);
  const destinationById = useMemo(
    () =>
      new Map<string, V2DestinationConfig>(
        V2_SCENES.map((destination) => [destination.id, destination]),
      ),
    [],
  );

  useFrame((_, delta) => {
    const destination =
      destinationById.get(v2Runtime.debug.activeDestination) ??
      V2_SCENE_CONFIG.universeIntro;
    const amount = 1 - Math.exp(-delta * 2.4);
    if (ambient.current) {
      ambient.current.intensity = THREE.MathUtils.damp(
        ambient.current.intensity,
        destination.lighting.ambient,
        2.4,
        delta,
      );
    }
    if (key.current) {
      key.current.intensity = THREE.MathUtils.damp(
        key.current.intensity,
        destination.lighting.dominantIntensity,
        2.4,
        delta,
      );
      key.current.position.lerp(
        new THREE.Vector3(...destination.lighting.dominantPosition),
        amount,
      );
    }
  });

  return (
    <>
      <ambientLight ref={ambient} intensity={0.18} color="#8EA8D8" />
      <directionalLight
        ref={key}
        position={[5, 7, 25]}
        intensity={1.4}
        color="#FFF7EC"
      />
    </>
  );
}

function GalaxyEnvironment() {
  const paused = useScenePaused();
  const { size } = useThree();
  const multiplier = size.width < 768 ? 0.2 : size.width <= 1024 ? 0.45 : 1;
  return (
    <>
      <Stars
        radius={130}
        depth={70}
        count={Math.round(2200 * multiplier)}
        factor={2.2}
        saturation={0.18}
        fade
        speed={paused ? 0 : 0.08}
      />
      <Stars
        radius={75}
        depth={35}
        count={Math.round(900 * multiplier)}
        factor={3.7}
        saturation={0.28}
        fade
        speed={paused ? 0 : 0.14}
      />
      <Stars
        radius={38}
        depth={18}
        count={Math.round(220 * multiplier)}
        factor={5.2}
        saturation={0.15}
        fade
        speed={paused ? 0 : 0.2}
      />
    </>
  );
}

export function V2PersistentUniverse() {
  const earth = V2_SCENE_CONFIG.earth;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{
          position: [...earth.camera.reading.position],
          fov: earth.camera.reading.fov,
          near: 0.1,
          far: 650,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          markV2EntryReady("webglRuntime");
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.12;
          /* No shadow pass. Nothing in this scene occludes anything else, so
             the extra depth target and second render per frame bought no
             visible shading while adding to the memory that was costing us
             the whole context on modest GPUs. */
          gl.shadowMap.enabled = false;
          gl.domElement.addEventListener(
            "webglcontextlost",
            (event) => {
              event.preventDefault();
              /* Route changes unmount this canvas, and disposing the renderer
                 fires this same event. Re-check on the next task: if the canvas
                 has left the document it was our own teardown, not a GPU
                 failure, and must not latch the page into static mode. */
              window.setTimeout(() => {
                if (!gl.domElement.isConnected) return;
                console.warn("V2 WebGL context lost.");
                reportV2EntryFailure("context");
                window.dispatchEvent(
                  new CustomEvent(V2_STATIC_MODE_EVENT, {
                    detail: { staticMode: true, reason: "context" },
                  }),
                );
              }, 0);
            },
            { once: true },
          );
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={[earth.environment.color]} />
          <SceneLighting />
          <GalaxyEnvironment />
          <SceneManager />
          <V2CameraRig />
          <QualityManager />
          <V2Telemetry />
        </Suspense>
      </Canvas>
    </div>
  );
}
