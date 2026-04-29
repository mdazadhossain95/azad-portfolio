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
  const [isOpen, setIsOpen] = useState(false);
  const [isImageReady, setIsImageReady] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [naturalSizeByImage, setNaturalSizeByImage] = useState<Record<string, { width: number; height: number }>>({});

  const swipeStartXRef = useRef<number | null>(null);
  const swipePointerIdRef = useRef<number | null>(null);

  const hasMultiple = images.length > 1;
  const currentImage = images[current];
  const currentNaturalSize = currentImage ? naturalSizeByImage[currentImage] : undefined;
  const imageWidth = currentNaturalSize?.width ?? 1600;
  const imageHeight = currentNaturalSize?.height ?? 1000;
  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  const prev = useCallback(() => {
    if (images.length <= 1) return;
    setIsImageReady(false);
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    if (images.length <= 1) return;
    setIsImageReady(false);
    setCurrent((i) => (i + 1) % images.length);
  }, [images.length]);

  const jumpTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setIsImageReady(false);
      setCurrent(index);
    },
    [current],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsOpen(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    setIsImageReady(false);
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, onClose, prev]);

  useEffect(() => {
    if (!hasMultiple) return;
    const preloadNext = new window.Image();
    preloadNext.src = images[nextIndex];
    const preloadPrev = new window.Image();
    preloadPrev.src = images[prevIndex];
  }, [hasMultiple, images, nextIndex, prevIndex]);

  const clearSwipe = () => {
    swipeStartXRef.current = null;
    swipePointerIdRef.current = null;
    setIsSwiping(false);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    if (e.pointerType !== "touch") return;
    if (e.target instanceof HTMLElement && e.target.closest("button")) return;

    swipeStartXRef.current = e.clientX;
    swipePointerIdRef.current = e.pointerId;
    setIsSwiping(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    if (e.pointerType !== "touch") return;
    if (swipePointerIdRef.current !== e.pointerId) return;

    const startX = swipeStartXRef.current;
    const deltaX = startX === null ? 0 : e.clientX - startX;

    if (deltaX <= -50) next();
    else if (deltaX >= 50) prev();

    clearSwipe();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 transition-opacity duration-300 md:p-4 ${
        isOpen ? "bg-black/55 opacity-100" : "bg-black/0 opacity-0"
      }`}
    >
      <button type="button" aria-label="Close gallery" className="absolute inset-0" onClick={onClose} />

      <div
        className={`relative z-10 flex w-full max-w-6xl flex-col gap-3 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute right-2 top-2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition duration-200 hover:scale-105 hover:bg-white/30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="flex items-center justify-between">
          {hasMultiple ? (
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {current + 1} / {images.length}
            </span>
          ) : (
            <span />
          )}
          <span className="h-8 w-8" aria-hidden="true" />
        </div>

        <div
          className="relative flex min-h-[55vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={clearSwipe}
          onPointerLeave={clearSwipe}
          style={{ touchAction: hasMultiple ? "pan-y" : "auto" }}
        >
          <div className="flex h-full w-full items-center justify-center p-3 md:p-5">
            <Image
              key={currentImage}
              src={currentImage}
              alt={`${title} ${current + 1}`}
              width={imageWidth}
              height={imageHeight}
              sizes="90vw"
              className={`h-auto w-auto max-h-[85vh] max-w-[90vw] object-contain transition-opacity duration-300 ease-out ${
                isImageReady ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={(img) => {
                setNaturalSizeByImage((prevState) => ({
                  ...prevState,
                  [currentImage]: {
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                  },
                }));
                setIsImageReady(true);
              }}
              priority
            />
          </div>

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prev();
              }}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 p-4 text-white transition duration-200 hover:scale-110 hover:bg-black/65 md:left-4"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                next();
              }}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 p-4 text-white transition duration-200 hover:scale-110 hover:bg-black/65 md:right-4"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {hasMultiple && (
          <div className="flex justify-center gap-2.5 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                type="button"
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  jumpTo(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  i === current
                    ? "scale-105 border-white opacity-100 shadow-[0_8px_20px_rgba(255,255,255,0.2)]"
                    : "border-white/30 opacity-70 hover:scale-105 hover:opacity-95"
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
