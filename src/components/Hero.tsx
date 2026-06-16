import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from '../utils/animations'

interface HeroProps {
  onScrollToContact: () => void
  onScrollToAbout: () => void
}

export const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToAbout }) => {
  const containerVariants = staggerContainer
  const itemVariants = staggerItem

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center py-20 bg-linear-to-br from-primary-blue to-secondary-blue text-white overflow-hidden z-0">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-yellow-400/10 blur-2xl rounded-full animate-float z-[-1]" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 blur-[50px] rounded-full animate-float-delayed z-[-1]" />

      <motion.div
        className="container mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col text-left" variants={fadeInUp}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-linear-to-br from-white to-slate-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.2)]"
            variants={itemVariants}
          >
            Isaac Ogabi
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-accent-gold font-bold mb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            variants={itemVariants}
          >
            Building Engineer | QA/QC Manager | BIM Specialist
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl"
            variants={itemVariants}
          >
            Crafting excellence in construction management with 5+ years of industry expertise
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-linear-to-br from-accent-gold to-yellow-300 text-secondary-blue font-bold rounded-lg shadow-[0_10px_30px_rgba(251,191,36,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(251,191,36,0.4)] relative overflow-hidden group"
              onClick={onScrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute top-0 -left-full w-full h-full bg-white/30 transition-all duration-300 group-hover:left-full z-0" />
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent text-white border-2 border-accent-gold font-bold rounded-lg transition-all duration-300 hover:text-secondary-blue hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(251,191,36,0.3)] relative overflow-hidden group"
              onClick={onScrollToAbout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-linear-to-br from-accent-gold to-yellow-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile visualization with blueprint card */}
        <motion.div
          className="relative h-100 md:h-125 flex items-center justify-center lg:justify-end perspective-[1000px]"
          variants={fadeInRight}
        >
          <motion.div
            className="relative w-full max-w-95 aspect-4/5 bg-linear-to-br from-blue-600/10 to-slate-900/60 border border-accent-gold/25 rounded-xl p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-end gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 blueprint-grid pointer-events-none" />
            
            {/* Blueprint Corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-2 border-accent-gold border-r-0 border-b-0 opacity-60" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-2 border-accent-gold border-l-0 border-t-0 opacity-60" />

            <div className="relative z-10 h-full flex flex-col justify-end gap-3">
              <motion.div
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[1.5px] text-green-400 mb-auto"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                ACTIVE — THE ARK LEGACY
              </motion.div>

              <div className="font-mono text-xs text-white/35 tracking-widest">
                IO / QA-QC / {new Date().getFullYear()}
              </div>

              <div className="font-bold text-3xl md:text-[1.8rem] text-white">
                Building Engineer
              </div>
              
              <div className="text-sm text-accent-gold font-semibold">
                QA/QC Manager · BIM Specialist
              </div>

              <div className="w-full h-px bg-accent-gold/20 my-2" />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-xs text-white/50 tracking-wide">
                  <span>LOCATION</span>
                  <span className="text-white/85 font-semibold">Lagos, Nigeria</span>
                </div>
                <div className="flex justify-between font-mono text-xs text-white/50 tracking-wide">
                  <span>CAPACITY</span>
                  <span className="text-white/85 font-semibold">100,000</span>
                </div>
                <div className="flex justify-between font-mono text-xs text-white/50 tracking-wide">
                  <span>STATUS</span>
                  <span className="text-accent-gold font-semibold">In Progress</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Credentials Footer */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl mt-12 md:mt-16">
        <motion.div
          className="flex flex-wrap items-center gap-4 md:gap-6 pt-6 border-t border-accent-gold/15"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-[1.6rem] font-extrabold text-accent-gold leading-tight">5+</span>
            <span className="text-[0.65rem] md:text-xs text-white/60 uppercase tracking-widest mt-1">Years Experience</span>
          </div>
          <div className="w-px h-8 bg-accent-gold/20" />
          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-[1.6rem] font-extrabold text-accent-gold leading-tight">100K</span>
            <span className="text-[0.65rem] md:text-xs text-white/60 uppercase tracking-widest mt-1">Capacity Project</span>
          </div>
          <div className="w-px h-8 bg-accent-gold/20" />
          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-[1.6rem] font-extrabold text-accent-gold leading-tight">6</span>
            <span className="text-[0.65rem] md:text-xs text-white/60 uppercase tracking-widest mt-1">Certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
