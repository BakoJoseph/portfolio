import { motion } from 'framer-motion'
import { aboutContent } from '../constants/about.js'

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
}

function AboutSection() {
  return (
    <section className="about-section" id="about" data-nav-section="About">
      <div className="about-inner">
        <motion.div
          className="about-copy"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p className="about-eyebrow" variants={reveal}><span>04</span> — THE PERSON BEHIND THE PIXELS</motion.p>
          <motion.h2 variants={reveal}>{aboutContent.title}</motion.h2>
          {aboutContent.paragraphs.map((paragraph) => (
            <motion.p className="about-paragraph" key={paragraph} variants={reveal}>{paragraph}</motion.p>
          ))}
          <motion.div className="about-disciplines" variants={reveal}>
            {aboutContent.disciplines.map((discipline, index) => (
              <span key={discipline}><i>0{index + 1}</i>{discipline}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.86, rotate: 5, y: 42 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="about-portrait-frame" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <img src={aboutContent.portrait} alt="Olamide, a developer based in Lagos, Nigeria" loading="lazy" />
            <span className="about-portrait-tag">OLAMIDE <i>／ LAGOS, NG</i></span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
