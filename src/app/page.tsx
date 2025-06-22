'use client'
import Contact from "@/components/contact";
import HeroSection from "@/components/heroSection";
import { PhaseCards } from "@/components/phaseCards";
import { GlowingEffectDemo } from "@/components/portfolio";
import { GlobeDemo } from "@/components/services";
import { SocialLinks } from "@/components/SocialLinks";
import Technoloies from "@/components/technoloies";
import { Footer } from "@/components/footer";
import { Toaster } from 'react-hot-toast';


export default function Home() {
 
  return (
    <main className="min-h-screen bg-gray/[0.56] antialiased bg-grid-white/[0.02]">
      <Toaster />
      <HeroSection />
      <GlobeDemo />
      <Technoloies />
      <PhaseCards />
      <GlowingEffectDemo />
      <Contact />
      <SocialLinks />
      <Footer />
    </main>
  );
}
