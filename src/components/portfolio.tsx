"use client";

import React, { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Shield,
  ShoppingCart,
  FileText,
  UserX,
  Utensils,
} from "lucide-react";

import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Anonify",
    description:
      "Send anonymous messages securely with a modern privacy-first architecture.",
    icon: UserX,
    gradient: "from-pink-500 to-rose-500",
    tags: ["React", "MongoDB", "Express", "JWT"],
    github: "https://github.com/CodeWithPsych/anonify",
    demo: "https://anonify-one.vercel.app/",
  },

  {
    title: "Eato",
    description:
      "QR-based dine-in food ordering system with real-time order tracking and restaurant management.",
    icon: Utensils,
    gradient: "from-orange-500 to-red-500",
    tags: ["React Native", "Express", "MongoDB"],
    github: "https://github.com/CodeWithPsych/eato",
    demo: "https://eato.vercel.app/",
  },

  {
    title: "TextEditor",
    description:
      "Clean and powerful text utility app with formatting and editing features.",
    icon: FileText,
    gradient: "from-purple-500 to-indigo-500",
    tags: ["React", "Bootstrap", "JavaScript"],
    github: "https://github.com/CodeWithPsych/TextEditor",
    demo: "https://text-editer-by-psych.netlify.app/",
  },

  {
    title: "Notes Shield",
    description:
      "Encrypted cloud notes app with secure authentication and protected storage.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
    tags: ["React", "JWT", "MongoDB"],
    github: "https://github.com/CodeWithPsych/NotesSheild",
    demo: "https://notes-sheild.vercel.app/",
  },

  {
    title: "Urham Galoure",
    description:
      "A modern full-stack ecommerce experience with authentication and product management.",
    icon: ShoppingCart,
    gradient: "from-cyan-500 to-blue-500",
    tags: ["Next.js", "Redux", "MongoDB", "Stripe"],
    github: "https://github.com/CodeWithPsych/ecommerce",
    demo: "https://urham.vercel.app/",
    featured: true,
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [showModal, setShowModal] = useState(false);

  const handleDemoClick = (project: any) => {
    if (project.title === "Eato") {
      setShowModal(true);
      return;
    }

    window.open(project.demo, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_70%)]" />

      <div ref={ref} className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            A Glimpse Into My
 <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Recent Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-400 md:text-lg">
            Crafting immersive digital experiences using modern web technologies
            and scalable architectures.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>

                    <button
                      onClick={() => handleDemoClick(project)}
                      className={`flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 ${project.gradient}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-xl">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-20 blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white">
                📱Mobile App
              </h2>

              <p className="mt-4 text-sm text-neutral-300">
                Eato is a mobile application. You can download it from the
                Play Store.
              </p>

              <div className="mt-6 flex justify-center gap-3">

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;