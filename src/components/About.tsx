import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";

const introContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
  },
};

const introItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.1, 1.06]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.62, 0.72, 0.62],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);
  const aboutCards = [
    {
      title: "Strategy & Clarity",
      icon: FaLightbulb,
      points: [
        "Understand product goals before writing code.",
        "Translate ideas into scalable architecture",
        "Design flexible, reusable, and future-proof systems",
        "focus on building solutions, not just features",
      ],
    },
    {
      title: "Clean Implementation",
      icon: FaCode,
      points: [
        "Create modular, reusable UI components",
        "Maintain clean state management and predictable data flow",
        "Optimize for performance, and accessibility",
        "Handle edge cases, errors, and real-world user behavior",
        "Write clean, structured, and readable code",
      ],
    },
    {
      title: "Delivery & Growth",
      icon: FaRocket,
      points: [
        "Ship production-ready, real-world applications",
        "Ensure smooth experiences across devices and screen sizes",
        "Keep codebases organized, documented, and maintainable",
        "Work effectively in agile, sprint-based workflows",
        "Improve continuously through feedback, iteration, and learning",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-reveal-rtl relative w-full min-h-[100dvh] px-4 py-[60px] lg:py-[30px] flex flex-col mobile-landscape-padding overflow-hidden justify-center"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-24 inset-x-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/about-bg-image.jpg')",
          y: bgY,
          scale: bgScale,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dark"
        style={{ opacity: overlayOpacity }}
      />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10 items-stretch pb-4 w-full"
        style={{ y: contentY }}
      >
        <div className="grid gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={introContainerVariants}
            className="space-y-4"
          >
            <motion.h2
              variants={introItemVariants}
              className="numbered-heading uppercase text-2xl md:text-3xl font-bold text-primary text-center"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={introItemVariants}
              className="text-base md:text-lg leading-relaxed text-textLight"
            >
              Frontend-focused software developer with 5+ years of experience
              building scalable, user-centric web applications, with strong
              expertise in React, Angular, and TypeScript, and Solid backend
              experience using Node.js and PostgreSQL. I specialize in creating
              clean, performant, and maintainable UI systems, with hands-on
              experience in REST API integration, authentication, CRUD
              workflows, and state management. I have built dashboards, CMS
              platforms, and business applications that handle complex data and
              workflows, focusing on clean architecture, reusable components,
              and responsive design. I am skilled at translating Figma designs
              and business requirements into polished, production-ready
              interfaces, work collaboratively in agile, sprint-based teams
              using Git, and leverage AI-assisted workflows to improve
              productivity, testing, documentation, and automation.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardsContainerVariants}
          className="grid gap-5 md:grid-cols-3"
        >
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="relative rounded-2xl border border-primary/30 bg-dark px-5 pb-5 pt-10 text-left backdrop-blur-sm"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/70 bg-primary text-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-textlight mt-2 text-center">
                  {card.title}
                </h3>
                <div className="mx-auto mt-3 h-px w-14 bg-primary/60" />
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-textlight/90">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <BsChevronDoubleRight className="mt-[5px] h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
