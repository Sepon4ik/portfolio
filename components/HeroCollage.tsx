"use client";

import Image from "next/image";
import { useState } from "react";

const pokerPhotos = [
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

export default function HeroCollage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="collage-grid">
        {/* Portrait — круглый аватар, не памятник */}
        <div className="collage-portrait">
          <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-white/80 shadow-xl">
            <Image
              src="/profile.png"
              alt="Pavel Dranchuk"
              fill
              sizes="200px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Poker photo 1 — финальный стол */}
        <button
          onClick={() => setLightbox(0)}
          className="collage-card collage-card-1 group cursor-pointer"
        >
          <Image
            src={pokerPhotos[0].src}
            alt={pokerPhotos[0].alt}
            fill
            sizes="(max-width: 768px) 60vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 drop-shadow-md">
            Final table
          </span>
        </button>

        {/* Poker photo 2 — церемония */}
        <button
          onClick={() => setLightbox(1)}
          className="collage-card collage-card-2 group cursor-pointer"
        >
          <Image
            src={pokerPhotos[1].src}
            alt={pokerPhotos[1].alt}
            fill
            sizes="(max-width: 768px) 40vw, 220px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 drop-shadow-md">
            Bukhman brothers & top management
          </span>
        </button>

        {/* Poker photo 3 — награждение */}
        <button
          onClick={() => setLightbox(2)}
          className="collage-card collage-card-3 group cursor-pointer"
        >
          <Image
            src={pokerPhotos[2].src}
            alt={pokerPhotos[2].alt}
            fill
            sizes="(max-width: 768px) 50vw, 260px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 drop-shadow-md">
            Poker champion
          </span>
        </button>

        {/* Floating badge */}
        <div className="collage-badge">
          <div className="rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
            Playrix Top 100
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-[90vw] max-h-[85vh]">
            <Image
              src={pokerPhotos[lightbox].src}
              alt={pokerPhotos[lightbox].alt}
              width={1200}
              height={900}
              className="rounded-lg object-contain max-h-[85vh] w-auto"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {pokerPhotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === lightbox ? "bg-white" : "bg-white/35"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
