"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Плавный скролл с инерцией: после остановки колеса страница ещё немного «докручивается» и плавно тормозит.
 * Отключается при prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      // Чуть выше lerp — меньше кадров «догонки» цели, легче для CPU при колёсике
      lerp: 0.092,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      // Важно: syncTouch:true перехватывает тач и часто даёт джиттер на iOS/Android.
      // Нативный скролл пальцем + плавное колёсико на десктопе.
      syncTouch: false,
      touchMultiplier: 1,
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
