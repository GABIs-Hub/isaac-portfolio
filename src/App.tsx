import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    element?.scrollIntoView({ 
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full bg-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full" />
        
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
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
