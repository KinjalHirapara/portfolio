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

    const scrollRoot = document.getElementById("page-scroll");
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
        root: scrollRoot ?? null,
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveId(id);
  };

  return (
    <div
      className={`flex gap-2 justify-center items-center ${props.className}`}
    >
      {navLinks.map((link, index) => {
        const Icon = link.icon;
        const isActive = link.id === activeId;

        return (
          <div className="flex gap-2 justify-center items-center" key={index}>
            <a
              href={`#${link.id}`}
              className={`cursor-pointer text-textDark dark:text-textLight flex items-center gap-2 px-3 py-1 capitalize border-b-2 transition ${
                isActive
                  ? "border-primary"
                  : "border-transparent hover:bg-white/10"
              }`}
              aria-current={isActive ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(link.id);
                props.onLinkClick?.();
              }}
            >
              <Icon className="w-5 h-5" />
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
