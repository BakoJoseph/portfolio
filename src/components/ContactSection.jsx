import { motion } from 'framer-motion'
import { SiGithub, SiInstagram, SiX } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import { contactLinks } from '../constants/contactLinks.js'
import { IoLink } from "react-icons/io5";
import { BsCaretUp } from "react-icons/bs";

const contactIcons = {
  github: SiGithub,
  x: SiX,
  instagram: SiInstagram,
  linkedin: FaLinkedinIn,
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" data-nav-section="Contact">
      <motion.div
        className="contact-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p className="contact-eyebrow" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>05 — LET’S MAKE SOMETHING</motion.p>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 35, filter: 'blur(12px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }}>
          Have an idea?<br /><span>Let’s build it.</span>
        </motion.h2>
        <motion.p className="contact-description" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          I’m always up for a thoughtful conversation about a project, an opportunity, or an interesting idea.
        </motion.p>
        <motion.a
          className="contact-cta"
          href={contactLinks.find(({ icon }) => icon === 'email')?.href}
          variants={{ hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 17 } } }}
          whileHover={{ scale: 1.04, x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          Start a conversation <IoLink aria-hidden="true" />
        </motion.a>
        <motion.div
          className="contact-socials"
          aria-label="Social and contact links"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }}
        >
          {contactLinks.map(({ label, href, icon }) => {
            const Icon = contactIcons[icon]
            return (
              <motion.a
                className="contact-social"
                href={href}
                key={label}
                target={icon === 'email' ? undefined : '_blank'}
                rel={icon === 'email' ? undefined : 'noreferrer'}
                aria-label={label}
                variants={{ hidden: { opacity: 0, y: 18, scale: 0.85 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 190, damping: 16 } } }}
                whileHover={{ y: -6, scale: 1.08, rotate: icon === 'email' ? 0 : -4 }}
                whileTap={{ scale: 0.94 }}
              >
                <Icon aria-hidden="true" />
              </motion.a>
            )
          })}
        </motion.div>
        <motion.footer className="contact-footer" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}>
          <span>OLAMIDE <i>© {new Date().getFullYear()}</i></span>
          <a href="#home">BACK TO TOP <BsCaretUp /></a>
        </motion.footer>
      </motion.div>
    </section>
  )
}

export default ContactSection
