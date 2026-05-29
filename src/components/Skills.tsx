import React, { useState } from 'react'
import {
  Diagram3,
  CheckCircle,
  Wrench,
  BoxSeam,
  BarChart,
  Boxes,
  XLg,
} from 'react-bootstrap-icons'
import TypingAnimation from './TypingAnimation'

interface SkillCardProps {
  title: string
  shortDesc: string
  fullDesc: string
  icon: React.ReactNode
  index: number
}

const SkillCard: React.FC<SkillCardProps> = ({ title, shortDesc, fullDesc, icon, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsExpanded(true)}
        className="relative bg-[#11263c]/60 p-8 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-accent/10 rounded-tr-2xl pointer-events-none group-hover:border-accent/30 transition-colors duration-300"></div>
        
        {/* Hover glow */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="text-4xl mb-5 text-accent transform group-hover:scale-110 transition-transform duration-300 inline-block">
            {icon}
          </div>
          <h3 className="text-xl font-extrabold text-white mb-2 font-syne">{title}</h3>
          <p className="text-gray-400 font-medium text-sm leading-relaxed">{shortDesc}</p>
          <div className="mt-5 text-accent font-bold text-xs uppercase tracking-wider flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            Explore
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="bg-[#0c1e30] border border-white/15 rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-scale-in relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-[80px]"></div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-20 p-2 rounded-full hover:bg-white/10"
            >
              <XLg size={18} />
            </button>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-5xl text-accent mb-4">{icon}</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white font-syne">{title}</h2>
                  <p className="text-accent font-bold mt-2 text-sm uppercase tracking-wider">{shortDesc}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[2px] bg-linear-to-r from-accent via-accent/50 to-transparent rounded-full mb-8"></div>

              {/* Content with Typing Animation */}
              <div className="min-h-40 mb-8">
                <TypingAnimation text={fullDesc} speed={15} />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full bg-accent hover:bg-yellow-500 text-[#0b1b2b] font-extrabold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(240,173,78,0.3)] tracking-wide uppercase text-sm"
              >
                Close
              </button>
            </div>
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
      icon: <Diagram3 size={36} />,
    },
    {
      title: 'QA/QC',
      shortDesc: 'Quality Assurance & Control Excellence',
      fullDesc:
        'Comprehensive quality assurance protocols across all project phases. I develop and implement rigorous testing procedures, material inspections, and compliance verification systems. My approach ensures every element meets or exceeds specifications, regulatory standards, and client expectations, resulting in zero-defect project delivery.',
      icon: <CheckCircle size={36} />,
    },
    {
      title: 'Site Engineering',
      shortDesc: 'Professional Site Supervision',
      fullDesc:
        'On-site technical coordination and supervision with deep expertise in construction methodology, sequencing, and logistics. I manage site operations, safety compliance, workforce coordination, and real-time problem-solving to keep projects on schedule and within budget while maintaining highest quality standards.',
      icon: <Wrench size={36} />,
    },
    {
      title: 'Concrete Design',
      shortDesc: 'Expertise in Concrete Specifications',
      fullDesc:
        'Specialized knowledge of concrete specifications, testing protocols, and quality parameters. I conduct slump tests, compressive strength verification, durability assessments, and material sourcing optimization. My expertise ensures concrete systems perform reliably and meet all engineering requirements for safety and longevity.',
      icon: <BoxSeam size={36} />,
    },
    {
      title: 'Project Management',
      shortDesc: 'End-to-End Project Execution',
      fullDesc:
        'Strategic planning and execution of large-scale construction projects from conception through completion. I manage budgets, timelines, stakeholder communications, and resource allocation. My proven track record includes successfully delivering 15+ major projects, from multi-story residential complexes to specialized facilities.',
      icon: <BarChart size={36} />,
    },
    {
      title: 'Logistics',
      shortDesc: 'Resource Planning & Supply Chain',
      fullDesc:
        'Comprehensive logistics management covering material procurement, supply chain optimization, equipment scheduling, and resource allocation. I coordinate with suppliers, contractors, and consultants to ensure seamless material flow, minimize delays, and optimize project costs without compromising quality or safety.',
      icon: <Boxes size={36} />,
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0b1b2b] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white font-syne">
          Core Competencies
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
          Tap on any competency to explore detailed information about my expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              index={index}
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
