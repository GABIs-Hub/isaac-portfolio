import React from 'react'
import './About.css'

export const About: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '6', label: 'Certifications' }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated Building Engineer with extensive experience in construction management, quality control, and project supervision. My passion lies in ensuring the highest standards of construction excellence across every project I undertake.
            </p>
            <p>
              Currently serving as Quality Control Manager at Advanced Engineering Consultants, I lead quality assurance initiatives on high-profile projects including The Ark Legacy Project—a magnificent 100,000-capacity church auditorium.
            </p>
            <div className="highlight-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
