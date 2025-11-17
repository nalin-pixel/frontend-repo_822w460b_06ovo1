import { useMemo, useState } from 'react'

const allProjects = [
  { id: 1, title: 'Dashboard Analytics', tags: ['react', 'tailwind', 'charts'], image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'API FastAPI', tags: ['python', 'fastapi', 'backend'], image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'E-commerce UI', tags: ['react', 'design', 'ux'], image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Automation Scripts', tags: ['python', 'automation'], image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'Portfolio v2', tags: ['vite', 'tailwind'], image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1400&auto=format&fit=crop' },
]

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('all')

  const tags = useMemo(() => {
    const set = new Set(allProjects.flatMap(p => p.tags))
    return ['all', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    return allProjects.filter(p => (
      (activeTag === 'all' || p.tags.includes(activeTag)) &&
      p.title.toLowerCase().includes(query.toLowerCase())
    ))
  }, [query, activeTag])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Tutti i progetti</h1>
        <p className="text-slate-300 mt-2">Filtra per tecnologia o cerca per titolo.</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {tags.map(t => (
            <button key={t} onClick={() => setActiveTag(t)} className={`px-3 py-1.5 rounded-md text-sm border ${activeTag === t ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'}`}>
              {t}
            </button>
          ))}
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Cerca progetto..." className="ml-auto w-full sm:w-64 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-slate-100 placeholder:text-slate-400" />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} id={p.id} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
