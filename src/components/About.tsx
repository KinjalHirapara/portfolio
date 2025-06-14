import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiSass,
} from "react-icons/si";
import { motion } from "framer-motion";
import { CgEditNoise } from "react-icons/cg";
import { fadeInUp } from "../utils/motion";

// Hexagon CSS clip-path utility
const skills = [
  {
    name: "Angular",
    icon: <SiAngular className="text-red-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-red-300 via-red-400 to-red-700",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 w-8 h-8" />,
    class: "bg-gradient-to-tr from-cyan-300 via-cyan-400 to-cyan-700",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-orange-300 via-orange-400 to-orange-700",
  },
  {
    name: "SCSS",
    icon: <SiSass className="text-pink-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-pink-300 via-pink-400 to-pink-700",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 w-8 h-8" />,
    class: "bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-700",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-700",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-purple-300 via-purple-400 to-purple-700",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />,
    class: "bg-gradient-to-tr from-sky-300 via-sky-400 to-sky-700",
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-orange-300 via-orange-400 to-orange-700",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-green-300 via-green-400 to-green-700",
  },
];

const hexVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, type: "spring", stiffness: 120 },
  }),
};

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto h-full flex flex-col">
      <div className="flex flex-col md:flex-row gap-10 items-stretch pb-4">
        <div className="md:w-1/2 flex flex-col h-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#64ffda] flex items-center gap-2">
            <span className="numbered-heading">About Me</span>
            <span className="flex-1 h-px bg-gray-300"></span>
          </h2>
          <div className="space-y-4">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp(0)}
            >
              <p>
                I design and develop modern, high-performance user interfaces
                using Angular, React, and other modern front-end technologies.
                With strong skills in HTML, SCSS, JavaScript, Bootstrap, and
                Tailwind CSS, I turn ideas into easy-to-use and visually
                appealing websites.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp(0)}
            >
              <p>
                I focus on writing clean, efficient code and connecting
                front-end apps with APIs and external services. I'm also
                learning to build backend APIs using Node.js to help front-end
                and back-end work together smoothly.
              </p>
            </motion.div>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp(0)}
            >
              <p>
                Throughout my career, I've contributed to various projects like
                content management systems, project management platforms,
                dashboard applications, and theme-based applications, always
                focusing on smooth user experience, performance, and responsive
                design.
              </p>
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp(0)}
            >
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
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
        <div className="md:w-1/2 flex items-center justify-center h-full">
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <Tilt
                glareEnable={false}
                glareMaxOpacity={0.3}
                scale={1.05}
                transitionSpeed={250}
              >
                <div key={skill.name}>
                  <motion.div
                    className="flex items-center justify-center w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={hexVariants}
                    custom={index}
                  >
                    <div className={`${skill.class} develop-icon`}>
                      <div className="circle flex items-center justify-center">
                        {skill.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
