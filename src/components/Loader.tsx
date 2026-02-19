import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const animationDuration = 2600;
const transitionDuration = 800;

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const controls = useAnimation();
  const label = "Loading...";
  const letters = label.split("");

  useEffect(() => {
    let raf1 = 0 as number;
    let raf2 = 0 as number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        /* allow CSS animations to restart */
      });
    });

    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: transitionDuration / 1000, ease: "easeOut" },
    });

    const hideTimer = window.setTimeout(() => {
      controls
        .start({
          opacity: 0,
          y: -60,
          transition: { duration: transitionDuration / 1000, ease: "easeIn" },
        })
        .then(() => onFinish());
    }, animationDuration);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(hideTimer);
    };
  }, [controls, onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark text-textLight">
      <div className="relative h-[120px] w-[min(85vw,640px)] flex items-center justify-center overflow-visible">
        <motion.span
          className="text-primary text-xl md:text-2xl font-semibold tracking-[0.45em] uppercase select-none inline-flex"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          {letters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
                delay: 0.12 + index * 0.07,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </div>
  );
};

export default Loader;
