import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeInUp } from "../utils/motion";

const Projects: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveIndex(0);
  };

  const showNext = () => {
    if (!activeGallery) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % activeGallery.length);
  };

  const showPrev = () => {
    if (!activeGallery) {
      return;
    }
    setActiveIndex((prev) =>
      prev === 0 ? activeGallery.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="projects"
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
              className="relative flex flex-col lg:flex-row items-center gap-6 group rounded-lg"
            >
              <div className="flex w-full lg:w-1/3 h-56 lg:h-[260px] rounded-lg overflow-hidden items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="object-contain w-4/5 h-4/5"
                  style={{ transform: "rotate(360deg)" }}
                />
              </div>
              <div className="w-full lg:w-2/3 p-4 lg:p-6">
                <h3 className="text-2xl font-bold text-left">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-4 text-left">
                  {project.overline}
                </p>
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

                <div className="flex flex-wrap gap-4 justify-start">
                  {project.gallery && project.gallery.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveGallery(project.gallery ?? null);
                        setActiveIndex(0);
                      }}
                      className="px-4 py-2 rounded border-2 border-primary bg-transparent text-primary font-semibold transition hover:shadow-[3px_3px_0_0_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1"
                    >
                      Show Images
                    </button>
                  )}
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
      {activeGallery && (
        <div className="fixed inset-0 z-50 bg-black/90" onClick={closeGallery}>
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-2xl hover:text-white/80"
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>
            <img
              src={activeGallery[activeIndex]}
              alt={`Project image ${activeIndex + 1}`}
              className="max-w-[95vw] max-h-[90vh] object-contain"
            />
            {activeGallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-white/80"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-white/80"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
                  {activeIndex + 1} / {activeGallery.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
