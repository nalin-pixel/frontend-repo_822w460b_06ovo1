import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    period: '2021 — Oggi',
    role: 'Sviluppatore Full‑Stack',
    company: 'Freelance / Startup',
    details: [
      'App web e API con stack moderno (React, FastAPI, MongoDB).',
      'Dashboard real‑time, automazioni e integrazioni terze parti.',
      'Focus su performance, DX e accessibilità.'
    ]
  },
  {
    period: '2019 — 2021',
    role: 'Laurea in Informatica',
    company: 'Università',
    details: [
      'Algoritmi, strutture dati, sistemi operativi, reti.',
      'Progetti in team, code review e versionamento.',
      'Tesi su architetture web scalabili.'
    ]
  },
  {
    period: '2017 — 2019',
    role: 'Prime esperienze',
    company: 'Side projects',
    details: [
      'Hackathon, freelancing e prodotti personali.',
      'Design system, componenti riutilizzabili, UI/UX.'
    ]
  }
]

export default function AnimatedTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="timeline" ref={ref} className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Timeline</h2>
        <div className="relative md:pl-10">
          {/* Vertical line that grows with scroll */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            className="absolute left-0 md:left-4 top-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-fuchsia-500 origin-top"
            style={{ height: '100%', scaleY: lineScaleY }}
          />

          <ul className="space-y-10">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: idx % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute -left-[9px] md:-left-[7px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3 text-sm text-blue-300/90">
                    <span className="font-mono">{item.period}</span>
                    <span className="text-white/30">•</span>
                    <span>{item.company}</span>
                  </div>
                  <h3 className="text-white font-semibold mt-1">{item.role}</h3>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
