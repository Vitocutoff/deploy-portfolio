"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { fontMono, fontMonoSpecial, fontSerif } from "@/lib/fonts";

export default function LogoCard() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [isPressed, setIsPressed] = useState(false);

  const springX = useSpring(rotateX, { stiffness: 65, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 65, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    rotateX.set(x);
    rotateY.set(-y);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsPressed(false);
  };

  const handlePress = () => setIsPressed(true);

  return (

    <motion.div
      className="relative flex flex-col
                 items-center justify-center
                 px-12 py-6 lg:px-18 lg:py-8
                 rounded-md select-none
                 cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.4)]
                 backdrop-blur-xl backdrop-saturate-150
                 bg-linear-to-r from-white/60 via-white/50
                 to-white/50 border-2 border-black/60"
      style={{
        perspective: 800,
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        scale: isPressed ? 0.97 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onMouseDown={handlePress}
      onMouseUp={resetTilt}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      aria-label="Logo Mauro Concentri Architetto"
    >

      {/* Riflesso morbido */}
      <motion.div
        className="absolute inset-0 rounded-2xl
                   bg-linear-to-br from-white/40
                   via-white/25 to-white/30
                   pointer-events-none"
        style={{ opacity: isPressed ? 0.25 : 0.4 }}
      />

      {/* Testo */}
      <motion.div
        className={`${fontSerif.className}
                    relative z-10 text-2xl lg:text-3xl
                    text-neutral-900/90`}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >

        MAURO

      </motion.div>

      <motion.div
        className={`${fontSerif.className}
                    relative z-10 text-2xl
                    lg:text-3xl text-neutral-900/90`}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.55, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >

        CONCENTRI

      </motion.div>

      <motion.hr
        className="relative z-10 my-3 border-t
                 border-black/40 w-full"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      />

      <motion.div
        className={`${fontMono.className}
                    relative z-10 text-2xl
                    lg:text-3xl text-blue-900/90
                    tracking-wider`}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >

        <span className={`${fontMonoSpecial.className} font-extrabold`}>A</span>
        rchitetto

      </motion.div>

    </motion.div>

  );

}
