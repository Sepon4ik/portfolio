"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, durationMs: number, active: boolean) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(target);
      return;
    }
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setV(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, active]);

  return v;
}

export function ActiveLifeStatsPanel() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) setActive(true);
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const teamN = useCountUp(50, 1200, active);

  return (
    <div
      ref={rootRef}
      className="rounded-[12px] border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md"
    >
      <div className="flex items-center gap-4">
        <Image
          src="/active-life.png"
          alt="Active Life Technologies logo"
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-full object-contain"
        />
        <div>
          <p className="text-sm font-bold text-white">Active Life Technologies</p>
          <p className="text-xs text-zinc-500">MedTech · commercial operations</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-[12px] border border-white/10 bg-white/[0.04] px-2 py-3 text-center backdrop-blur-sm">
          <p className="text-lg font-bold tabular-nums text-white sm:text-xl">
            {teamN}
            <span className="text-cyan-400/90">+</span>
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">
            Team
          </p>
        </div>
        <div
          className={`rounded-[12px] border border-white/10 bg-white/[0.04] px-2 py-3 text-center backdrop-blur-sm transition-opacity duration-700 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-lg font-bold text-white sm:text-xl">B2B</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">
            Market
          </p>
        </div>
        <div
          className={`rounded-[12px] border border-white/10 bg-white/[0.04] px-2 py-3 text-center backdrop-blur-sm transition-opacity duration-700 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "380ms" }}
        >
          <p className="text-lg font-bold text-white sm:text-xl">Ops</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">
            Scale
          </p>
        </div>
      </div>
    </div>
  );
}
