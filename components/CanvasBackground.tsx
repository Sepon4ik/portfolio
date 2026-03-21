"use client";

import { useEffect, useRef } from "react";

type Orb = {
  x: number;
  y: number;
  r: number;
  color: string;
  speed: number;
  phase: number;
  drift: number;
};

type Lane = {
  y: number;
  speed: number;
  phase: number;
};

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const orbs: Orb[] = [
      { x: 0.16, y: 0.2, r: 240, color: "99,102,241", speed: 0.00022, phase: 0.3, drift: 28 },
      { x: 0.82, y: 0.3, r: 260, color: "71,85,105", speed: 0.0002, phase: 1.4, drift: 34 },
      { x: 0.62, y: 0.78, r: 220, color: "39,39,42", speed: 0.00024, phase: 2.2, drift: 30 },
    ];

    const lanes: Lane[] = [
      { y: 0.22, speed: 0.00016, phase: 0.2 },
      { y: 0.36, speed: 0.00014, phase: 1.1 },
      { y: 0.5, speed: 0.00017, phase: 2.1 },
      { y: 0.64, speed: 0.00015, phase: 3.4 },
    ];

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawAmbientGrid = (time: number) => {
      const spacing = 120;
      const ox = ((time * 0.006) % spacing) - spacing;
      const oy = ((time * 0.005) % spacing) - spacing;
      ctx.strokeStyle = "rgba(113,113,122,0.09)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = ox; x < w + spacing; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = oy; y < h + spacing; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
    };

    const drawFlowLanes = (time: number) => {
      for (const lane of lanes) {
        const y = lane.y * h;

        // Base timeline lane
        ctx.strokeStyle = "rgba(161,161,170,0.12)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        // Animated progress segment
        const t = time * lane.speed + lane.phase;
        const start = ((Math.sin(t) + 1) / 2) * (w * 0.68);
        const length = w * 0.22;
        const grad = ctx.createLinearGradient(start, y, start + length, y);
        grad.addColorStop(0, "rgba(59,130,246,0)");
        grad.addColorStop(0.5, "rgba(59,130,246,0.32)");
        grad.addColorStop(1, "rgba(59,130,246,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(start, y);
        ctx.lineTo(start + length, y);
        ctx.stroke();

        // Milestone node pulse
        const nx = start + length * 0.78;
        const pulse = 2 + ((Math.sin(t * 2.2) + 1) / 2) * 3;
        ctx.fillStyle = "rgba(125,211,252,0.55)";
        ctx.beginPath();
        ctx.arc(nx, y, pulse, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawOrbs = (time: number) => {
      for (const orb of orbs) {
        const t = time * orb.speed;
        const ox = Math.cos(t + orb.phase) * orb.drift;
        const oy = Math.sin(t * 1.2 + orb.phase) * orb.drift;
        const cx = orb.x * w + ox;
        const cy = orb.y * h + oy;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        g.addColorStop(0, `rgba(${orb.color},0.12)`);
        g.addColorStop(0.6, `rgba(${orb.color},0.06)`);
        g.addColorStop(1, `rgba(${orb.color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawTopRightVignette = () => {
      const g = ctx.createRadialGradient(w * 0.86, h * 0.1, 0, w * 0.86, h * 0.1, 440);
      g.addColorStop(0, "rgba(99,102,241,0.16)");
      g.addColorStop(0.45, "rgba(71,85,105,0.08)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      drawAmbientGrid(time);
      drawFlowLanes(time);
      drawOrbs(time);
      drawTopRightVignette();

      raf = window.requestAnimationFrame(render);
    };

    resize();
    raf = window.requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />;
}

