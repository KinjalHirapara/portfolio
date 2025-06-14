import React from "react";
import { ThemeProvider as ThemeProviderContext } from "../context/ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProviderContext>{children}</ThemeProviderContext>;
};

export default ThemeProvider;
