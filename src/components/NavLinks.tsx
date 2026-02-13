import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";

const NavLinks: React.FC<{
  className?: string;
  onLinkClick?: () => void;
}> = (props) => {
  const SECTION_IDS = navLinks.map((link) => link.id);
  const [activeId, setActiveId] = useState("home");

  const intersections = useRef(new Map<string, IntersectionObserverEntry>());

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) {
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
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex gap-2 justify-center items-center ${props.className}`}
    >
      {navLinks.map((link, index) => {
        const isActive = link.id === activeId;

        return (
          <div
            className="flex gap-2 justify-center items-center px-3"
            key={index}
          >
            <a
              href={`#${link.id}`}
              className={`cursor-pointer text-textDark dark:text-textLight relative inline-flex items-center px-1 py-1 capitalize transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
                isActive
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="md:inline">{link.title}</span>
            </a>
            {/* {index < navLinks.length - 1 && (
              <div className="text-textDark dark:text-textLight">|</div>
            )} */}
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
