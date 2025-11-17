import { Code2, Database, Cpu, Layers, GitBranch, Boxes } from 'lucide-react'

export default function Skills() {
  const skills = [
    { icon: <Code2 size={18} />, label: 'JavaScript / TypeScript' },
    { icon: <Code2 size={18} />, label: 'React, Next.js, Vite' },
    { icon: <Database size={18} />, label: 'MongoDB, PostgreSQL' },
    { icon: <Cpu size={18} />, label: 'Node.js, Python (FastAPI)' },
    { icon: <Layers size={18} />, label: 'Design system & UI/UX' },
    { icon: <GitBranch size={18} />, label: 'CI/CD, Docker, Git' },
    { icon: <Boxes size={18} />, label: 'Microservizi & API' },
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Competenze</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300">
                {s.icon}
              </div>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
