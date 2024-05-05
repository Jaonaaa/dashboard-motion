export const variantContainerStag = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const variantItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // transition: {
    //   ease: "easeInOut",
    // },
  },
};

export const variantLineSlide = {
  hidden: { y: "1rem", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      // duration: 0.5,
    },
  },
};

export const variantLineSlideToRight = {
  hidden: { x: "-5rem", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      // duration: 0.5,
    },
  },
};
