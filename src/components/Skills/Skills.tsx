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
import { useTypingAnimation } from '../shared/useTypingAnimation'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverLift,
} from '../../utils/animations'
import './Skills.css'

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
        className="skill-card"
        onClick={() => setIsExpanded(true)}
        variants={staggerItem}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="skill-icon"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
          whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
        >
          {icon}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {shortDesc}
        </motion.p>

        <motion.div
          className="skill-card-hover"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Click to expand
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="skill-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="skill-modal"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="modal-close"
                onClick={() => setIsExpanded(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>

              <motion.div
                className="modal-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                {icon}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h2>

              <motion.p
                className="modal-short-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {shortDesc}
              </motion.p>

              <motion.div
                className="modal-full-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {displayedText}
                <span className={displayedText === fullDesc ? 'hidden' : ''}>│</span>
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
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Core Competencies
        </motion.h2>

        <motion.div
          className="skills-grid"
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
