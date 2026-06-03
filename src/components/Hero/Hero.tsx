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
          {/* Animated background circles */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute w-80 h-80 rounded-full border-2 border-accent-gold/20" />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute w-96 h-96 rounded-full border-2 border-primary-blue/20" />
          </motion.div>

          {/* Center profile element with blob morph */}
          <motion.div
            className="relative w-64 h-64 bg-gradient-to-br from-primary-blue via-surface-blue to-secondary-blue flex items-center justify-center shadow-2xl overflow-hidden group"
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            animate={{
              scale: [1, 1.05, 1],
              ...blobMorph.animate,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.08 }}
          >
            {/* Glowing border effect with color shift */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-gold via-primary-blue to-accent-gold opacity-0 group-hover:opacity-100 blur-lg animate-spin-slow transition-opacity duration-300"
              style={{ borderRadius: 'inherit' }}
              animate={{
                backgroundImage: [
                  'linear-gradient(0deg, #FBBF24, #2563EB)',
                  'linear-gradient(90deg, #2563EB, #FBBF24)',
                  'linear-gradient(180deg, #FBBF24, #2563EB)',
                  'linear-gradient(270deg, #2563EB, #FBBF24)',
                  'linear-gradient(360deg, #FBBF24, #2563EB)',
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner circle with content */}
            <motion.div
              className="relative w-64 h-64 bg-gradient-to-br from-secondary-blue to-surface-blue flex items-center justify-center"
              style={{ borderRadius: 'inherit' }}
            >
              <motion.div
                className="text-center text-white"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  className="text-6xl font-bold mb-2"
                  animate={{
                    backgroundImage: [
                      'linear-gradient(135deg, #FBBF24, #fcd34d)',
                      'linear-gradient(135deg, #2563EB, #FBBF24)',
                      'linear-gradient(135deg, #FBBF24, #fcd34d)',
                    ],
                  }}
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  IO
                </motion.div>
                <p className="text-accent-gold/80 font-semibold text-sm">Building Excellence</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute w-4 h-4 bg-accent-gold rounded-full"
              style={{ top: '20%', right: '10%' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute w-3 h-3 bg-primary-blue rounded-full"
              style={{ bottom: '15%', left: '5%' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
