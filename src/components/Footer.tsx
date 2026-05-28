import { motion } from "framer-motion"
import { Droplets, Globe2, GraduationCap, Code2, ExternalLink, Heart } from "lucide-react"

const navLinks = [
  { label: "Início",     href: "#hero" },
  { label: "Sobre",      href: "#sobre" },
  { label: "ODS 6",      href: "#ods6" },
  { label: "Dicas",      href: "#dicas" },
  { label: "Impacto",    href: "#impacto" },
  { label: "Tecnologia", href: "#tecnologia" },
]

const handleNav = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/08">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020810]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-cyan/05 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => handleNav("#hero")} className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center">
                <Droplets size={20} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Conexão<span className="gradient-text">Água</span>
              </span>
            </button>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Plataforma digital educativa voltada para a conscientização sobre a importância da água potável, do saneamento básico e do uso consciente dos recursos hídricos.
            </p>
            {/* ODS 6 badge */}
            <div className="inline-flex items-center gap-3 glass-blue px-4 py-2.5 rounded-xl border border-cyan/15">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-blue flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-white text-sm">6</span>
              </div>
              <div>
                <p className="text-cyan text-xs font-semibold tracking-wider uppercase leading-none mb-0.5">ODS 6 — ONU</p>
                <p className="text-white/55 text-xs leading-none">Água Potável e Saneamento</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 tracking-wider uppercase">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 hover:text-cyan text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyan transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 tracking-wider uppercase">Projeto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <GraduationCap size={16} className="text-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-semibold mb-0.5">Instituição</p>
                  <p className="text-white/40 text-xs leading-snug">Universidade Jorge Amado — UNIJORGE</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Code2 size={16} className="text-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-semibold mb-0.5">Curso</p>
                  <p className="text-white/40 text-xs leading-snug">Sistemas de Informação</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 size={16} className="text-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-semibold mb-0.5">Parceiro</p>
                  <p className="text-white/40 text-xs leading-snug">Secretaria de Infraestrutura Hídrica e Saneamento — SIHS</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Heart size={16} className="text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-semibold mb-0.5">Autor</p>
                  <p className="text-white/40 text-xs leading-snug">Gil Maik de Jesus Reis Junior</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/25 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Conexão Água · Projeto Extensionista · UNIJORGE · Sistemas de Informação
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/25 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Alinhado ao ODS 6 — Agenda 2030
            </span>
            <a
              href="https://sdgs.un.org/goals/goal6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/25 hover:text-cyan text-xs transition-colors"
            >
              ONU <ExternalLink size={10} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}