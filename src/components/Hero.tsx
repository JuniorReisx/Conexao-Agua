import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Globe, Droplets } from "lucide-react"

// ── Particles canvas ──────────────────────────────────────────────────────────
function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const particles = Array.from({ length: 60 }, () => ({
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() * 2.5 + 0.5,
      dx:   (Math.random() - 0.5) * 0.4,
      dy:   -Math.random() * 0.6 - 0.2,
      o:    Math.random() * 0.5 + 0.1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.o})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W }
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
      }
      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const handleScroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-[#071428]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(14,165,233,0.10),transparent)]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      <ParticlesCanvas />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/08 rounded-full blur-[120px]"
           style={{ animation: "float 8s ease-in-out infinite reverse" }} />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <span className="glass-blue px-5 py-2 rounded-full text-cyan text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
            <Globe size={14} />
            ODS 6 — Água Potável e Saneamento
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          <span className="text-white">Conexão</span>
          <br />
          <span className="gradient-text">Água</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Tecnologia e conscientização caminhando juntas pela preservação
          da água e pelo fortalecimento do saneamento básico.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => handleScroll("#sobre")}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan to-blue text-white font-semibold text-base
                       hover:shadow-2xl hover:shadow-cyan/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Saiba Mais
          </button>
          <button
            onClick={() => handleScroll("#ods6")}
            className="px-8 py-4 rounded-2xl glass text-white font-semibold text-base border border-cyan/30
                       hover:border-cyan/60 hover:bg-cyan/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <Droplets size={18} className="text-cyan" />
            ODS 6
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { value: "2.2B", label: "sem água potável" },
            { value: "3.6B", label: "sem saneamento" },
            { value: "80%", label: "doenças evitáveis" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <p className="font-display font-bold text-2xl gradient-text">{stat.value}</p>
              <p className="text-white/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScroll("#sobre")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-cyan transition-colors"
        style={{ animation: "float 2.5s ease-in-out infinite" }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}