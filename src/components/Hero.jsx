import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast (click-through) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-28">
          <p className="text-blue-300/90 font-mono text-sm mb-3">Ciao, sono</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Un Informatico che crea soluzioni pulite e performanti
          </h1>
          <p className="mt-6 text-slate-200/90 text-lg">
            Sviluppo applicazioni web moderne, automatizzo processi e progetto esperienze digitali robuste.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md">Guarda i progetti</a>
            <a href="#skills" className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-md">Competenze</a>
          </div>
        </div>
      </div>
    </section>
  );
}
