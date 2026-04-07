"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "copied" | "error";

export default function ClipboardButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const ariaLabel = useMemo(
    () => `${label}: ${value}`,
    [label, value],
  );

  async function onClick() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(value);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1400);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 1400);
    }
  }

  const text =
    status === "copied" ? "Copied" : status === "error" ? "Copy failed" : label;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      {text}
    </button>
  );
}

