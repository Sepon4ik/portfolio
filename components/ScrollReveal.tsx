"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
};

/**
 * Появление при скролле: при каждом входе в зону видимости — анимация «въезда»,
 * при уходе — сброс (скрытое состояние), чтобы при возврате к блоку эффект снова отыгрывался.
 */
export function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    /** Синхронно с тем же «окном», что и раньше (якорь, низкий экран, быстрый скролл) */
    const checkInView = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const margin = vh * 0.12;
      const inView = r.top < vh - margin && r.bottom > margin;
      setVisible(inView);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setVisible(e.isIntersecting);
        }
      },
      {
        threshold: [0, 0.04, 0.12, 0.25],
        rootMargin: "12% 0px 18% 0px",
      },
    );

    io.observe(el);
    checkInView();
    requestAnimationFrame(checkInView);
    const t0 = window.setTimeout(checkInView, 50);
    const t1 = window.setTimeout(checkInView, 300);

    return () => {
      io.disconnect();
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`scroll-reveal ${visible ? "scroll-reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
