import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import ProjectsPreview from './components/ProjectsPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <Navbar />

      {/* Hero con Spline 3D */}
      <Hero />

      {/* Sezioni contenuto */}
      <About />
      <Timeline />
      <Skills />
      <ProjectsPreview />

      <Footer />
    </div>
  )
}

export default App
