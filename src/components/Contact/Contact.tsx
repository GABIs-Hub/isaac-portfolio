import React from 'react'
import { motion } from 'framer-motion'
import { Envelope, Linkedin, GeoAlt } from 'react-bootstrap-icons'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  hoverScale,
  buttonGoldHover,
} from '../../utils/animations'
import './Contact.css'

export const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: <Envelope size={32} />,
      title: 'Email',
      value: 'ogabi.isaac@gmail.com',
      href: 'mailto:ogabi.isaac@gmail.com'
    },
    {
      icon: <Linkedin size={32} />,
      title: 'LinkedIn',
      value: 'isaac-ogabi',
      href: 'https://www.linkedin.com/in/isaac-ogabi'
    },
    {
      icon: <GeoAlt size={32} />,
      title: 'Location',
      value: 'Lagos State, Nigeria',
      href: '#'
    }
  ]

  const containerVariants = staggerContainer
  const itemVariants = staggerItem

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2
          className="section-title section-title-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Let's Connect
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="contact-info"
            variants={fadeInLeft}
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <motion.div
                  className="contact-icon"
                  {...hoverScale}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(251, 191, 36, 0)',
                      '0 0 0 15px rgba(251, 191, 36, 0)',
                      '0 0 0 0 rgba(251, 191, 36, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {item.icon}
                </motion.div>

                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.div
                    className="contact-value"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.value}
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="contact-cta"
            variants={fadeInRight}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to discuss your project?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm available for consultation on construction projects, quality management, and engineering solutions.
            </motion.p>

            <motion.a
              href="mailto:ogabi.isaac@gmail.com"
              className="btn-primary"
              variants={buttonGoldHover}
              whileHover="whileHover"
              whileTap="whileTap"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Send an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
