import React, { useState } from 'react'
import {
  Diagram3,
  CheckCircle,
  Shield,
  Box,
  BarChart,
  Boxes
} from 'react-bootstrap-icons'
import { useTypingAnimation } from '../shared/useTypingAnimation'
import './Skills.css'

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  shortDesc: string
  fullDesc: string
}

export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  shortDesc,
  fullDesc
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { displayedText } = useTypingAnimation(isExpanded ? fullDesc : '', 40)

  return (
    <>
      <div
        className="skill-card"
        onClick={() => setIsExpanded(true)}
      >
        <div className="skill-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{shortDesc}</p>
        <div className="skill-card-hover">Click to expand</div>
      </div>

      {isExpanded && (
        <div className="skill-modal-overlay" onClick={() => setIsExpanded(false)}>
          <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsExpanded(false)}
            >
              ✕
            </button>
            <div className="modal-icon">{icon}</div>
            <h2>{title}</h2>
            <p className="modal-short-desc">{shortDesc}</p>
            <div className="modal-full-desc">
              {displayedText}
              <span className={displayedText === fullDesc ? 'hidden' : ''}>│</span>
            </div>
          </div>
        </div>
      )}
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
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
