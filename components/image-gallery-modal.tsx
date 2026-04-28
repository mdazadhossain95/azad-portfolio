"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ImageGalleryModalProps = {
  images: string[];
  initialIndex: number;
  title: string;
  onClose: () => void;
};

export function ImageGalleryModal({ images, initialIndex, title, onClose }: ImageGalleryModalProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [slideDir, setSlideDir] = useState<-1 | 0 | 1>(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const startXRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  const finishSlide = useCallback(
    (direction: -1 | 1) => {
      setCurrent((i) => (direction === 1 ? (i + 1) % images.length : (i - 1 + images.length) % images.length));
      setSlideDir(0);
      setShouldAnimate(false);
      setDragX(0);
    },
    [images.length],
  );

  const prev = useCallback(() => {
    if (slideDir !== 0) return;
    setSlideDir(-1);
    setShouldAnimate(true);
  }, [slideDir]);

  const next = useCallback(() => {
    if (slideDir !== 0) return;
    setSlideDir(1);
    setShouldAnimate(true);
  }, [slideDir]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  useEffect(() => {
    if (images.length <= 1) return;
    const preloadNext = new window.Image();
    preloadNext.src = images[nextIndex];
    const preloadPrev = new window.Image();
    preloadPrev.src = images[prevIndex];
  }, [images, nextIndex, prevIndex]);

  useEffect(() => {
    if (slideDir === 0 || !shouldAnimate) return;
    const timer = window.setTimeout(() => {
      finishSlide(slideDir);
    }, 320);
    return () => window.clearTimeout(timer);
  }, [slideDir, shouldAnimate, finishSlide]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (images.length <= 1 || slideDir !== 0) return;
    if (e.target instanceof HTMLElement && e.target.closest("button")) return;
    startXRef.current = e.clientX;
    setIsDragging(true);
    setShouldAnimate(false);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || startXRef.current === null || images.length <= 1) return;
    const delta = e.clientX - startXRef.current;
    setDragX(delta);
  };

  const handlePointerEnd = () => {
    if (!isDragging || images.length <= 1) {
      setIsDragging(false);
      startXRef.current = null;
      return;
    }

    const stageWidth = stageRef.current?.clientWidth ?? 0;
    const threshold = Math.max(50, stageWidth * 0.12);

    setIsDragging(false);
    startXRef.current = null;

    if (Math.abs(dragX) >= threshold) {
      setSlideDir(dragX < 0 ? 1 : -1);
      setShouldAnimate(true);
      return;
    }

    setShouldAnimate(true);
    setDragX(0);
  };

  const hasMultiple = images.length > 1;

  const getTrackTransform = () => {
    if (!hasMultiple) return "translateX(0px)";
    if (slideDir === 1) return "translateX(-200%)";
    if (slideDir === -1) return "translateX(0%)";
    return `translateX(calc(-100% + ${dragX}px))`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 md:p-4">
      {/* backdrop close */}
      <button
        type="button"
        aria-label="Close gallery"
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* modal card */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col gap-3">
        {/* top bar */}
        <div className="flex items-center justify-between">
          {hasMultiple ? (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
              {current + 1} / {images.length}
            </span>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-white transition hover:bg-white/20"
          >
            Close
          </button>
        </div>

        {/* main image */}
        <div
          ref={stageRef}
          className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/40 ${
            hasMultiple ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={handlePointerEnd}
        >
          {hasMultiple ? (
            <div
              className={`flex h-full w-[300%] ${shouldAnimate ? "transition-transform duration-300 ease-out" : ""}`}
              style={{ transform: getTrackTransform() }}
            >
              {[prevIndex, current, nextIndex].map((idx, pos) => (
                <div key={`${images[idx]}-${pos}`} className="relative h-full w-full shrink-0">
                  <Image
                    src={images[idx]}
                    alt={`${title} ${idx + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={idx === current}
                    loading={idx === current ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={images[current]}
              alt={`${title} ${current + 1}`}
              fill
              sizes="100vw"
              className="object-contain transition-opacity duration-300"
              priority
            />
          )}

          {/* left arrow */}
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white transition hover:bg-black/70"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* right arrow */}
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white transition hover:bg-black/70"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* thumbnails */}
        {hasMultiple && (
          <div className="flex justify-center gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                type="button"
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`Go to image ${i + 1}`}
                className={`relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === current
                    ? "border-white opacity-100"
                    : "border-white/20 opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`${title} thumb ${i + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
