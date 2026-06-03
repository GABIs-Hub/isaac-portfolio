import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    element?.scrollIntoView({ 
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full bg-gradient-to-b from-secondary-blue to-dark-blue">
      {/* Premium animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary Blue Gradient Orb */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full animate-float" />
        
        {/* Secondary Blue Gradient Orb */}
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/5 blur-3xl rounded-full animate-float-delayed" />
        
        {/* Accent Gold Orb */}
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-400/5 blur-3xl rounded-full animate-float-delayed-2" />
        
        {/* Additional depth layer */}
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-700/5 blur-3xl rounded-full animate-float-delayed-3" />
      </div>

      <Header onNavClick={scrollToSection} />
      <Hero onScrollToContact={() => scrollToSection('contact')} onScrollToAbout={() => scrollToSection('about')} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
