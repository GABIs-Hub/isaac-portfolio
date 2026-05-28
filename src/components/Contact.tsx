import React from 'react'
import { Envelope, Linkedin, GeoAltFill } from 'react-bootstrap-icons'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full liquid-blob-1 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full liquid-blob-2 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <a
              href="mailto:ogabi.isaac@gmail.com"
              className="flex items-center gap-4 p-6 glass rounded-xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-5xl text-accent group-hover:scale-110 transition-transform">
                <Envelope />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-gray-200 hover:text-accent transition-colors">
                  ogabi.isaac@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/isaac-ogabi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 glass rounded-xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-5xl text-accent group-hover:scale-110 transition-transform">
                <Linkedin />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-gray-200 hover:text-accent transition-colors">
                  isaac-ogabi
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 glass rounded-xl">
              <div className="text-5xl text-accent">
                <GeoAltFill />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                <p className="text-gray-200">Lagos State, Nigeria</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-black text-primary mb-4">
              Ready to discuss your project?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              I'm available for consultation on construction projects, quality management, engineering solutions, and strategic planning. Let's create something exceptional together.
            </p>
            <a
              href="mailto:ogabi.isaac@gmail.com"
              className="inline-block w-full bg-gradient-to-r from-accent to-yellow-400 hover:from-yellow-400 hover:to-accent text-primary font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
