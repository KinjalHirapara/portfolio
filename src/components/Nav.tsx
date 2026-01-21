import { useState } from "react";
// import { useTheme } from "../context/ThemeContext";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";
const Nav: React.FC = () => {
  // const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`relative px-[5px] md:px-[50px] py-4 flex justify-between items-center w-full`}
      >
        <a href="#home" className="flex items-center gap-3">
          <div className="logo relative w-16 h-16 text-primary">
            <div
              className={`hex-container inset-0 z-0 absolute top-0 left-0  flex items-center justify-center text-2xl font-bold cursor-pointer`}
            ></div>
            <div
              className={`logo-container inset-0 z-0 absolute top-0 left-0 flex items-center justify-center text-2xl font-bold cursor-pointer`}
            >
              K
            </div>
          </div>
        </a>
        <div className="hidden xl:flex">
          <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-4 justify-center items-center">
            <div>
              <a
                href="https://www.linkedin.com/in/kinjalhirapara"
                className="transition hover:-translate-y-1 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-7 h-7 transition hover:-translate-y-1 hover:text-primary" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/KinjalHirapara"
                className="transition hover:-translate-y-1 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-7 h-7 transition hover:-translate-y-1 hover:text-primary" />
              </a>
            </div>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="xl:hidden cursor-pointer h-10 px-4 py-2 rounded border-2 border-primary bg-transparent transition hover:shadow-[3px_3px_0_0_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1 flex items-center gap-2 leading-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <>
                <LuX className="h-6 w-6" />
              </>
            ) : (
              <>
                <LuMenu className="h-6 w-6" />
              </>
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="xl:hidden fixed inset-0 z-30">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          ></div>
          <aside className="absolute right-0 top-0 h-full w-[260px] border-l border-primary bg-light text-textDark dark:bg-dark dark:text-textLight shadow-xl">
            <div className="flex items-center justify-end p-4 border-b border-primary/30">
              {/* <span className="text-sm font-semibold">Menu</span> */}
              <button
                type="button"
                className="px-2 py-1 rounded border border-primary text-primary text-xs font-semibold"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <LuX className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <NavLinks
                className="flex-col items-start gap-3 text-textDark dark:text-textLight"
                onLinkClick={() => setMenuOpen(false)}
              />
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
export default Nav;
