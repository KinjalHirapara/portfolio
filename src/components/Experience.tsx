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
        <div className="shrink-0">
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
                  className={`flex items-center gap-2 p-4 cursor-pointer transition w-full ${
                    selectedExperience === index
                      ? "bg-primary text-textLight"
                      : ""
                  }`}
                >
                  {exp.title}
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
              <div className="flex gap-2 justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {experiences[selectedExperience].company}
                  </h3>
                  <p className="text-gray-500">
                    {experiences[selectedExperience].city}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    {experiences[selectedExperience].duration}
                  </p>
                </div>
              </div>

              <div className="mt-2">
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
