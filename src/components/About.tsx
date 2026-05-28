import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-primary">
          About Me
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Stats */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated <span className="font-bold text-accent">Building Engineer</span> with extensive experience in construction management, quality control, and project supervision. My passion lies in ensuring the highest standards of construction excellence across every project I undertake.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently serving as Quality Control Manager at <span className="font-bold">Advanced Engineering Consultants</span>, I lead quality assurance initiatives on high-profile projects including The Ark Legacy Project—a magnificent 100,000-capacity church auditorium.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-accent transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-accent">5+</div>
                <div className="text-sm font-semibold text-primary mt-2">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-accent transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-accent">15+</div>
                <div className="text-sm font-semibold text-primary mt-2">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-accent transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-accent">6</div>
                <div className="text-sm font-semibold text-primary mt-2">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Skills Highlights */}
          <div className="space-y-4">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-3">Core Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white text-lg">
                  <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                  Advanced BIM Coordination
                </li>
                <li className="flex items-center text-white text-lg">
                  <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                  Quality Control & Compliance
                </li>
                <li className="flex items-center text-white text-lg">
                  <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                  Project Management & Logistics
                </li>
                <li className="flex items-center text-white text-lg">
                  <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                  Site Supervision & Technical Leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
