import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectCards } from '../constants/projects.js'

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projectCards[activeIndex]
  const sideProjects = [
    projectCards[(activeIndex + 1) % projectCards.length],
    projectCards[(activeIndex + 2) % projectCards.length],
  ]

  return (
    <section className="projects-section" id="projects" data-nav-section="Work">
      <motion.div
        className="projects-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="projects-heading">
          <p className="projects-eyebrow"><span>03 / 04</span> — PROJECTS</p>
          <h2>Selected work</h2>
        </header>

        <div className="project-gallery" aria-label="Selected projects">
          <AnimatePresence mode="wait">
            <motion.article
              className="project-feature"
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
              tabIndex={activeProject.link ? undefined : 0}
            >
              {activeProject.link ? (
                <a
                  className="project-image-link"
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${activeProject.title} project`}
                >
                  <img src={activeProject.image} alt="" loading="lazy" />
                </a>
              ) : (
                <img src={activeProject.image} alt="" loading="lazy" />
              )}
              <div className="project-feature-copy">
                <span className="project-category">{activeProject.category}</span>
                <div className="project-feature-title-row">
                  <div>
                    <h3>{activeProject.title}</h3>
                    <p>{activeProject.description}</p>
                  </div>
                  <span className="project-counter">{activeProject.number}<i> / {String(projectCards.length).padStart(2, '0')}</i></span>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="project-thumbnails">
            {sideProjects.map((project, index) => (
              <motion.button
                className="project-thumbnail"
                key={project.id}
                type="button"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ scale: 1.025 }}
                onClick={() => setActiveIndex(projectCards.findIndex(({ id }) => id === project.id))}
                aria-label={`Feature ${project.title}: ${project.category}`}
              >
                <img src={project.image} alt="" loading="lazy" />
                <span className="project-thumbnail-copy">
                  <i>{project.number}</i>
                  <strong>{project.title}</strong>
                  <small>{project.category}</small>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection
