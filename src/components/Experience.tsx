import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";
import { experiences } from "../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const Experience: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 h-full flex flex-col">
      <div className="mb-8 me-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#64ffda] flex items-center gap-2">
          <span className="numbered-heading"> Where I've Worked</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </h2>
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-10 ms-6"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 dark:ring-gray-900 dark:bg-blue-900">
              <BiBriefcase className="text-white w-3 h-3" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Application UI v2.0.0{" "}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Download ZIP
            </a>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
