import React from "react";
import { experiences } from "../constants";
import { motion, type Variants } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience: React.FC = () => {
  const cardVariants: Variants = {
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
      className="relative min-h-[100dvh] max-w-6xl mx-auto px-4 py-[60px] lg:py-[30px] flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">
          <span className="numbered-heading">Experience</span>
        </h2>
      </motion.div>

      <div className="mt-4 flex flex-col gap-4 md:hidden overflow-x-hidden">
        {experiences.map((exp) => {
          const direction = 60;
          return (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              className="rounded-lg border border-primary/40 bg-primary/10 p-4 shadow-sm"
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
                  {(exp.company || exp.city) && (
                    <p className="text-sm font-medium text-primary truncate">
                      {[exp.company, exp.city].filter(Boolean).join(" - ")}
                    </p>
                  )}
                  {exp.duration && (
                    <span className="mt-1 inline-flex text-[10px] leading-none px-2 py-1 rounded-full border whitespace-nowrap border-black/15 bg-black/5 text-black/65 dark:border-white/25 dark:bg-white/10 dark:text-white/85">
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 text-base">
                {(exp.summary || exp.learningNote) && (
                  <li className="space-y-2 mb-3 border-b border-primary/20 pb-3 list-none">
                    {exp.summary && (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {exp.summary}
                      </p>
                    )}
                    {exp.learningNote && (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        - {exp.learningNote}
                      </p>
                    )}
                  </li>
                )}
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="relative mt-4 hidden flex-col gap-6 md:flex overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-[minmax(0,0.6fr)_56px_minmax(0,1.4fr)] gap-6">
          <div />
          <div className="flex justify-center">
            <div className="h-full w-px bg-primary/40" />
          </div>
          <div />
        </div>

        {experiences.map((exp) => {
          const direction = 60;
          const showMeta = exp.title || exp.duration || exp.city;
          return (
            <div
              key={`${exp.title}-${exp.company}`}
              className="grid w-full grid-cols-[minmax(0,0.6fr)_56px_minmax(0,1.4fr)] items-start gap-6"
            >
              {showMeta ? (
                <motion.div
                  className="text-left pr-2"
                  variants={cardVariants}
                  custom={direction}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="inline-block">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex gap-3 items-center justify-start">
                        {exp.title && (
                          <div className="text-2xl font-semibold text-primary">
                            {exp.title}
                          </div>
                        )}
                      </div>
                      {(exp.company || exp.city) && (
                        <div className="text-sm font-medium text-dark dark:text-textLight">
                          {[exp.company, exp.city].filter(Boolean).join(" - ")}
                        </div>
                      )}
                      {exp.duration && (
                        <div className="text-[10px] leading-none px-2 py-1 rounded-full border whitespace-nowrap border-black/15 bg-black/5 text-black/65 dark:border-white/25 dark:bg-white/10 dark:text-white/85">
                          {exp.duration}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div />
              )}

              <div className="flex justify-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-light text-primary dark:bg-dark z-[1]">
                  <FaBriefcase className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="flex justify-start">
                <motion.div
                  className="w-full rounded-lg border border-primary/40 bg-primary/10 p-4 shadow-sm"
                  variants={cardVariants}
                  custom={direction}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <ul className="space-y-2 text-base">
                    {(exp.summary || exp.learningNote) && (
                      <li className="space-y-2 mb-3 list-none">
                        {exp.summary && (
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {exp.summary}
                          </p>
                        )}
                        {exp.learningNote && (
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {exp.learningNote}
                          </p>
                        )}
                      </li>
                    )}
                    {exp.responsibilities.map((item, idx) => (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <li key={idx}>{item}</li>
                      </p>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
