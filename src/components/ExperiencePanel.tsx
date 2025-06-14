import React, { useState } from "react";
import { experiences } from "../constants/index";

const ExperiencePanel: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section className="max-w-5xl mx-auto px-4 h-full flex flex-col">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#64ffda] flex items-center gap-2">
        <span className="numbered-heading"> Where I've Worked</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="shrink-0">
          <ul className="border-s-1">
            {experiences.map((exp, index) => (
              <li key={exp.title} onClick={() => setSelectedExperience(index)}>
                <button
                  className={` p-4 cursor-pointer -ml-[3px] transition hover:bg-[#112240] ${
                    selectedExperience === index
                      ? "border-s-[5px]"
                      : "border-s-[5px] border-transparent"
                  }`}
                >
                  {exp.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:pl-1">
          <div className="p-4">
            <h3 className="text-lg font-semibold">
              {experiences[selectedExperience].title}
            </h3>
            <p className="text-gray-500">
              {experiences[selectedExperience].company}
            </p>
            <p className="text-sm text-gray-400">
              {experiences[selectedExperience].duration}
            </p>
            <p className="mt-2">
              {experiences[selectedExperience].responsibilities}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePanel;
