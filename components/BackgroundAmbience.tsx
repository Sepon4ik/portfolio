"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_PLAYING = "portfolio-ambience-playing";
const STORAGE_VOLUME = "portfolio-ambience-volume";

const WAVE_BARS = 5;

function getAudioSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_AMBIENCE_AUDIO_SRC?.trim();
  if (fromEnv) return fromEnv;
  return "/audio/ambience.mp3";
}

/**
 * Фоновая музыка: клик по мини-«волнам» включает/ставит на паузу (без автовоспроизведения).
 */
export function BackgroundAmbience() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const src = getAudioSrc();
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.32);
  const [unavailable, setUnavailable] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const v = localStorage.getItem(STORAGE_VOLUME);
      if (v != null) {
        const n = Number.parseFloat(v);
        if (!Number.isNaN(n) && n >= 0 && n <= 1) setVolume(n);
      }
      if (localStorage.getItem(STORAGE_PLAYING) === "1") {
        setPlaying(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    try {
      localStorage.setItem(STORAGE_VOLUME, String(volume));
    } catch {
      /* ignore */
    }
  }, [volume]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a || !mounted) return;

    if (playing) {
      void a.play().catch(() => {
        setPlaying(false);
      });
    } else {
      a.pause();
    }

    try {
      localStorage.setItem(STORAGE_PLAYING, playing ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [playing, mounted]);

  const onError = useCallback(() => {
    setUnavailable(true);
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (unavailable) return;
    setPlaying((p) => !p);
  }, [unavailable]);

  if (!mounted || unavailable) {
    return null;
  }

  const waveClass = playing ? "ambience-waves ambience-waves--playing" : "ambience-waves ambience-waves--idle";

  return (
    <div
      className="pointer-events-auto fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-[max(0.75rem,env(safe-area-inset-left,0px))] z-[9990] flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/90 py-1.5 pl-1.5 pr-2 shadow-lg backdrop-blur-md sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:left-5 sm:gap-2.5 sm:pl-2 sm:pr-2.5"
      role="group"
      aria-label="Фоновая музыка"
    >
      <audio
        ref={audioRef}
        src={src}
        loop
        playsInline
        preload="metadata"
        className="hidden"
        onError={onError}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Пауза — фоновая музыка" : "Включить фоновую музыку"}
        title={playing ? "Пауза" : "Включить музыку"}
        className="hover-bounce flex h-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-zinc-900/85 px-1 transition hover:border-cyan-500/35 hover:bg-zinc-800/90"
      >
        <span className={waveClass} aria-hidden>
          {Array.from({ length: WAVE_BARS }, (_, i) => (
            <span key={i} className="ambience-waves__bar" />
          ))}
        </span>
      </button>
      <label className="sr-only" htmlFor="ambience-volume">
        Громкость фона
      </label>
      <input
        id="ambience-volume"
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
        className="hidden w-14 cursor-pointer accent-cyan-400 sm:block sm:w-[4.5rem]"
        aria-label="Громкость"
      />
      <span className="sr-only" aria-live="polite">
        {playing ? "Музыка включена" : "Музыка выключена"}
      </span>
    </div>
  );
}
