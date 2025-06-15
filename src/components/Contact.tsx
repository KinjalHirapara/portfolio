import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <FaEnvelope className="text-[#64ffda]" />,
    text: "kinjalhirapara25@gmail.com",
  },
  {
    icon: <FaPhone className="text-[#64ffda]" />,
    text: "+64 224154944",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#64ffda]" />,
    text: "Christchurch, Canterbury, New Zealand",
  },
];

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
      className="max-w-5xl mx-auto px-4 h-full flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#64ffda] flex items-center gap-2">
          <span className="numbered-heading"> Get In Touch</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </h2>
      </motion.div>
      <motion.p
        className="mb-8 text-md text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Open to new opportunities, collaborations, or questions — let's talk!
      </motion.p>
      <motion.div
        className="mb-8 space-y-3 text-left w-full max-w-md mx-auto"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {contactItems.map((item, i) => (
          <motion.div
            key={item.text}
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
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
        className="px-4 py-2 rounded border border-[#64ffda] bg-transparent transition
    hover:shadow-[3px_3px_0_0_#64ffda] hover:-translate-x-1 hover:-translate-y-1"
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
