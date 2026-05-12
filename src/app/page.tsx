"use client";
import Contact from "@/components/contact";
import HeroSection from "@/components/heroSection";
import Portfolio from "@/components/portfolio";
import Experience from "@/components/experience";
import { SocialLinks } from "@/components/SocialLinks";
import Technoloies from "@/components/technoloies";
import { Footer } from "@/components/footer";
import  TerminalLive  from "@/components/terminalLive";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray/[0.56] antialiased bg-grid-white/[0.02]">
      <Toaster />
      <HeroSection />
      <TerminalLive />
      <Technoloies />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </main>
  );
}
