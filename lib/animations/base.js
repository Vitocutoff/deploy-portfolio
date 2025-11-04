// 📄 /lib/animations/base.js

// =====================================================================
// ANIMAZIONI BASE — fade, slide, scale, rotate
// =====================================================================
// Varianti comuni usate in più componenti, facilmente personalizzabili.
// =====================================================================

// Dissolvenza semplice
export const fade = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: [0.42, 0, 0.58, 1] },
  }),
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

// Entrata dal basso
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

// Entrata da destra
export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

// Zoom-in progressivo
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: [0.25, 0.8, 0.25, 1] },
  }),
};
