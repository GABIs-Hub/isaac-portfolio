import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
  hoverScale,
} from '../../utils/animations'
import './Experience.css'

interface ExperienceData {
  date: string
  title: string
  company: string
  description: string
  isActive?: boolean
}

const experienceData: ExperienceData[] = [
  {
    date: 'Oct 2023 - Present',
    title: 'Quality Control Manager',
    company: 'Advanced Engineering Consultants',
    description: 'Leading QA/QC operations and ensuring compliance across all project phases',
    isActive: true
  },
  {
    date: 'May 2021 - Sep 2023',
    title: 'Assistant Manager, Quality Control',
    company: 'Advanced Engineering Consultants',
    description: 'Managed quality assurance teams and implementation of control protocols'
  },
  {
    date: 'Jul 2020 - Dec 2020',
    title: 'Building Engineer / Site Engineer',
    company: 'SDS Construction Company',
    description: 'Site supervision and technical coordination of construction activities'
  },
  {
    date: '2015 - 2020',
    title: 'Graduate Trainee & Industrial Placements',
    company: 'Various Construction Firms',
    description: 'Hands-on training across multiple construction projects and phases'
  }
]

export const Experience: React.FC = () => {
  const containerVariants = staggerContainer

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Professional Journey
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${exp.isActive ? 'active' : ''}`}
              variants={staggerItem}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="experience-dot"
                animate={exp.isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={exp.isActive ? { duration: 2, repeat: Infinity } : {}}
                {...hoverScale}
              />

              <motion.div
                className="experience-date"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {exp.date}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {exp.title}
              </motion.h3>

              <motion.p
                className="experience-company"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {exp.company}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                {exp.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
