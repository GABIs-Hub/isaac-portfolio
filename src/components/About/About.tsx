import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverLift,
  countUpAnimation,
} from '../../utils/animations'
import './About.css'

export const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const stats = [
    { number: 5, label: 'Years Experience', suffix: '+' },
    { number: 15, label: 'Projects Completed', suffix: '+' },
    { number: 6, label: 'Certifications', suffix: '' }
  ]

  const containerVariants = staggerContainer
  const itemVariants = staggerItem

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              I'm a dedicated Building Engineer with extensive experience in construction management, quality control, and project supervision. My passion lies in ensuring the highest standards of construction excellence across every project I undertake.
            </motion.p>

            <motion.p variants={itemVariants}>
              Currently serving as Quality Control Manager at Advanced Engineering Consultants, I lead quality assurance initiatives on high-profile projects including The Ark Legacy Project—a magnificent 100,000-capacity church auditorium.
            </motion.p>

            <motion.div
              className="highlight-stats"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat"
                  variants={itemVariants}
                  {...hoverLift}
                >
                  <motion.div
                    className="stat-number"
                    variants={countUpAnimation}
                    custom={0.2 + index * 0.1}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                  >
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    className="stat-label"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
