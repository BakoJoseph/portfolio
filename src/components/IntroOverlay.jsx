import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { introRemainingLetters } from '../constants/introAnimation.js'

function IntroOverlay() {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)

  if (reduceMotion || !visible) return null

  return (
    <motion.div
      className="intro-overlay"
      aria-hidden="true"
      initial={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
      animate={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
      transition={{ delay: 2.2, duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setVisible(false)}
    >
      <div className="intro-corner intro-corner-top">PORTFOLIO <span>—</span> 2026</div>
      <div className="intro-center">
        <motion.div
          className="intro-kicker"
          initial={{ opacity: 0, y: 8, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.32em' }}
          transition={{ delay: 0.12, duration: 0.45 }}
        >
          FULL-STACK DEVELOPER
        </motion.div>
        <div className="intro-name" aria-label="Olamide">
          <motion.span
            className="intro-initial"
            initial={{ opacity: 0, scale: 0.1, rotate: -24, filter: 'blur(16px)' }}
            animate={{ opacity: [0, 1, 1], scale: [0.1, 1.24, 1], rotate: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.22, duration: 0.6, times: [0, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
          >O</motion.span>
          {introRemainingLetters.map((letter, index) => (
            <motion.span
              className="intro-letter"
              key={`${letter}-${index}`}
              initial={{ opacity: 0, x: -16, clipPath: 'inset(0 100% 0 0)', filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)', filter: 'blur(0px)' }}
              transition={{ delay: 0.63 + index * 0.105, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className="intro-caret"
            initial={{ opacity: 0, scaleY: 0.2 }}
            animate={{ opacity: [0, 1, 1, 0], scaleY: [0.2, 1, 1, 1] }}
            transition={{ delay: 1.36, duration: 0.52, times: [0, 0.2, 0.7, 1] }}
          />
        </div>
        <motion.div
          className="intro-subline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.48, duration: 0.35 }}
        >
          DESIGN <b>×</b> CODE <b>×</b> EXPERIENCE
        </motion.div>
      </div>
      <div className="intro-corner intro-corner-bottom"><span>06° 27′ N</span> &nbsp; / &nbsp; LAGOS, NG</div>
    </motion.div>
  )
}

export default IntroOverlay
