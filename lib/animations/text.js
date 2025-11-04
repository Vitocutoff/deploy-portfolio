// 📄 /lib/animations/text.js

// ================================================================
// ANIMAZIONI TESTO — lettere e parole animate (Hero, Header, ecc.)
// ================================================================

// Effetto rimbalzo singola lettera
export const letterBounce = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: [25, -5, 0],
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

// Effetto sequenziale per parole intere
export const staggeredText = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
