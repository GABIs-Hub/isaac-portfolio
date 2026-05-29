import React from 'react'
import { Building } from 'react-bootstrap-icons'

interface ProjectCardProps {
  title: string
  role: string
  description: string
  tags: string[]
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, description, tags, index }) => (
  <div
    className="relative bg-[#11263c]/60 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Top accent bar */}
    <div className="h-1 bg-linear-to-r from-accent via-yellow-400 to-accent/50"></div>
    
    <div className="p-8 relative">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-accent/10 rounded-tr-2xl pointer-events-none group-hover:border-accent/25 transition-colors duration-300"></div>
      
      {/* Hover glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Category badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-5">
          <Building size={12} />
          {title.split(' ')[0]}
        </div>
        
        <h3 className="text-xl font-extrabold text-white mb-2 font-syne">{title}</h3>
        <p className="text-accent font-bold text-xs uppercase tracking-wider mb-4">{role}</p>
        <p className="text-gray-400 leading-relaxed text-sm mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg text-[11px] font-semibold border border-white/5 hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
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
    <section id="projects" className="py-20 md:py-28 bg-[#0c1e30] border-t border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white font-syne">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
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
