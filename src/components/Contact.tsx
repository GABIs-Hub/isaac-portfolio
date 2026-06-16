import React from 'react'
import { motion } from 'framer-motion'
import { Envelope, Linkedin, GeoAlt } from 'react-bootstrap-icons'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from '../utils/animations'

export const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: <Envelope size={24} />,
      title: 'Email',
      value: 'ogabi.isaac@gmail.com',
      href: 'mailto:ogabi.isaac@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'isaac-ogabi',
      href: 'https://www.linkedin.com/in/isaac-ogabi'
    },
    {
      icon: <GeoAlt size={24} />,
      title: 'Location',
      value: 'Lagos State, Nigeria',
      href: '#'
    }
  ]

  const containerVariants = staggerContainer
  const itemVariants = staggerItem

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-linear-to-br from-primary-blue to-secondary-blue text-white">
      <div className="absolute -top-36 left-0 w-100 h-100 bg-yellow-400/10 blur-2xl rounded-full animate-float" />
      <div className="absolute -bottom-24 right-0 w-125 h-125 bg-blue-600/10 blur-[50px] rounded-full animate-float-delayed" />

      <div className="container mx-auto px-8 max-w-5xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-accent-gold drop-shadow-md relative inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Let's Connect
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-accent-gold to-yellow-200 rounded-sm" />
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex flex-col gap-6" variants={fadeInLeft}>
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-4 lg:gap-6 p-6 rounded-xl bg-white/5 border border-accent-gold/20 transition-all duration-400 ease-out hover:bg-accent-gold/10 hover:border-accent-gold/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-gold/10 group cursor-pointer"
                variants={itemVariants}
              >
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-accent-gold/20 to-blue-600/10 flex items-center justify-center text-accent-gold border border-accent-gold/30 shrink-0 transition-all duration-400 group-hover:bg-linear-to-br group-hover:from-accent-gold group-hover:to-yellow-300 group-hover:text-secondary-blue group-hover:border-accent-gold group-hover:scale-110 shadow-[0_0_0_0_rgba(251,191,36,0)] group-hover:animate-pulse">
                  {item.icon}
                </div>

                <div className="flex flex-col text-left">
                  <motion.h3
                    className="text-accent-gold font-bold uppercase tracking-wider text-sm mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.div
                    className="text-white/85 font-semibold text-lg transition-colors group-hover:text-accent-gold"
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
            className="flex flex-col justify-center gap-6 p-8 rounded-2xl bg-linear-to-br from-accent-gold/10 to-blue-600/5 border border-accent-gold/20 backdrop-blur-md"
            variants={fadeInRight}
          >
            <motion.h3
              className="text-3xl font-bold text-white/95 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to discuss your project?
            </motion.h3>

            <motion.p
              className="text-white/85 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm available for consultation on construction projects, quality management, and engineering solutions.
            </motion.p>

            <motion.a
              href="mailto:ogabi.isaac@gmail.com"
              className="mt-4 px-8 py-4 bg-linear-to-br from-accent-gold to-yellow-300 text-secondary-blue font-bold rounded-lg shadow-[0_10px_30px_rgba(251,191,36,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(251,191,36,0.4)] text-center relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="relative z-10">Send an Email</span>
              <div className="absolute top-0 -left-full w-full h-full bg-white/30 transition-all duration-300 group-hover:left-full z-0" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
