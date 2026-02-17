import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import PointerDot from "./PointerDot";
import Lenis from "lenis";
import CustomScrollbar from "./CustomScrollbar";
import ScrollToTop from "./ScrollToTop";

const SectionRouter: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
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
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="dark bg-dark text-textLight w-screen">
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
            <Project />
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
