import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverLift,
} from '../../utils/animations'
import './Projects.css'

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
      className="project-card"
      variants={staggerItem}
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="project-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.05 }}
      >
        {header}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.05 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="project-role"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35 + index * 0.05 }}
      >
        {role}
      </motion.p>

      <motion.p
        className="project-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.05 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="project-tags"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45 + index * 0.05 }}
      >
        {tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
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
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
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
