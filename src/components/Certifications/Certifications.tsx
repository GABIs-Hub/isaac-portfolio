import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations'
import './Certifications.css'

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
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="cert-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.code} className="cert-card" variants={staggerItem} whileHover={{ x: 6 }}>
              <div className="cert-number">{cert.code}</div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications