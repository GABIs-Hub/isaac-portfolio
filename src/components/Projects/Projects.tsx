import React from 'react'
import './Projects.css'

interface ProjectData {
  header: string
  title: string
  role: string
  description: string
  tags: string[]
}

const ProjectCard: React.FC<ProjectData> = ({
  header,
  title,
  role,
  description,
  tags
}) => {
  return (
    <div className="project-card">
      <div className="project-header">{header}</div>
      <h3>{title}</h3>
      <p className="project-role">{role}</p>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
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
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
