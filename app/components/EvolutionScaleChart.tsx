"use client";

import { motion } from "framer-motion";

export default function EvolutionScaleChart() {
  return (
    <div className="mt-5">
      <svg
        width="100%"
        viewBox="0 0 260 90"
        className="block"
        aria-hidden="true"
      >
        <motion.path
          d="M 12 72 C 60 64, 92 38, 128 46 S 198 28, 248 16"
          fill="none"
          stroke="rgba(26,26,26,0.3)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.25, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

