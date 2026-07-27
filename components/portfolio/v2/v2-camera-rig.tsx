"use client";

import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import {
  V2_SCENES,
  type V2CameraState,
  type V2Vector3,
} from "@/lib/portfolio/v2-scene-config";
import { v2Runtime } from "@/lib/portfolio/v2-runtime";
import { v2DollyFactor, v2ResponsiveFov } from "@/lib/portfolio/v2-framing";
import { useReducedMotion } from "./v2-scene-hooks";

const clamp01 = (value: number) => THREE.MathUtils.clamp(value, 0, 1);
const ease = (value: number) => THREE.MathUtils.smoothstep(value, 0, 1);

function interpolateVector(a: V2Vector3, b: V2Vector3, amount: number): THREE.Vector3 {
  return new THREE.Vector3(
    THREE.MathUtils.lerp(a[0], b[0], amount),
    THREE.MathUtils.lerp(a[1], b[1], amount),
    THREE.MathUtils.lerp(a[2], b[2], amount),
  );
}

/** Applies the shared responsive framing to one authored camera state. */
function frameForAspect(
  authored: { position: THREE.Vector3; target: THREE.Vector3; fov: number },
  aspect: number,
) {
  const dolly = v2DollyFactor(authored.fov, aspect);
  const fov = v2ResponsiveFov(authored.fov, aspect);
  if (dolly === 1 && fov === authored.fov) return authored;

  return {
    position: authored.target
      .clone()
      .add(authored.position.clone().sub(authored.target).multiplyScalar(dolly)),
    target: authored.target,
    fov,
  };
}

function interpolateCamera(
  from: V2CameraState,
  to: V2CameraState,
  amount: number,
): { position: THREE.Vector3; target: THREE.Vector3; fov: number } {
  const t = ease(clamp01(amount));
  return {
    position: interpolateVector(from.position, to.position, t),
    target: interpolateVector(from.target, to.target, t),
    fov: THREE.MathUtils.lerp(from.fov, to.fov, t),
  };
}

/**
 * ScrollTrigger is the single authority for scroll → journey progress.
 * useFrame only applies that authored state to the Three camera.
 */
export function V2CameraRig() {
  const target = useRef(new THREE.Vector3());
  const desiredQuaternion = useRef(new THREE.Quaternion());
  const lookAtMatrix = useRef(new THREE.Matrix4());
  const ranges = useRef<Array<{ start: number; end: number }>>([]);
  const [simplified, setSimplified] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    /* Matches the tablet cut-off in `useDestinationTransform`. These two used
       to disagree, so 768-1024 ran the cinematic desktop camera against the
       static tablet body offsets and framed neither correctly. */
    const mobile = window.matchMedia("(max-width: 1024px)");
    const update = () => {
      const next = reducedMotion || mobile.matches;
      setSimplified(next);
      v2Runtime.simplified = next;
    };
    update();
    mobile.addEventListener("change", update);
    return () => mobile.removeEventListener("change", update);
  }, [reducedMotion]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const measure = () => {
      const scrollable = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      ranges.current = V2_SCENES.map((scene) => {
        const element = document.querySelector(scene.section);
        if (!(element instanceof HTMLElement)) return { start: 0, end: 0 };
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return {
          start: clamp01((top - window.innerHeight * 0.55) / scrollable),
          end: clamp01((top + rect.height) / scrollable),
        };
      });
    };

    measure();
    const trigger = ScrollTrigger.create({
      id: "v2-camera-journey",
      start: 0,
      end: "max",
      scrub: 0.65,
      invalidateOnRefresh: true,
      onRefresh: measure,
      onUpdate: (self) => {
        v2Runtime.journeyProgress = self.progress;
        v2Runtime.debug.progress = self.progress;
      },
    });

    const settle = window.setTimeout(() => {
      measure();
      ScrollTrigger.refresh();
    }, 500);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      trigger.kill();
    };
  }, []);

  useFrame((frame, delta) => {
    if (ranges.current.length === 0) return;

    const progress = v2Runtime.journeyProgress;
    let sceneIndex = 0;
    for (let index = 0; index < ranges.current.length; index += 1) {
      if (progress >= ranges.current[index].start) sceneIndex = index;
    }

    const scene = V2_SCENES[sceneIndex];
    const range = ranges.current[sceneIndex];
    const local =
      range.end === range.start
        ? 0
        : clamp01((progress - range.start) / (range.end - range.start));
    v2Runtime.debug.localProgress = local;
    const { readingStart, readingEnd } = scene.scroll;

    let authored;
    if (simplified) {
      authored = {
        position: new THREE.Vector3(...scene.camera.reading.position),
        target: new THREE.Vector3(...scene.camera.reading.target),
        fov: scene.camera.reading.fov,
      };
    } else if (local < readingStart) {
      authored = interpolateCamera(
        scene.camera.approach,
        scene.camera.reading,
        local / readingStart,
      );
    } else if (local <= readingEnd) {
      authored = {
        position: new THREE.Vector3(...scene.camera.reading.position),
        target: new THREE.Vector3(...scene.camera.reading.target),
        fov: scene.camera.reading.fov,
      };
    } else {
      authored = interpolateCamera(
        scene.camera.reading,
        scene.camera.departure,
        (local - readingEnd) / (1 - readingEnd),
      );
    }

    const framed = frameForAspect(
      authored,
      frame.size.width / Math.max(1, frame.size.height),
    );

    const activeCamera = frame.camera;
    const jumpToState = reducedMotion || simplified;
    if (jumpToState) {
      activeCamera.position.copy(framed.position);
      target.current.copy(framed.target);
    } else {
      activeCamera.position.set(
        THREE.MathUtils.damp(activeCamera.position.x, framed.position.x, 5.2, delta),
        THREE.MathUtils.damp(activeCamera.position.y, framed.position.y, 5.2, delta),
        THREE.MathUtils.damp(activeCamera.position.z, framed.position.z, 5.2, delta),
      );
      target.current.set(
        THREE.MathUtils.damp(target.current.x, framed.target.x, 6.2, delta),
        THREE.MathUtils.damp(target.current.y, framed.target.y, 6.2, delta),
        THREE.MathUtils.damp(target.current.z, framed.target.z, 6.2, delta),
      );
    }

    lookAtMatrix.current.lookAt(activeCamera.position, target.current, activeCamera.up);
    desiredQuaternion.current.setFromRotationMatrix(lookAtMatrix.current);
    if (jumpToState) {
      activeCamera.quaternion.copy(desiredQuaternion.current);
    } else {
      activeCamera.quaternion.slerp(
        desiredQuaternion.current,
        1 - Math.exp(-delta * 6.4),
      );
    }
    if (
      activeCamera instanceof THREE.PerspectiveCamera &&
      Math.abs(activeCamera.fov - framed.fov) > 0.01
    ) {
      activeCamera.fov = jumpToState
        ? framed.fov
        : THREE.MathUtils.damp(activeCamera.fov, framed.fov, 6, delta);
      activeCamera.updateProjectionMatrix();
    }

    v2Runtime.debug.activeDestination = scene.id;
    v2Runtime.debug.cameraPosition = activeCamera.position.toArray();
    v2Runtime.debug.cameraTarget = target.current.toArray();
  });

  return null;
}
