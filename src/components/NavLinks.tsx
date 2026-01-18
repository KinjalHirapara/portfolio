import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavLinks: React.FC<{ className?: string }> = (props) => {
  const [activeId, setActiveId] = useState(navLinks[0]?.id ?? "");

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveId(hash);
      }
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

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
              className={`cursor-pointer text-textlight flex items-center gap-2 px-3 py-1 capitalize border-b-2 transition ${
                isActive
                  ? "border-primary"
                  : "border-transparent hover:bg-white/10"
              }`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveId(link.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden md:inline">{link.title}</span>
            </a>
            {index < navLinks.length - 1 && (
              <div className="text-textlight">|</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
