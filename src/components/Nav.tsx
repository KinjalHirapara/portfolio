import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <nav
        className={`px-[5px] md:px-[50px] py-4 flex justify-between items-center w-full`}
      >
        <Link to="/">
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
        </Link>
        <div className="flex items-center gap-4">
          <div className="md:hidden flex gap-4 justify-center items-center">
            <div>
              <a
                href="https://www.linkedin.com/in/kinjalhirapara"
                className="transition hover:-translate-y-1 hover:text-primary"
                target="_blank"
              >
                <FaLinkedin className="w-7 h-7 transition hover:-translate-y-1 hover:text-primary" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/KinjalHirapara"
                className="transition hover:-translate-y-1 hover:text-primary"
                target="_blank"
              >
                <FaGithub className="w-7 h-7 transition hover:-translate-y-1 hover:text-primary" />
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              className="px-4 py-2 rounded border-2 border-primary bg-transparent transition
    hover:shadow-[3px_3px_0_0_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1"
              href="mailto:kinjalhirapara25@gmail"
            >
              Send a mail
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <div className="hidden md:block fixed bottom-10 md:left-[50px] left-[10px] z-9">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <a
              href="https://www.linkedin.com/in/kinjalhirapara"
              className="transition hover:-translate-y-1 hover:text-primary"
              target="_blank"
            >
              <FaLinkedin className="w-7 h-7 transition hover:-translate-y-1 hover:text-primary" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/KinjalHirapara"
              className="transition hover:-translate-y-1 hover:text-primary"
              target="_blank"
            >
              <FaGithub className="w-7 h-7 transition hover:-translate-y-1 hover:text-primary" />
            </a>
          </div>

          <div
            className={`w-px h-[100px] ${
              theme === "dark" ? " bg-light " : "bg-dark"
            } mt-2`}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Nav;
