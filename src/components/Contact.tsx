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
      className="gap-8 max-w-6xl mx-auto px-4 py-[60px] lg:py-[30px] h-auto lg:h-full flex flex-col items-center justify-center mobile-landscape-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-center">
          <span className="numbered-heading">Contact</span>
        </h2>
      </motion.div>
      {/* <motion.p
        className="text-md text-textDark dark:text-textLight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Open to new opportunities, collaborations, or questions - let's talk!
      </motion.p> */}
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
    </section>
  );
};
export default Contact;
