// 📄 /components/ui/LogoAnimated.jsx

// ======================================================================
// COMPONENTE LOGO ANIMATO
// ======================================================================
// Gestisce la comparsa graduale del logo “Mauro Concentri | ARChitEttO”
// usando Framer Motion. Viene usato all’interno dell’Header ma può
// essere riutilizzato anche in altre sezioni (es. intro, hero, footer).
// ======================================================================

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fontCursive, fontMonoSpecial } from "@/lib/fonts";

export default function LogoAnimated({ showLogo = true }) {
  const pathname = usePathname();

  return (

    // ----------------------------------------------------------------------------------
    // COMPONENTE <Link> - Avvolge il Logo
    //-----------------------------------------------------------------------------------
    // - href="/" →
    // - aria-label="Torna alla HomePage" →
    // - aria-current={pathname === "/" ? "page" : undefined} →
    // - flex items-center gap-2 → Dispone il testo orizzontalmente con spaziatura 0.5rem.
    // - rounded → Bordo leggermente arrotondato (utile per focus ring).
    // - focus:outline-none → Rimuove il bordo blu di default al focus.
    // - focus-visible:ring-2 focus-visible:ring-black/80 → Crea un anello visibile nero
    //   semitrasparente quando l’utente naviga con tastiera (accessibilità).
    // ----------------------------------------------------------------------------------

    <Link
      href="/"
      aria-label="Torna alla HomePage"
      aria-current={pathname === "/" ? "page" : undefined}
      className="flex
                 items-center
                 gap-2
                 rounded
                 focus:outline-none
                 focus-visible:ring-2
                 focus-visible:ring-black/80"
    >

      {/*

          ------------------------------------------------------------------------------------------
          TESTO: "Mauro Concentri"
          ------------------------------------------------------------------------------------------
          - initial={{ opacity: 0, y: -20 }} →
          - animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} →
          - transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6, }} →
          - ${fontCursive.className} →
          - text-3xl → Dimensione grande del font (≈ 30px).
          - text-neutral-900 → Colore grigio molto scuro, non nero pieno (per maggiore leggibilità).
          ------------------------------------------------------------------------------------------

      */}

      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.6,
        }}
        className={`${fontCursive.className}
                    text-3xl
                    text-neutral-900`}
      >

        Mauro Concentri

      </motion.span>

      {/*

          ------------------------------------------------------------------------------------------
          SEPARATORE "|"
          ------------------------------------------------------------------------------------------
          - initial={{ opacity: 0, y: -20 }}
          - animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          - transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6, delay: 0.15, }} →
          - aria-hidden="true" →
          - text-2xl → Dimensione leggermente più piccola (per il separatore)
          - font-thin → Peso del font molto leggero.
          - text-red-600/85 → Rosso medio con opacità 85%.
          -------------------------------------------------------------------------------------------

      */}

      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.6,
          delay: 0.15,
        }}
        aria-hidden="true"
        className="text-2xl
                   font-thin
                   text-red-600/85"
      >

        |

      </motion.span>

      {/*

          -----------------------------------------------------------------------------------------
          TESTO: "Architetto"
          -----------------------------------------------------------------------------------------
          - initial={{ opacity: 0, y: -20 }} →
          - animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          - transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6, delay: 0.3, }} →
          - ${fontMonoSpecial.className} →
          - tracking-widest → Spaziatura tra lettere molto ampia.
          - text-blue-900/95 → Blu profondo con leggera trasparenza.
          ------------------------------------------------------------------------------------------

      */}

      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.6,
          delay: 0.3,
        }}
        className={`${fontMonoSpecial.className}
                    tracking-widest
                    text-blue-900/95`}
      >

        ARChitEttO

      </motion.span>

    </Link>

  );

}
