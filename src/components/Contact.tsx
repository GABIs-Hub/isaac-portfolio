import React from 'react'
import { Envelope, Linkedin, GeoAltFill, ArrowRight } from 'react-bootstrap-icons'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#0c1e30] border-t border-white/5 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full liquid-blob-1 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full liquid-blob-2 blur-3xl"></div>
      
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(rgba(240, 173, 78, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(240, 173, 78, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 font-syne">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          Open to consulting and collaboration on construction, quality management, and engineering projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact Info Cards */}
          <div className="space-y-5">
            <a
              href="mailto:ogabi.isaac@gmail.com"
              className="flex items-center gap-5 p-6 bg-[#11263c]/50 border border-white/10 hover:border-accent/30 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform shrink-0">
                <Envelope />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-0.5 font-syne">Email</h3>
                <p className="text-gray-400 group-hover:text-accent transition-colors text-sm truncate">
                  ogabi.isaac@gmail.com
                </p>
              </div>
              <ArrowRight className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/isaac-ogabi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 bg-[#11263c]/50 border border-white/10 hover:border-accent/30 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform shrink-0">
                <Linkedin />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-0.5 font-syne">LinkedIn</h3>
                <p className="text-gray-400 group-hover:text-accent transition-colors text-sm">
                  isaac-ogabi
                </p>
              </div>
              <ArrowRight className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            <div className="flex items-center gap-5 p-6 bg-[#11263c]/50 border border-white/10 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl shrink-0">
                <GeoAltFill />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5 font-syne">Location</h3>
                <p className="text-gray-400 text-sm">Lagos State, Nigeria</p>
              </div>
            </div>
          </div>

          {/* CTA Panel */}
          <div className="bg-[#11263c]/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center">
            {/* Corner tech accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-accent/15 rounded-tl-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-accent/15 rounded-br-3xl pointer-events-none"></div>
            
            {/* Background glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Available for Projects
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-syne leading-tight">
                Ready to discuss your next project?
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                I'm available for consultation on construction projects, quality management, engineering solutions, and strategic planning. Let's create something exceptional together.
              </p>
              <a
                href="mailto:ogabi.isaac@gmail.com"
                className="inline-flex items-center justify-center w-full gap-3 bg-accent hover:bg-yellow-500 text-[#0b1b2b] font-extrabold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(240,173,78,0.3)] hover:shadow-[0_8px_30px_rgba(240,173,78,0.45)] tracking-wide uppercase text-sm"
              >
                <Envelope size={18} />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
