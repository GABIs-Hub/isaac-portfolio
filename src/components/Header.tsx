import React, { useState } from 'react'
import { Menu, X } from 'react-bootstrap-icons'

interface HeaderProps {
  onNavClick: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id: string) => {
    onNavClick(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-accent tracking-wider">IO</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="text-white font-semibold hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 animate-slide-in-left">
          <ul className="flex flex-col gap-1 p-4 list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-4 py-3 text-white font-semibold hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
