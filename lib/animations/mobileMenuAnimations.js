// /lib/animations/mobileMenuAnimations.js
// ============================================================================
// 🔹 Animazioni per il menu mobile e pulsante hamburger
// ============================================================================
// Tutte le animazioni qui definite sono usate da MobileMenu.jsx
// per migliorare leggibilità e riusabilità. Ogni blocco è commentato.
// ============================================================================

/**
 * Apertura/chiusura del menu principale
 * Effetto: fade + slide dall’alto
 */
export const menuVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

/**
 * Sfumatura dinamica di background (bagliore verticale)
 * Effetto: luce che attraversa lo sfondo, ciclica
 */
export const glowVariants = {
  initial: { opacity: 0, y: "-30%" },
  animate: {
    opacity: [0, 0.3, 0],
    y: ["-30%", "120%"],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut",
    },
  },
};

/**
 * Lista dei link — entrata progressiva con fade e delay
 */
export const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
  exit: { opacity: 0 },
};

/**
 * Animazione singola voce (li)
 */
export const itemVariants = (i) => ({
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 0.05 * i },
  },
  exit: { opacity: 0, x: 25 },
});

/**
 * Barre dell’hamburger button (rotazione + dissolvenza)
 */
export const topBar = (isOpen) =>
  isOpen
    ? { rotate: 45, y: 7, transition: { duration: 0.25, ease: "easeInOut" } }
    : { rotate: 0, y: 0, transition: { duration: 0.25, ease: "easeInOut" } };

export const midBar = (isOpen) =>
  isOpen
    ? { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }
    : { opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } };

export const bottomBar = (isOpen) =>
  isOpen
    ? { rotate: -45, y: -7, transition: { duration: 0.25, ease: "easeInOut" } }
    : { rotate: 0, y: 0, transition: { duration: 0.25, ease: "easeInOut" } };
