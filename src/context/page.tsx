import { useTheme } from "./ThemeContext";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Works from "../components/Works";
import Contact from "../components/Contact";
import { navLinks } from "../constants";
import Nav from "../components/Nav";

const SectionRouter = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark"
          ? "dark:bg-gray-800 dark:text-white"
          : "bg-white text-black"
      } h-screen w-screen `}
    >
      <div className="flex flex-col h-screen">
        <Nav />
        <div className="flex-1 flex flex-col overflow-auto">
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="flex justify-center mb-1">
            <div className="flex gap-4 bg-black p-2 rounded text-white">
              <div className="flex gap-2 justify-center items-center">
                {navLinks.map((link, index) => {
                  const path = link.id === "home" ? "/" : `/${link.id}`;
                  const isActive = currentPath === path;
                  const Icon = link.icon;

                  return (
                    <div
                      className="flex gap-2 justify-center items-center"
                      key={index}
                    >
                      <button
                        onClick={() => navigate(path)}
                        className={`flex items-center gap-2 px-3 py-1 rounded transition-colors capitalize ${
                          isActive ? "bg-white/20" : "hover:bg-white/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="hidden md:inline">{link.title}</span>
                      </button>
                      {index < navLinks.length - 1 && (
                        <div className="text-white">|</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <BrowserRouter>
      <SectionRouter />
    </BrowserRouter>
  );
};
export default Page;
