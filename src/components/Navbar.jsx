import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "Chi sono" },
    { href: "#timeline", label: "Timeline" },
    { href: "#skills", label: "Competenze" },
    { href: "#projects", label: "Progetti" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-blue-400">{`<`}</span> Portfolio <span className="text-blue-400">{`/>`}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="/projects" className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition-colors">
            Tutti i progetti
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com" target="_blank" className="text-slate-300 hover:text-white"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
          <a href="mailto:you@example.com" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white/90 bg-white/10" onClick={() => setOpen(!open)}>
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200">
                {item.label}
              </a>
            ))}
            <a href="/projects" className="block text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md w-max">
              Tutti i progetti
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" className="text-slate-300 hover:text-white"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
              <a href="mailto:you@example.com" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
