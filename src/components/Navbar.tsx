import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Droplets, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Início",        href: "#hero" },
  { label: "Sobre",         href: "#sobre" },
  { label: "ODS 6",         href: "#ods6" },
  { label: "Dicas",         href: "#dicas" },
  { label: "Impacto",       href: "#impacto" },
  { label: "Tecnologia",    href: "#tecnologia" },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState("#hero")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActiveLink(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/10 shadow-lg shadow-cyan/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => handleNav("#hero")} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center animate-pulse-glow">
              <Droplets size={22} className="text-white" />
            </div>
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Conexão<span className="gradient-text">Água</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeLink === link.href
                  ? "text-cyan-bright"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {activeLink === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/08 rounded-lg border border-cyan/20"
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("#ods6")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-blue text-white text-sm font-semibold
                       hover:shadow-lg hover:shadow-cyan/30 hover:scale-105 transition-all duration-300"
          >
            ODS 6
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/05 transition-all text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}