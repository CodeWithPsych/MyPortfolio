"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Full Stack Developer Intern",
    company: "Decode Labs",
    period: "2026",
    description:
      "Worked on modern full-stack web applications using the MERN stack, contributing to frontend interfaces, backend APIs, and scalable application architecture.",

    highlights: [
      "Developed responsive and scalable MERN applications",
      "Collaborated on API integration and backend systems",
      "Improved UI performance and user experience",
    ],

    color: "from-cyan-500 to-blue-600",
  },

  {
    icon: GraduationCap,
    role: "MERN Stack Instructor",
    company: "Code With Psych Academy",
    period: "Summer 2025",
    description:
      "Launched and managed a MERN stack training program focused on practical full-stack development and real-world deployment workflows.",

    highlights: [
      "Trained 15+ students in MERN stack development",
      "Helped students build and deploy full-stack projects",
      "Mentored learners on frontend and backend architecture",
    ],

    color: "from-purple-500 to-indigo-600",
  },

  {
    icon: Code2,
    role: "MERN Stack Development Course",
    company: "Nexskill Arfa Tower Branch",
    period: "2023 - 2024",
    description:
      "Completed advanced MERN stack and Next.js training while building scalable applications, secure APIs, and production-ready deployments.",

    highlights: [
      "Built and deployed 15+ full-stack applications",
      "Developed 30+ secure REST APIs using JWT authentication",
      "Integrated Stripe payments and Cloudinary media handling",
      "Deployed applications on Netlify and Vercel",
    ],

    color: "from-green-500 to-emerald-600",
  },
];

const Experience = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto w-[90%] max-w-6xl"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 font-mono text-sm text-purple-400">
            Journey
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Experience
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Timeline
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-400 md:text-lg">
            My development journey, skills, and experience building modern web
            applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:left-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;

              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: isEven ? -60 : 60,
                  }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.2,
                  }}
                  className={`relative flex items-center ${
                    isEven
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-cyan-500 bg-black md:left-1/2 md:h-14 md:w-14">
                    <Icon className="h-5 w-5 text-cyan-400 md:h-6 md:w-6" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 w-full md:ml-0 md:w-1/2 ${
                      isEven
                        ? "md:pr-16"
                        : "md:pl-16"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40">
                      {/* Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                      />

                      <div className="relative z-10">
                        {/* Period */}
                        <div
                          className={`mb-5 inline-flex rounded-full bg-gradient-to-r ${exp.color} px-4 py-2 text-sm font-medium text-white`}
                        >
                          {exp.period}
                        </div>

                        {/* Role */}
                        <h3 className="text-2xl font-bold text-white">
                          {exp.role}
                        </h3>

                        <p className="mt-2 text-cyan-400">
                          {exp.company}
                        </p>

                        {/* Description */}
                        <p className="mt-5 leading-relaxed text-neutral-400">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-6 space-y-3">
                          {exp.highlights.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                              <p className="text-sm text-neutral-300">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Border Glow */}
                      <div
                        className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${exp.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                      />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;