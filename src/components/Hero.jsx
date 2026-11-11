import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import TechnologyMarks from './TechnologyMarks.jsx'
import { IoLink } from "react-icons/io5";
import { developerCards } from '../constants/developerCards.js'
import { developerCardPositions } from '../constants/developerCardPositions.js'

function Hero() {
  const [cardOrder, setCardOrder] = useState(developerCards.map(({ id }) => id))
  const orderedCards = cardOrder.map((id) => developerCards.find((card) => card.id === id))

  function shuffleCards() {
    setCardOrder((current) => [...current.slice(1), current[0]])
  }

  return (
    <section className="hero hero-cards" id="home" data-nav-section="Home">
      <TechnologyMarks />
      <div className="hero-copy">
        <p className="eyebrow"><span>OLAMIDE</span> — DEVELOPER / LAGOS, NG</p>
        <h1>Making the web<br />feel more <em>human.</em></h1>
        <p className="hero-description">
          I build full-stack web experiences, from polished interfaces to dependable back-end systems and data.
        </p>
        <a href="#contact" className="hero-contact">Get in touch <span><IoLink /></span></a>
      </div>

      <div className="card-side">
        <div className="developer-card-stack" aria-label="Developer profile cards. Activate the top card to cycle through the stack.">
          {orderedCards.map((card, index) => {
            const Icon = card.icon
            const position = developerCardPositions[index]

            return (
              <motion.button
                className={`developer-card ${card.theme}`}
                key={card.id}
                initial={{ opacity: 0, y: 90, rotate: position.rotate + 10, scale: position.scale - 0.08 }}
                animate={{ ...position, opacity: 1 }}
                whileHover={{ y: position.y - 9, scale: position.scale + 0.015 }}
                transition={{ type: 'spring', stiffness: 145, damping: 20, delay: index * 0.09 }}
                style={{ zIndex: orderedCards.length - index }}
                onClick={shuffleCards}
                aria-label={`${card.label}: ${card.title} ${card.description}. Click to shuffle the card stack.`}
                aria-pressed={index === 0}
              >
                <span className="card-topline"><span>{card.label}</span><Icon aria-hidden="true" /></span>
                <span className="card-number">{card.number}<span> / 04</span></span>
                <span className="card-copy">
                  <span className="card-title">{card.title}</span>
                  <span className="card-description">{card.description}</span>
                </span>
                <span className="card-footer">
                  <span className="card-tags">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
                  <span className="card-action"><IoLink aria-hidden="true" /></span>
                </span>
              </motion.button>
            )
          })}
        </div>
        <motion.p className="card-hint" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <span className="hint-line" /> CLICK A CARD TO SHUFFLE <span className="hint-line" />
        </motion.p>
      </div>
      <div className="hero-index">01 — 04 <span>PROFILE / SELECT A CARD</span></div>
    </section>
  )
}

export default Hero
