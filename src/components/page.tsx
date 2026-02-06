import { useTheme } from "../context/ThemeContext";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import HexagonLoader from "./Loader";
import PointerDot from "./PointerDot";
import Lenis from "lenis";
import CustomScrollbar from "./CustomScrollbar";
import ScrollToTop from "./ScrollToTop";

const SectionRouter: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    if (loading) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.8,
      gestureOrientation: "vertical",
    });
    (window as Window & { lenis?: Lenis }).lenis = lenis;

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      (window as Window & { lenis?: Lenis }).lenis = undefined;
    };
  }, [loading]);

  if (loading) {
    return <HexagonLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <div
      className={`${
        theme === "dark"
          ? "dark:bg-dark dark:text-textLight"
          : "bg-light text-textDark"
      } w-screen `}
    >
      <PointerDot />
      <CustomScrollbar />
      <ScrollToTop />
      <div>
        <Nav />
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return <SectionRouter />;
};
export default Page;
