"use client";

import { Terminal } from "@/components/ui/terminal";
import { OrbSlot } from "@/components/SplineScrollOrb";

export default function TerminalLive() {
  return (
    <section id="terminal" className="w-full overflow-hidden pt-16 md:pt-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            Offering Development Services
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Worldwide
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-lg">
            Whether you need a stunning frontend, a powerful backend,
            or a complete full-stack web application, I've got you covered.
          </p>
        </div>

        {/* Content — same flex layout as original */}
        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Left: Spline slot (desktop only — no Spline on mobile for this section) */}
          <div className="flex w-full justify-center lg:w-1/2">
            {/* Desktop: shared orb portals here */}
            <OrbSlot
              id="terminal"
              className="hidden lg:block h-[350px] w-full max-w-[500px] md:h-[500px]"
            />
            {/* Mobile: intentionally empty per your requirement */}
          </div>

          {/* Right: Terminal */}
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="w-full max-w-[650px]">
              <Terminal
                username="arham@dev"
                typingSpeed={45}
                delayBetweenCommands={1000}
                enableSound={false}
                commands={["about --me", "skills --list", "services --fullstack"]}
                outputs={{
                  0: [
                    "Arham Saleem — Full Stack Developer (MERN + Next.js)",
                    "Building scalable web apps with modern UI/UX",
                  ],
                  1: [
                    "• React / Next.js",
                    "• Node.js / Express",
                    "• MongoDB",
                    "• Redux Toolkit",
                    "• REST APIs & Authentication",
                  ],
                  2: [
                    "• Full Stack Web Development",
                    "• Backend API Development",
                    "• Responsive UI/UX Design",
                    "• Deployment & Optimization",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}