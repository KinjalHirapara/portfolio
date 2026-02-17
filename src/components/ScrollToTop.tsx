import { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 240);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    controls.start(
      visible
        ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } }
        : { opacity: 0, y: 12, scale: 0.95, transition: { duration: 0.25 } },
    );
  }, [controls, visible]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={controls}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed right-6 bottom-6 z-[9997] flex flex-col items-center justify-center gap-2 p-0 border-none rounded-none text-primary cursor-pointer"
    >
      <span
        className="text-[28px] leading-none text-current font-bold"
        aria-hidden="true"
        style={{ animation: "scroll-top-arrow 1.6s ease-in-out infinite" }}
      >
        <FiChevronsUp />
      </span>
      <span
        className="text-sm tracking-[0.18em] uppercase text-current font-semibold"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Back To Top
      </span>
    </motion.button>
  );
};

export default ScrollToTop;
