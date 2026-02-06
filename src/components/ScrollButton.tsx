import { FaChevronDown } from "react-icons/fa";

type ScrollButtonProps = {
  targetId: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({
  targetId,
  ariaLabel = "Scroll to next section",
  icon,
}) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className="absolute right-4 bottom-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-light/90 text-primary shadow-sm transition hover:-translate-y-1 hover:border-primary hover:text-primary dark:bg-dark/90"
    >
      {icon ?? <FaChevronDown className="h-4 w-4" />}
    </button>
  );
};

export default ScrollButton;
