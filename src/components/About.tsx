import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from "../utils/motion";

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
          backgroundImage: "url('/about-bg-image.webp')",
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
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="numbered-heading uppercase text-2xl md:text-3xl font-bold text-primary text-center">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-textLight">
              I am a Front-End Developer with over 5 years of experience
              building scalable, user-centric web applications.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-textLight">
              My journey started with crafting static HTML pages and evolved
              into building complex, data-driven interfaces using modern
              frameworks like React and Angular.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-textLight">
              I specialize in translating business requirements into clean,
              intuitive UI systems that are both performant and maintainable.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-textLight">
              I enjoy turning complex problems into simple, elegant solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-primary/30 bg-dark/70 p-4 text-left backdrop-blur-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Strategy & Clarity
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-textLight/90">
              <li>Understand product goals before writing code.</li>
              <li>Define scalable architecture.</li>
              <li>Plan reusable component systems.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-dark/70 p-4 text-left backdrop-blur-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Clean Implementation
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-textLight/90">
              <li>Build modular UI components.</li>
              <li>Predictable state management.</li>
              <li>Performance optimization.</li>
              <li>Edge-case handling.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-dark/70 p-4 text-left backdrop-blur-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Delivery & Growth
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-textLight/90">
              <li>Production-ready interfaces.</li>
              <li>Cross-browser and device testing.</li>
              <li>Clear documentation.</li>
              <li>Long-term maintainable code.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
