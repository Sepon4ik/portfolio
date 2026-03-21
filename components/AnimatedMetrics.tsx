"use client";

import { useEffect, useRef, useState } from "react";

type Metric =
  | { kind: "count"; end: number; suffix: string; label: string; decimals?: number }
  | { kind: "range"; text: string; label: string };

const metrics: Metric[] = [
  { kind: "count", end: 15, suffix: "+", label: "Years Leadership" },
  { kind: "count", end: 90, suffix: "%+", label: "Team Retention" },
  { kind: "range", text: "50–200+", label: "Management Scale" },
];

function useCountUp(target: number, durationMs: number, startWhen: boolean, decimals = 0) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!startWhen) {
      setV(0);
      return;
    }

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      const n = target * eased;
      setV(decimals ? Math.round(n * 10) / 10 : Math.round(n));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, startWhen, decimals]);

  return v;
}

const cardShell = (tone: "section" | "hero") =>
  tone === "hero"
    ? "rounded-lg border border-zinc-700/80 bg-black/55 px-2.5 py-2.5 backdrop-blur-md sm:px-3 sm:py-3 lg:px-3.5 lg:py-3.5"
    : "card-glow-hover rounded-lg border border-zinc-800/90 bg-zinc-900/40 px-4 py-4";

function MetricCountCard({
  end,
  suffix,
  label,
  decimals,
  active,
  tone,
}: {
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
  active: boolean;
  tone: "section" | "hero";
}) {
  const n = useCountUp(end, 1600, active, decimals);
  const valueClass =
    tone === "hero"
      ? "text-xl font-semibold tabular-nums tracking-tight text-white sm:text-2xl lg:text-[clamp(1.25rem,1.65vw+0.7rem,2rem)] xl:text-[clamp(1.75rem,1.5vw+1rem,2.25rem)]"
      : "text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl";
  return (
    <div className={cardShell(tone)}>
      <p className={valueClass}>
        {decimals ? n.toFixed(1) : n}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[11px]">{label}</p>
    </div>
  );
}

function MetricRangeCard({
  text,
  label,
  tone,
}: {
  text: string;
  label: string;
  tone: "section" | "hero";
}) {
  const valueClass =
    tone === "hero"
      ? "text-xl font-semibold tabular-nums tracking-tight text-white sm:text-2xl lg:text-[clamp(1.25rem,1.65vw+0.7rem,2rem)] xl:text-[clamp(1.75rem,1.5vw+1rem,2.25rem)]"
      : "text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl";
  return (
    <div className={cardShell(tone)}>
      <p className={valueClass}>{text}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[11px]">{label}</p>
    </div>
  );
}

type AnimatedMetricsProps = {
  /** Hero: сразу виден при загрузке — счётчики стартуют без скролла */
  variant?: "section" | "hero";
  className?: string;
};

export function AnimatedMetrics({ variant = "section", className }: AnimatedMetricsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHero = variant === "hero";
  const [active, setActive] = useState(isHero);

  useEffect(() => {
    if (isHero) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        // Каждый вход в viewport (сверху или снизу) → true; уход → сброс и новый прогон при следующем входе
        setActive(e.isIntersecting);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isHero]);

  const gridClass =
    variant === "hero"
      ? "mt-3 grid gap-2 sm:grid-cols-3 sm:gap-2.5 lg:gap-2.5"
      : "mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4";

  return (
    <div ref={ref} className={`${gridClass}${className ? ` ${className}` : ""}`}>
      {metrics.map((m) =>
        m.kind === "range" ? (
          <MetricRangeCard key={m.label} text={m.text} label={m.label} tone={variant} />
        ) : (
          <MetricCountCard
            key={m.label}
            end={m.end}
            suffix={m.suffix}
            label={m.label}
            decimals={m.decimals}
            active={active}
            tone={variant}
          />
        ),
      )}
    </div>
  );
}
