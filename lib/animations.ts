export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  viewport: { once: true, amount: 0.2 },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const slideInFromLeft = (delay = 0) => ({
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
});

export const slideInFromRight = (delay = 0) => ({
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
});

export const pulseAnimation = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 2, repeat: Infinity },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
};

export const tapScale = {
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
};
