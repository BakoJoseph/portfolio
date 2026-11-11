import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TiThMenu } from 'react-icons/ti'
import { RiCloseLine } from 'react-icons/ri'
import { PiChatTeardropDots } from 'react-icons/pi'
import AnimatedWordmark from './AnimatedWordmark.jsx'
import { navigationItems } from '../constants/navigationItems.js'

function Navigation() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-nav-section]')]
    if (!sections.length) return undefined

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.5
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= marker && bounds.bottom > marker
      })

      if (currentSection) setActive(currentSection.dataset.navSection)
    }

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    })

    sections.forEach((section) => observer.observe(section))
    updateActiveSection()

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={`topbar ${menuOpen ? 'mobile-nav-open' : ''}`}>
      <AnimatedWordmark />
      <nav className="nav-dock" aria-label="Main navigation">
        {navigationItems.map(({ label, href, icon: Icon }) => (
          <a
            className={`nav-item ${active === label ? 'is-active' : ''}`}
            key={label}
            href={href}
            onClick={(event) => {
              if (document.querySelector(href)) setActive(label)
              else event.preventDefault()
              setMenuOpen(false)
            }}
            aria-current={active === label ? 'page' : undefined}
          >
            {active === label && (
              <motion.span
                className="active-pill"
                layoutId="active-pill"
                transition={{ type: 'spring', stiffness: 180, damping: 26, mass: 1.15 }}
              />
            )}
            <Icon className="nav-icon" aria-hidden="true" />
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </nav>
      <a className="contact-link" href="#contact">
        Let’s talk <PiChatTeardropDots aria-hidden="true" />
      </a>
      <motion.button
        className="mobile-menu"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        whileTap={{ scale: 0.9, rotate: menuOpen ? -8 : 8 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={menuOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 35, scale: 0.7 }}
            transition={{ duration: 0.18 }}
          >
            {menuOpen ? <RiCloseLine /> : <TiThMenu />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-navigation"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12, scale: 0.96, transformOrigin: 'top right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-navigation-brand"><span>O</span> OLAMIDE</div>
            <div className="mobile-navigation-links">
              {navigationItems.map(({ label, href, icon: Icon }, index) => (
                <motion.a
                  className={`mobile-navigation-link ${active === label ? 'is-active' : ''}`}
                  key={label}
                  href={href}
                  onClick={(event) => {
                    if (document.querySelector(href)) setActive(label)
                    else event.preventDefault()
                    setMenuOpen(false)
                  }}
                  aria-current={active === label ? 'page' : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + index * 0.055, duration: 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <Icon aria-hidden="true" />
                  <span>{label === 'Work' ? 'Projects' : label}</span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
