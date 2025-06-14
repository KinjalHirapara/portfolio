import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <button
      className="cursor-pointer px-4 py-2 rounded border border-[#64ffda] bg-transparents transition
    hover:shadow-[3px_3px_0_0_#64ffda] hover:-translate-x-1 hover:-translate-y-1"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
