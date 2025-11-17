export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Il tuo nome — Tutti i diritti riservati</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Contatti</a>
          <a href="/test" className="hover:text-white">Test backend</a>
        </div>
      </div>
    </footer>
  )
}
