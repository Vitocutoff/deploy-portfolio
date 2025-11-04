// 📄 /app/layout.jsx

// ==================================================================
// 🔹 LAYOUT PRINCIPALE DELL’APPLICAZIONE NEXT.JS (App Router)
// ==================================================================
//
// Contiene tutti i componenti e le configurazioni globali:
//
// - Header (menu principale e logo)
// - Footer (contatti, social e crediti)
// - CookieBanner (consenso GDPR)
// - ScrollController (scroll fluido con Lenis)
// - ScrollToTop (pulsante di ritorno all’inizio)
// - Script per PWA (service worker)
//
// ==================================================================
// Tutte le pagine vengono renderizzate all’interno di questo layout.
// ==================================================================

import "./globals.css";
import { siteMetadata, viewport } from "@/lib/metadata";
import HeadMeta from "@/components/meta/HeadMeta";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollController from "@/components/layout/ScrollController";
import ScrollToTop from "@/components/ui/ScrollToTop";

// =========================================================================
// 🔸 METADATI GLOBALI
// =========================================================================
//
// Next.js utilizza `export const metadata` e `export const viewport`
// per generare automaticamente i tag <title>, <meta>, <link>, ecc.
// Non serve inserirli manualmente nell’head: vengono gestiti dal framework.
//
// =========================================================================

export const metadata = siteMetadata;
export { viewport };

// =====================================================================
// 🔸 COMPONENTE ROOTLAYOUT
// =====================================================================
//
// Avvolge ogni pagina del sito e definisce:
//
// - struttura semantica
// - accessibilità
// - gestione globale di header, footer e script PWA
//
// =====================================================================
// Tutti i children (le singole pagine) vengono renderizzati qui dentro.
// =====================================================================

export default function RootLayout({ children }) {
  return (

    // ==============================================================
    // TAG <html>
    // ==============================================================
    //
    // lang="it" → lingua per SEO e screen reader
    // scroll-smooth → abilita lo scroll fluido nativo
    // suppressHydrationWarning → evita mismatch client/server in SSR
    //
    // ==============================================================

    <html
      lang="it"
      className="scroll-smooth"
      suppressHydrationWarning
    >

      {/*

          ====================================================
          HEAD PERSONALIZZATO
          ====================================================

          Contiene meta tag aggiuntivi non gestiti da Next.js,
          come configurazioni PWA, Apple e Safari.

          ====================================================

      */}

      <head>

        <HeadMeta />

      </head>

      {/*

          ============================================================
          TAG <body>
          ============================================================

          Imposta il background, la tipografia e i colori di selezione.

          className Tailwind:

          - min-h-screen → assicura altezza minima pari al viewport
          - bg-white → sfondo principale chiaro (mai bianco pieno)
          - text-neutral-900 → testo neutro scuro, contrasto ottimale
          - antialiased → migliora la resa dei font su display HD
          - selection:bg-black/90 + selection:text-white → colore
            personalizzato dell’evidenziazione testo

          =========================================================

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

        {/*

            ------------------------------------------
            🧭 COMPONENTE <Header />
            ------------------------------------------
            HEADER fisso in alto con logo e navigazione
            ------------------------------------------

        */}

        <Header />

        {/*

           ===============================================================
           MAIN CONTENT AREA - TAG <main>
           ===============================================================
           Contiene il contenuto della pagina corrente:

           - relative → permette di gestire posizionamenti assoluti interni
           - z-10 → assicura che i contenuti restino sopra eventuali layer

           ================================================================

        */}

        <main
          className="relative
                     z-10"
        >

          {children}

        </main>

        {/*

            ===============================================================
            ⬆️ COMPONENTE <ScrollOnTop /> - PULSANTE "TORNA SU"
            ===============================================================

            Appare dopo uno scroll, riporta all’inizio con animazione dolce

            ===============================================================

        */}

        <ScrollToTop />

        {/*

            ===========================================
            ⚫ COMPONENTE <Footer />
            ===========================================

            Piè di pagina globale con contatti e social

            ============================================

        */}

        <Footer />

        {/*

            =============================================================
            SERVICE WORKER (PWA) - SCRIPT sw.register.js
            =============================================================

            Script che registra il Service Worker per la modalità offline,
            caching dinamico e installazione su home screen.
            Viene eseguito in background (defer).

            ======================================================

        */}

        <script
          src="/sw-register.js"
          defer
        ></script>

        {/*

            ==================================================
            🚫  NOSCRIPT FALLBACK PER BROWSER SENZA JAVASCRIPT
            ==================================================

            Mostra un messaggio se JS è disattivato

            ===================================================

        */}

        <noscript>

          Il sito utilizza JavaScript per un’esperienza ottimale. Abilitalo per
          visualizzare correttamente tutti i contenuti.

        </noscript>

      </body>

    </html>

  );

}
