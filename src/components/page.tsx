import { useTheme } from "../context/ThemeContext";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";
import { useState } from "react";
import HexagonLoader from "./Loader";
import PointerDot from "./PointerDot";

const SectionRouter: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

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
      <PointerDot />
      <div className="flex flex-col full-height">
        <Nav />
        <div className="flex-1 flex flex-col overflow-auto">
          <div id="page-scroll" className="flex-1 overflow-auto">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return <SectionRouter />;
};
export default Page;

