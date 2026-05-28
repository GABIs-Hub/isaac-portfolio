import React from 'react'
import { LiquidGlass } from '../shared/LiquidGlass'
import './Hero.css'

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Isaac Ogabi</h1>
          <p className="hero-subtitle">Building Engineer | QA/QC Manager | BIM Specialist</p>
          <p className="hero-description">
            Crafting excellence in construction management with 5+ years of industry expertise
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onNavigate('contact')}>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('about')}>
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <LiquidGlass className="shape-1" />
          <LiquidGlass className="shape-2" delay={1} />
          <LiquidGlass className="shape-3" delay={2} />
        </div>
      </div>
    </section>
  )
}
