import React from 'react'
import { motion } from 'framer-motion'
import { CountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  countUpAnimation,
} from '../utils/animations'

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
    <section id="about" className="relative py-20 overflow-hidden bg-linear-to-br from-surface-blue to-secondary-blue">
      {/* Background decorations */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-2xl rounded-full animate-float" />
      <div className="absolute -bottom-36 -right-36 w-125 h-125 bg-yellow-400/5 blur-[50px] rounded-full animate-float-delayed" />

      <div className="container mx-auto px-8 max-w-6xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary-blue relative inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-white">About Me</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-blue-500 to-accent-gold rounded-sm" />
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-12 relative z-10"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-white/85" variants={itemVariants}>
            <motion.p className="text-lg md:text-xl leading-relaxed mb-6" variants={itemVariants}>
              I'm a dedicated Building Engineer with extensive experience in construction management, quality control, and project supervision. My passion lies in ensuring the highest standards of construction excellence across every project I undertake.
            </motion.p>

            <motion.p className="text-lg md:text-xl leading-relaxed mb-6" variants={itemVariants}>
              Currently serving as Quality Control Manager at Advanced Engineering Consultants, I lead quality assurance initiatives on high-profile projects including The Ark Legacy Project—a magnificent 100,000-capacity church auditorium.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-glass p-8 md:p-10 text-center relative overflow-hidden group hover:border-accent-gold/40 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-accent-gold/20 to-transparent transition-all duration-700 ease-in-out group-hover:left-full z-0" />
                  
                  <motion.div
                    className="text-5xl md:text-6xl font-extrabold bg-linear-to-br from-accent-gold to-yellow-300 bg-clip-text text-transparent mb-2 drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  >
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        suffix={stat.suffix}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    className="text-white/90 font-bold text-sm uppercase tracking-widest relative z-10"
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
