"use client";

import { useLayoutEffect } from "react";

/**
 * На lg ограничивает высоту колонки с портретом по вертикали блока слева:
 * от верха #hero-featured-block до низа #hero-about-actions (Featured…кнопки).
 * height + max-height на ячейке — внутри кадр на всю высоту (cover), без зазора под фото.
 */
export function HeroPortraitHeightSync() {
  useLayoutEffect(() => {
    const topEl = document.getElementById("hero-featured-block");
    const bottomEl = document.getElementById("hero-about-actions");
    const cell = document.getElementById("hero-portrait-cell");
    if (!topEl || !bottomEl || !cell) return;

    const mq = window.matchMedia("(min-width: 1024px)");

    const measure = () => {
      const top = topEl.getBoundingClientRect().top;
      const bottom = bottomEl.getBoundingClientRect().bottom;
      return Math.max(0, Math.ceil(bottom - top));
    };

    const apply = () => {
      if (!mq.matches) {
        cell.style.removeProperty("max-height");
        cell.style.removeProperty("height");
        return;
      }
      const h = measure();
      if (h > 0) {
        cell.style.maxHeight = `${h}px`;
        cell.style.height = `${h}px`;
      } else {
        cell.style.removeProperty("max-height");
        cell.style.removeProperty("height");
      }
    };

    const scheduleApply = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(apply);
      });
    };

    scheduleApply();
    void document.fonts?.ready?.then(scheduleApply);

    const ro = new ResizeObserver(() => scheduleApply());
    ro.observe(topEl);
    ro.observe(bottomEl);
    const copy = document.getElementById("hero-about-copy");
    if (copy) ro.observe(copy);
    const leftCol = document.getElementById("hero-about-left");
    if (leftCol) ro.observe(leftCol);
    const about = document.getElementById("about");
    if (about) ro.observe(about);

    mq.addEventListener("change", scheduleApply);
    window.addEventListener("resize", scheduleApply);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", scheduleApply);
      window.removeEventListener("resize", scheduleApply);
    };
  }, []);

  return null;
}
