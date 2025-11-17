export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">Chi sono</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Sono un informatico con passione per il software ben progettato. Mi occupo di sviluppo
              full‑stack, con attenzione a performance, accessibilità e scalabilità. Amo imparare nuove
              tecnologie e trasformare idee in prodotti reali.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-slate-200">Anni di esperienza</p>
                <p className="text-2xl font-semibold text-white">5+</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-slate-200">Progetti consegnati</p>
                <p className="text-2xl font-semibold text-white">30+</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-white/10 p-6">
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                Orientato ai dettagli, con mentalità da problem‑solver.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                Comunicazione chiara e collaborazione efficace con team e clienti.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                Focus su codice pulito, testabile e ben documentato.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
