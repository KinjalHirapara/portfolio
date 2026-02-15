import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-reveal-rtl relative w-full min-h-[100dvh] px-4 py-[60px] lg:py-[30px] flex flex-col mobile-landscape-padding"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-stretch pb-4 w-full">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="numbered-heading uppercase text-2xl md:text-3xl font-bold text-primary text-left">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              I am a Front-End Developer with over 5 years of experience
              building scalable, user-centric web applications.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              My journey started with crafting static HTML pages and evolved
              into building complex, data-driven interfaces using modern
              frameworks like React and Angular.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I specialize in translating business requirements into clean,
              intuitive UI systems that are both performant and maintainable.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I enjoy turning complex problems into simple, elegant solutions.
            </p>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[360px] h-[360px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <img
                src="/about_img.jpg"
                alt="Kinjal Hirapara"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-primary/20 bg-[var(--color-light)] p-4 text-left dark:bg-[var(--color-dark)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Strategy & Clarity
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <li>Understand product goals before writing code.</li>
              <li>Define scalable architecture.</li>
              <li>Plan reusable component systems.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-[var(--color-light)] p-4 text-left dark:bg-[var(--color-dark)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Clean Implementation
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <li>Build modular UI components.</li>
              <li>Predictable state management.</li>
              <li>Performance optimization.</li>
              <li>Edge-case handling.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-[var(--color-light)] p-4 text-left dark:bg-[var(--color-dark)]">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Delivery & Growth
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <li>Production-ready interfaces.</li>
              <li>Cross-browser and device testing.</li>
              <li>Clear documentation.</li>
              <li>Long-term maintainable code.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

