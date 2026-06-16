/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  fadeInDown,
  navItemHover,
} from '../utils/animations'

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
    { id: 'certifications', label: 'Certs' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-linear-to-br from-primary-blue to-blue-900 py-4 shadow-[0_10px_30px_rgba(37,99,235,0.2)] backdrop-blur-md bg-opacity-95"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <nav className="w-full">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl flex justify-between items-center">
          <motion.div
            className="text-3xl font-extrabold tracking-widest bg-gradient-to-br from-accent-gold to-yellow-300 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleNavigate('home')}
          >
            IO
          </motion.div>

          <button
            className="md:hidden flex items-center justify-center text-accent-gold p-2 z-[200] hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              className="flex flex-col gap-1.5"
              animate={isMenuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-accent-gold rounded-sm"
                variants={{
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-accent-gold rounded-sm"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-accent-gold rounded-sm"
                variants={{
                  open: { rotate: -45, y: -8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>

          <div className="hidden md:block">
            <ul className="flex list-none gap-8 items-center m-0 p-0">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <motion.a
                    className={`relative cursor-pointer text-[15px] font-bold tracking-wide transition-colors ${activeSection === item.id ? 'text-accent-gold' : 'text-white/90 hover:text-accent-gold'}`}
                    onClick={() => handleNavigate(item.id)}
                    variants={navItemHover}
                    whileHover="whileHover"
                  >
                    {item.label}
                    <div className={`absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-accent-gold to-yellow-300 transition-all duration-300 rounded-sm ${activeSection === item.id ? 'w-full' : 'w-0'}`} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                className="fixed md:hidden top-0 right-0 w-full max-w-[300px] h-screen flex flex-col gap-6 p-8 pt-24 bg-linear-to-br from-secondary-blue to-[#0C1117] border-l border-blue-600/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.4)] z-[150] m-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    custom={index}
                  >
                    <motion.a
                      className={`block relative cursor-pointer text-lg font-bold transition-colors ${activeSection === item.id ? 'text-accent-gold' : 'text-white/90 hover:text-accent-gold'}`}
                      onClick={() => handleNavigate(item.id)}
                      variants={navItemHover}
                      whileHover="whileHover"
                    >
                      {item.label}
                      <div className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent-gold to-yellow-300 transition-all duration-300 rounded-sm ${activeSection === item.id ? 'w-12' : 'w-0'}`} />
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
