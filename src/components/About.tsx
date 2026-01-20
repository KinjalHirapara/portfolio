import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { CgEditNoise } from "react-icons/cg";
import { fadeInUp } from "../utils/motion";
import { skills } from "../constants";

const About: React.FC = () => {
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="about"
      className="w-full px-4 py-[60px] lg:py-[30px] flex flex-col mobile-landscape-padding"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-col gap-10 items-stretch pb-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
            <span className="numbered-heading">About Me</span>
          </h2>
        </motion.div>
        <div className="flex flex-col h-full">
          <div className="space-y-4 overflow-hidden">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>
                I design and build modern, high-performance web applications
                using React, Angular, and TypeScript, with strong skills in
                HTML, SCSS, JavaScript, Bootstrap, and Tailwind CSS. I focus on
                clean, maintainable UI components, performance optimization,
                smooth API integrations, and subtle Framer Motion interactions.
                My experience spans data-heavy dashboards, analytics platforms,
                business applications, and responsive web experiences where I
                prioritize clarity, usability, and scalable front-end
                architecture.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>Technologies I have been working with recently:</p>
              <div className="flex flex-wrap items-center gap-2">
                {skills.map((skill) => (
                  <div className="flex items-center gap-2" key={skill.name}>
                    <CgEditNoise className="w-2 h-2" />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="about-icons-marquee">
        <div
          className="about-icons-track"
          style={{ "--marquee-count": 3 } as React.CSSProperties}
        >
          {/* {marqueeSkills.map((skill, index) => (
            <Tilt
              glareEnable={false}
              glareMaxOpacity={0.3}
              scale={1.05}
              transitionSpeed={250}
              key={`${skill.name}-${index}`}
            >
              <div>
                <div className="flex items-center justify-center w-full h-full">
                  <div className={`${skill.class} develop-icon`}>
                    <div className="circle flex items-center justify-center">
                      {skill.icon}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default About;
