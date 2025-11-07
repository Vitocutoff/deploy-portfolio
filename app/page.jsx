// 📄 /app/page.jsx

// ======================================================================
// HOMEPAGE DEL SITO
// ======================================================================
// Struttura della pagina principale, composta da cinque sezioni modulari
// (Hero, Intro, Preview, Work in Progress e Final). Ogni sezione è un
// componente indipendente importato da /components/home.
// ======================================================================

// Obbligatorio per usare hook e animazioni client-side
"use client";

// -------------------------------------------------------------------
// 🔹 IMPORT COMPONENTI PRINCIPALI
// -------------------------------------------------------------------
// Ogni sezione è autonoma e incapsula layout, animazioni e contenuti.
// In questo modo la Home resta leggibile e facile da gestire.
// -------------------------------------------------------------------

import FinalSection from "@/components/home/FinalSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PreviewSection from "@/components/home/PreviewSection";
import WorkInProgressSection from "@/components/home/WorkInProgressSection";

// ----------------------------------------------------------------------
// 🔸 COMPONENTE HOMEPAGE
// ----------------------------------------------------------------------
// È il corpo principale della pagina di atterraggio.
// L’uso di <main> con id e aria-label migliora la SEO e l’accessibilità.
// Tutte le sezioni sono disposte in ordine verticale (mobile-first).
// ----------------------------------------------------------------------

export default function HomePage() {
  return (

    // ---------------------------------------------------------------------------
    // TAG <main>
    // ---------------------------------------------------------------------------
    // - id="main-content" → utile per il link “salta al contenuto” (accessibilità)
    // - aria-label → descrizione per screen reader
    // - flex-col → disposizione verticale delle sezioni
    // - overflow-x-hidden → evita scrollbar orizzontali indesiderate
    // - scroll-smooth → scroll fluido tra gli anchor link (es. “torna su”)
    // - selection → colori personalizzati per testo selezionato
    // ----------------------------------------------------------------------------

    <main
      id="main-content"
      aria-label="Contenuto principale della Home Page"
      className="flex
                 flex-col
                 w-full
                 min-h-screen
                 overflow-x-hidden
                 scroll-smooth
                 selection:bg-black/90
                 selection:text-white"
    >

      {/*

        ---------------------------------------------------------
        🏠 HERO SECTION
        ---------------------------------------------------------
        Sezione iniziale a schermo intero (100vh) con immagine di
        sfondo, titolo e logo card animata. Presenta il sito.
        ---------------------------------------------------------

      */}

      <HeroSection />

      {/*

          --------------------------------------------------------
          👋 INTRO SECTION
          --------------------------------------------------------
          Contiene una breve introduzione testuale e una citazione.
          È la prima sezione con sfondo chiaro, separa visivamente
          la hero dalle anteprime dei progetti.
          ---------------------------------------------------------

      */}

      <IntroSection />

      {/*

          --------------------------------------------------------
          ⚽ PREVIEW SECTION
          --------------------------------------------------------
          Sezione dedicata agli impianti sportivi: mostra quattro
          card animate con effetto 3D e titolo laterale verticale.
          --------------------------------------------------------

      */}

      <PreviewSection />

      {/*

          ----------------------------------------------------------------
          🏗️ WORK IN PROGRESS SECTION
          ----------------------------------------------------------------
          Mostra i progetti in corso con card evidenziata (3D + glow).
          Passaggio cromatico chiaro → scuro per enfatizzare il contrasto.
          ----------------------------------------------------------------

      */}

      <WorkInProgressSection />

      {/*
          -------------------------------------------------------------
          📨 FINAL SECTION
          -------------------------------------------------------------
          Sezione conclusiva con immagine di sfondo, invito ai contatti
          e pulsante “contattami”. Chiude il flusso visivo.
          -------------------------------------------------------------
      */}

      <FinalSection />

    </main>

  );

}
