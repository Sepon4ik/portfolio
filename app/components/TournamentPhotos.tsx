"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const photos = [
  {
    src: "/playrix-poker-1.jpg",
    alt: "Playrix Top 100 — финальный стол",
    caption: "Финальный стол турнира Playrix Top 100",
  },
  {
    src: "/playrix-poker-2.jpg",
    alt: "С братьями Бухман",
    caption: "С Игорем и Дмитрием Бухман — основателями Playrix",
  },
  {
    src: "/playrix-poker-3.jpg",
    alt: "Награждение",
    caption: "Награждение Playrix Top 100",
  },
];

export default function TournamentPhotos() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % photos.length)),
    []
  );
  const prev = useCallback(
    () =>
      setOpenIdx((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    []
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, close, next, prev]);

  return (
    <>
      <div className="flex gap-1 shrink-0">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="photo-frame w-[36px] h-[44px] overflow-hidden cursor-zoom-in transition hover:opacity-80 hover:scale-[1.04]"
            aria-label={`Открыть фото: ${p.caption}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={120}
              height={150}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* Image */}
          <div
            className="relative max-w-[92vw] max-h-[88vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openIdx].src}
              alt={photos[openIdx].alt}
              width={1920}
              height={1280}
              className="object-contain max-w-[92vw] max-h-[80vh] w-auto h-auto rounded-lg shadow-2xl"
              priority
            />
            <div className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
              {photos[openIdx].caption}
              <span className="ml-3 text-white/30">
                {openIdx + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 h-10 w-10 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/70 transition hover:bg-white/10 hover:text-white flex items-center justify-center"
            aria-label="Закрыть"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/70 transition hover:bg-white/10 hover:text-white flex items-center justify-center"
              aria-label="Предыдущее фото"
            >
              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 4L6 8l4 4" />
              </svg>
            </button>
          )}

          {/* Next */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/70 transition hover:bg-white/10 hover:text-white flex items-center justify-center"
              aria-label="Следующее фото"
            >
              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
