import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../constants";

const NavLinks: React.FC<{ className?: string }> = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  return (
    <div
      className={`flex gap-2 justify-center items-center ${props.className}`}
    >
      {navLinks.map((link, index) => {
        const path = link.id === "home" ? "/" : `/${link.id}`;
        const isActive = currentPath === path;
        const Icon = link.icon;

        return (
          <div className="flex gap-2 justify-center items-center" key={index}>
            <button
              onClick={() => navigate(path)}
              className={`cursor-pointer text-textlight flex items-center gap-2 px-3 py-1 capitalize ${
                isActive
                  ? "bg-primary/20 border-b-2 border-primary"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden md:inline">{link.title}</span>
            </button>
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
