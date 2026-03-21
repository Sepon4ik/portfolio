"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "absolute -top-28 -right-24 h-[34rem] w-[34rem] rounded-full blur-3xl bg-[rgba(129,140,248,0.13)]",
    animate: { x: [0, -38, 0], y: [0, 24, 0], scale: [1, 1.08, 1], opacity: [0.06, 0.11, 0.06] },
    duration: 34,
  },
  {
    className:
      "absolute top-[24%] -left-28 h-[30rem] w-[30rem] rounded-full blur-3xl bg-[rgba(148,163,184,0.1)]",
    animate: { x: [0, 34, 0], y: [0, -28, 0], scale: [1, 1.06, 1], opacity: [0.05, 0.1, 0.05] },
    duration: 39,
  },
  {
    className:
      "absolute bottom-[-8rem] right-[20%] h-[26rem] w-[26rem] rounded-full blur-3xl bg-[rgba(113,113,122,0.11)]",
    animate: { x: [0, 28, 0], y: [0, -20, 0], scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] },
    duration: 42,
  },
  {
    className:
      "absolute left-[32%] top-[46%] h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[rgba(51,65,85,0.1)]",
    animate: { x: [0, 16, 0], y: [0, -14, 0], scale: [1, 1.06, 1], opacity: [0.04, 0.09, 0.04] },
    duration: 31,
  },
  {
    className:
      "absolute inset-0 bg-[linear-gradient(to_right,rgba(113,113,122,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,122,0.18)_1px,transparent_1px)] bg-[size:90px_90px]",
    animate: { opacity: [0.05, 0.09, 0.05] },
    duration: 26,
  },
];

export default function VibeBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden bg-[#000000] pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_52%)]" />
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className={blob.className}
          animate={blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

