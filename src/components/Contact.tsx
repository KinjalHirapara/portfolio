import { motion } from "framer-motion";
import { contactdetails } from "../constants";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="gap-8 max-w-5xl mx-auto px-4 py-[50px] lg:py-[10px] h-auto lg:h-full flex flex-col items-center justify-center mobile-landscape-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-primary flex items-center gap-2">
          <span className="numbered-heading"> Get In Touch</span>
          <span className="flex-1 h-px bg-primary"></span>
        </h2>
      </motion.div>
      <motion.p
        className="text-md text-textDark dark:text-textLight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Open to new opportunities, collaborations, or questions — let's talk!
      </motion.p>
      <motion.div
        className="space-y-3 text-left w-full max-w-md mx-auto"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {contactdetails.map((item) => (
          <motion.div
            key={item.text}
            className="flex items-center gap-3 text-textDark dark:text-textLight"
            variants={itemVariants}
          >
            {item.icon}
            <span className="font-medium">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="px-4 py-2 rounded border-2 border-primary bg-transparent transition
    hover:shadow-[3px_3px_0_0_var(--color-primary)] hover:-translate-x-1 hover:-translate-y-1"
      >
        <a
          href="mailto:kinjalhirapara25@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};
export default Contact;
