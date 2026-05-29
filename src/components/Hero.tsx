import React from 'react'
import { Award, Building, ShieldCheck } from 'react-bootstrap-icons'

interface HeroProps {
  onScrollToContact: () => void
  onScrollToAbout: () => void
}

const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToAbout }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#0b1b2b] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(240, 173, 78, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(240, 173, 78, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: 'center center'
      }}
    >
      {/* Engineering Reference Grid Markers (Corner Accents) */}
      <div className="absolute top-24 left-8 text-white/10 text-xs font-mono hidden md:block">
        SYS_LOC: [50.43, -12.98]
      </div>
      <div className="absolute top-24 right-8 text-white/10 text-xs font-mono hidden md:block">
        CAD_MODEL: V4.3.0
      </div>

      {/* Decorative Technical Crosshair lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03] hidden lg:block"></div>
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03] hidden lg:block"></div>

      {/* Radiant Glowing Background Lights */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[35rem] h-[35rem] bg-secondary/20 rounded-full blur-[120px]"></div>

      {/* Animated Liquid Background Blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full liquid-blob-1 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full liquid-blob-2 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content (5 Columns on Desktop) */}
          <div className="text-white lg:col-span-7 z-10">
            {/* Engineer Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
              Portfolio • Engineering Excellence
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-none tracking-tight font-syne">
              Isaac <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-yellow-400 to-accent">Ogabi</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-accent font-bold mb-6 tracking-wide leading-relaxed font-syne">
              Building Engineer | QA/QC Manager | BIM Specialist
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Delivering high-precision construction projects with over 5 years of industry leadership. Specialized in technical quality systems, concrete engineering, and advanced 3D building information coordination.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <button
                onClick={onScrollToContact}
                className="bg-accent hover:bg-yellow-500 text-[#0b1b2b] font-extrabold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(240,173,78,0.35)] hover:shadow-[0_8px_30px_rgba(240,173,78,0.5)] tracking-wide uppercase text-sm"
              >
                Get In Touch
              </button>
              <button
                onClick={onScrollToAbout}
                className="border-2 border-white/20 hover:border-white/50 text-white font-bold py-4 px-8 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm tracking-wide uppercase text-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Photo Section (5 Columns on Desktop, Offset 1) */}
          <div className="flex justify-center items-center lg:col-span-5 lg:col-start-8 relative">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] flex items-center justify-center">
              
              {/* Engineering Blueprint Ring 1: Dashed slow rotating border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/25 animate-spin-slow pointer-events-none"></div>

              {/* Engineering Blueprint Ring 2: Solid outer ring with axis tics */}
              <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-reverse-slow pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent/40"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent/40"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-accent/40"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-accent/40"></div>
              </div>

              {/* Ring 3: Small glowing ring immediately behind the photo */}
              <div className="absolute inset-8 rounded-full border border-accent/30 pointer-events-none shadow-[0_0_25px_rgba(240,173,78,0.15)]"></div>

              {/* Main Photo Container */}
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-accent shadow-2xl z-10 transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/isaac.jpg"
                  alt="Isaac Ogabi - Building Engineer"
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    // Fallback to high-end gradient layout if the photo doesn't resolve
                    const img = e.target as HTMLImageElement
                    img.style.display = 'none'
                    img.parentElement!.style.background = 'linear-gradient(135deg, #1a3a52 0%, #f0ad4e 100%)'
                  }}
                />
              </div>

              {/* Floating Badge 1: Top-Right (BIM & QC Expert) */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-[#0b1b2b]/95 border border-white/20 text-white p-3 rounded-2xl shadow-2xl flex items-center gap-2 z-20 hover:scale-105 transition-transform duration-300 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-lg">
                  <ShieldCheck />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] uppercase text-accent font-bold tracking-wider">QA/QC</div>
                  <div className="text-xs font-bold leading-none">Expert Manager</div>
                </div>
              </div>

              {/* Floating Badge 2: Mid-Left (5+ Yrs Exp) */}
              <div className="absolute -left-6 sm:-left-8 top-1/3 bg-[#0b1b2b]/95 border border-white/20 text-white p-3 rounded-2xl shadow-2xl flex items-center gap-2 z-20 hover:scale-105 transition-transform duration-300 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-lg">
                  <Award />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] uppercase text-accent font-bold tracking-wider">Experience</div>
                  <div className="text-xs font-bold leading-none">5+ Yrs Exp</div>
                </div>
              </div>

              {/* Floating Badge 3: Bottom-Right (15+ Projects) */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-[#0b1b2b]/95 border border-white/20 text-white p-3 rounded-2xl shadow-2xl flex items-center gap-2 z-20 hover:scale-105 transition-transform duration-300 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-lg">
                  <Building />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] uppercase text-accent font-bold tracking-wider">Execution</div>
                  <div className="text-xs font-bold leading-none">15+ Projects</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
