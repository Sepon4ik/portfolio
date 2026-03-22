"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";

export function ConstellationParticles() {
  const [engineReady, setEngineReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  /** Узкий экран или тач — меньше частиц и без repulse, чтобы не есть FPS при скролле */
  const [liteMode, setLiteMode] = useState(false);

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqNarrow = window.matchMedia("(max-width: 900px)");
    const mqCoarse = window.matchMedia("(pointer: coarse)");

    const onReduce = () => setReducedMotion(mqReduce.matches);
    const onLite = () => setLiteMode(mqNarrow.matches || mqCoarse.matches);

    onReduce();
    onLite();
    mqReduce.addEventListener("change", onReduce);
    mqNarrow.addEventListener("change", onLite);
    mqCoarse.addEventListener("change", onLite);

    void initParticlesEngine(async (engine) => {
      await loadFull(engine);
    })
      .then(() => setEngineReady(true))
      .catch((err) => {
        console.error("[ConstellationParticles] init failed", err);
      });

    return () => {
      mqReduce.removeEventListener("change", onReduce);
      mqNarrow.removeEventListener("change", onLite);
      mqCoarse.removeEventListener("change", onLite);
    };
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const base: ISourceOptions = {
      background: { color: { value: "transparent" } },
      /* fullScreen в Next часто даёт z-index/размеры не там — фиксируем вручную */
      fullScreen: { enable: false },
      detectRetina: !(reducedMotion || liteMode),
      fpsLimit: reducedMotion || liteMode ? 30 : 48,
      pauseOnBlur: true,
      smooth: !liteMode,
    };

    if (reducedMotion) {
      return {
        ...base,
        particles: {
          number: {
            value: 40,
            density: { enable: true, width: 1400, height: 900 },
          },
          color: { value: "#a1a1aa" },
          opacity: { value: 0.25 },
          size: { value: { min: 1, max: 1.5 } },
          move: { enable: false },
          links: { enable: false },
          shape: { type: ["circle", "triangle"] },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: false, mode: "repulse", parallax: { enable: false } },
            onClick: { enable: false, mode: "push" },
          },
        },
      };
    }

    if (liteMode) {
      return {
        ...base,
        particles: {
          number: {
            value: 48,
            density: { enable: true, width: 1200, height: 800 },
          },
          color: { value: "#a1a1aa" },
          opacity: { value: 0.32 },
          size: { value: { min: 1, max: 2 } },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            path: false,
            animation: { enable: true, speed: 10, sync: false, decay: 0 },
          },
          move: {
            enable: true,
            speed: 0.28,
            direction: "none",
            random: true,
            straight: false,
            outModes: "bounce",
          },
          links: {
            enable: true,
            distance: 110,
            width: 0.45,
            opacity: 0.22,
            color: "#a1a1aa",
          },
          shape: { type: "circle" },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: false, mode: "repulse", parallax: { enable: false } },
            onClick: { enable: false, mode: "push" },
          },
        },
      };
    }

    return {
      ...base,
      particles: {
        number: {
          value: 110,
          density: { enable: true, width: 1400, height: 900 },
        },
        color: { value: "#a1a1aa" },
        opacity: { value: 0.42 },
        size: { value: { min: 1, max: 2.8 } },
        rotate: {
          value: { min: 0, max: 360 },
          direction: "random",
          path: false,
          animation: { enable: true, speed: 18, sync: false, decay: 0 },
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          random: true,
          straight: false,
          outModes: "bounce",
        },
        links: {
          enable: true,
          distance: 125,
          width: 0.55,
          opacity: 0.34,
          color: "#a1a1aa",
        },
        shape: { type: ["circle", "triangle"] },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 0, smooth: 0 },
          },
          onClick: { enable: false, mode: "push" },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.32,
            factor: 3.5,
            speed: 0.6,
            maxSpeed: 24,
            easing: "ease-out-quad",
          },
        },
      },
    };
  }, [reducedMotion, liteMode]);

  const canvas = useMemo(() => {
    if (!engineReady) return null;
    return (
      <Particles
        key={`${reducedMotion ? "r" : "f"}-${liteMode ? "l" : "h"}`}
        id="constellation-particles"
        className="h-full min-h-[100dvh] w-full"
        options={options}
      />
    );
  }, [engineReady, options]);

  if (!engineReady) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] h-[100dvh] w-full overflow-hidden"
      aria-hidden
    >
      {canvas}
    </div>
  );
}
