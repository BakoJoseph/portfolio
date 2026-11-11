import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import IntroOverlay from './components/IntroOverlay.jsx'
import TechStackSection from './components/TechStackSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'

function App() {
  return (
    <main className="page-shell">
      <IntroOverlay />
      <Navigation />
      <Hero />
      <TechStackSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default App
