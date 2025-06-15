import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto flex flex-col px-[60px] py-[30px] lg:px-4 lg:py-[10px] mobile-landscape-padding"
    >
      <div className="">
        <h2 className="text-xl lg:text-3xl font-bold text-[#64ffda] flex items-center gap-2">
          <span className="numbered-heading"> Some Things I've Built</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </h2>
      </div>
      <div className="flex-1 flex mt-8">
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          {/* Desktop: Single project with selector */}
          <div className="hidden lg:block w-full">
            <motion.div
              key={selectedProject}
              custom={selectedProject}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className={`relative flex flex-col-reverse lg:flex-row items-center group`}
            >
              {/* Project Content */}
              <div
                className={`
                  w-full lg:w-1/2 z-10
                  lg:mr-[-4rem]
                  lg:mt-0 mt-[-4rem]
                `}
              >
                <p className={`text-[#64ffda] text-sm mb-2 text-left`}>
                  {projects[selectedProject].overline}
                </p>
                <h3 className={`text-2xl font-bold mb-4 text-left`}>
                  <a
                    href={projects[selectedProject].external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {projects[selectedProject].title}
                  </a>
                </h3>
                <div
                  className="mb-4 bg-white/90 dark:bg-gray-900/80
                  p-6 lg:p-8 rounded-lg backdrop-blur"
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    {projects[selectedProject].description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 text-sm mb-4 justify-start`}
                >
                  {projects[selectedProject].tech.map((tech) => (
                    <li key={tech} className="text-[#64ffda] font-mono">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-4 justify-start`}>
                  {projects[selectedProject].github && (
                    <a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <FaGithub className="w-6 h-6 hover:text-[#64ffda] transition" />
                    </a>
                  )}
                  {projects[selectedProject].external && (
                    <a
                      href={projects[selectedProject].external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="External Link"
                    >
                      <FaExternalLinkAlt className="w-6 h-6 hover:text-[#64ffda] transition" />
                    </a>
                  )}
                </div>
              </div>
              {/* Project Image */}
              <div
                className={`
                  w-full lg:w-1/2 h-64 lg:h-[340px] rounded-lg overflow-hidden relative
                  lg:justify-start
                  flex items-center
                `}
              >
                <div className="block w-full h-full">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#64ffda]/60 via-transparent to-transparent lg:hidden"></div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Desktop: Project selector */}
          <div className="shrink-0 hidden lg:block">
            <div className="flex flex-col">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  onClick={() => setSelectedProject(index)}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-[30px] h-[30px] flex justify-center items-center rounded-full border border-white   cursor-pointer ${
                      selectedProject === index
                        ? "bg-[#64ffda] text-black"
                        : "bg-transparent text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index !== projects.length - 1 && (
                    <div className="w-px h-8 border-r-2 border-dotted border-white"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: Show all projects stacked */}
          <div className="block lg:hidden w-full">
            <div className="flex flex-col gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center group rounded-lg border border-gray-200"
                >
                  <div className="block w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0"></div> */}
                  </div>
                  <div className="w-full p-4">
                    <p className="text-[#64ffda] text-sm mb-2 text-left">
                      {project.overline}
                    </p>
                    <h3 className="text-2xl font-bold mb-4 text-left">
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <div className="mb-4 bg-white/90 dark:bg-gray-900/80 p-6 rounded-lg backdrop-blur">
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-4 text-sm mb-4 justify-start">
                      {project.tech.map((tech) => (
                        <li key={tech} className="text-[#64ffda] font-mono">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4 justify-start">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Link"
                        >
                          <FaGithub className="w-6 h-6 hover:text-[#64ffda] transition" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="External Link"
                        >
                          <FaExternalLinkAlt className="w-6 h-6 hover:text-[#64ffda] transition" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
