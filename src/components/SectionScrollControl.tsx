import { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

type SectionItem = {
  id: string;
  label: string;
};

const SectionScrollControl: React.FC = () => {
  const sections: SectionItem[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [activeId, setActiveId] = useState(sections[0]?.id ?? "home");
  const intersections = useRef(new Map<string, IntersectionObserverEntry>());

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersections.current.set(entry.target.id, entry);
        });

        const visible = Array.from(intersections.current.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6] },
    );

    targets.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeId),
  );
  const nextIndex = (activeIndex + 1) % sections.length;
  const nextSection = sections[nextIndex];
  const isLast = activeIndex === sections.length - 1;
  const activeSection = sections[activeIndex];

  const handleClick = () => {
    if (!nextSection) {
      return;
    }
    const target = document.getElementById(nextSection.id);
    const lenis = (window as Window & {
      lenis?: {
        scrollTo: (target: string | HTMLElement, opts?: { offset?: number; duration?: number }) => void;
      };
    }).lenis;
    if (lenis?.scrollTo && target) {
      lenis.scrollTo(target, { duration: 2.8 });
      return;
    }
    target?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  };

  return (
    <div className="section-scroll-control" aria-hidden="true">
      <span className="section-scroll-label">{activeSection.label}</span>
      <button
        type="button"
        className="section-scroll-next-btn"
        onClick={handleClick}
        aria-label={`Scroll to ${nextSection.label}`}
      >
        <span className="section-scroll-next">{nextSection.label}</span>
        <span className="section-scroll-arrow" aria-hidden="true">
          {isLast ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </span>
      </button>
    </div>
  );
};

export default SectionScrollControl;
