import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, TreePine, GraduationCap, HeartHandshake, TrendingUp, Globe2 } from "lucide-react"

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = to / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setCount(to); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, to, duration])

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>
}

// ── Data ──────────────────────────────────────────────────────────────────────
const metrics = [
  { icon: Users,         value: 2200, suffix: "M",  label: "Pessoas sem água potável",        color: "text-cyan",        bg: "from-cyan/20 to-cyan/5" },
  { icon: TreePine,      value: 3600, suffix: "M",  label: "Sem saneamento adequado",          color: "text-blue-400",    bg: "from-blue/20 to-blue/5" },
  { icon: GraduationCap, value: 54,   suffix: "%",  label: "Esgotos tratados no Brasil",       color: "text-emerald-400", bg: "from-emerald-500/20 to-emerald-500/5" },
  { icon: TrendingUp,    value: 80,   suffix: "%",  label: "Doenças evitáveis com saneamento", color: "text-amber-400",   bg: "from-amber-500/20 to-amber-500/5" },
]

const timeline = [
  {
    year: "2015",
    title: "Adoção do ODS 6",
    desc: "A ONU incorpora o acesso à água e saneamento como meta global dentro da Agenda 2030.",
    icon: Globe2,
    color: "cyan",
  },
  {
    year: "2018",
    title: "Marco Legal no Brasil",
    desc: "O Brasil atualiza o marco regulatório do saneamento, ampliando metas de universalização.",
    icon: TrendingUp,
    color: "blue",
  },
  {
    year: "2020",
    title: "Novo Marco do Saneamento",
    desc: "Lei 14.026 estabelece metas: 99% de cobertura em água e 90% em esgoto até 2033.",
    icon: HeartHandshake,
    color: "teal",
  },
  {
    year: "2030",
    title: "Meta Global",
    desc: "Prazo final para universalização do acesso à água potável e saneamento para todos os povos.",
    icon: TreePine,
    color: "emerald",
  },
]

const impacts = [
  {
    label: "Educação Ambiental",
    desc: "Populações informadas sobre o ciclo da água reduzem desperdício em até 30%.",
    pct: 30,
    color: "bg-cyan",
  },
  {
    label: "Saúde Pública",
    desc: "Saneamento adequado reduz mortalidade infantil em até 50% em regiões vulneráveis.",
    pct: 50,
    color: "bg-emerald-400",
  },
  {
    label: "Cobertura de Esgoto BR",
    desc: "Apenas 54% dos esgotos gerados no país são tratados atualmente.",
    pct: 54,
    color: "bg-blue-400",
  },
  {
    label: "Potencial de Melhoria",
    desc: "Com universalização, o Brasil pode evitar 1M de internações hospitalares/ano.",
    pct: 78,
    color: "bg-amber-400",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="w-full h-2 bg-white/08 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  )
}

export default function Impacto() {
  return (
    <section id="impacto" className="relative py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/40 to-transparent" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/06 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue/08 rounded-full blur-[110px] pointer-events-none" />

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
              <TrendingUp size={14} />
              Conscientização Coletiva
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            O Impacto de <span className="gradient-text">Cada Ação</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Educação ambiental e informação acessível são os maiores catalisadores da mudança social. Veja os números que mostram por quê.
          </motion.p>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.label}
                variants={fadeUp}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                className="glass rounded-3xl p-6 text-center border border-white/06 hover:border-white/15 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={18} className={m.color} />
                </div>
                <p className={`font-display font-black text-3xl ${m.color} mb-1`}>
                  <Counter to={m.value} suffix={m.suffix} />
                </p>
                <p className="text-white/45 text-xs leading-snug">{m.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Two col: timeline + indicators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h3 variants={fadeUp} className="font-display font-bold text-2xl text-white mb-8">
              Linha do Tempo
            </motion.h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-blue/40 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={item.year} variants={fadeUp} className="flex gap-6 group">
                      {/* Node */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${item.color}/30 to-${item.color}/10 border border-${item.color}/40 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon size={16} className={`text-${item.color}-400`} />
                        </div>
                        {i < timeline.length - 1 && (
                          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-8 bg-white/10" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-2">
                        <span className="text-xs font-bold text-cyan tracking-widest">{item.year}</span>
                        <h4 className="font-display font-bold text-white text-base mt-0.5 mb-1">{item.title}</h4>
                        <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Indicators */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h3 variants={fadeUp} className="font-display font-bold text-2xl text-white mb-8">
              Indicadores de Impacto
            </motion.h3>
            <div className="space-y-7">
              {impacts.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="glass rounded-2xl p-5 border border-white/06">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white font-semibold text-sm">{item.label}</span>
                    <span className="text-cyan font-bold font-display text-lg">{item.pct}%</span>
                  </div>
                  <p className="text-white/40 text-xs mb-3 leading-relaxed">{item.desc}</p>
                  <ProgressBar pct={item.pct} color={item.color} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-20 glass-blue rounded-3xl p-8 md:p-10 border border-cyan/15 text-center"
        >
          <HeartHandshake size={32} className="text-cyan mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl text-white mb-3">
            A Conscientização É o Primeiro Passo
          </h3>
          <p className="text-white/55 max-w-xl mx-auto text-base leading-relaxed">
            Quando uma pessoa aprende sobre o valor da água, ela transforma seu comportamento e influencia toda a sua comunidade. Educação ambiental é o multiplicador mais poderoso que existe.
          </p>
        </motion.div>
      </div>
    </section>
  )
}