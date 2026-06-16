import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 px-6 text-center border-t-2 border-accent-gold/30 bg-linear-to-br from-secondary-blue to-[#0C1117] overflow-hidden group">
      <div className="absolute top-0 -left-full w-[200%] h-full bg-linear-to-r from-transparent via-accent-gold/10 to-transparent animate-shimmer pointer-events-none" />
      <p className="relative z-10 m-0 text-white/85 text-sm md:text-base transition-all duration-300 group-hover:text-accent-gold group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
        &copy; {new Date().getFullYear()} Isaac Ogabi. Building Excellence in Every Project.
      </p>
    </footer>
  )
}

export default Footer
