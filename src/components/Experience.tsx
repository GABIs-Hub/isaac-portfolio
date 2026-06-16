import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../utils/animations'

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
    <section id="experience" className="py-24 relative overflow-hidden bg-linear-to-br from-secondary-blue to-surface-blue">
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-blue-600/10 blur-[40px] rounded-full animate-float" />
      
      <div className="container mx-auto px-8 max-w-4xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary-blue relative inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-white">Professional Journey</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-accent-gold rounded-sm" />
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-accent-gold/20 to-accent-gold origin-top" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative pl-16 py-8 pr-8 mb-8 rounded-xl transition-all duration-400 ease-out border backdrop-blur-md group ${
                exp.isActive 
                  ? 'bg-linear-to-br from-accent-gold/10 to-blue-600/10 border-accent-gold/40 shadow-[0_10px_30px_rgba(37,99,235,0.1),0_0_20px_rgba(251,191,36,0.1)]' 
                  : 'bg-linear-to-br from-blue-600/10 to-accent-gold/5 border-blue-600/20'
              }`}
              variants={staggerItem}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Highlight background on hover */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent transition-all duration-500 ease-out group-hover:w-full z-0 rounded-xl" />

              <motion.div
                className={`absolute left-[16px] top-10 w-6 h-6 rounded-full border-[3px] z-10 transition-all duration-300 ${
                  exp.isActive 
                    ? 'bg-linear-to-br from-accent-gold to-yellow-300 border-accent-gold shadow-[0_0_20px_rgba(251,191,36,0.6),0_0_0_6px_rgba(251,191,36,0.2)]' 
                    : 'bg-linear-to-br from-primary-blue to-blue-900 border-accent-gold shadow-[0_0_0_6px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4),0_0_0_6px_rgba(37,99,235,0.2)] group-hover:scale-125'
                }`}
                animate={exp.isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={exp.isActive ? { duration: 2, repeat: Infinity } : {}}
              />

              <motion.div
                className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-3 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {exp.date}
              </motion.div>

              <motion.h3
                className="text-white/95 text-xl md:text-2xl font-bold mb-1 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {exp.title}
              </motion.h3>

              <motion.p
                className="text-accent-gold font-bold uppercase tracking-wider text-sm mb-3 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {exp.company}
              </motion.p>

              <motion.p
                className="text-white/80 leading-relaxed text-base relative z-10"
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
