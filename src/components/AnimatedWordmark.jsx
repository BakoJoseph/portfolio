import { motion, useReducedMotion } from 'framer-motion'
import {
  wordmarkInitialReveal,
  wordmarkLetterReveal,
  wordmarkRemainingLetters,
  wordmarkSequence,
} from '../constants/wordmarkAnimation.js'

function AnimatedWordmark() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <a className="wordmark" href="#home" aria-label="Olamide home">
      <motion.span
        className="wordmark-name"
        aria-label="OLAMIDE"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        whileHover="hover"
        variants={wordmarkSequence}
      >
        <motion.span
          className="wordmark-letter wordmark-initial"
          variants={wordmarkInitialReveal}
        >O</motion.span>
        {wordmarkRemainingLetters.map((letter, index) => (
          <motion.span className="wordmark-letter" key={`${letter}-${index}`} variants={wordmarkLetterReveal}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
      <span className="wordmark-caption">Full stack Developer</span>
    </a>
  )
}

export default AnimatedWordmark
