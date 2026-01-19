import React from "react";
import { experiences } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience: React.FC = () => {
  const cardVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="mx-auto px-4 py-[50px] lg:pt-[10px] lg:pb-[0px] flex flex-col"
    >
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
      <div className="flex flex-col gap-4 md:hidden overflow-x-hidden">
        {experiences.map((exp, index) => {
          const direction = index % 2 === 0 ? -60 : 60;
          return (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              className="rounded-lg border border-primary/40 p-4 shadow-sm"
              variants={cardVariants}
              custom={direction}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  {exp.title && (
                    <h3 className="text-lg font-semibold truncate">
                      {exp.title}
                    </h3>
                  )}
                  {exp.company && (
                    <p className="text-sm font-medium text-primary truncate">
                      {exp.company}
                    </p>
                  )}
                  {exp.city && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                      {exp.city}
                    </p>
                  )}
                </div>
                {exp.duration && (
                  <span className="text-[10px] leading-none px-2 py-1 rounded-full border whitespace-nowrap border-primary/40 bg-primary/10 text-primary">
                    {exp.duration}
                  </span>
                )}
              </div>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="relative hidden flex-col gap-6 md:flex overflow-x-hidden">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/40" />
        {experiences.map((exp, index) => {
          const direction = index % 2 === 0 ? -60 : 60;
          const isLeft = index % 2 === 0;
          const showMeta = exp.title || exp.duration || exp.city;
          return (
            <div
              key={`${exp.title}-${exp.company}`}
              className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-6"
            >
              {isLeft ? (
                <>
                  <div className="flex justify-end">
                    <motion.div
                      className="w-full max-w-xl rounded-lg border border-primary/40 p-4 shadow-sm"
                      variants={cardVariants}
                      custom={direction}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  <div className="flex justify-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-light text-primary dark:bg-dark z-[1]">
                      <FaBriefcase className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  {showMeta && (
                    <motion.div
                      className="text-left"
                      variants={cardVariants}
                      custom={direction}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {exp.title && (
                        <div className="text-base font-semibold text-primary">
                          {exp.title}
                        </div>
                      )}
                      {exp.company && (
                        <div className="mt-1 text-sm font-medium text-primary">
                          {exp.company}
                        </div>
                      )}
                      {exp.duration && (
                        <span className="mt-1 inline-flex text-[10px] leading-none px-2 py-1 rounded-full border whitespace-nowrap border-primary/40 bg-primary/10 text-primary">
                          {exp.duration}
                        </span>
                      )}
                      {exp.city && (
                        <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {exp.city}
                        </div>
                      )}
                    </motion.div>
                  )}
                </>
              ) : (
                <>
                  {showMeta && (
                    <motion.div
                      className="text-right"
                      variants={cardVariants}
                      custom={direction}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {exp.title && (
                        <div className="text-base font-semibold text-primary">
                          {exp.title}
                        </div>
                      )}
                      {exp.company && (
                        <div className="mt-1 text-sm font-medium text-primary">
                          {exp.company}
                        </div>
                      )}
                      {exp.duration && (
                        <span className="mt-1 inline-flex text-[10px] leading-none px-2 py-1 rounded-full border whitespace-nowrap border-primary/40 bg-primary/10 text-primary">
                          {exp.duration}
                        </span>
                      )}
                      {exp.city && (
                        <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {exp.city}
                        </div>
                      )}
                    </motion.div>
                  )}
                  <div className="flex justify-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-light text-primary dark:bg-dark z-[1]">
                      <FaBriefcase className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="flex justify-start">
                    <motion.div
                      className="w-full max-w-xl rounded-lg border border-primary/40 p-4 shadow-sm"
                      variants={cardVariants}
                      custom={direction}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
