export default function Timeline() {
  const items = [
    {
      year: '2021 — Oggi',
      title: 'Sviluppatore Full‑Stack',
      desc: 'Costruisco applicazioni web, API e pipeline di automazione per aziende e startup.'
    },
    {
      year: '2019 — 2021',
      title: 'Laurea in Informatica',
      desc: 'Solida base in algoritmi, strutture dati, sistemi e ingegneria del software.'
    },
    {
      year: '2017 — 2019',
      title: 'Prime esperienze',
      desc: 'Progetti personali, hackathon e freelancing.'
    }
  ]

  return (
    <section id="timeline" className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Timeline</h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          <div className="space-y-10">
            {items.map((it, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-blue-300 text-sm mb-1">{it.year}</p>
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  <p className="text-slate-300 mt-2">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
