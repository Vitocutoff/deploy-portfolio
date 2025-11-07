// /lib/animations/desktopMenuAnimations.js
// ============================================================================
// 🔹 Animazioni riutilizzabili per il menu di navigazione desktop
// ============================================================================
// Queste animazioni gestiscono:
// - entrata fluida delle voci di menu (fade + slide alternato dx/sx)
// - effetto "bounce" leggero per ogni lettera
// - hover scalato con rotazione minima
// ============================================================================

/**
 * Animazione per il container principale del menu.
 * Effetto: fade-in progressivo con ritardo sui figli.
 */
export const containerVariants = {
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

/**
 * Animazione per ogni voce del menu.
 * Effetto: entrata alternata (dx/sx) con fade-in + leggera rotazione all’hover.
 */
export const wordVariants = {
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

/**
 * Animazione per le singole lettere.
 * Effetto: piccolo bounce verticale con fade-in.
 */
export const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: [20, -4, 0],
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};
