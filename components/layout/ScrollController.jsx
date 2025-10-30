"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * ScrollController
 * - Gestisce lo smooth scrolling tramite Lenis
 * - Ottimizzato per compatibilità e performance
 * - Montato globalmente nel layout
 */

export default function ScrollController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.1, // leggermente più rapido ma sempre fluido
      easing: (t) => 1 - Math.pow(1 - t, 4), // easing più naturale
      smoothWheel: true,
      smoothTouch: false,
      gestureDirection: "vertical",
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    // cleanup
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
