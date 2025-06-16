import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import profileImg from "../assets/profile.jpg";

const Home: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-[60px] py-[50px] lg:px-4 lg:py-[50px] flex flex-col justify-center mobile-landscape-padding">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-2 items-center md:items-start">
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp(0)}
          >
            <h1 className="text-lg md:text-xl font-mono mb-2 text-textDark dark:text-textLight">
              Hi, my name is
            </h1>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp(1)}
            className="text-3xl md:text-7xl font-bold text-primary"
          >
            Kinjal Hirapara.
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp(2)}
            className="text-4xl md:text-4xl font-semibold text-textDark dark:text-textLight"
          >
            I build things for the web.
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp(3)}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            I design and develop modern, high-performance user interfaces using
            Angular, React, and other front-end technologies. I specialize in
            writing clean, maintainable code and integrating APIs to deliver
            responsive, user-friendly web experiences.
          </motion.div>
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp(4)}
          >
            <a
              href="../assets/Kinjal_Software_developer_Resume.pdf"
              download="Kinjal_Software_developer_Resume"
              target="_blank"
              className="inline-block px-6 py-2 rounded border-2 border-primary bg-transparent text-primary font-semibold transition  hover:shadow-[3px_3px_0_0_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1"
            >
              Download CV
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative w-full max-w-[300px] h-[300px] mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          }}
        >
          <div className="h-[90%] absolute inset-0 transform -translate-x-2 sm:-translate-x-4 translate-y-1 sm:translate-y-2 rotate-[-4deg] bg-gradient-to-tr from-secondary to-accent rounded-bl-[60px] sm:rounded-bl-[100px] z-0"></div>
          <div className="relative w-full h-full p-[2px] rounded-bl-[60px] sm:rounded-bl-[100px] z-10 top-[-5px]">
            <div className="w-full h-full overflow-hidden rounded-bl-[60px] sm:rounded-bl-[100px]">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
