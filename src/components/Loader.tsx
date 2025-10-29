import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const HexagonLoader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [strokeOffset, setStrokeOffset] = useState(300);
  const [fade, setFade] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setStrokeOffset(0);
    const fadeTimeout = setTimeout(() => setFade(true), 6500);
    const finishTimeout = setTimeout(onFinish, 6500);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
        theme === "dark" ? "bg-dark text-textLight" : "bg-light text-textDark"
      } ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-[100px] h-[100px] flex items-center justify-center">
        <svg
          viewBox="0 0 110 110"
          width={100}
          height={100}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0"
        >
          <polygon
            points="55,10 100,35 100,75 55,100 10,75 10,35"
            stroke="var(--color-primary)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="300"
            strokeDashoffset={strokeOffset}
            style={{
              transition: "stroke-dashoffset 6s linear",
            }}
          />
        </svg>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl font-bold z-10 select-none">
          K
        </span>
      </div>
    </div>
  );
};

export default HexagonLoader;
