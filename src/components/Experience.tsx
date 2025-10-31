import React, { useState } from "react";
import { experiences } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { detailVariants } from "../utils/motion";

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  return (
    <section className="max-w-5xl mx-auto px-4 py-[50px] lg:pt-[10px] lg:pb-[0px] flex flex-col mobile-landscape-padding">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center gap-2">
          <span className="numbered-heading">Where I've Worked</span>
          <span className="flex-1 h-px bg-primary"></span>
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="shrink-0 w-full md:w-[320px]">
          <ul className="border-s-1">
            {experiences.map((exp, index) => (
              <li
                className={`relative tab-menu ${
                  selectedExperience === index ? "tab-active-triangle" : ""
                }`}
                key={exp.title}
                onClick={() => setSelectedExperience(index)}
              >
                <button
                  className={`relative z-[9999999999] flex items-start justify-between gap-2 p-4 cursor-pointer transition w-full rounded-tr-[10px] rounded-br-[10px] ${
                    selectedExperience === index
                      ? "bg-primary text-textLight"
                      : ""
                  }`}
                >
                  <div className="flex flex-col text-left shrink-0">
                    <span className="font-medium">{exp.title}</span>
                    {exp.company && (
                      <span
                        className={`text-xs ${
                          selectedExperience === index
                            ? "opacity-90"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {exp.company}
                      </span>
                    )}
                  </div>
                  {exp.duration && (
                    <span
                      className={`text-[10px] leading-none px-2 py-1 rounded-full border whitespace-nowrap ${
                        selectedExperience === index
                          ? "border-white/30 bg-white/10 text-textLight"
                          : "border-primary/40 bg-primary/10 text-primary"
                      }`}
                    >
                      {exp.duration}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4 md:flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExperience}
              className="p-4 rounded-lg border border-primary/40 shadow-sm overflow-y-auto max-h-[60vh]"
              variants={detailVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <div>
                {experiences[selectedExperience].responsibilities.map(
                  (item, index) => (
                    <p key={index} className="mb-2">
                      {item}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
