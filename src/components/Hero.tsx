import React from 'react'

interface HeroProps {
  onScrollToContact: () => void
  onScrollToAbout: () => void
}

const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToAbout }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
      {/* Animated Background Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full liquid-blob-1 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full liquid-blob-2 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Isaac Ogabi
            </h1>
            <p className="text-xl md:text-2xl text-accent font-bold mb-4">
              Building Engineer | QA/QC Manager | BIM Specialist
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Crafting excellence in construction management with 5+ years of industry expertise. Transforming projects into landmarks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onScrollToContact}
                className="bg-accent hover:bg-yellow-400 text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={onScrollToAbout}
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Photo Section */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glowing background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-yellow-300 opacity-30 blur-2xl animate-pulse-glow"></div>

              {/* Photo container with frame */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src="/images/isaac.jpg"
                  alt="Isaac Ogabi - Building Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if image doesn't load
                    const img = e.target as HTMLImageElement
                    img.style.display = 'none'
                    img.parentElement!.style.background = 'linear-gradient(135deg, #f0ad4e 0%, #d4941f 100%)'
                  }}
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-white text-primary font-bold px-6 py-3 rounded-full shadow-xl">
                <span className="text-lg">5+</span> yrs exp
              </div>
              <div className="absolute -top-6 -right-6 bg-accent text-primary font-bold px-6 py-3 rounded-full shadow-xl">
                15+ projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
