"use client";

import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PreviewSection from "@/components/home/PreviewSection";

export default function HomePage() {
  return (

    <main
      id="main-content"
      aria-label="Contenuto principale della Home Page"
      className="flex flex-col w-full
                 min-h-screen
                 overflow-x-hidden
                 scroll-smooth
                 selection:bg-black/90
                 selection:text-white"
    >

      {/* HERO – sezione introduttiva */}
      <HeroSection />

      {/* INTRO – citazione e bio */}
      <IntroSection />

      {/* PREVIEW – anteprima impianti sportivi */}
      <PreviewSection />

      {/* WORK IN PROGRESS – progetti in corso */}


      {/* FINAL SECTION – chiusura con immagine di progetto */}

    </main>

  );

}
