// 📄 /components/layout/Header.jsx

// =================================================================
// COMPONENTE HEADER PRINCIPALE
// =================================================================
// - Logo animato (compare dopo uno scroll o se non si è nella home)
// - Menu di navigazione (desktop + mobile responsive)
// - Transizioni fluide con Framer Motion
// =================================================================

// ↓ Necessario per usare useState, useEffect, animazioni, ecc.
"use client";

// ---------------------------------------------------------------------------
// 🔹 IMPORT PRINCIPALI
// ---------------------------------------------------------------------------

// ↓ Gestione stato ed effetti
import { useState, useEffect, useCallback } from "react";

// ↓ Animazioni fluide
import { motion, useScroll } from "framer-motion";

// ↓ Percorso corrente
import { usePathname } from "next/navigation";

// ↓ Navigazione lato client
import Link from "next/link";

// ↓ Componenti di menu (desktop e mobile)
import DesktopMenu from "@/components/layout/DesktopMenu";
import MobileMenu from "@/components/layout/MobileMenu";

// ↓ Logo animato
import LogoAnimated from "@/components/ui/LogoAnimated";

// ↓ Font personalizzati dal file /lib/fonts.js
import { fontCursive, fontMonoSpecial } from "@/lib/fonts";

// -------------------------------
// 🔸 COMPONENTE HEADER
// -------------------------------

export default function Header() {

  // ---------------------------------------------
  // 🔹 Stati e variabili
  // ---------------------------------------------

  // ↓ stato apertura menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // ↓ posizione verticale scroll
  const { scrollY } = useScroll();

  // ↓ visibilità logo animato
  const [showLogo, setShowLogo] = useState(false);

  // ↓ percorso della pagina attiva
  const pathname = usePathname();

  // --------------------------------------------------------------------
  // 🧩 CALLBACKS OTTIMIZZATE
  // --------------------------------------------------------------------
  // useCallback impedisce la ricreazione delle funzioni ad ogni render
  // migliorando le prestazioni e evitando inutili re-render.
  // --------------------------------------------------------------------

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // ---------------------------------------------------------------------------
  // 🧠 GESTIONE VISIBILITÀ DEL LOGO
  // ---------------------------------------------------------------------------
  // - Se non siamo sulla home, mostra il logo subito.
  // - Se siamo sulla home, il logo compare solo dopo uno scroll > 40% viewport.
  // ---------------------------------------------------------------------------

  useEffect(() => {

    if (pathname !== "/") {

      // ↓ usa requestAnimationFrame per evitare warning di “setState sincrono”
      requestAnimationFrame(() => setShowLogo(true));
      return;
    }

    // ↓ listener per lo scroll fluido
    const unsubscribe = scrollY.on("change", (latest) => {
      const trigger = window.innerHeight * 0.4;
      setShowLogo(latest > trigger);
    });

    // ↓ cleanup
    return () => unsubscribe();
  }, [scrollY, pathname]);

  // --------------------------------
  // 🧱 RENDER COMPONENTE
  // --------------------------------

  return (

    // ------------------------------------------------------------------------------------------------------------------------------------
    // TAG <header>
    // ------------------------------------------------------------------------------------------------------------------------------------
    // - ffixed top-0 left-0 → Posiziona l’header fisso in alto a sinistra dello schermo.
    // - z-50 → Lo porta in primo piano rispetto ad altri elementi (importante per overlay e menu).
    // - w-full → Occupa tutta la larghezza del viewport.
    // - border-b border-white/10 → Aggiunge una sottile linea inferiore semitrasparente.
    // - bg-linear-to-r from-white/80 via-white/70 to-white/80 → Sfondo con gradiente orizzontale bianco traslucido.
    // - shadow-lg → Ombra leggera per staccare l’header dal contenuto.
    // - supports-backdrop-filter:backdrop-saturate-200 → Migliora la saturazione del contenuto dietro il blur su browser che lo supportano.
    // ------------------------------------------------------------------------------------------------------------------------------------

    <header
      className="fixed
                 top-0
                 left-0
                 z-50
                 w-full
                 border-b
                 border-white/10
                 bg-linear-to-r
                 from-white/80
                 via-white/70
                 to-white/80
                 backdrop-blur-xl
                 shadow-lg
                 supports-backdrop-filter:backdrop-saturate-200"
    >

      {/*

        ----------------------------------------------------------------------
        TAG <div> - Contenitore interno
        ----------------------------------------------------------------------
        - flex → Dispone gli elementi (logo e nav) orizzontalmente.
        - max-w-7xl → Limita la larghezza massima a circa 1280px (responsive).
        - items-center → Allinea verticalmente al centro.
        - justify-between → Spinge logo e menu ai lati opposti.
        - px-4 → Padding orizzontale di 1rem (16px).
        - py-2 lg:py-3 → Padding verticale più ampio su schermi grandi.
        - mx-auto → Centra orizzontalmente il blocco all’interno della pagina.
        ----------------------------------------------------------------------

      */}

      <div
        className="flex
                   max-w-7xl
                   items-center
                   justify-between
                   px-4
                   py-2
                   lg:py-3
                   mx-auto"
      >

        {/* LOGO ANIMATO */}
        <LogoAnimated
          showLogo={showLogo}
        />

        {/*

          ----------------------------------------------------------------------
          TAG <nav> - Navigazione
          ----------------------------------------------------------------------
          - aria-label="Menu Principale" →
          - flex items-center gap-4 → Layout orizzontale con spaziatura costante.
          -----------------------------------------------------------------------

        */}

        <nav
          aria-label="Menu Principale"
          className="flex items-center gap-4"
        >

          {/*

            ---------------------------------------------------------------------------------------------------------
            DESKTOP VS MOBILE
            ---------------------------------------------------------------------------------------------------------
            - hidden lg:block → Nasconde il menu desktop su mobile, mostra da breakpoint lg (≥1024px).
            - <DesktopMenu key={pathname} /> →
            - block lg:hidden → Inverso: mostra il menu mobile solo sotto lg.
            - <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} aria-expanded={menuOpen} →
            ---------------------------------------------------------------------------------------------------------

          */}

          <div
            className="hidden lg:block"
          >

            <DesktopMenu
              key={pathname}
            />

          </div>

          <div
            className="block lg:hidden"
          >

            <MobileMenu
              isOpen={menuOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
              aria-expanded={menuOpen}
            />

          </div>

        </nav>

      </div>

    </header>

  );

}

// ============================================================================
// ✅ NOTE DI OTTIMIZZAZIONE / BEST PRACTICE
// ============================================================================
// 🔹 3️⃣ I valori numerici di `stiffness`, `damping` e `mass` sono perfetti.
//     Se un domani volessi cambiare fluidità:
//     - stiffness ↑ → animazione più “rigida”
//     - damping ↓ → più oscillazione (“rimbalzo”)
//     - mass ↑ → movimento più lento
//
// 🔹 4️⃣ Il `useCallback` qui è una vera best practice: evita re-render
//     inutili nei figli (`MobileMenu` e `DesktopMenu`).
//
// 🔹 5️⃣ Per migliorare ancora la performance, potresti caricare `framer-motion`
//     in modo dinamico con `next/dynamic()` solo in questo componente.
//
// ============================================================================
