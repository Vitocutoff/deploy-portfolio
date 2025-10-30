"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DesktopMenu from "@/components/layout/DesktopMenu";
import MobileMenu from "@/components/layout/MobileMenu";
import { fontCursive, fontMonoSpecial } from "@/lib/fonts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showLogo, setShowLogo] = useState(false);
  const pathname = usePathname();

  // FUNZIONI OTTIMIZZATE PER IL PASSAGGIO COME PROP
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // GERSTIONE VISIBILITA' LOGO
  useEffect(() => {
    if (pathname !== "/") {
      // ESEGUE AGGIORNAMENTO SOLO DOPO IL PRIMO CICLO
      requestAnimationFrame(() => setShowLogo(true));
      return;
    }

    const unsubscribe = scrollY.on("change", (latest) => {
      const trigger = window.innerHeight * 0.4;
      setShowLogo(latest > trigger);
    });

    return () => unsubscribe();
  }, [scrollY, pathname]);

  return (

    <header
      className="fixed top-0 left-0
                 z-50 w-full border-b
                 border-white/10
                 bg-linear-to-r
                 from-white/80
                 via-white/70
                 to-white/80
                 backdrop-blur-xl
                 shadow-lg
                 supports-backdrop-filter:backdrop-saturate-200"
    >

      <div
        className="flex max-w-7xl items-center
                   justify-between px-4 py-2 lg:py-3
                   mx-auto"
      >

        {/* LOGO */}
        <Link
          href="/"
          aria-label="Torna alla HomePage"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex items-center gap-2
                     rounded focus:outline-none
                     focus-visible:ring-2
                     focus-visible:ring-black/80"
        >

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
                        text-3xl text-neutral-900`}
          >

            Mauro Concentri

          </motion.span>

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
            className="text-2xl font-thin text-red-600/85"
            aria-hidden="true"
          >

            |

          </motion.span>

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
                        tracking-widest text-blue-900/95`}
          >

            ARChitEttO

          </motion.span>

        </Link>

        {/* NAVIGAZIONE */}
        <nav
          aria-label="Menu Principale"
          className="flex items-center gap-4"
        >

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
