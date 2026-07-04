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
    <div className="w-full bg-linear-to-b from-secondary-blue to-dark-blue">
      {/* Premium animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 blur-3xl rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-400/4 blur-3xl rounded-full animate-float-delayed-2" />
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
