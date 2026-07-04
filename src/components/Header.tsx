/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  fadeInDown,
  navItemHover,
  navbarGlow,
  mobileNavSlide,
  buttonHover,
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
      className="sticky top-0 z-50 bg-linear-to-br from-primary-blue to-blue-900 py-4 shadow-[0_10px_40px_rgba(37,99,235,0.3)] backdrop-blur-xl bg-opacity-95 border-b border-accent-gold/10"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <nav className="w-full">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl flex justify-between items-center">
          <motion.div
            className="text-3xl font-extrabold tracking-widest bg-linear-to-br from-accent-gold to-yellow-300 bg-clip-text text-transparent cursor-pointer hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
            variants={navbarGlow}
            whileHover="whileHover"
            onClick={() => handleNavigate('home')}
          >
            IO.
          </motion.div>

          <button
            className="md:hidden flex items-center justify-center text-accent-gold p-2 z-200 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all"
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
              {menuItems.map((item, index) => (
                <li key={item.id} className="relative">
                  <motion.a
                    className={`relative cursor-pointer text-[15px] font-bold tracking-wide uppercase transition-all duration-300 ${activeSection === item.id ? 'text-accent-gold drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]' : 'text-white/80'}`}
                    onClick={() => handleNavigate(item.id)}
                    variants={navbarGlow}
                    whileHover="whileHover"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    {item.label}
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-accent-gold to-yellow-300 rounded-sm"
                      initial={{ width: 0 }}
                      animate={{ width: activeSection === item.id ? '100%' : '0%' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                className="fixed md:hidden top-0 right-0 w-full max-w-75 h-screen flex flex-col gap-8 p-8 pt-28 bg-linear-to-br from-secondary-blue via-blue-900 to-[#0C1117] border-l border-blue-600/30 shadow-[-10px_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-lg z-[150] m-0"
                variants={mobileNavSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={mobileNavSlide}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <motion.a
                      className={`block relative cursor-pointer text-xl font-bold uppercase tracking-wide transition-all duration-300 ${activeSection === item.id ? 'text-accent-gold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'text-white/80'}`}
                      onClick={() => handleNavigate(item.id)}
                      variants={navbarGlow}
                      whileHover="whileHover"
                    >
                      {item.label}
                      <motion.div 
                        className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-accent-gold to-yellow-300 rounded-sm"
                        initial={{ width: 0 }}
                        animate={{ width: activeSection === item.id ? '100%' : '0%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
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
