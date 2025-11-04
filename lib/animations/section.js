// 📄 /lib/animations/section.js

// ===========================================================
// ANIMAZIONI DI SEZIONE — entrata di blocchi o intere pagine
// ===========================================================

// Fade + slide verticale per intere sezioni
export const sectionReveal = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

// Variante con stagger interno (es. per gruppi di card)
export const sectionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
