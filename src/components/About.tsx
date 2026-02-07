import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaUniversalAccess,
  FaLayerGroup,
  FaBrush,
  FaShieldAlt,
  FaHandsHelping,
  FaCheckCircle,
  FaCircle,
} from "react-icons/fa";
import {
  SiFigma,
  SiReact,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiJest,
  SiGit,
} from "react-icons/si";
import { fadeInUp } from "../utils/motion";

const About: React.FC = () => {
  const skillIcons: Record<string, IconType> = {
    Figma: SiFigma,
    "Design systems": FaLayerGroup,
    Accessibility: FaUniversalAccess,
    "UI polish": FaBrush,
    React: SiReact,
    Angular: SiAngular,
    TypeScript: SiTypescript,
    Tailwind: SiTailwindcss,
    SCSS: SiSass,
    "Node.js": SiNodedotjs,
    "REST APIs": FaLayerGroup,
    Auth: FaShieldAlt,
    CRUD: FaCheckCircle,
    Integrations: FaCheckCircle,
    Jest: SiJest,
    Playwright: FaCheckCircle,
    Performance: FaCheckCircle,
    Linting: FaCheckCircle,
    Agile: FaHandsHelping,
    Git: SiGit,
    "Code reviews": FaCheckCircle,
    Docs: FaCheckCircle,
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-[100dvh] px-4 py-[60px] lg:py-[30px] flex flex-col mobile-landscape-padding"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-stretch pb-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
            <span className="numbered-heading">About Me</span>
          </h2>
        </motion.div>
        <div className="space-y-6 overflow-hidden text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p className="text-base md:text-lg max-w-3xl mx-auto">
              I build modern, production-ready web applications with a strong
              focus on performance, code quality, and long-term maintainability.
              My core expertise is in React, Angular, TypeScript, and Node.js,
              with a solid foundation in HTML, SCSS, JavaScript, Tailwind, and
              Bootstrap.
            </p>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p className="text-base md:text-lg max-w-3xl mx-auto">
              I build scalable dashboard applications, CMS systems, and
              business tools, integrating REST APIs for authentication, data
              handling, and CRUD operations. I enjoy turning complex
              requirements into polished, production-ready interfaces.
            </p>
          </motion.div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-primary/20 bg-[var(--color-light)] p-4 text-left dark:bg-[var(--color-dark)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              What I Do
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <li>Accessible & responsive UI design.</li>
              <li>
                Component-based development using modern frameworks, with smooth
                data handling and state management.
              </li>
              <li>
                Secure APIs and well-structured databases that support real-world
                business logic.
              </li>
              <li>
                Reliable applications with proper validation, testing, and
                graceful failure handling.
              </li>
              <li>
                Clear communication, requirement understanding, and teamwork
                throughout the project lifecycle.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-[var(--color-light)] p-4 text-left dark:bg-[var(--color-dark)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              How I Do It
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <li>Clarify requirements and user flows before build.</li>
              <li>Design scalable component architecture with clean APIs.</li>
              <li>Implement state management and data handling that stays predictable.</li>
              <li>Validate, test, and handle edge cases for stability.</li>
              <li>Communicate early and often with stakeholders and teammates.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-[var(--color-light)] p-4 text-left dark:bg-[var(--color-dark)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              What You Get
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <li>Polished UI with consistent, accessible experiences.</li>
              <li>Fast, responsive pages across devices and browsers.</li>
              <li>Reliable flows with graceful error handling.</li>
              <li>Clean, maintainable code that is easy to extend.</li>
              <li>Clear handoff and documentation for long-term support.</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {[
            "Figma",
            "Design systems",
            "Accessibility",
            "UI polish",
            "Docs",
            "React",
            "Angular",
            "TypeScript",
            "Tailwind",
            "SCSS",
            "Jest",
            "Playwright",
            "Performance",
            "Linting",
            "Node.js",
            "REST APIs",
            "Auth",
            "CRUD",
            "Integrations",
            "Agile",
            "Git",
            "Code reviews",
          ].map((skill) => {
            const SkillIcon = skillIcons[skill] ?? FaCircle;
            return (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-[rgba(240,91,42,0.12)] px-2.5 py-1 text-[11px] font-semibold tracking-[0.02em] text-textDark dark:border-primary/45 dark:bg-[rgba(240,91,42,0.2)] dark:text-textLight"
              >
                <SkillIcon className="text-[12px]" aria-hidden="true" />
                {skill}
              </span>
            );
          })}
        </div>
      </div>
      <div className="about-icons-marquee">
        <div
          className="about-icons-track"
          style={{ "--marquee-count": 3 } as React.CSSProperties}
        >
        </div>
      </div>
    </section>
  );
};

export default About;
