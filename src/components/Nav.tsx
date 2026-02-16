import { useState } from "react";
import NavLinks from "./NavLinks";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { LuX } from "react-icons/lu";
import Button from "./Button";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        className={`fixed top-0 z-[1000] px-[5px] md:px-[50px] py-4 flex justify-between items-center w-full bg-light dark:bg-dark backdrop-blur`}
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
                className="text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/KinjalHirapara"
                className="text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
          </div>
          <Button
            type="button"
            className="xl:hidden cursor-pointer relative h-10 w-10 bg-transparent flex items-center justify-center leading-none text-primary"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <BsList
              className={`absolute h-7 w-7 text-primary transition-all duration-300 ${
                menuOpen
                  ? "opacity-0 scale-75 -rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />
            <LuX
              className={`absolute h-6 w-6 text-primary transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-90"
              }`}
            />
          </Button>
        </div>
      </nav>

      <div
        className={`xl:hidden fixed inset-0 z-[1100] transition-[visibility] duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        ></div>
        <aside
          className={`absolute right-0 top-0 z-[1110] h-full w-full border-l border-primary bg-light text-textDark dark:bg-dark dark:text-textLight shadow-xl transform transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end p-4 border-b border-primary/30">
            <Button
              type="button"
              className="p-1 rounded text-primary transition-transform duration-200"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <LuX className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-4">
            <NavLinks
              className="flex-col items-start gap-3 text-textDark dark:text-textLight"
              onLinkClick={() => setMenuOpen(false)}
            />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Nav;




