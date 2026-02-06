import { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 240);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleClick = () => {
    const lenis = (window as Window & {
      lenis?: {
        scrollTo: (target: string | number, opts?: { duration?: number }) => void;
      };
    }).lenis;
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { duration: 2.2 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <button
      type="button"
      className={`scroll-top-vertical ${visible ? "is-visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <span className="scroll-top-arrow" aria-hidden="true">
        <FiChevronsUp />
      </span>
      <span className="scroll-top-text">Back To Top</span>
    </button>
  );
};

export default ScrollToTop;
