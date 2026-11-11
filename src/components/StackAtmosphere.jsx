import { motion, useReducedMotion } from 'framer-motion'
import { stackOrbitSettings } from '../constants/stackAtmosphere.js'

function StackAtmosphere() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="stack-atmosphere" aria-hidden="true">
      {stackOrbitSettings.map(({ className, duration, direction, delay }) => (
        <motion.div
          className={`stack-orbit ${className}`}
          key={className}
          animate={reduceMotion ? undefined : { rotate: direction * 360 }}
          transition={reduceMotion ? undefined : { duration, repeat: Infinity, ease: 'linear', delay }}
        >
          <span className="stack-orbit-point" />
        </motion.div>
      ))}
      <motion.span
        className="stack-atmosphere-dot stack-dot-one"
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={reduceMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="stack-atmosphere-dot stack-dot-two"
        animate={reduceMotion ? undefined : { opacity: [0.15, 0.6, 0.15], scale: [1, 0.75, 1] }}
        transition={reduceMotion ? undefined : { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </div>
  )
}

export default StackAtmosphere
