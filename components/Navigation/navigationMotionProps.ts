export const navigationMotionProps = {
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
    y: -10,
  },
  initial: {
    opacity: 0,
    y: -10,
  },
};
