import { useTheme } from "../context/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import HexagonLoader from "./Loader";
import NavLinks from "./NavLinks";

const SectionRouter: React.FC = () => {
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
          {/* nav links  */}
          <div className="xl:hidden md:block">
            <div className="flex justify-center">
              <div className="relative w-full flex justify-center gap-4 bg-primary p-2 text-textLight z-9">
                <NavLinks />
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

