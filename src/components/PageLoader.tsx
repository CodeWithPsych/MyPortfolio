"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  onComplete: () => void;
}

const LOADING_PHASES = [
  "Initializing systems",
  "Loading assets",
  "Compiling shaders",
  "Ready",
];

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);
  const [counters, setCounters] = useState({ files: 0, kb: 0 });
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const DURATION = 2800; // ms — feels fast but intentional

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      // Ease-out curve so it feels like real loading
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      const pct = Math.round(eased * 100);

      setProgress(pct);
      setPhase(
        pct < 25 ? 0 : pct < 55 ? 1 : pct < 85 ? 2 : 3
      );
      setCounters({
        files: Math.floor(eased * 47),
        kb: Math.floor(eased * 2340),
      });

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Small hold at 100% before exiting
        setTimeout(() => setDone(true), 600);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          aria-label="Loading"
          role="status"
        >
          {/* Ambient grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Radial glow that grows with progress */}
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-300"
            style={{
              background: `radial-gradient(ellipse ${progress * 3}px ${progress * 2}px at 50% 50%, rgba(139,92,246,${progress * 0.0018}) 0%, transparent 70%)`,
            }}
          />

          {/* Corner scan lines */}
          <ScanLine top left />
          <ScanLine top right />
          <ScanLine bottom left />
          <ScanLine bottom right />

          {/* Main content */}
          <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-8">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="mb-10 flex flex-col items-center"
            >
              {/* Animated ring */}
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  className="absolute inset-0 h-full w-full -rotate-90"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32" cy="32" r="28"
                    fill="none"
                    stroke="rgba(139,92,246,0.15)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="32" cy="32" r="28"
                    fill="none"
                    stroke="rgba(139,92,246,0.9)"
                    strokeWidth="2"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.05s linear" }}
                  />
                </svg>
                {/* Inner monogram */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-violet-900/20 backdrop-blur-sm">
                  <span
                    className="font-mono text-sm font-bold tracking-tighter text-violet-300"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    AS
                  </span>
                </div>
              </div>

              {/* Site name */}
              <span
                className="text-xs font-semibold tracking-[0.35em] text-neutral-500 uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                arham.dev
              </span>
            </motion.div>

            {/* Progress bar */}
            <div className="mb-3 w-full">
              <div className="mb-2 flex justify-between">
                <span
                  className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {LOADING_PHASES[phase]}
                </span>
                <span
                  className="text-[10px] tabular-nums text-violet-500"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(progress).padStart(3, "0")}%
                </span>
              </div>

              {/* Track */}
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/5">
                {/* Glow bar */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-400 transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
                {/* Shimmer */}
                <div
                  className="absolute inset-y-0 w-24 rounded-full opacity-60"
                  style={{
                    left: `calc(${progress}% - 48px)`,
                    background:
                      "linear-gradient(90deg, transparent, rgba(167,139,250,0.8), transparent)",
                    transition: "left 0.075s linear",
                  }}
                />
              </div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex w-full justify-between"
            >
              <Stat label="files" value={counters.files} />
              <Stat label="kb loaded" value={counters.kb} />
              <Stat label="threads" value={4} />
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 text-[10px] tracking-[0.4em] text-neutral-700 uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Full Stack Developer · MERN · Next.js
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span
        className="tabular-nums text-[11px] font-semibold text-neutral-400"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {value}
      </span>
      <span
        className="text-[9px] tracking-widest text-neutral-700 uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
    </div>
  );
}

function ScanLine({
  top,
  bottom,
  left,
  right,
}: {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute flex"
      style={{
        ...(top ? { top: 20 } : {}),
        ...(bottom ? { bottom: 20 } : {}),
        ...(left ? { left: 20 } : {}),
        ...(right ? { right: 20 } : {}),
        flexDirection: "column",
        alignItems: left ? "flex-start" : "flex-end",
        gap: 3,
      }}
    >
      <div
        style={{
          width: 24,
          height: 1,
          background: "rgba(139,92,246,0.35)",
        }}
      />
      <div
        style={{
          width: 1,
          height: 24,
          background: "rgba(139,92,246,0.35)",
        }}
      />
    </div>
  );
}