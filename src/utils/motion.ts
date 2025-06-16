import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 1,
      type: "spring",
    },
  }),
};

export const hexVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: custom * 0.12, type: "spring", stiffness: 120 },
  }),
};

export const detailVariants = () => {
  return {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };
};
