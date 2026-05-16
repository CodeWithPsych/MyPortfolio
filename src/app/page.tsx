"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

// Loader — tiny, loads immediately
import PageLoader from "@/components/PageLoader";

// Static / lightweight sections — load normally
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";

// Heavy sections — lazy loaded so they don't block the loader
const TerminalLive = dynamic(() => import("@/components/terminalLive"), {
  ssr: false,
});
const Technoloies = dynamic(() => import("@/components/technoloies"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/experience"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("@/components/portfolio"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
});
const SocialLinks = dynamic(
  () => import("@/components/SocialLinks").then((m) => ({ default: m.SocialLinks })),
  { ssr: false }
);
const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { ssr: false }
);

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Toaster />

      {/* Full-screen loader — unmounts itself after animation */}
      <PageLoader onComplete={() => setLoaded(true)} />

      {/* Main site — fades in after loader exits */}
      <main
        className="min-h-screen bg-gray/[0.56] antialiased bg-grid-white/[0.02] transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        <HeroSection />
        {loaded && (
          <>
            <TerminalLive />
            <Technoloies />
            <Experience />
            <Portfolio />
            <Contact />
            <SocialLinks />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}