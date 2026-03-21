/**
 * Pipeline-style decoration: dashed lanes + stage blocks.
 * Clipped to the LEFT column only so lines never cross the portrait.
 */
export function PipelineBackdrop() {
  return (
    <div
      aria-hidden
      className="pipeline-mask pointer-events-none absolute inset-y-0 left-0 z-[5] w-[min(100%,92vw)] max-w-[400px] overflow-hidden sm:max-w-[520px] sm:w-[min(100%,58vw)] lg:max-w-[640px] lg:w-[52%]"
    >
      <svg
        className="h-full w-full opacity-[0.42] sm:opacity-[0.48]"
        viewBox="0 0 520 720"
        preserveAspectRatio="xMinYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pipeLineHero" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(56, 189, 248)" stopOpacity="0.15" />
            <stop offset="40%" stopColor="rgb(56, 189, 248)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.35" />
          </linearGradient>
          <filter id="pipeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dense horizontal lanes — stay within ~x≤480 */}
        <path
          d="M -20 96 H 460"
          fill="none"
          stroke="url(#pipeLineHero)"
          strokeWidth="1.4"
          vectorEffect="nonScalingStroke"
          filter="url(#pipeGlow)"
          className="pipeline-stroke pipeline-stroke-slow"
        />
        <path
          d="M -20 168 H 380 L 400 188 H 470"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.15"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke"
          style={{ animationDelay: "-0.4s" }}
        />
        <path
          d="M 40 240 H 320 Q 360 240 380 268 H 455"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.05"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-fast"
          style={{ animationDelay: "-0.9s" }}
        />
        <path
          d="M -20 312 H 260 L 290 340 H 448"
          fill="none"
          stroke="url(#pipeLineHero)"
          strokeWidth="1.2"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-slow"
          style={{ animationDelay: "-1.4s" }}
        />
        <path
          d="M 60 392 H 340 L 365 420 H 465"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke"
          style={{ animationDelay: "-0.2s" }}
        />
        <path
          d="M -10 472 H 220 L 250 500 H 440"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.95"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-fast"
          style={{ animationDelay: "-1.8s" }}
        />
        <path
          d="M 20 552 H 300 L 330 580 H 450"
          fill="none"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="1.1"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-slow"
          style={{ animationDelay: "-2.2s" }}
        />

        {/* Vertical connectors — left column only */}
        <path
          d="M 96 64 V 620"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-v"
        />
        <path
          d="M 188 80 V 600"
          fill="none"
          stroke="rgba(255,255,255,0.11)"
          strokeWidth="0.85"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-v"
          style={{ animationDelay: "-0.5s" }}
        />
        <path
          d="M 276 120 V 640"
          fill="none"
          stroke="rgba(99,102,241,0.22)"
          strokeWidth="0.9"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-v"
          style={{ animationDelay: "-1.2s" }}
        />
        <path
          d="M 364 96 V 580"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.75"
          vectorEffect="nonScalingStroke"
          className="pipeline-stroke pipeline-stroke-v"
          style={{ animationDelay: "-0.85s" }}
        />

        {/* Stage blocks — grid-like pipeline nodes */}
        <g className="pipeline-nodes">
          <rect x="72" y="88" width="48" height="20" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(56,189,248,0.45)" className="pipeline-node" />
          <rect x="200" y="156" width="52" height="22" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.22)" className="pipeline-node" style={{ animationDelay: "0.25s" }} />
          <rect x="320" y="228" width="56" height="22" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(99,102,241,0.45)" className="pipeline-node" style={{ animationDelay: "0.5s" }} />
          <rect x="120" y="300" width="44" height="20" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.2)" className="pipeline-node" style={{ animationDelay: "0.15s" }} />
          <rect x="248" y="328" width="50" height="22" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(56,189,248,0.35)" className="pipeline-node" style={{ animationDelay: "0.65s" }} />
          <rect x="380" y="400" width="58" height="24" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.18)" className="pipeline-node" style={{ animationDelay: "0.35s" }} />
          <rect x="64" y="452" width="46" height="20" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(99,102,241,0.35)" className="pipeline-node" style={{ animationDelay: "0.8s" }} />
          <rect x="292" y="512" width="54" height="22" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(56,189,248,0.4)" className="pipeline-node" style={{ animationDelay: "0.45s" }} />
          <rect x="168" y="548" width="48" height="20" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.16)" className="pipeline-node" style={{ animationDelay: "0.95s" }} />
        </g>

        {/* Small junction dots */}
        <g fill="rgba(255,255,255,0.35)" className="pipeline-dots">
          <circle cx="96" cy="168" r="2.2" className="pipeline-dot" />
          <circle cx="188" cy="240" r="2" className="pipeline-dot" style={{ animationDelay: "0.3s" }} />
          <circle cx="276" cy="312" r="2.2" className="pipeline-dot" style={{ animationDelay: "0.6s" }} />
          <circle cx="320" cy="392" r="2" className="pipeline-dot" style={{ animationDelay: "0.2s" }} />
          <circle cx="220" cy="472" r="2.2" className="pipeline-dot" style={{ animationDelay: "0.9s" }} />
          <circle cx="364" cy="552" r="2" className="pipeline-dot" style={{ animationDelay: "0.5s" }} />
        </g>
      </svg>

      {/* Extra lanes — only left zone (no right-side spans) */}
      <div className="absolute inset-0">
        <div className="pipeline-lane absolute left-[4%] top-[18%] h-[2px] w-[48%] max-w-[320px] rotate-[1deg]" />
        <div
          className="pipeline-lane pipeline-lane-delay absolute left-[8%] top-[42%] h-[2px] w-[52%] max-w-[340px] -rotate-[0.5deg]"
          style={{ animationDelay: "-2.5s" }}
        />
        <div
          className="pipeline-lane absolute left-[6%] bottom-[30%] h-[2px] w-[46%] max-w-[300px] rotate-[-1deg]"
          style={{ animationDelay: "-5s" }}
        />
      </div>
    </div>
  );
}
