import { motion } from "framer-motion";
import {
  FaCommentDots,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const contactCards = [
  {
    label: "Email",
    value: "kinjalhirapara25@gmail.com",
    icon: <FaEnvelope className="h-4 w-4 text-primary" />,
  },
  {
    label: "Phone",
    value: "+64 224154944",
    icon: <FaPhone className="h-4 w-4 text-primary" />,
  },
  {
    label: "Address",
    value: "Christchurch, Canterbury, New Zealand",
    icon: <FaLocationDot className="h-4 w-4 text-primary" />,
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden px-0 pt-[90px] mobile-landscape-padding justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="pointer-events-none absolute inset-0 bg-dark/70" />
      <div className="relative z-10 grid grid-cols-1 gap-8 px-5 pb-10 pt-6 md:grid-cols-2 md:gap-10 md:px-8 md:pt-8 lg:px-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center"
        >
          <h2 className="numbered-heading uppercase text-2xl md:text-3xl pl-1 font-bold text-primary relative before:content-[''] before:absolute before:left-[-500px] before:bottom-[5px] before:w-[500px] before:h-[2px] before:bg-primary">
            Contact Me
          </h2>
          <h3 className="mt-5 text-2xl font-semibold text-textLight md:text-3xl">
            Let&apos;s Build Something Together
          </h3>
          <p className="mt-3 max-w-xl text-base text-textLight/75 md:text-lg">
            I am open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:kinjalhirapara25@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-dark transition hover:scale-105"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/KinjalHirapara"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-dark transition hover:scale-105"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kinjalhirapara"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-dark transition hover:scale-105"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex items-center justify-center rounded-2xl bg-light px-3 py-3 md:max-w-[420px]"
        >
          <div className="relative z-10 w-full space-y-4 ">
            {contactCards.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-dark">
                      {item.label}
                    </p>
                    <p className="text-xs text-dark/85 md:text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-5 z-20 hidden sm:block">
            <div className="relative h-28 w-36">
              <div className="absolute bottom-0 right-0 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-md">
                <FaCommentDots className="h-12 w-12 text-light" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
