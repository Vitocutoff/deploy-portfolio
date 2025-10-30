/**
 * animations.js
 * Varianti standard per Framer Motion
 * Ottimizzate per fluidità, consistenza e performance
 */

export const fadeVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier classico, più fluido e naturale
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Section reveal per ingressi su scroll (standard)
 */
export const sectionReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  viewport: { once: true, amount: 0.35 },
};

/**
 * Variante con ritardo progressivo per elementi multipli
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};
