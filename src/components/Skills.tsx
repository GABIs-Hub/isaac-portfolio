import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Diagram3,
  CheckCircle,
  Shield,
  Box,
  BarChart,
  Boxes
} from 'react-bootstrap-icons'
import { useTypingAnimation } from './shared/useTypingAnimation'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../utils/animations'

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  shortDesc: string
  fullDesc: string
  index: number
}

export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  shortDesc,
  fullDesc,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { displayedText } = useTypingAnimation(isExpanded ? fullDesc : '', 40)

  return (
    <>
      <motion.div
        className="relative p-10 rounded-2xl bg-linear-to-br from-blue-600/10 to-accent-gold/5 backdrop-blur-md border border-blue-600/20 overflow-hidden text-center cursor-pointer group transition-all duration-400 hover:border-accent-gold/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2),0_0_30px_rgba(251,191,36,0.1)]"
        onClick={() => setIsExpanded(true)}
        variants={staggerItem}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-accent-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

        <motion.div
          className="flex justify-center text-5xl mb-6 bg-gradient-to-br from-accent-gold to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
          whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-white/95 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-white/70 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {shortDesc}
        </motion.p>

        <motion.div
          className="text-sm font-semibold text-accent-gold uppercase tracking-wider mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Click to expand
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl p-8 md:p-12 rounded-[20px] bg-linear-to-br from-secondary-blue to-surface-blue border border-blue-600/30 shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(37,99,235,0.2)] max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

              <motion.button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-600/30 text-accent-gold text-xl cursor-pointer transition-all duration-300 hover:bg-accent-gold/20 hover:border-accent-gold hover:rotate-90"
                onClick={() => setIsExpanded(false)}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>

              <motion.div
                className="text-6xl text-center bg-gradient-to-br from-accent-gold to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] mb-6 mx-auto flex justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                {icon}
              </motion.div>

              <motion.h2
                className="text-3xl font-bold text-white/95 mb-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h2>

              <motion.p
                className="text-accent-gold font-semibold text-base uppercase tracking-wider mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {shortDesc}
              </motion.p>

              <motion.div
                className="text-white/80 leading-relaxed text-base min-h-[100px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {displayedText}
                <span className={`inline-block ml-0.5 text-accent-gold animate-pulse ${displayedText === fullDesc ? 'hidden' : ''}`}>│</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const skillsData = [
  {
    icon: <Diagram3 size={40} />,
    title: 'BIM Management',
    shortDesc: 'Advanced Building Information Modeling',
    fullDesc: 'Expert in sophisticated BIM (Building Information Modeling) processes for complex construction projects. I leverage BIM technology to enhance coordination, reduce errors, and improve project efficiency across all phases from design through construction completion.'
  },
  {
    icon: <CheckCircle size={40} />,
    title: 'QA/QC',
    shortDesc: 'Quality assurance and control',
    fullDesc: 'Comprehensive quality assurance and quality control expertise across all project phases. I implement rigorous testing protocols, inspection procedures, and compliance standards to ensure construction meets or exceeds specifications and regulatory requirements.'
  },
  {
    icon: <Shield size={40} />,
    title: 'Site Engineering',
    shortDesc: 'Professional site supervision',
    fullDesc: 'Expert site supervision and management with strong technical coordination capabilities. I oversee day-to-day construction activities, manage site teams, coordinate with stakeholders, and ensure all work proceeds according to specifications and schedules.'
  },
  {
    icon: <Box size={40} />,
    title: 'Concrete Design',
    shortDesc: 'Expertise in concrete specifications',
    fullDesc: 'Specialized knowledge in concrete material design, specifications, and testing. I manage concrete procurement, oversee field testing, monitor curing processes, and ensure concrete quality meets design requirements and building codes.'
  },
  {
    icon: <BarChart size={40} />,
    title: 'Project Management',
    shortDesc: 'End-to-end project planning',
    fullDesc: 'Complete project management expertise from initial planning through successful delivery. I develop detailed project schedules, manage timelines, coordinate resources, and keep stakeholders informed throughout all project phases.'
  },
  {
    icon: <Boxes size={40} />,
    title: 'Logistics',
    shortDesc: 'Resource planning and supply chain',
    fullDesc: 'Strategic resource planning and supply chain management expertise. I coordinate material procurement, manage inventory, optimize delivery schedules, and ensure all resources are available when needed for seamless project execution.'
  }
]

export const Skills: React.FC = () => {
  const containerVariants = staggerContainer

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-linear-to-br from-secondary-blue to-surface-blue">
      <div className="absolute -top-48 -right-24 w-[500px] h-[500px] bg-blue-600/10 blur-[40px] rounded-full animate-float z-0" />
      <div className="absolute -bottom-24 left-0 w-[400px] h-[400px] bg-yellow-400/5 blur-[50px] rounded-full animate-float-delayed z-0" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary-blue relative inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-white">Core Competencies</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-accent-gold rounded-sm" />
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
