"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { skillMiniCases } from "@/lib/skill-mini-cases";

type Group = { label: string; items: readonly string[] };

const tagBase =
  "inline-flex cursor-pointer text-left transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50";

export function SkillsWithMiniCase({
  groups,
  variant = "default",
}: {
  groups: readonly Group[];
  variant?: "default" | "glass";
}) {
  const [open, setOpen] = useState<string | null>(null);
  const data = open ? skillMiniCases[open] : null;

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const tagClassGlass =
    `${tagBase} rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] font-medium leading-snug tracking-tight text-zinc-300 backdrop-blur-sm ` +
    `hover:border-cyan-500/35 hover:text-white hover:shadow-[0_0_28px_-4px_rgba(34,211,238,0.45)] active:scale-[0.98]`;

  const tagClassDefault =
    `${tagBase} hover-bounce rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1.5 text-[11px] font-normal leading-snug tracking-tight text-zinc-400 ` +
    `duration-200 hover:border-zinc-600 hover:text-zinc-300 hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.12)]`;

  return (
    <>
      <div
        className={
          variant === "glass"
            ? "mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3"
            : "mt-6 space-y-8"
        }
      >
        {groups.map((group) => (
          <div
            key={group.label}
            className={
              variant === "glass"
                ? "rounded-[12px] border border-white/10 bg-black/35 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md sm:p-5"
                : ""
            }
          >
            <p
              className={
                variant === "glass"
                  ? "mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white"
                  : "mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600"
              }
            >
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => setOpen(skill)}
                  className={variant === "glass" ? tagClassGlass : tagClassDefault}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {open && data && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mini-case-title"
            className="card-glow-hover relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-zinc-700/80 bg-zinc-950 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-500/90">
              Mini-case
            </p>
            <h3 id="mini-case-title" className="mt-2 text-lg font-semibold text-white">
              {data.title}
            </h3>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-500/40 via-zinc-600/50 to-transparent" />
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{data.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
