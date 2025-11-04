// 📄 /lib/animations/ui.js
// ===================================================
// MICRO-ANIMAZIONI UI — pulsanti, icone, card, hover
// ===================================================

// Pulsante fluttuante “idle”
export const buttonFloat = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
  idle: {
    y: [0, -3, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  },
  hover: {
    scale: 1.08,
    transition: { type: "spring", stiffness: 180, damping: 10 },
  },
};

// Card con effetto hover 3D
export const card3D = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, transition: { duration: 0.6 } },
  hover: {
    scale: 1.03,
    rotateX: -3,
    rotateY: 3,
    boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};
