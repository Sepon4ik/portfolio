"use client";

import { useCallback, useRef, useState } from "react";
import { Gift, Send } from "lucide-react";

type GuideTelegramCtaProps = {
  href: string;
  /** Компактная кнопка (шапка) */
  variant?: "header" | "footer";
  className?: string;
};

/** Превью «первая страница» гайда — мокап без внешнего ассета */
function GuidePdfMockup() {
  return (
    <div
      className="group/mock relative shrink-0"
      aria-hidden
    >
      <div
        className="relative h-[200px] w-[150px] rotate-[-6deg] rounded-md border border-white/15 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-[0_24px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 group-hover/mock:rotate-[-4deg] group-hover/mock:border-cyan-500/30 sm:h-[220px] sm:w-[165px]"
      >
        <div className="absolute left-2 right-2 top-3 h-1.5 rounded bg-white/10" />
        <div className="absolute left-2 right-6 top-7 space-y-1.5">
          <div className="h-1 rounded bg-white/20" />
          <div className="h-1 w-4/5 rounded bg-white/12" />
          <div className="h-1 w-3/5 rounded bg-white/10" />
        </div>
        <p className="absolute left-2 right-2 top-[36%] text-[9px] font-bold uppercase leading-tight tracking-[0.1em] text-cyan-200/90">
          AI Tooth
        </p>
        <p className="absolute left-2 right-2 top-[50%] text-[7px] font-semibold uppercase leading-snug tracking-[0.12em] text-zinc-400">
          Grow your AI Skills
        </p>
        <div className="absolute bottom-8 left-2 right-2 space-y-1">
          <div className="h-0.5 rounded bg-white/8" />
          <div className="h-0.5 w-11/12 rounded bg-white/6" />
          <div className="h-0.5 w-10/12 rounded bg-white/6" />
        </div>
        <div className="absolute bottom-3 left-2 text-[7px] text-zinc-600">PDF · AI Tooth</div>
        <div className="absolute -right-1 bottom-6 h-10 w-5 rounded-sm border border-white/10 bg-zinc-800/90 shadow-lg" />
      </div>
    </div>
  );
}

/**
 * Кнопка открытия бота + мокап + кастомный «курсор-подсказка» при наведении.
 * href — deep link на бота, напр. https://t.me/MyBot?start=scaling_guide
 */
export function GuideTelegramCta({ href, variant = "footer", className = "" }: GuideTelegramCtaProps) {
  const [tip, setTip] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });
  const frame = useRef<number>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setTip({ x: e.clientX, y: e.clientY, visible: true });
    });
  }, []);

  const onLeave = useCallback(() => {
    setTip((t) => ({ ...t, visible: false }));
  }, []);

  const isHeader = variant === "header";

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={[
          "guide-telegram-cta group/cta relative inline-flex items-center gap-2 rounded border border-red-400/85 bg-gradient-to-b from-red-500 to-red-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_24px_-4px_rgba(239,68,68,0.45)] transition hover:border-red-300/90 hover:from-red-400 hover:to-red-500 hover:shadow-[0_0_28px_-4px_rgba(248,113,113,0.55)]",
          isHeader ? "shrink-0" : "",
          className,
        ].join(" ")}
      >
        <Gift className="h-3.5 w-3.5 opacity-95" aria-hidden />
        {isHeader ? (
          <>
            <span className="hidden min-[1100px]:inline">
              Free guide: AI Tooth. Grow your AI Skills
            </span>
            <span className="hidden min-[640px]:inline min-[1100px]:hidden">
              Free guide: AI Tooth
            </span>
            <span className="min-[640px]:hidden">AI Tooth</span>
          </>
        ) : (
          <>
            <span className="hidden sm:inline">Free guide: AI Tooth. Grow your AI Skills</span>
            <span className="sm:hidden">AI Tooth</span>
          </>
        )}
        <Send className="h-3 w-3 opacity-90" aria-hidden />
      </a>

      {tip.visible && (
        <div
          className="pointer-events-none fixed z-[10050] flex -translate-x-1/2 -translate-y-[calc(100%+12px)] items-center gap-1.5 rounded-full border border-cyan-500/40 bg-black/90 px-3 py-1.5 text-[11px] font-medium text-cyan-100 shadow-lg backdrop-blur-md"
          style={{ left: tip.x, top: tip.y }}
        >
          <Send className="h-3.5 w-3.5 text-cyan-400" aria-hidden />
          Click for Gift
        </div>
      )}
    </>
  );
}

/** Блок для футера: мокап + описание + кнопка */
export function GuideTelegramBlock({ botUrl }: { botUrl: string }) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8 rounded-2xl border border-white/10 bg-zinc-950/40 px-6 py-8 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
      <GuidePdfMockup />
      <div className="max-w-sm text-center sm:text-left">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-red-400/90">Free PDF</p>
        <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">AI Tooth</h3>
        <p className="mt-1 text-sm font-medium text-cyan-200/80">Grow your AI Skills</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          Open the Telegram bot—after you join the channel, you&apos;ll get the guide as a file.
        </p>
        <div className="mt-5 flex justify-center sm:justify-start">
          <GuideTelegramCta href={botUrl} variant="footer" />
        </div>
      </div>
    </div>
  );
}
