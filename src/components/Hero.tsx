import React from 'react'
import { motion } from 'framer-motion'
import { CountUp } from 'react-countup'
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  staggerItem,
  profileMorphBlob,
  profileGlow,
  countUpContainer,
  countUpNumber,
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

        {/* Profile Image with Circular Frame and Badges */}
        <motion.div
          className="relative h-96 md:h-125 flex items-center justify-center lg:justify-end"
          variants={fadeInRight}
        >
          <motion.div
            className="relative w-64 h-96 md:w-72 md:h-[28rem] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Circular Border */}
            <div className="absolute inset-0 rounded-full border-4 border-accent-gold/30 shadow-[0_0_60px_rgba(251,191,36,0.2)]" />
            
            {/* Dashed Circular Border */}
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-accent-gold/40" />

            {/* Profile Image Circle with Blob Morph */}
            <motion.div 
              className="relative w-64 h-96 md:w-72 md:h-[28rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-accent-gold/20"
              variants={profileMorphBlob}
              animate="animate"
            >
              <img 
                src="/isaac-profile.png" 
                alt="Isaac Ogabi" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-blue/40 to-transparent" />
            </motion.div>
            
            {/* Glow Effect Container */}
            <motion.div
              className="absolute inset-0 rounded-full"
              variants={profileGlow}
              animate="animate"
            />

            {/* Top Right Badge - QA/QC Expert Manager */}
            <motion.div
              className="absolute top-0 right-0 md:top-6 md:right-6 bg-secondary-blue/80 border border-accent-gold/30 rounded-lg px-3 py-2 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-shadow"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-gold" />
                <div className="text-xs font-semibold text-white">
                  <div>QA/QC</div>
                  <div className="text-accent-gold text-[10px]">Expert Manager</div>
                </div>
              </div>
            </motion.div>

            {/* Left Badge - Experience */}
            <motion.div
              className="absolute left-0 bottom-32 md:left-0 md:bottom-40 bg-secondary-blue/80 border border-accent-gold/30 rounded-lg px-3 py-2 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-shadow"
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="text-xs font-semibold text-white">
                  <div className="text-[10px] text-white/70">EXPERIENCE</div>
                  <div className="text-accent-gold">5+ Yrs Exp</div>
                </div>
              </div>
            </motion.div>

            {/* Top Badge - Portfolio */}
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-transparent border border-accent-gold/40 rounded-full px-4 py-2 backdrop-blur-md hover:border-accent-gold/80 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all"
              initial={{ opacity: 0, scale: 0.5, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="text-xs font-bold text-accent-gold tracking-wider whitespace-nowrap">
                PORTFOLIO • ENGINEERING EXCELLENCE
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Credentials Footer with Count-Up Animations */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl mt-12 md:mt-16">
        <motion.div
          className="flex flex-wrap items-center gap-4 md:gap-6 pt-6 border-t border-accent-gold/15"
          variants={countUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="flex flex-col" variants={countUpNumber}>
            <span className="font-mono text-2xl md:text-[1.6rem] font-extrabold text-accent-gold leading-tight">
              <CountUp 
                start={0} 
                end={5} 
                duration={2.5} 
                suffix="+"
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </span>
            <span className="text-[0.65rem] md:text-xs text-white/60 uppercase tracking-widest mt-1">Years Experience</span>
          </motion.div>
          <motion.div className="w-px h-8 bg-accent-gold/20" />
          <motion.div className="flex flex-col" variants={countUpNumber}>
            <span className="font-mono text-2xl md:text-[1.6rem] font-extrabold text-accent-gold leading-tight">
              <CountUp 
                start={0} 
                end={100} 
                duration={2.5}
                suffix="K"
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </span>
            <span className="text-[0.65rem] md:text-xs text-white/60 uppercase tracking-widest mt-1">Capacity Project</span>
          </motion.div>
          <motion.div className="w-px h-8 bg-accent-gold/20" />
          <motion.div className="flex flex-col" variants={countUpNumber}>
            <span className="font-mono text-2xl md:text-[1.6rem] font-extrabold text-accent-gold leading-tight">
              <CountUp 
                start={0} 
                end={6} 
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </span>
            <span className="text-[0.65rem] md:text-xs text-white/60 uppercase tracking-widest mt-1">Certifications</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
