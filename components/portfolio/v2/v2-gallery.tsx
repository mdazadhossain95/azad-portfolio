"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/types";

const HOLD_MS = 3500;

/**
 * Cross-fading product shots for a mission dossier.
 *
 * Sources come straight from the project's own `gallery` in `content/projects.ts`
 * - real screenshots, no placeholders. The gradient and platform label sit
 * *behind* the images, so a slow or failed asset never leaves a blank rectangle.
 *
 * Rotation pauses on hover, on keyboard focus, when the tab is hidden, and
 * whenever reduced motion is requested (it then holds the first frame).
 */
export function V2Gallery({
  images,
  alt,
  platforms,
  sizes,
  priority = false,
}: {
  images: GalleryImage[];
  alt: string;
  platforms: string;
  sizes: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const canRotate = images.length > 1;

  useEffect(() => {
    if (!canRotate || paused) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((prev) => (prev + 1) % images.length);
    }, HOLD_MS);

    return () => window.clearInterval(timer);
  }, [canRotate, paused, images.length]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 20%, color-mix(in srgb, var(--v2-earth-atmosphere) 16%, transparent) 0%, transparent 70%)," +
            "linear-gradient(160deg, #0F1B30 0%, #070E1B 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]"
      >
        {platforms}
      </div>

      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={i === 0 ? alt : image.alt || alt}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          className="object-contain p-3 transition-opacity duration-700 ease-out md:p-4"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 45%, rgba(3, 7, 17, 0.72) 100%)" }}
      />

      {canRotate && (
        <div aria-hidden="true" className="absolute bottom-4 right-4 flex gap-1.5">
          {images.map((image, i) => (
            <span
              key={image.src}
              className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor:
                  i === index ? "var(--v2-earth-atmosphere)" : "rgba(169, 184, 255, 0.35)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
