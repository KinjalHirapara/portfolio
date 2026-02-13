import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import profileImg from "../assets/profile.jpg";
import { BsArrowRight } from "react-icons/bs";
import { skills } from "../constants";

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
  const marqueeTechStack = [...skills, ...skills, ...skills];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center"
    >
      <div className="flex flex-col-reverse md:flex-row gap-[30px] md:gap-[100px] items-center md:items-center flex-1 max-w-6xl mobile-landscape-padding mx-auto px-4 pt-[60px] lg:py-[30px]">
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-lg md:text-3xl font-mono mb-2 text-textDark dark:text-textLight">
              Hello
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-primary ml-2"
                aria-hidden="true"
              ></span>
            </h1>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative text-4xl md:text-4xl pl-2 font-bold text-primary before:content-[''] before:absolute before:left-[-500px] before:bottom-[5px] before:w-[500px] before:h-[2px] before:bg-primary"
          >
            Kinjal Hirapara
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-5xl font-semibold text-textDark dark:text-textLight"
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
            I build scalable, user-centric web applications using modern
            technologies and clean architecture, with a strong focus on user
            experience and usability.
          </motion.div>
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              type="button"
              className="cursor-pointer group px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold transition active:translate-y-0.5  flex items-center gap-2"
            >
              View Projects
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
      <div className="home-stack-marquee pb-8" aria-label="Tech stack marquee">
        <div className="home-stack-track">
          {marqueeTechStack.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="home-stack-entry">
              <span
                className="home-stack-item"
                aria-hidden={index >= skills.length}
              >
                <span className="home-stack-icon" aria-hidden="true">
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </span>
              <span className="home-stack-dot" aria-hidden="true">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
