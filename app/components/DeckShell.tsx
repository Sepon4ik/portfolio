"use client";

import { useEffect, useRef, useState, type ReactNode, Children } from "react";

export default function DeckShell({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const lockRef = useRef(0);

  useEffect(() => {
    const lockMs = 750;

    const go = (dir: 1 | -1) => {
      const now = Date.now();
      if (now - lockRef.current < lockMs) return;
      setActive((cur) => {
        const next = Math.max(0, Math.min(slides.length - 1, cur + dir));
        if (next !== cur) lockRef.current = now;
        return next;
      });
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;
      go(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 50) return;
      go(dy > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [slides.length]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {slides.map((child, i) => {
        // Slide 0 stays put. Slide i>0 starts off-screen below and slides up over previous slides.
        const offset = i > active ? 100 : 0;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-transform duration-[750ms] will-change-transform"
            style={{
              transform: `translateY(${offset}%)`,
              transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
              zIndex: i + 1,
              boxShadow:
                i > 0 && i === active
                  ? "0 -30px 80px rgba(0,0,0,0.6)"
                  : "none",
            }}
          >
            {child}
          </div>
        );
      })}

      {/* Slide indicator (right side) */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              lockRef.current = Date.now();
              setActive(i);
            }}
            aria-label={`Slide ${i + 1}`}
            className="group relative h-2 w-2 rounded-full transition-all"
            style={{
              background:
                i === active ? "#4ade80" : "rgba(255,255,255,0.2)",
              boxShadow:
                i === active ? "0 0 12px rgba(74,222,128,0.5)" : "none",
              transform: i === active ? "scale(1.25)" : "scale(1)",
            }}
          />
        ))}
      </nav>
    </div>
  );
}
