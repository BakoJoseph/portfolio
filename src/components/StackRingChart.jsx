import { useEffect, useRef } from 'react'
import {
  animate,
  motion,
  useAnimationControls,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import { stackChartRadius, stackChartViewBoxSize } from '../constants/techStack.js'

function StackRingChart({ name, tools, index, total }) {
  const count = tools.length
  const share = count / total
  const reduceMotion = useReducedMotion()
  const chartRef = useRef(null)
  const isInView = useInView(chartRef, { once: false, amount: 0.35 })
  const ringControls = useAnimationControls()
  const countValue = useMotionValue(0)
  const displayedCount = useTransform(countValue, (value) => String(Math.round(value)).padStart(2, '0'))

  useEffect(() => {
    if (!isInView) {
      ringControls.set({ pathLength: 0 })
      countValue.set(0)
      return undefined
    }

    if (reduceMotion) {
      ringControls.set({ pathLength: share })
      countValue.set(count)
      return undefined
    }

    ringControls.start({
      pathLength: share,
      transition: { duration: 1.35, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] },
    })
    const countAnimation = animate(countValue, count, {
      duration: 1.1,
      delay: 0.12 + index * 0.14,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => {
      ringControls.stop()
      countAnimation.stop()
    }
  }, [count, countValue, index, isInView, reduceMotion, ringControls, share])

  return (
    <motion.div
      className={`stack-ring-card stack-ring-${index + 1}`}
      ref={chartRef}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: isInView || reduceMotion ? 1 : 0, y: isInView || reduceMotion ? 0 : 24 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stack-ring-visual" role="img" aria-label={`${name}: ${count} of ${total} technologies`}>
        <svg className="stack-ring" viewBox={`0 0 ${stackChartViewBoxSize} ${stackChartViewBoxSize}`} aria-hidden="true">
          <circle className="stack-ring-track" cx={stackChartViewBoxSize / 2} cy={stackChartViewBoxSize / 2} r={stackChartRadius} />
          <motion.circle
            className="stack-ring-fill"
            cx={stackChartViewBoxSize / 2}
            cy={stackChartViewBoxSize / 2}
            r={stackChartRadius}
            pathLength={1}
            initial={{ pathLength: 0 }}
            animate={ringControls}
          />
        </svg>
        <span className="stack-ring-count"><motion.span>{displayedCount}</motion.span><small>TOOLS</small></span>
      </div>
      <h3 className="stack-ring-title">{name}</h3>
      <div className="stack-tool-list">
        {tools.map(({ name: toolName, icon: ToolIcon, color }) => (
          <span className="stack-tool" key={toolName}>
            <ToolIcon style={{ color }} aria-hidden="true" />
            {toolName}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default StackRingChart
