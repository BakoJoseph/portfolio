import { motion, useReducedMotion } from 'framer-motion'
import { technologyMarks } from '../constants/technologyMarks.js'

function TechnologyMarks() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="technology-marks" aria-hidden="true">
      {technologyMarks.map(({ name, icon: Icon, color, className }, index) => (
        <motion.span
          className={`technology-mark ${className}`}
          key={name}
          style={{ color }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.65 }}
          animate={reduceMotion
            ? { opacity: 0.48, scale: 1 }
            : { opacity: [0.28, 0.64, 0.34], scale: [0.96, 1, 0.98], y: [0, -9, 0], rotate: [-3, 2, -3] }}
          transition={reduceMotion
            ? { duration: 0 }
            : { duration: 4.6 + (index % 3) * 0.7, delay: 0.35 + index * 0.22, repeat: Infinity, ease: 'easeInOut' }}
          title={name}
        >
          <Icon />
        </motion.span>
      ))}
    </div>
  )
}

export default TechnologyMarks
