"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { OrbSlot } from "@/components/SplineScrollOrb";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Specialist",
  "Next.js Engineer",
];

function RoleCycler() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const idx = useRef(0);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    let charTimeout: ReturnType<typeof setTimeout>;
    let pauseTimeout: ReturnType<typeof setTimeout>;
    let running = true;

    const typeOut = (text: string, onDone: () => void) => {
      let i = 0;
      el.textContent = "";
      const step = () => {
        if (!running) return;
        if (i < text.length) {
          el.textContent = text.slice(0, ++i);
          charTimeout = setTimeout(step, 55);
        } else { onDone(); }
      };
      step();
    };

    const eraseOut = (onDone: () => void) => {
      let text = el.textContent ?? "";
      const step = () => {
        if (!running) return;
        if (text.length > 0) {
          text = text.slice(0, -1);
          el.textContent = text;
          charTimeout = setTimeout(step, 30);
        } else { onDone(); }
      };
      step();
    };

    const cycle = () => {
      if (!running) return;
      typeOut(roles[idx.current], () => {
        pauseTimeout = setTimeout(() => {
          eraseOut(() => {
            idx.current = (idx.current + 1) % roles.length;
            pauseTimeout = setTimeout(cycle, 300);
          });
        }, 2200);
      });
    };

    cycle();
    return () => { running = false; clearTimeout(charTimeout); clearTimeout(pauseTimeout); };
  }, []);

  return (
    <span ref={roleRef} className="text-violet-400 font-medium" aria-live="polite" />
  );
}

function FloatingBadge({ label, x, y, delay }: { label: string; x: string; y: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${x} ${y} flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm text-xs text-white font-medium shadow-xl`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
      {label}
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-4"
          >
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Arham Saleem
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-neutral-400 font-light mb-2 h-8"
          >
            <RoleCycler />
            <span className="inline-block w-[2px] h-5 bg-violet-400 ml-0.5 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
          >
            Building scalable web experiences with the MERN stack, Next.js, and
            cutting-edge UI — one pixel-perfect component at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-violet-900/40"
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] text-white text-sm font-semibold tracking-wide hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
          >
            {[{ num: "15+", label: "Projects" }, { num: "2+", label: "Years" }, { num: "100%", label: "Dedication" }].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white">{s.num}</p>
                <p className="text-xs text-neutral-500 tracking-wider uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Orb area — same size/position as original */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-violet-600/10 blur-3xl scale-75 animate-pulse" />

            {/* Mobile: real Spline embedded here */}
            <div className="block lg:hidden w-full h-full">
              <Spline scene="https://prod.spline.design/axD63XGyPO7IswMG/scene.splinecode" />
            </div>

            {/* Desktop: slot that the provider portals the shared Spline into */}
            <OrbSlot id="hero" className="hidden lg:block w-full h-full" />

            <FloatingBadge label="React"   x="-left-12"  y="top-12"    delay={0.8} />
            <FloatingBadge label="Next.js" x="-right-10" y="top-8"    delay={1.0} />
            <FloatingBadge label="Node.js" x="-left-10"  y="bottom-16" delay={1.2} />
            <FloatingBadge label="MongoDB" x="-right-8"  y="bottom-12" delay={1.4} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}