// 📄 /app/layout.jsx

// - LAYOUT PRINCIPALE DEL SITO
// ===============================================================================
// Struttura globale del sito realizzato con Nerxt.js (App Router) + Tailwind CSS.
// Contiene header, footer, cookie banner, controllo dello scroll e script PWA.
// Tutte le pagine vengono renderizzate qui.
// ================================================================================

import "./globals.css";
import { siteMetadata as metadata, viewport } from "@/lib/metadata";
import HeadMeta from "@/components/meta/HeadMeta";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollController from "@/components/layout/ScrollController";
import ScrollToTop from "@/components/ui/ScrollToTop";

// --------------------------------------------------------------------
// COMPONENTE ROOTLAYOUT
// --------------------------------------------------------------------
// Avvolge tutte le pagine del sito e definisce struttura, accessibilità,
// e componenti globali condivisi da ogni pagina (header, footer, ecc.)
// ---------------------------------------------------------------------

export default function RootLayout({ children }) {
  return (

    // -----------------------------------------------------------------
    // TAG <html>
    // -----------------------------------------------------------------
    // - lang="it" → per SEO e screen reader
    // -----------------------------------------------------------------
    // - scroll-smooth → abilita lo scroll fluido
    // -----------------------------------------------------------------
    // - suppressHydrationWarning → evita errori di mismatch client/server
    // -----------------------------------------------------------------

    <html
      lang="it"
      className="scroll-smooth"
      suppressHydrationWarning
    >

      {/*
          ------------------------------------------------------------
          TAG <head>
          ------------------------------------------------------------
          Definisce i meta globali non gestiti da Next.js in automatico:
          - componente <HeadMeta />
          ------------------------------------------------------------
      */}

      <head>

        <HeadMeta />

      </head>

      {/*
          --------------------------------------------------------------------------------
          TAG <body>
          --------------------------------------------------------------------------------
          - min-h-screen → assicura che il body occupi almeno l’intera altezza del viewport
          ---------------------------------------------------------------------------------
          - bg-white → colore di sfondo principale del sito
          ---------------------------------------------------------------------------------
          - text-neutral-900 → colore del testo principale (grigio scuro, non nero pieno)
          ---------------------------------------------------------------------------------
          - antialiased → migliora la resa del testo su display ad alta risoluzione
          ---------------------------------------------------------------------------------
          - selection → definisce i colori per l’evidenziazione del testo selezionato
          --------------------------------------------------------------------------------
      */}

      <body
        className="min-h-screen
                   bg-white
                   text-neutral-900
                   antialiased
                   selection:bg-black/90
                   selection:text-white"
      >

        {/*
            ------------------------------------------------------------
            🌀 COMPONENTE <ScrollController />
            ------------------------------------------------------------
            Gestisce lo scroll fluido con Lenis.js. Previene micro scatti
            e migliora la sensazione di continuità nello scorrimento
            ------------------------------------------------------------
        */}

        <ScrollController />

        {/*
            --------------------------------------------------------------
            🍪 COMPONENTE <CookieBanner />
            --------------------------------------------------------------
            Mostra il banner di consenso cookie (GDPR) la prima volta che
            l’utente visita il sito, poi memorizza la scelta
            --------------------------------------------------------------
        */}

        <CookieBanner />

        {/* ------------------------------------------
            🧭 COMPONENTE <Header />
            ------------------------------------------
            HEADER fisso in alto con logo e navigazione
            ------------------------------------------
        */}

        <Header />

        {/*
           ---------------------------------------------------------------
           TAG <main>
           ---------------------------------------------------------------
           - relative: permette di gestire posizionamenti assoluti interni
           - z-10: assicura che i contenuti restino sopra eventuali layer
           ----------------------------------------------------------------
        */}

        <main
          className="relative
                     z-10"
        >

          {/* ↓ children = contenuto specifico di ogni pagina (page.jsx) */}
          {children}

        </main>

        {/*
            ---------------------------------------------------------------
            ⬆️ COMPONENTE <ScrollOnTop /> - PULSANTE "TORNA SU"
            ---------------------------------------------------------------
            Appare dopo uno scroll, riporta all’inizio con animazione dolce
            ---------------------------------------------------------------
        */}

        <ScrollToTop />

        {/*
            ---------------------------------------
            ⚫ COMPONENTE <Footer />
            ---------------------------------------
            Piè di pagina globale con contatti e social
            -------------------------------------------
        */}

        <Footer />

        {/*
            -------------------------------------------------------------------
            SCRIPT sw-register.js - SERVICE WORKER (PWA)
            -------------------------------------------------------------------
            Gestisce la registrazione del Service Worker per la modalità offline
            e le funzionalità da app (installazione su home screen, cache, ecc.)
            --------------------------------------------------------------------
        */}

        <script
          src="/sw-register.js"
          defer
        ></script>

        {/*
            ----------------------------------------
            🚫 FALLBACK PER BROWSER SENZA JAVASCRIPT
            ----------------------------------------
            Mostra un messaggio se JS è disattivato
            ----------------------------------------
        */}

        <noscript>

          Il sito utilizza JavaScript per un’esperienza ottimale. Abilitalo per
          visualizzare correttamente tutti i contenuti.

        </noscript>

      </body>

    </html>

  );

}
