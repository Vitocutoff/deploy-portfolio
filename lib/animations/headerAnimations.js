// /lib/animations/headerAnimations.js
// ===================================================================
// 🔹 Animazioni riutilizzabili per Header, Logo e Menu di navigazione
// ===================================================================
// Le transizioni sono ottimizzate per Framer Motion 11+
// Modifica i parametri stiffness/damping/delay per personalizzare
// velocità, reattività e morbidezza dell’animazione
// ===================================================================

/**
 * Animazione per il logo principale dell’header.
 * Effetto: fade + risalita elastica (spring)
 */
export const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
      delay,
    },
  }),
};

/**
 * Animazione generica per le voci di navigazione.
 * Effetto: fade-up dolce con leggero ritardo progressivo.
 */
export const navItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};
