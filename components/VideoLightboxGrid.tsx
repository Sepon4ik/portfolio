"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type Trailer = { id: string; title: string; caption: string };

export function VideoLightboxGrid({
  items,
  gridClassName = "",
}: {
  items: readonly Trailer[];
  /** e.g. mt-0 when card already has padding */
  gridClassName?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeId, close]);

  return (
    <>
      <div className={`mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ${gridClassName}`.trim()}>
        {items.map((g) => (
          <div key={g.id} className="flex flex-col">
            <button
              type="button"
              onClick={() => setActiveId(g.id)}
              className="group relative aspect-video w-full overflow-hidden rounded-[12px] border border-white/10 bg-black/50 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-[2px] transition duration-300 hover:border-white/15 hover:shadow-[0_0_32px_-8px_rgba(34,211,238,0.25)]"
            >
              <Image
                src={`https://img.youtube.com/vi/${g.id}/hqdefault.jpg`}
                alt=""
                fill
                className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute inset-0 z-[1] flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/55 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md transition group-hover:border-cyan-400/40 group-hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)]">
                  <Play className="h-4 w-4 shrink-0 fill-white" aria-hidden />
                  Play
                </span>
              </span>
              <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black via-black/85 to-transparent px-3 pb-3 pt-10">
                <p className="text-sm font-bold leading-tight text-white drop-shadow-sm sm:text-base">
                  {g.title}
                </p>
              </div>
            </button>
            <p className="mt-2.5 text-xs leading-relaxed text-zinc-500">{g.caption}</p>
          </div>
        ))}
      </div>

      {activeId && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={close}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -right-1 -top-12 rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white sm:-right-2 sm:-top-2 sm:left-auto sm:right-0 sm:top-[-3rem]"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="overflow-hidden rounded-xl border border-zinc-700 ring-1 ring-white/10">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                title="Video"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
