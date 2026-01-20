import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeInUp } from "../utils/motion";

const Works: React.FC = () => {
  return (
    <section
      id="works"
      className="max-w-6xl mx-auto flex flex-col px-4 py-[60px] lg:py-[30px] mobile-landscape-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl lg:text-3xl font-bold text-primary text-center">
          <span className="numbered-heading">Projects</span>
        </h2>
      </motion.div>
      <div className="flex-1 flex mt-8">
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative flex flex-col lg:flex-row items-center gap-6 group rounded-lg border border-gray-200"
            >
              <div className="block w-full lg:w-1/2 h-56 lg:h-[320px] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-1/2 p-4 lg:p-6">
                <p className="text-primary text-sm mb-2 text-left">
                  {project.overline}
                </p>
                <h3 className="text-2xl font-bold mb-4 text-left">
                  {project.title}
                </h3>
                <div className="mb-4 bg-primary p-4 lg:p-6 rounded-lg backdrop-blur flex flex-col gap-4">
                  <p className="text-textLight">{project.description}</p>
                  <ul className="flex flex-wrap gap-4 text-sm justify-start">
                    {project.tech.map((tech) => (
                      <li key={tech} className="text-dark font-mono">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 justify-start">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <FaGithub className="w-6 h-6 hover:text-primary transition" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="External Link"
                    >
                      <FaExternalLinkAlt className="w-6 h-6 hover:text-primary transition" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
