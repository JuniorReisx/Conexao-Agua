import { motion } from "framer-motion"
import { Droplets, RotateCcw, Trash2, Leaf, ShowerHead, Sprout, FlaskConical, Recycle } from "lucide-react"

const tips = [
  {
    icon: ShowerHead,
    title: "Banho Consciente",
    desc: "Reduza o tempo de banho para 5 minutos. Cada minuto a menos economiza até 15 litros de água.",
    saving: "~45L/dia",
    color: "from-cyan/20 to-cyan/5",
    border: "hover:border-cyan/30",
    accent: "text-cyan",
    glow: "shadow-cyan/20",
  },
  {
    icon: Droplets,
    title: "Feche a Torneira",
    desc: "Ao escovar os dentes ou lavar louça, feche a torneira. Uma torneira aberta desperdiça 12L por minuto.",
    saving: "~24L/vez",
    color: "from-blue/20 to-blue/5",
    border: "hover:border-blue/30",
    accent: "text-blue-400",
    glow: "shadow-blue/20",
  },
  {
    icon: RotateCcw,
    title: "Reutilize a Água",
    desc: "A água do enxágue de roupas pode ser usada para limpar pisos ou lavar o carro.",
    saving: "~80L/lavagem",
    color: "from-teal-500/20 to-teal-500/5",
    border: "hover:border-teal-500/30",
    accent: "text-teal-400",
    glow: "shadow-teal-500/20",
  },
  {
    icon: Sprout,
    title: "Irrigação Inteligente",
    desc: "Regue plantas no início da manhã ou fim de tarde para reduzir a evaporação em até 70%.",
    saving: "~60% evap.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "hover:border-emerald-500/30",
    accent: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: FlaskConical,
    title: "Descarte Correto",
    desc: "Nunca descarte óleo, medicamentos ou produtos químicos pelo ralo — eles contaminam rios e lençóis freáticos.",
    saving: "Preserva rios",
    color: "from-amber-500/20 to-amber-500/5",
    border: "hover:border-amber-500/30",
    accent: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
  {
    icon: Recycle,
    title: "Captação de Chuva",
    desc: "Um sistema simples de captação da água da chuva pode suprir até 40% do consumo não potável de uma residência.",
    saving: "~40% consumo",
    color: "from-violet-500/20 to-violet-500/5",
    border: "hover:border-violet-500/30",
    accent: "text-violet-400",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Trash2,
    title: "Evite Entupimentos",
    desc: "Nunca jogue resíduos sólidos no vaso sanitário. Isso compromete o sistema de saneamento de toda a comunidade.",
    saving: "Protege rede",
    color: "from-rose-500/20 to-rose-500/5",
    border: "hover:border-rose-500/30",
    accent: "text-rose-400",
    glow: "shadow-rose-500/20",
  },
  {
    icon: Leaf,
    title: "Consuma Conscientemente",
    desc: "Produtos com menor pegada hídrica reduzem o consumo indireto de água. 1kg de carne bovina usa ~15.000L de água.",
    saving: "Impacto global",
    color: "from-lime-500/20 to-lime-500/5",
    border: "hover:border-lime-500/30",
    accent: "text-lime-400",
    glow: "shadow-lime-500/20",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Dicas() {
  return (
    <section id="dicas" className="relative py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071020]/60 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue/40 to-transparent opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />

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
              <Leaf size={14} />
              Hábitos que Transformam
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-5"
          >
            Dicas para o <span className="gradient-text">Uso Consciente</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Pequenas mudanças no dia a dia geram um impacto enorme. Veja como você pode contribuir agora mesmo.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {tips.map((tip) => {
            const Icon = tip.icon
            return (
              <motion.div
                key={tip.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`group relative glass rounded-3xl p-6 border border-white/06 ${tip.border} transition-all duration-300 cursor-default hover:shadow-xl ${tip.glow}`}
              >
                {/* Icon area */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={tip.accent} />
                </div>

                {/* Saving badge */}
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/05 border border-white/10 ${tip.accent} mb-3 inline-block`}>
                  {tip.saving}
                </span>

                <h3 className="font-display font-bold text-white text-base mb-2">{tip.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{tip.desc}</p>

                {/* Hover glow corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-br-3xl bg-gradient-to-tl ${tip.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-blue inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-cyan/20">
            <Droplets size={18} className="text-cyan" />
            <p className="text-white/70 text-sm">
              Se cada brasileiro economizasse <span className="text-cyan font-semibold">1 litro por dia</span>, economizaríamos
              <span className="text-cyan font-semibold"> 215 bilhões de litros/ano</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}