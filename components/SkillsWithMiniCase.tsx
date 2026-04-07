"use client";

import { useCallback, useEffect, useState } from "react";
// Simple X icon to avoid extra dependency
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}
import { skillMiniCases } from "@/lib/skill-mini-cases";

type Group = { label: string; items: readonly string[] };

const tagBase =
  "inline-flex cursor-pointer text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

export function SkillsWithMiniCase({
  groups,
}: {
  groups: readonly Group[];
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

  const tagClass =
    `${tagBase} rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[11px] font-medium leading-snug tracking-tight text-black/65 ` +
    `hover:border-black/25 hover:text-black/90 hover:bg-black/[0.06] active:scale-[0.98]`;

  return (
    <>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => setOpen(skill)}
                  className={tagClass}
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
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mini-case-title"
            className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-black/10 bg-[#fbfbfa] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 rounded-lg p-2 text-black/40 transition hover:bg-black/5 hover:text-black/70"
              aria-label="Close"
            >
              <XIcon className="h-4 w-4" />
            </button>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
              Mini-case
            </p>
            <h3 id="mini-case-title" className="mt-2 font-serif text-lg font-semibold text-[#1a1a1a]">
              {data.title}
            </h3>
            <div className="mt-4 h-px w-full bg-black/10" />
            <p className="mt-4 text-sm leading-relaxed text-black/60">{data.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
