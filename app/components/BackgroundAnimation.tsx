"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#000000]"
    >
      <motion.div
        className="absolute -top-24 right-[-8rem] h-[34rem] w-[34rem] rounded-full border border-zinc-800/80 bg-[radial-gradient(circle_at_35%_35%,rgba(99,102,241,0.06),transparent_65%)]"
        animate={{
          x: [0, -24, 0],
          y: [0, 12, 0],
          scale: [1, 1.03, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[-10rem] top-[28%] h-[26rem] w-[26rem] rounded-[32%] border border-zinc-800/70 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_68%)]"
        animate={{
          x: [0, 16, 0],
          y: [0, -14, 0],
          rotate: [0, 4, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(63,63,70,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"
        animate={{ opacity: [0.02, 0.035, 0.02] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
