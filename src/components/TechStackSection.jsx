import StackAtmosphere from './StackAtmosphere.jsx'
import StackRingChart from './StackRingChart.jsx'
import { techStackGroups, totalTechCount } from '../constants/techStack.js'

function TechStackSection() {
  return (
    <section className="tech-stack-section" id="tech-stack" data-nav-section="Work">
      <StackAtmosphere />
      <div className="tech-stack-inner">
        <div className="stack-section-heading">
          <p className="stack-eyebrow"><span>02 / 04</span> — THE TOOLKIT</p>
          <h2>Built across<br />the <em>stack.</em></h2>
          <p className="stack-intro">The technologies I use to build, run, and connect digital products.</p>
        </div>

        <div className="stack-chart" aria-label="Circular charts showing each area’s share of the seven technologies in the stack.">
          <div className="chart-caption">TECHNOLOGIES BY AREA <span>{totalTechCount} TOTAL</span></div>
          <div className="stack-ring-grid">
            {techStackGroups.map(({ name, tools }, index) => (
              <StackRingChart key={name} name={name} tools={tools} index={index} total={totalTechCount} />
            ))}
          </div>
          <p className="chart-note">Ring size shows each area’s share of the listed stack. The center shows its tool count.</p>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
