import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInRight,
  buttonHover,
  buttonGoldHover,
  staggerContainer,
  staggerItem,
  floating,
  blobMorph,
} from '../../utils/animations'
import './Hero.css'

interface HeroProps {
  onScrollToContact: () => void
  onScrollToAbout: () => void
}

export const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToAbout }) => {
  const containerVariants = staggerContainer

  const itemVariants = staggerItem

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={fadeInUp}>
          <motion.h1
            className="hero-title"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Isaac Ogabi
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Building Engineer | QA/QC Manager | BIM Specialist
          </motion.p>

          <motion.p
            className="hero-description"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Crafting excellence in construction management with 5+ years of industry expertise
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="btn-primary"
              onClick={onScrollToContact}
              variants={buttonGoldHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Get In Touch
            </motion.button>

            <motion.button
              className="btn-secondary"
              onClick={onScrollToAbout}
              variants={buttonHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile visualization with animated elements */}
        <motion.div
            className="hero-visual"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="blueprint-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="blueprint-grid" />
              <div className="blueprint-corner blueprint-corner-tl" />
              <div className="blueprint-corner blueprint-corner-br" />

              <div className="blueprint-content">
                <motion.div
                  className="blueprint-status"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="status-dot" />
                  ACTIVE — THE ARK LEGACY
                </motion.div>

                <div className="blueprint-id">IO / QA-QC / 2026</div>

                <div className="blueprint-label">Building Engineer</div>
                <div className="blueprint-sublabel">QA/QC Manager · BIM Specialist</div>

                <div className="blueprint-divider" />

                <div className="blueprint-meta">
                  <div className="meta-row">
                    <span>LOCATION</span>
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="meta-row">
                    <span>CAPACITY</span>
                    <span>100,000</span>
                  </div>
                  <div className="meta-row">
                    <span>STATUS</span>
                    <span className="meta-active">In Progress</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
      </motion.div>
      <motion.div
        className="hero-credentials"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="credential-badge">
          <span className="credential-number">5+</span>
          <span className="credential-label">Years Experience</span>
        </div>
        <div className="credential-divider" />
        <div className="credential-badge">
          <span className="credential-number">100K</span>
          <span className="credential-label">Capacity Project</span>
        </div>
        <div className="credential-divider" />
        <div className="credential-badge">
          <span className="credential-number">6</span>
          <span className="credential-label">Certifications</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
