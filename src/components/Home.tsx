import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import profileImg from "../assets/profile.jpg";
import { BsArrowRight } from "react-icons/bs";

const ChevronIcon: React.FC<{
  direction: "left" | "right";
  className?: string;
}> = ({ direction, className }) => {
  const gradientId =
    direction === "left"
      ? "heroChevronGradientTopBottom"
      : "heroChevronGradientBottomTop";
  const lightColor = "color-mix(in srgb, var(--color-primary) 40%, #ffffff)";
  const darkColor = "color-mix(in srgb, var(--color-primary) 75%, #000000)";

  const stops =
    direction === "left"
      ? [
          { offset: "0%", stopColor: darkColor },
          { offset: "100%", stopColor: lightColor },
        ]
      : [
          { offset: "0%", stopColor: lightColor },
          { offset: "100%", stopColor: darkColor },
        ];

  const path =
    direction === "left"
      ? "M18 4 L6 12 L18 20 L18 16 L11 12 L18 8 L18 4 Z"
      : "M6 4 L18 12 L6 20 L6 16 L13 12 L6 8 L6 4 Z";

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="transparent"
      style={{
        transform: direction === "left" ? "rotate(-4deg)" : "rotate(4deg)",
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          {stops.map(({ offset, stopColor }) => (
            <stop key={offset} offset={offset} stopColor={stopColor} />
          ))}
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] max-w-6xl mx-auto px-4 py-[60px] lg:py-[30px] flex flex-col justify-center mobile-landscape-padding"
    >
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-2 items-center md:items-center">
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-lg md:text-xl font-mono mb-2 text-textDark dark:text-textLight">
              Welcome!
            </h1>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-7xl font-bold text-primary"
          >
            Kinjal Hirapara
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-4xl font-semibold text-textDark dark:text-textLight"
          >
            Software Developer
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Crafting modern web applications with a focus on clean architecture,
            performance, and great user experience.
          </motion.div>
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              type="button"
              className="cursor-pointer group px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold transition active:translate-y-0.5  flex items-center gap-2"
            >
              What I Do
              <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              className="cursor-pointer group px-6 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold transition active:translate-y-0.5 flex items-center gap-2"
            >
              View Works
              <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-[320px] h-[320px] mx-auto md:mx-0 overflow-visible">
          <div className="absolute h-[100%] w-[100%] rounded-full border-[2px] border-primary/80 ring-slow-spin z-10" />
          <div className="absolute -top-10 -left-20 text-primary text-5xl md:text-6xl z-20">
            <ChevronIcon direction="left" className="block h-[2em] w-[2em]" />
          </div>
          <div className="absolute -bottom-10 -right-20 text-primary text-5xl md:text-6xl z-20">
            <ChevronIcon direction="right" className="block h-[2em] w-[2em]" />
          </div>
          <div className="relative w-full h-full p-[10px] z-10">
            <div className="w-full h-full overflow-hidden rounded-full border-4 border-light dark:border-dark bg-light dark:bg-dark">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
