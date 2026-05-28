import { motion } from "framer-motion"
import { Monitor, Smartphone, Wifi, BookOpen, Share2, BarChart2, Globe2, Zap } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Conteúdo Educativo",
    desc: "Informações sobre água, saneamento e ODS 6 em linguagem acessível, disponíveis 24h por dia para qualquer pessoa.",
    color: "text-cyan",
    bg: "from-cyan/20 to-cyan/0",
  },
  {
    icon: Share2,
    title: "Difusão Social",
    desc: "A plataforma pode ser compartilhada facilmente, ampliando o alcance da conscientização para além do público inicial.",
    color: "text-blue-400",
    bg: "from-blue/20 to-blue/0",
  },
  {
    icon: BarChart2,
    title: "Dados e Indicadores",
    desc: "Visualizações de dados reais que tornam tangível o impacto das escolhas individuais e coletivas sobre os recursos hídricos.",
    color: "text-emerald-400",
    bg: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    icon: Globe2,
    title: "Acesso Universal",
    desc: "Plataforma responsiva, acessível por qualquer dispositivo, quebrando barreiras geográficas e socioeconômicas no acesso à informação.",
    color: "text-amber-400",
    bg: "from-amber-500/20 to-amber-500/0",
  },
]

const techPillars = [
  { icon: Wifi,        label: "Acesso Online",    sub: "Sempre disponível"   },
  { icon: Smartphone, label: "Responsivo",         sub: "Qualquer dispositivo" },
  { icon: Zap,        label: "Interativo",         sub: "Engajamento real"    },
  { icon: Monitor,    label: "Institucional",      sub: "Uso pela SIHS"       },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// ── Mockup visual ─────────────────────────────────────────────────────────────
function BrowserMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan/10">
      {/* Browser chrome */}
      <div className="bg-white/05 px-4 py-3 flex items-center gap-3 border-b border-white/08">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400/60" />
          <div className="w-3 h-3 rounded-full bg-amber-400/60" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
        </div>
        <div className="flex-1 bg-white/05 rounded-md h-6 flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan/50" />
          <span className="text-white/30 text-xs">conexaoagua.sihs.ba.gov.br</span>
        </div>
      </div>

      {/* Page preview */}
      <div className="bg-[#040e1e] p-6 min-h-[260px] relative overflow-hidden">
        {/* Fake hero */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-cyan to-blue flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <div className="h-3 w-24 rounded bg-white/20" />
          <div className="flex-1" />
          <div className="h-3 w-12 rounded bg-white/10" />
          <div className="h-3 w-12 rounded bg-white/10" />
          <div className="h-6 w-16 rounded-md bg-gradient-to-r from-cyan/60 to-blue/60" />
        </div>
        <div className="h-px bg-white/05 mb-6" />
        <div className="text-center mb-6">
          <div className="h-4 w-32 rounded bg-cyan/20 mx-auto mb-3" />
          <div className="h-8 w-56 rounded-lg bg-white/10 mx-auto mb-2" />
          <div className="h-5 w-48 rounded bg-gradient-to-r from-cyan/60 to-blue/60 mx-auto mb-4" />
          <div className="h-3 w-72 rounded bg-white/10 mx-auto mb-2" />
          <div className="h-3 w-60 rounded bg-white/08 mx-auto mb-5" />
          <div className="flex justify-center gap-3">
            <div className="h-8 w-24 rounded-xl bg-gradient-to-r from-cyan/60 to-blue/60" />
            <div className="h-8 w-20 rounded-xl bg-white/08 border border-white/10" />
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {["2.2B", "3.6B", "80%"].map((v) => (
            <div key={v} className="bg-white/05 rounded-xl p-3 text-center border border-white/06">
              <div className="h-5 w-10 rounded bg-gradient-to-r from-cyan/50 to-blue/50 mx-auto mb-1" />
              <div className="h-2 w-14 rounded bg-white/10 mx-auto" />
            </div>
          ))}
        </div>
        {/* Ambient glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-cyan/10 rounded-full blur-2xl" />
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="w-40 rounded-[2rem] overflow-hidden border-2 border-white/15 shadow-2xl shadow-blue/10 mx-auto">
      {/* Notch */}
      <div className="bg-[#040e1e] px-4 pt-3 pb-1 flex justify-center">
        <div className="w-16 h-4 rounded-full bg-white/10" />
      </div>
      {/* Screen */}
      <div className="bg-[#040e1e] px-3 pb-4 space-y-3">
        <div className="bg-white/05 rounded-xl p-3">
          <div className="h-2 w-20 rounded bg-cyan/40 mb-2" />
          <div className="h-4 w-28 rounded bg-white/15 mb-1" />
          <div className="h-4 w-24 rounded bg-gradient-to-r from-cyan/50 to-blue/50 mb-3" />
          <div className="h-7 w-full rounded-xl bg-gradient-to-r from-cyan/60 to-blue/60" />
        </div>
        {["Dicas de Economia", "ODS 6 — Metas", "Impacto Local"].map((item) => (
          <div key={item} className="bg-white/04 rounded-xl p-2.5 flex items-center gap-2 border border-white/06">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan/30 to-blue/20 flex-shrink-0" />
            <div>
              <div className="h-2 w-20 rounded bg-white/20 mb-1" />
              <div className="h-1.5 w-14 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      {/* Home bar */}
      <div className="bg-[#040e1e] pb-3 flex justify-center">
        <div className="w-16 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  )
}

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="relative py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f1e]/70 to-transparent" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue/06 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan/06 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="glass-blue px-5 py-2 rounded-full text-cyan text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              <Monitor size={14} />
              Tecnologia a Serviço do Planeta
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Plataforma Digital como <span className="gradient-text">Ferramenta de Impacto</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Quando tecnologia e consciência ambiental se encontram, a informação deixa de ser privilégio e se torna instrumento de transformação social.
          </motion.p>
        </motion.div>

        {/* Main layout: mockups + features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <BrowserMockup />
            {/* Floating mobile */}
            <motion.div
              className="absolute -bottom-10 -right-6 md:-right-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              animate={{ y: [0, -8, 0] }}
              style={{ animationDuration: "4s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" }}
            >
              <MobileMockup />
            </motion.div>
            {/* Glow behind mockups */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-cyan/10 to-blue/10 rounded-3xl blur-2xl scale-110" />
          </motion.div>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
            className="space-y-5"
          >
            {features.map((f) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex gap-5 glass rounded-2xl p-5 border border-white/06 hover:border-white/15 transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={f.color} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-1">{f.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Tech pillars row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {techPillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-5 text-center border border-white/06 hover:border-cyan/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/15 to-blue/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-cyan" />
                </div>
                <p className="font-display font-bold text-white text-sm">{p.label}</p>
                <p className="text-white/35 text-xs mt-0.5">{p.sub}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}