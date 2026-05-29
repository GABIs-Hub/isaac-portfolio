import React, { useState } from 'react'
import { List, X } from 'react-bootstrap-icons'

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
    <header className="sticky top-0 z-50 bg-[#0b1b2b]/85 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-accent tracking-wider font-syne hover:scale-105 transition-transform cursor-pointer">
          IO<span className="text-white">.</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="text-white/80 font-bold hover:text-accent transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full text-sm uppercase tracking-wider"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white hover:text-accent text-2xl transition-colors p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b1b2b]/95 backdrop-blur-lg border-t border-white/10 shadow-2xl animate-fade-in z-50">
            <ul className="flex flex-col gap-1 p-4 list-none">
              {navItems.map((item) => (
                <li key={item.id} className="w-full">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-5 py-3.5 text-white/90 hover:text-accent font-semibold hover:bg-white/5 rounded-xl transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="uppercase text-sm tracking-wider">{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
