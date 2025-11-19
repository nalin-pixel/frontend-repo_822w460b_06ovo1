import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AnimatedTimeline from './components/AnimatedTimeline'
import Skills from './components/Skills'
import ProjectsPreview from './components/ProjectsPreview'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import FlowDecor from './components/FlowDecor'
import ParallaxWrapper from './components/ParallaxWrapper'
import Section from './components/Section'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <Navbar />
      <ScrollProgress />
      <FlowDecor />

      {/* Hero con Spline 3D + parallax leggero */}
      <ParallaxWrapper strength={0.15}>
        <Hero />
      </ParallaxWrapper>

      {/* About e Timeline con le proprie sezioni/animazioni */}
      <About />
      <AnimatedTimeline />

      {/* Sezioni con reveal on scroll */}
      <Section id="skills" delay={0.1}>
        <Skills />
      </Section>

      <Section id="projects" delay={0.1}>
        <ProjectsPreview />
      </Section>

      <Footer />
    </div>
  )
}

export default App
