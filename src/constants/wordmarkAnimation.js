export const wordmarkRemainingLetters = 'LAMIDE'.split('')

export const wordmarkSequence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.42,
      staggerChildren: 0.085,
    },
  },
  hover: {
    transition: { staggerChildren: 0.035 },
  },
}

export const wordmarkLetterReveal = {
  hidden: { opacity: 0, x: -5, clipPath: 'inset(0 100% 0 0)', filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: 'inset(0 0% 0 0)',
    filter: 'blur(0px)',
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -4,
    color: '#b99aff',
    transition: { type: 'spring', stiffness: 600, damping: 18 },
  },
}

export const wordmarkInitialReveal = {
  hidden: { opacity: 0, scale: 0.05, rotate: -18, y: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { type: 'spring', stiffness: 520, damping: 17 },
  },
  hover: {
    y: -4,
    color: '#b99aff',
    transition: { type: 'spring', stiffness: 600, damping: 18 },
  },
}
