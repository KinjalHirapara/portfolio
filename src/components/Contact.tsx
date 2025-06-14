import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-4 h-full flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#64ffda] flex items-center gap-2">
        <span className="numbered-heading"> Get In Touch</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>
      <p className="mb-8 text-md text-gray-700 dark:text-gray-300">
        Open to new opportunities, collaborations, or questions — let's talk!
      </p>
      <div className="mb-8 space-y-3 text-left w-full max-w-md mx-auto">
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaEnvelope className="text-[#64ffda]" />
          <span className="font-medium">kinjalhirapara25@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaPhone className="text-[#64ffda]" />
          <span className="font-medium">+64 224154944</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaMapMarkerAlt className="text-[#64ffda]" />
          <span className="font-medium">
            Christchurch, Canterbury, New Zealand
          </span>
        </div>
      </div>
      <a
        className="px-4 py-2 rounded border border-[#64ffda] bg-transparent transition
    hover:shadow-[3px_3px_0_0_#64ffda] hover:-translate-x-1 hover:-translate-y-1"
        href="mailto:kinjalhirapara25@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
};
export default Contact;
