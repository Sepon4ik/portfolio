"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
};

/**
 * Появление при скролле: после первого попадания в зону видимости остаётся «раскрытым»
 * навсегда (не откатывается при уходе блока вверх/вниз). Дополнительно ловим быстрый скролл
 * и блоки уже в viewport при загрузке.
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

    const reveal = () => setVisible(true);

    /** Уже в окне (например, после якоря или низкой высоты экрана) */
    const checkInView = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const margin = vh * 0.12;
      const inView = r.top < vh - margin && r.bottom > margin;
      if (inView) reveal();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) reveal();
        }
      },
      {
        /* Несколько порогов + «запас» по краям — не пропускаем один быстрый скролл */
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
