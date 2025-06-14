import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/logo.jpeg";
import { useState } from "react";
type Project = {
  title: string;
  overline: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  external: string;
};

const projects: Project[] = [
  {
    title: "Halcyon Theme",
    overline: "Featured Project",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on various marketplaces.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    image: profileImg,
    github: "https://github.com/bchiang7/halcyon-site",
    external: "https://halcyon-theme.netlify.com/",
  },
  {
    title: "Spotify Profile",
    overline: "Featured Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, tracks, and more.",
    tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    image: profileImg,
    github: "https://github.com/bchiang7/spotify-profile",
    external: "https://spotify-profile.herokuapp.com/",
  },
];

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
  const isEven = selectedProject % 2 === 1;
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-4 h-full flex flex-col"
    >
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#64ffda] flex items-center gap-2">
          <span className="numbered-heading"> Some Things I've Built</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </h2>
      </div>
      <div className="flex-1 overflow-auto flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <motion.div
              key={projects[selectedProject].title}
              custom={selectedProject}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className={`relative flex flex-col-reverse md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
              } items-center group`}
            >
              {/* Project Content */}
              <div
                className={`
                  w-full md:w-1/2 z-10
                  bg-white/90 dark:bg-gray-900/80
                  p-6 md:p-8 rounded-lg shadow-lg
                  md:shadow-2xl
                  ${isEven ? "md:ml-[-4rem]" : "md:mr-[-4rem]"}
                  md:mt-0 mt-[-4rem]
                  backdrop-blur
                `}
              >
                <p className="text-[#64ffda] text-sm mb-2">
                  {projects[selectedProject].overline}
                </p>
                <h3 className="text-2xl font-bold mb-4">
                  <a
                    href={projects[selectedProject].external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {projects[selectedProject].title}
                  </a>
                </h3>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {projects[selectedProject].description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-4 text-sm mb-4">
                  {projects[selectedProject].tech.map((tech) => (
                    <li key={tech} className="text-[#64ffda] font-mono">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Link"
                  >
                    <FaGithub className="w-6 h-6 hover:text-[#64ffda] transition" />
                  </a>
                  <a
                    href={projects[selectedProject].external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                  >
                    <FaExternalLinkAlt className="w-6 h-6 hover:text-[#64ffda] transition" />
                  </a>
                </div>
              </div>
              {/* Project Image */}
              <div
                className={`
                  w-full md:w-1/2 h-64 md:h-[340px] rounded-lg overflow-hidden shadow-lg relative
                  ${isEven ? "md:justify-end" : "md:justify-start"}
                  flex items-center
                `}
              >
                <a
                  href={projects[selectedProject].external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#64ffda]/60 via-transparent to-transparent md:hidden"></div>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="shrink-0">
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
        </div>
      </div>
    </section>
  );
};

export default Works;
