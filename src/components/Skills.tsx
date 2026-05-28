import React, { useState } from 'react'
import {
  FipencelSquareFill,
  CheckCircle,
  HardHat,
  BoxSeam,
  BarChart3,
  Boxes,
} from 'react-bootstrap-icons'
import TypingAnimation from './TypingAnimation'

interface SkillCardProps {
  title: string
  shortDesc: string
  fullDesc: string
  icon: React.ReactNode
}

const SkillCard: React.FC<SkillCardProps> = ({ title, shortDesc, fullDesc, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsExpanded(true)}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:scale-105 cursor-pointer group"
      >
        <div className="text-5xl mb-4 text-accent transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 font-medium">{shortDesc}</p>
        <div className="mt-4 text-accent font-semibold text-sm">
          Click to learn more →
        </div>
      </div>

      {/* Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-4xl font-black text-primary">{title}</h2>
                <p className="text-accent font-semibold mt-1">{shortDesc}</p>
              </div>
              <div className="text-6xl text-accent">{icon}</div>
            </div>

            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-accent to-yellow-300 rounded-full mb-8"></div>

            {/* Content with Typing Animation */}
            <div className="min-h-40 mb-8">
              <TypingAnimation text={fullDesc} speed={20} />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const Skills: React.FC = () => {
  const skills = [
    {
      title: 'BIM Management',
      shortDesc: 'Advanced Building Information Modeling',
      fullDesc:
        'Expert in utilizing cutting-edge BIM technology to coordinate complex construction projects. I manage detailed 3D models, clash detection, and coordination across multiple disciplines including structural, MEP, and architectural systems. This ensures seamless integration of all project components and dramatically reduces on-site conflicts and rework.',
      icon: <FipencelSquareFill />,
    },
    {
      title: 'QA/QC',
      shortDesc: 'Quality Assurance & Control Excellence',
      fullDesc:
        'Comprehensive quality assurance protocols across all project phases. I develop and implement rigorous testing procedures, material inspections, and compliance verification systems. My approach ensures every element meets or exceeds specifications, regulatory standards, and client expectations, resulting in zero-defect project delivery.',
      icon: <CheckCircle />,
    },
    {
      title: 'Site Engineering',
      shortDesc: 'Professional Site Supervision',
      fullDesc:
        'On-site technical coordination and supervision with deep expertise in construction methodology, sequencing, and logistics. I manage site operations, safety compliance, workforce coordination, and real-time problem-solving to keep projects on schedule and within budget while maintaining highest quality standards.',
      icon: <HardHat />,
    },
    {
      title: 'Concrete Design',
      shortDesc: 'Expertise in Concrete Specifications',
      fullDesc:
        'Specialized knowledge of concrete specifications, testing protocols, and quality parameters. I conduct slump tests, compressive strength verification, durability assessments, and material sourcing optimization. My expertise ensures concrete systems perform reliably and meet all engineering requirements for safety and longevity.',
      icon: <BoxSeam />,
    },
    {
      title: 'Project Management',
      shortDesc: 'End-to-End Project Execution',
      fullDesc:
        'Strategic planning and execution of large-scale construction projects from conception through completion. I manage budgets, timelines, stakeholder communications, and resource allocation. My proven track record includes successfully delivering 15+ major projects, from multi-story residential complexes to specialized facilities.',
      icon: <BarChart3 />,
    },
    {
      title: 'Logistics',
      shortDesc: 'Resource Planning & Supply Chain',
      fullDesc:
        'Comprehensive logistics management covering material procurement, supply chain optimization, equipment scheduling, and resource allocation. I coordinate with suppliers, contractors, and consultants to ensure seamless material flow, minimize delays, and optimize project costs without compromising quality or safety.',
      icon: <Boxes />,
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-primary">
          Core Competencies
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Click on any competency to explore detailed information about my expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              shortDesc={skill.shortDesc}
              fullDesc={skill.fullDesc}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
