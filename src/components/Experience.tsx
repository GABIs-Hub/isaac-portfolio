import React from 'react'

interface ExperienceItemProps {
  date: string
  title: string
  company: string
  description: string
  isActive?: boolean
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, title, company, description, isActive }) => (
  <div className={`relative pl-8 pb-12 ${isActive ? 'bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-lg' : ''}`}>
    {/* Timeline dot */}
    <div
      className={`absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-1.5 ${
        isActive ? 'bg-accent' : 'bg-gray-300'
      }`}
    ></div>

    {/* Connecting line */}
    <div
      className={`absolute left-2 top-4 w-0.5 h-20 ${isActive ? 'bg-accent' : 'bg-gray-200'}`}
    ></div>

    <div className="font-bold text-accent text-sm tracking-wider uppercase">{date}</div>
    <h3 className="text-2xl font-black text-primary mt-2 mb-1">{title}</h3>
    <p className="text-gray-600 font-semibold mb-3">{company}</p>
    <p className="text-gray-700 leading-relaxed">{description}</p>
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
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-primary">
          Professional Journey
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
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
