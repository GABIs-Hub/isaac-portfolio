import React from 'react'

interface ProjectCardProps {
  title: string
  role: string
  description: string
  tags: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, description, tags }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-l-4 border-accent">
    <div className="p-8">
      <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
        {title.split(' ')[0].toUpperCase()}
      </div>
      <h3 className="text-2xl font-black text-primary mb-2">{title}</h3>
      <p className="text-accent font-semibold text-sm mb-3">{role}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-primary px-3 py-1 rounded-full text-xs font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'The Ark Legacy Project',
      role: 'Quality Control Manager | QA/QC Lead',
      description:
        'Leading quality assurance and control operations on a landmark 100,000-capacity church auditorium construction project in Ogun State. Managing comprehensive testing protocols, compliance standards, and coordination with multiple contractors.',
      tags: ['#QA/QC', '#Large-Scale', '#Auditorium', '#Leadership'],
    },
    {
      title: '6-Storey Building Complex',
      role: 'Site Engineer | Construction Manager',
      description:
        'Managed comprehensive site supervision and quality control for a complex multi-story residential and commercial development. Coordinated trades, managed budgets, and ensured on-time delivery of a complex mixed-use facility.',
      tags: ['#Site-Supervision', '#Multi-Story', '#Residential', '#Commercial'],
    },
    {
      title: 'University Infrastructure',
      role: 'Site Supervisor | Quality Inspector',
      description:
        'Oversaw construction of postgraduate hostel and health center facilities at premier Nigerian universities. Implemented rigorous quality standards and ensured all work met educational institution specifications.',
      tags: ['#Educational', '#Infrastructure', '#Health-Center', '#Standards'],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-primary">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
