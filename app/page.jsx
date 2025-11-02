// 📄 /app/page.jsx

// ======================================================================
// HOMEPAGE DEL SITO
// ======================================================================
// Struttura della pagina principale, composta da cinque sezioni modulari
// (Hero, Intro, Preview, Work in Progress e Final). Ogni sezione è un
// componente indipendente importato da /components/home.
// ======================================================================

// ↓ obbligatorio per usare hook e animazioni client-side
"use client";

import FinalSection from "@/components/home/FinalSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PreviewSection from "@/components/home/PreviewSection";
import WorkInProgressSection from "@/components/home/WorkInProgressSection";

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
      <WorkInProgressSection />

      {/* FINAL SECTION – chiusura con immagine di progetto */}
      <FinalSection />

    </main>

  );

}
