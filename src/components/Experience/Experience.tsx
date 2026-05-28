import React from 'react'
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
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${exp.isActive ? 'active' : ''}`}
            >
              <div className="experience-date">{exp.date}</div>
              <h3>{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
