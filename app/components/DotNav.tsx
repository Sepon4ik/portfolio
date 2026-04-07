"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "About" },
  { id: "prolife", label: "ProLife" },
  { id: "pharma", label: "Pharma" },
  { id: "contact", label: "Contact" },
];

export default function DotNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.getElementById("snap-root");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const vh = window.innerHeight;
      const idx = Math.round(scrollTop / vh);
      setActive(Math.min(idx, sections.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const container = document.getElementById("snap-root");
    if (!container) return;
    container.scrollTo({ top: idx * window.innerHeight, behavior: "smooth" });
  };

  return (
    <nav className="dot-nav" aria-label="Section navigation">
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(i)}
          className={`dot-nav-item ${i === active ? "active" : ""}`}
          aria-label={s.label}
          title={s.label}
        />
      ))}
    </nav>
  );
}
