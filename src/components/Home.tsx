import { motion } from "framer-motion";
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
        strokeWidth="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
import { fadeInUp } from "../utils/motion";
import profileImg from "../assets/profile.jpg";
import { skills } from "../constants";

const Home: React.FC = () => {
  const featuredSkills = skills.slice(0, 8);

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
            {/* Specializing in building user-friendly, scalable, and visually
            engaging web applications using Angular, React, and Node.js.
            Committed to transforming complex concepts into interactive
            interfaces that enhance usability and drive user engagement. */}
            {/* Builds large-scale, data-heavy dashboards and business applications.
            Strong focus on high-performance user interfaces, complex workflows,
            and clean, maintainable, production-ready code. */}
          </motion.div>
          {/* <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <a
              href="/Software Developer_Kinjal_Hirapara.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded border-2 border-primary bg-transparent text-primary font-semibold transition  hover:shadow-[3px_3px_0_0_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1"
            >
              Download CV
            </a>
          </motion.div> */}
        </div>
        <div className="relative w-full max-w-[320px] h-[320px] mx-auto md:mx-0 overflow-visible">
          <motion.div
            className="absolute -inset-6 rounded-[50%] z-0"
            initial={{ opacity: 0.5, scale: 1, backgroundPosition: "0% 40%" }}
            animate={{
              opacity: [0.5, 0.85, 0.5],
              backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-primary) 90%, #000000) 0%, transparent 55%), radial-gradient(circle at 65% 70%, color-mix(in srgb, var(--color-primary) 60%, #ffffff) 0%, transparent 70%)",
              backgroundSize: "220% 220%",
              backgroundBlendMode: "screen",
            }}
          />
          <div className="absolute inset-0 hero-glow-1 pointer-events-none" />
          <div className="absolute inset-0 hero-glow-2 pointer-events-none" />
          <div className="absolute inset-0 hero-glow-3 pointer-events-none" />
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
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mt-10 w-full"
      >
        <div className="w-full bg-accent/5 dark:bg-accent/20 px-6 py-4">
          <div
            className="flex w-full flex-nowrap items-center gap-x-8 overflow-x-auto text-sm md:text-base text-textDark/80 dark:text-textLight/70"
            style={{ scrollbarWidth: "none" }}
          >
            {featuredSkills.map((skill) => (
              <div
                className="flex items-center gap-3 whitespace-nowrap"
                key={skill.name}
              >
                <span className="tracking-wide">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
