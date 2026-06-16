import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../utils/animations'

interface ProjectData {
  header: string
  title: string
  role: string
  description: string
  tags: string[]
}

const ProjectCard: React.FC<ProjectData & { index: number }> = ({
  header,
  title,
  role,
  description,
  tags,
  index,
}) => {
  return (
    <motion.div
      className="relative p-8 rounded-2xl bg-linear-to-br from-blue-600/10 to-accent-gold/5 backdrop-blur-md border border-blue-600/20 overflow-hidden group transition-all duration-400 hover:border-accent-gold/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2),0_0_30px_rgba(251,191,36,0.1)]"
      variants={staggerItem}
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Top border hover effect */}
      <div className="absolute top-0 left-0 h-1 bg-linear-to-r from-accent-gold to-yellow-300 w-0 transition-all duration-400 ease-out group-hover:w-full" />
      
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-radial-[at_50%_0%] from-accent-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      <motion.div
        className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-linear-to-br from-primary-blue to-blue-900 text-accent-gold border border-accent-gold/30 mb-6 font-mono transition-shadow duration-300 group-hover:shadow-[0_5px_15px_rgba(251,191,36,0.2)]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.05 }}
      >
        {header}
      </motion.div>

      <motion.h3
        className="text-2xl font-bold text-white/95 mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.05 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-accent-gold font-bold uppercase tracking-wider text-sm mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35 + index * 0.05 }}
      >
        {role}
      </motion.p>

      <motion.p
        className="text-white/80 leading-relaxed mb-8 text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.05 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45 + index * 0.05 }}
      >
        {tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-linear-to-br from-blue-600/20 to-accent-gold/10 text-white/85 border border-accent-gold/30 transition-all duration-300 hover:bg-linear-to-br hover:from-primary-blue hover:to-blue-900 hover:text-accent-gold hover:border-accent-gold hover:shadow-[0_5px_15px_rgba(37,99,235,0.3)] cursor-default"
            whileHover={{ scale: 1.08, y: -2 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

const projectsData: ProjectData[] = [
  {
    header: 'The Ark Legacy',
    title: '100,000 Capacity Church Auditorium',
    role: 'Quality Control Manager | QA/QC Lead',
    description:
      'Leading quality assurance and control operations on this landmark construction project in Ogun State. Managing comprehensive testing protocols and compliance standards.',
    tags: ['#QA/QC', '#Large-Scale', '#Auditorium']
  },
  {
    header: '6-Storey Building',
    title: 'Residential & Commercial Complex',
    role: 'Site Engineer | Construction Manager',
    description:
      'Managed comprehensive site supervision and quality control for a complex multi-story residential and commercial development.',
    tags: ['#Site-Supervision', '#Multi-Story', '#Residential']
  },
  {
    header: 'University Projects',
    title: 'Educational Infrastructure',
    role: 'Site Supervisor | Quality Inspector',
    description:
      'Oversaw construction of postgraduate hostel and health center facilities at premier Nigerian universities.',
    tags: ['#Educational', '#Infrastructure', '#Health-Center']
  }
]

export const Projects: React.FC = () => {
  const containerVariants = staggerContainer

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-linear-to-br from-surface-blue to-secondary-blue">
      <div className="absolute -top-36 -right-24 w-100 h-100 bg-yellow-400/10 blur-2xl rounded-full animate-float z-0" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary-blue relative inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-white">Featured Projects</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-blue-500 to-accent-gold rounded-sm" />
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
