import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeInDown,
  slideInLeft,
  navItemHover,
} from '../../utils/animations'
import './Header.css'

interface HeaderProps {
  onNavClick: (sectionId: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId)
    onNavClick(sectionId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id)
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <motion.header
      className="header"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <nav className="header-nav">
        <div className="nav-container">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            IO
          </motion.div>

          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              className="hamburger"
              animate={isMenuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>

          <AnimatePresence>
            <motion.ul
              className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
              variants={containerVariants}
              initial="hidden"
              animate={isMenuOpen ? 'visible' : 'hidden'}
              exit="hidden"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.a
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => handleNavigate(item.id)}
                    variants={navItemHover}
                    whileHover="whileHover"
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
