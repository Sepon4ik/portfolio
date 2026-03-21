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
      // Меньше lerp → дольше «тормозной путь», мягче догон цели
      lerp: 0.062,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      syncTouch: true,
      syncTouchLerp: 0.075,
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
