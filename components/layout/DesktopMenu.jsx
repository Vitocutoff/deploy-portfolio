"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fontNav } from "@/lib/fonts";

/** MENU DI NAVIGAZIONE PRINCIPALE - VERSIONE DESKTOP */
export default function DesktopMenu() {
  const pathname = usePathname();
  const controls = useAnimationControls();

  // RIAVVIA ANIMAZIONE AD OGNI CAMBIO PAGINA
  useEffect(() => {
    const run = async () => {
      await controls.start("hidden");
      await controls.start("show");
    };
    run();
  }, [pathname, controls]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/impianti-sportivi", label: "Impianti Sportivi" },
    { href: "/elenco-progetti", label: "Elenco Progetti" },
    { href: "/work-in-progress", label: "Work in Progress" },
    { href: "/contatti", label: "Contatti" },
  ];

  const linkClass = (path) =>
    `transition-colors duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-black/70 px-1 rounded-sm
     ${pathname === path
      ? "text-blue-900/95 font-bold cursor-default"
      : "hover:text-blue-900/95 text-black/95"}`;

  // VARIANTS PER IL CONTENITORE DELLE VOCI
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
        ease: "easeInOut",
      },
    },
  };

  // VARIANTS PER OGNI VOCE DEL MENU
  const wordVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 40,
      x: i % 2 === 0 ? -25 : 25, // alterna dx/sx
    }),
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
    hover: {
      scale: 1.06,
      rotate: -0.5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    rest: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // VARIANTS PER LE LETTERE (BOUNCE RIDOTTO)
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: [20, -4, 0], // BOUNCE
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  const AnimatedLetters = ({ text }) => (
    <motion.span
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: { staggerChildren: 0.04, delayChildren: 0.15 },
        },
      }}
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (

    <nav
      aria-label="Menu principale desktop"
    >

      <motion.ul
        variants={container}
        initial="hidden"
        animate={controls}
        className={`${fontNav.className}
                    flex items-center gap-6
                    text-lg tracking-wider`}
      >

        {menuItems.map((item, index) => (

          <motion.li
            key={item.href}
            custom={index}
            variants={wordVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            onHoverEnd={() => controls.start("rest")}
          >

            <Link
              href={item.href}
              className={linkClass(item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
            >

              <AnimatedLetters
                text={item.label}
              />

            </Link>

          </motion.li>

        ))}

      </motion.ul>

    </nav>

  );

}
