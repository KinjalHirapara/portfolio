// import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { CgEditNoise } from "react-icons/cg";
import { fadeInUp } from "../utils/motion";
import { skills } from "../constants";

const About: React.FC = () => {
  // const marqueeSkills = [...skills, ...skills, ...skills];

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
                I build modern, production-ready web applications with a strong
                focus on performance, code quality, and long-term
                maintainability. My core expertise is in React, Angular,
                TypeScript, and Node.js, with a solid foundation in HTML, SCSS,
                JavaScript, Tailwind, and Bootstrap.
              </p>
            </motion.div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>
                I have built scalable dashboard applications, CMS systems, and
                business applications, handling large datasets, complex UI
                workflows, and state management. I have extensive experience
                integrating REST APIs for data handling, authentication, and
                CRUD operations, and building rich, data-driven interfaces using
                tools like Fluent UI, Kendo UI, and ECharts.
              </p>
            </motion.div>

            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>
                My work focuses on clean architecture, reusable UI systems,
                well-tested code, and responsive user experiences. I enjoy
                turning Figma designs and complex requirements into polished,
                production-ready applications used by real users.
              </p>
            </motion.div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>
                I work closely with designers, backend developers, and product
                teams using Git and modern development workflows. I work in a
                collaborative, sprint-based development process with regular
                planning, reviews, and continuous improvement.
              </p>
            </motion.div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>
                I leverage AI-assisted tools such as Claude Code to improve
                productivity and streamline daily workflows. I use them to
                support code reviews, testing, documentation, and task
                execution, as well as to automate repetitive work. I also design
                custom automated commands and sub-agent workflows for tasks like
                content generation, code review, and testing, and continuously
                explore agentic workflows to make development more efficient,
                reliable, and consistent.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p>Technologies I have been working with:</p>
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
