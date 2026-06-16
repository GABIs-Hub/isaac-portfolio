import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

interface CertData {
  code: string
  title: string
  issuer: string
}

// EDIT THESE — fill in your actual certifications
const certifications: CertData[] = [
  { code: '01', title: 'BIM Management', issuer: 'Add issuing body' },
  { code: '02', title: 'Quality Control / QA-QC', issuer: 'Add issuing body' },
  { code: '03', title: 'Construction Site Safety', issuer: 'Add issuing body' },
  { code: '04', title: 'Project Management Fundamentals', issuer: 'Add issuing body' },
]

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-linear-to-br from-surface-blue to-secondary-blue">
      <div className="container mx-auto px-8 max-w-6xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary-blue relative inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-white">Certifications</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-accent-gold rounded-sm" />
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.code} 
              className="flex items-center gap-5 p-6 bg-blue-600/5 border border-blue-600/15 rounded-xl transition-all duration-300 hover:border-accent-gold/40 hover:bg-accent-gold/5 group" 
              variants={staggerItem} 
              whileHover={{ x: 6 }}
            >
              <div className="font-mono text-xl font-extrabold text-accent-gold bg-accent-gold/10 border border-accent-gold/30 rounded-lg w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-gold/20">
                {cert.code}
              </div>
              <div>
                <h3 className="text-base text-white/95 mb-1 font-bold">{cert.title}</h3>
                <p className="text-sm text-white/55">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
