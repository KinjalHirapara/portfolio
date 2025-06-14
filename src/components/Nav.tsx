import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Nav: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <nav
        className={`${
          theme === "dark"
            ? "dark:bg-gray-800 dark:text-white"
            : "bg-white text-gray-900"
        }  px-[50px] py-4 flex justify-between items-center w-full`}
      >
        <div className="logo relative w-16 h-16 text-white">
          <div
            className={`hex-container inset-0 z-0 absolute top-0 left-0  flex items-center justify-center text-2xl font-bold cursor-pointer`}
          ></div>
          <div
            className={`logo-container inset-0 z-0 absolute top-0 left-0 flex items-center justify-center text-2xl font-bold cursor-pointer`}
          >
            K
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <a
              className="px-4 py-2 rounded border border-[#64ffda] bg-transparent transition
    hover:shadow-[3px_3px_0_0_#64ffda] hover:-translate-x-1 hover:-translate-y-1"
              href="mailto:kinjalhirapara25@gmail"
            >
              Send a mail
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <div className="fixed bottom-0 left-[50px] z-9">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <a
              href="https://www.linkedin.com/in/kinjalhirapara"
              className="transition hover:-translate-y-1 hover:text-[#64ffda]"
              target="_blank"
            >
              <FaLinkedin className="w-7 h-7 transition hover:-translate-y-1 hover:text-[#64ffda]" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/KinjalHirapara"
              className="transition hover:-translate-y-1 hover:text-[#64ffda]"
              target="_blank"
            >
              <FaGithub className="w-7 h-7 transition hover:-translate-y-1 hover:text-[#64ffda]" />
            </a>
          </div>

          <div className="w-px h-[100px] bg-gray-400 mt-2"></div>
        </div>
      </div>
    </>
  );
};
export default Nav;
