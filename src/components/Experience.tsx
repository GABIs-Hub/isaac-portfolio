import React from 'react'
import { CircleFill } from 'react-bootstrap-icons'

interface ExperienceItemProps {
  date: string
  title: string
  company: string
  description: string
  isActive?: boolean
  index: number
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, title, company, description, isActive, index }) => (
  <div className="relative flex gap-6 group" style={{ animationDelay: `${index * 100}ms` }}>
    {/* Timeline Track */}
    <div className="flex flex-col items-center shrink-0">
      {/* Dot */}
      <div className={`relative z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
        isActive
          ? 'border-accent bg-accent/20 shadow-[0_0_15px_rgba(240,173,78,0.4)]'
          : 'border-white/20 bg-[#11263c] group-hover:border-accent/50'
      }`}>
        {isActive && <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>}
      </div>
      {/* Line */}
      <div className={`w-0.5 flex-1 min-h-15 ${isActive ? 'bg-accent/30' : 'bg-white/10'}`}></div>
    </div>

    {/* Content Card */}
    <div className={`flex-1 pb-10 -mt-1`}>
      <div className={`p-6 rounded-2xl border transition-all duration-300 ${
        isActive
          ? 'bg-accent/5 border-accent/20 shadow-[0_0_30px_rgba(240,173,78,0.08)]'
          : 'bg-[#11263c]/40 border-white/5 hover:border-white/15'
      }`}>
        {/* Date badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider mb-3 ${
          isActive ? 'bg-accent/15 text-accent' : 'bg-white/5 text-gray-400'
        }`}>
          <CircleFill size={6} className={isActive ? 'text-accent' : 'text-gray-500'} />
          {date}
        </div>
        
        <h3 className="text-xl font-extrabold text-white mb-1 font-syne">{title}</h3>
        <p className={`font-bold text-sm mb-3 ${isActive ? 'text-accent' : 'text-gray-400'}`}>{company}</p>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  </div>
)

const Experience: React.FC = () => {
  const experiences = [
    {
      date: 'Oct 2023 - Present',
      title: 'Quality Control Manager',
      company: 'Advanced Engineering Consultants',
      description:
        'Leading QA/QC operations and ensuring compliance across all project phases. Supervise teams, implement quality protocols, and manage relationships with clients and contractors.',
      isActive: true,
    },
    {
      date: 'May 2021 - Sep 2023',
      title: 'Assistant Manager, Quality Control',
      company: 'Advanced Engineering Consultants',
      description:
        'Managed quality assurance teams and implementation of control protocols. Coordinated inspections, testing, and compliance documentation for multiple concurrent projects.',
      isActive: false,
    },
    {
      date: 'Jul 2020 - Dec 2020',
      title: 'Building Engineer / Site Engineer',
      company: 'SDS Construction Company',
      description:
        'Site supervision and technical coordination of construction activities. Managed daily operations, coordinated trades, and ensured quality standards during active construction.',
      isActive: false,
    },
    {
      date: '2015 - 2020',
      title: 'Graduate Trainee & Industrial Placements',
      company: 'Various Construction Firms',
      description:
        'Hands-on training across multiple construction projects and phases. Developed foundational expertise in site management, quality control, and construction methodology.',
      isActive: false,
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0b1b2b] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white font-syne">
          Professional Journey
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              index={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              isActive={exp.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
