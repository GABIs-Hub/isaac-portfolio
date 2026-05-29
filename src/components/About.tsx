import React from 'react'
import { Layers, ShieldCheck, ClipboardData, ConeStriped } from 'react-bootstrap-icons'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0c1e30] border-t border-white/5 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white font-syne">
          About Me
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description & Stats (7 columns on desktop) */}
          <div className="space-y-8 lg:col-span-7">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated <span className="font-bold text-accent">Building Engineer</span> with extensive experience in construction management, quality control, and project supervision. My passion lies in ensuring the highest standards of construction excellence across every project I undertake.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently serving as Quality Control Manager at <span className="font-bold text-white">Advanced Engineering Consultants</span>, I lead quality assurance initiatives on high-profile projects including The Ark Legacy Project—a magnificent 100,000-capacity church auditorium.
            </p>

            {/* Premium Glassmorphic Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#11263c]/60 p-6 rounded-2xl border border-white/10 hover:border-accent/40 shadow-xl text-center transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl font-extrabold text-accent group-hover:scale-105 transition-transform">5+</div>
                <div className="text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-[#11263c]/60 p-6 rounded-2xl border border-white/10 hover:border-accent/40 shadow-xl text-center transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl font-extrabold text-accent group-hover:scale-105 transition-transform">15+</div>
                <div className="text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider">Projects Done</div>
              </div>
              <div className="bg-[#11263c]/60 p-6 rounded-2xl border border-white/10 hover:border-accent/40 shadow-xl text-center transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl font-extrabold text-accent group-hover:scale-105 transition-transform">6</div>
                <div className="text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Core Focus Areas (5 columns on desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#11263c]/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Corner tech accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-accent/20 rounded-tr-2xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-extrabold text-white mb-6 font-syne tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                Core Focus Areas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-gray-300 text-base sm:text-lg">
                  <div className="mt-1 text-accent text-xl bg-[#11263c] p-2 rounded-lg border border-white/5 shrink-0">
                    <Layers />
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">Advanced BIM Coordination</h4>
                    <p className="text-sm text-gray-400 mt-1">Multi-discipline model integrations & clash detections.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300 text-base sm:text-lg">
                  <div className="mt-1 text-accent text-xl bg-[#11263c] p-2 rounded-lg border border-white/5 shrink-0">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">Quality Control & Compliance</h4>
                    <p className="text-sm text-gray-400 mt-1">Rigorous inspection routines and QA audit logs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300 text-base sm:text-lg">
                  <div className="mt-1 text-accent text-xl bg-[#11263c] p-2 rounded-lg border border-white/5 shrink-0">
                    <ClipboardData />
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">Project Management & Logistics</h4>
                    <p className="text-sm text-gray-400 mt-1">Schedules, material flows, and vendor relations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300 text-base sm:text-lg">
                  <div className="mt-1 text-accent text-xl bg-[#11263c] p-2 rounded-lg border border-white/5 shrink-0">
                    <ConeStriped />
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">Site Engineering & Supervision</h4>
                    <p className="text-sm text-gray-400 mt-1">Direct coordination of trades & safety directives.</p>
                  </div>
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
