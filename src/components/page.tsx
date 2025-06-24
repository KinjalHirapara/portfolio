import { useTheme } from "../context/ThemeContext";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";
import { navLinks } from "../constants";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import HexagonLoader from "./Loader";

const SectionRouter: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (loading) {
    return <HexagonLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <div
      className={`${
        theme === "dark"
          ? "dark:bg-dark dark:text-textLight"
          : "bg-light text-textDark"
      } w-screen `}
    >
      <div className="flex flex-col full-height">
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
          <div className="flex justify-center">
            <div className="realative w-full flex justify-center gap-4 bg-primary p-2 text-textLight z-9">
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
                        className={`cursor-pointer text-textDark flex items-center gap-2 px-3 py-1 rounded transition-colors capitalize ${
                          isActive ? "bg-white/20" : "hover:bg-white/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="hidden md:inline">{link.title}</span>
                      </button>
                      {index < navLinks.length - 1 && (
                        <div className="text-textDark">|</div>
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
