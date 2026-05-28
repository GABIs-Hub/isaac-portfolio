import React from 'react'
import './Header.css'

interface HeaderProps {
  onNavigate: (sectionId: string) => void
  activeSection: string
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-container">
          <div className="logo">IO</div>
          <ul className="nav-menu">
            {menuItems.map(item => (
              <li key={item.id}>
                <a
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => handleNavigate(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
