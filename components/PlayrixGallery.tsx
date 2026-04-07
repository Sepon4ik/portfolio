"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/playrix-poker-1.jpg",
    alt: "Poker tournament final table at Playrix Top 100",
  },
  {
    src: "/playrix-poker-2.jpg",
    alt: "Award ceremony with Playrix founders",
  },
  {
    src: "/playrix-poker-3.jpg",
    alt: "Winning the Playrix Top 100 poker tournament",
  },
];

export default function PlayrixGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-black/10" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/45">
            Playrix Top 100 — Poker Champion
          </span>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-black/8 cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 33vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        <p className="mt-3 text-center font-serif text-[13px] text-black/50 italic">
          Among Bukhman brothers (founders), COO, Fishdom & Township directors
        </p>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto">
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1200}
              height={900}
              className="rounded-lg object-contain max-h-[85vh] w-auto"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === lightbox ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl font-light"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
