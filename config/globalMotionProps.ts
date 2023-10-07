export const firstGlobalMotionPropToBeDetermined = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
  },
};

export const secondGlobalMotionPropToBeDetermined = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};
