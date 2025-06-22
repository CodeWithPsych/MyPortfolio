import React from 'react';
import { CodeXml } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <div id='portfolio' className="flex items-center justify-center bg-black w-full my-14">
      <div className="flex flex-col w-4/5 items-center">
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          ⚡A Glimpse Into My Recent Projects
        </h2>
        <h2 className="my-4 underline font-normal text-base md:text-2xl text-amber-300 max-w-lg mx-auto">
          npm i @arham.dev
        </h2>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <Portfolio
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<CodeXml className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="🔐 Anonify"
            description="Send anonymous messages to anyone — instantly and securely."
            bgImage="/images/Anonify.png"
            githubUrl="https://github.com/CodeWithPsych/anonify"
            siteUrl="https://anonify-one.vercel.app/"

          />
          <Portfolio
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<CodeXml className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="🛒 Urham Galoure"
            description="A full-stack e-commerce platform built to deliver a seamless shopping experience."
            bgImage="/images/ecommerce.png"
            githubUrl="https://github.com/CodeWithPsych/ecommerce"
            siteUrl="https://urham.vercel.app/"

          />
          <Portfolio
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<CodeXml className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="📝 TextEditor"
            description="Edit your text effortlessly with features like capitalization, extra space removal, and formatting.
Perfect for writers, students, and anyone who wants clean, polished content in seconds."
            bgImage="/images/Texteditor.png"
            githubUrl="https://github.com/CodeWithPsych/TextEditor"
            siteUrl="https://text-editer-by-psych.netlify.app/"


          />
          <Portfolio
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<CodeXml className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="🛡️ Notes Shield"
            description="Securely store your notes in the cloud and access them anytime, anywhere — fully encrypted and always protected."
            bgImage="/images/notes.png"
            githubUrl="https://github.com/CodeWithPsych/NotesSheild"
            siteUrl="https://notes-sheild.vercel.app/"

          />
          <Portfolio
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<CodeXml className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="📲 Vybz"
            description="A social video-sharing app where you can share vibe with short videos."
            bgImage="/images/vybz.png"
            githubUrl="https://github.com/CodeWithPsych/vybz"
            siteUrl="https://vybz-phi.vercel.app/"

          />
        </ul>
      </div>
    </div>
  );
}

interface PortfolioProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  bgImage?: string;
  githubUrl?: string;
  siteUrl?: string;
}

const Portfolio = ({
  area,
  icon,
  title,
  description,
  bgImage,
  githubUrl,
  siteUrl,
}: PortfolioProps) => {
  const openInNewTab = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        onClick={() => openInNewTab(siteUrl)}
        title="View Live Site"
        className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 group cursor-pointer"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 rounded-xl z-0 transition-all duration-300" />

          {/* GitHub Icon with separate onClick */}
          <div
            onClick={(e) => {
              e.stopPropagation(); // Prevent outer card click
              openInNewTab(githubUrl);
            }}
            title="View Code on GitHub"
            className="group/icon relative z-10 w-fit rounded-lg border border-gray-600 p-2 bg-white/80 hover:bg-white transition-colors duration-300 dark:bg-black/40 dark:hover:bg-white"
          >
            {icon}
          </div>

          {/* Title + Description */}
          <div className="relative z-10 mt-auto space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
              {title}
            </h3>
            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-300 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};



export default Portfolio;
