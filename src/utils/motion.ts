export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeInUp = (currentIndex: number) => {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: (currentIndex: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: currentIndex * 0.5, duration: 0.7, type: "spring" },
    }),
  };
};
