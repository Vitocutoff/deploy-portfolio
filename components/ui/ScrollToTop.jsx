"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

/**
 * ScrollToTop
 * Pulsante fluttuante per tornare in cima alla pagina
 * - visibile solo dopo uno scroll minimo
 * - accessibile da tastiera
 * - fluido, sottile e coerente con l’estetica del sito
 */

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra il pulsante dopo 400px di scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll fluido verso l’alto
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
          aria-label="Torna in cima alla pagina"
          className="fixed bottom-16 right-5 z-60
                     flex items-center justify-center
                     w-9 h-9 rounded-full
                     bg-linear-to-br from-white/70 to-white/40
                     text-black/80 shadow-lg shadow-black/30
                     hover:shadow-xl hover:scale-105 hover:from-white/90 hover:to-white/60
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-blue-900 focus-visible:ring-offset-2
                     transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronUp className="w-5 h-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
