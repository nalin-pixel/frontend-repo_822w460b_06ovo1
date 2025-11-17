import { useEffect, useState } from 'react'

const sampleProjects = [
  { id: 1, title: 'Dashboard Analytics', tags: ['react', 'tailwind'], image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'API FastAPI', tags: ['python', 'fastapi'], image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'E-commerce UI', tags: ['react', 'design'], image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1400&auto=format&fit=crop' },
]

export default function ProjectsPreview() {
  const [projects, setProjects] = useState(sampleProjects)

  useEffect(() => {
    // In futuro: carica da backend
  }, [])

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Progetti</h2>
          <a href="/projects" className="text-blue-400 hover:text-blue-300">Vedi tutti</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.id} href={`/projects#${p.id}`} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-blue-500/20 text-blue-200">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
