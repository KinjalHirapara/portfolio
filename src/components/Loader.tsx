import React, { useEffect, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import PointerDot from "./PointerDot";

const HexagonLoader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const { theme } = useTheme();
  const words = useMemo(() => ["Loading..."], []);

  useEffect(() => {
    // Reset states and force a reflowed start so the transition reliably retriggers
    let raf1 = 0 as number;
    let raf2 = 0 as number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        // allow CSS animations to restart
      });
    });

    const wordDuration = 1800;
    const wordStagger = 750;
    const holdAfter = 0;
    const totalDuration =
      wordDuration + wordStagger * (words.length - 1) + holdAfter;
    const finishTimeout = window.setTimeout(onFinish, totalDuration);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(finishTimeout);
    };
  }, [onFinish, words]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        theme === "dark" ? "bg-dark text-textLight" : "bg-light text-textDark"
      }`}
    >
      <PointerDot />
      <div className="relative h-20 w-[min(85vw,640px)] overflow-hidden">
        {words.map((word, index) => (
          <span
            key={word}
            className="absolute left-1/2 top-1/2 text-primary text-4xl md:text-6xl font-semibold tracking-[0.45em] uppercase opacity-0 select-none animate-[loader-word_1800ms_ease-in-out_1] [animation-fill-mode:both] will-change-[opacity,transform,filter]"
            style={{
              animationDelay: `${index * 750}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HexagonLoader;
