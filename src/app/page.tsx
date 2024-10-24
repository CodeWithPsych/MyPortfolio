'use client'
import Contact from "@/components/contact";
// import { Worker } from '@react-pdf-viewer/core';
import HeroSection from "@/components/heroSection";
import { PhaseCards } from "@/components/phaseCards";
import Portfolio from "@/components/portfolio";
import { GlobeDemo } from "@/components/services";
import { SocialLinks } from "@/components/SocialLinks";
import Technoloies from "@/components/technoloies";
import { Footer } from "@/components/footer";
import { Toaster } from 'react-hot-toast';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray/[0.56] antialiased bg-grid-white/[0.02]">
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"/> */}
      <Toaster />
      <HeroSection />
      <GlobeDemo />
      <Technoloies />
      <PhaseCards />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </main>
  );
}
