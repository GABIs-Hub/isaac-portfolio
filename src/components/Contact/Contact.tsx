import React from 'react'
import { Envelope, Linkedin, GeoAlt } from 'react-bootstrap-icons'
import './Contact.css'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title section-title-light">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Envelope size={32} />
              </div>
              <h3>Email</h3>
              <a href="mailto:ogabi.isaac@gmail.com">ogabi.isaac@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Linkedin size={32} />
              </div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/isaac-ogabi" target="_blank" rel="noopener noreferrer">
                isaac-ogabi
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <GeoAlt size={32} />
              </div>
              <h3>Location</h3>
              <p>Lagos State, Nigeria</p>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Ready to discuss your project?</h3>
            <p>
              I'm available for consultation on construction projects, quality management, and engineering solutions.
            </p>
            <a href="mailto:ogabi.isaac@gmail.com" className="btn-primary">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
