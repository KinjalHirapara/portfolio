import { useEffect } from "react";

export const useViewportHeight = (): void => {
  useEffect(() => {
    const setVH = (): void => {
      const vh: number = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);

    return () => window.removeEventListener("resize", setVH);
  }, []);
};
