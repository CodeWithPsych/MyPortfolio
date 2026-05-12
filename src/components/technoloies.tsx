"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const TECH_STACK = [
  { name: "React",      color: "#61DAFB", bg: "#0a1628", category: "Frontend" },
  { name: "Next.js",    color: "#ffffff", bg: "#111111", category: "Frontend" },
  { name: "Shadcn",     color: "#3178C6", bg: "#0b1a2e", category: "Frontend" },
  { name: "Tailwind",   color: "#38BDF8", bg: "#071620", category: "Frontend" },
  { name: "Node.js",    color: "#68A063", bg: "#0d1a0d", category: "Backend"  },
  { name: "Express",    color: "#ffffff", bg: "#111111", category: "Backend"  },
  { name: "MongoDB",    color: "#47A248", bg: "#0d1a0d", category: "Backend"  },
  { name: "Redux",      color: "#764ABC", bg: "#120e1f", category: "Frontend" },
  { name: "JWT",        color: "#d63aff", bg: "#130a1a", category: "Backend"  },
  { name: "Stripe",     color: "#6772E5", bg: "#0d0e20", category: "Backend"  },
  { name: "GitHub",     color: "#ffffff", bg: "#111111", category: "Tools"    },
  { name: "Vercel",     color: "#ffcfcf", bg: "#642626", category: "Tools"    },
  { name: "Render",     color: "#8B5CF6", bg: "#140f24", category: "Tools"    },
  { name: "Netlify",    color: "#00C7B7", bg: "#06201d", category: "Tools"    },
  { name: "Cloudinary", color: "#a7abc6", bg: "#44518a", category: "Tools"    },
  { name: "Framer",     color: "#0055ff", bg: "#0c2352", category: "Frontend" },
];

function TechCard({ tech, index, isInView }: {
  tech: (typeof TECH_STACK)[number];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.05s linear" : "transform 0.4s ease",
        }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ border: `1px solid ${tech.color}40` }}
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-bold"
            style={{ background: tech.bg, color: tech.color, border: `1px solid ${tech.color}30` }}
          >
            {tech.name.slice(0, 2).toUpperCase()}
          </div>
          <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{tech.category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Tools"];
  const filteredTech = filter === "All" ? TECH_STACK : TECH_STACK.filter((t) => t.category === filter);

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative overflow-hidden bg-black mt-16 lg:mt-0"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading — centered */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400"
          >
            My Arsenal
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            Tech Stack &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Strategy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 mx-auto max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base"
          >
            A carefully selected set of modern technologies used to build fast,
            scalable, and visually polished applications.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                filter === cat
                  ? "bg-violet-600 text-white"
                  : "border border-white/10 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredTech.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}