"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import LogoCard from "@/components/home/LogoCard";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animazioni Hero Section
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.65], [1, 0.92, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.65], [0, -80]);
  const x = useTransform(scrollYProgress, [0, 0.65], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.65], [0, -3]);

  // Sfondo parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  return (

    <section
      ref={ref}
      role="banner"
      aria-label="Sezione introduttiva Mauro Concentri Architetto"
      className="relative h-[90vh] lg:h-screen
                 fix-vh flex flex-col items-center
                 justify-center overflow-hidden"
    >

      {/* SFONDO NERO BASE */}
      <div
        className="absolute inset-0 -z-30
                   bg-linear-to-b
                   from-neutral-950
                   via-neutral-900
                   to-neutral-800"
      />

      {/* SFONDO PARALLAX (IMMAGINE) */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y: bgY, scale: bgScale }}
      >

        <Image
          src="/images/bgHero.png"
          alt="Sfondo architettonico"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center brightness-100
                     contrast-[1.05]"
        />

        {/* LEGGERA SFUMATURA PER LETTURA TESTI */}
        <div
          className="absolute inset-0 bg-linear-to-br
                     from-white/10 via-transparent
                     to-neutral-900/50"
        />

      </motion.div>

      {/* LOGO CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ opacity, scale, y, x, rotate }}
        className="relative"
      >

        <LogoCard />

      </motion.div>

      {/* INVITO ALLO SCROLL */}
      <motion.div
        className="absolute bottom-12 lg:bottom-8
                   flex flex-col items-center
                   text-black/80"
        style={{ opacity: hintOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
      >

        <motion.span
          className="text-sm tracking-widest font-light
                     uppercase"
          animate={{ opacity: [1, 0.6, 1], y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >

          Scroll

        </motion.span>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="mt-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
        />

        </motion.svg>

      </motion.div>

    </section>

  );

}
