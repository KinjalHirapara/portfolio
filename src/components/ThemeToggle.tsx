import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={`relative inline-flex h-8 w-[65px] items-center rounded-full border-2 border-primary transition
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
        theme === "dark" ? "bg-primary/30" : "bg-transparent"
      }`}
      onClick={toggleTheme}
      type="button"
      aria-pressed={theme === "dark"}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
      title={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
    >
      <span className="pointer-events-none absolute inset-1 z-0 flex items-center justify-between px-0.5 text-primary/70">
        <SunIcon className="h-5 w-5" aria-hidden="true" />
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span
        className={`cursor-pointer absolute top-1 z-10 h-5 w-5 rounded-full border border-primary bg-light shadow-sm transition-transform dark:bg-dark ${
          theme === "dark" ? "translate-x-[35px]" : "translate-x-1"
        }`}
        aria-hidden="true"
      />
    </Button>
  );
};

export default ThemeToggle;
