// 📁 /lib/animations/logo.js
// ============================================================================
// Animazioni centralizzate per il logo “Mauro Concentri | ARChitEttO”
// - Obiettivo: rendere riutilizzabili e consistenti transizioni e keyframes.
// - Parametri modificabili: stiffness, damping, mass, staggerChildren.
// - Motivazione: evitare duplicazioni inline, migliorare leggibilità e coerenza.
// ============================================================================


export const springSmooth = {
type: "spring",
stiffness: 120,
damping: 20,
mass: 0.6,
};


// Contenitore per gestire lo *stagger* dei figli (separatori/label)
export const logoGroup = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.15, // ⏱️ ritardo uniforme tra gli elementi
},
},
};


// Singolo elemento del logo che sale leggermente e sfuma
export const logoItem = {
hidden: { opacity: 0, y: -20 },
visible: {
opacity: 1,
y: 0,
transition: springSmooth,
},
exit: { opacity: 0, y: -20 },
};
