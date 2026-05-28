import { motion } from "framer-motion"
import { Target, Users, Leaf, BarChart3 } from "lucide-react"
import type { Variants } from "framer-motion";

const stats = [
  { value: "2.2B", label: "pessoas sem água potável",     color: "text-cyan" },
  { value: "3.6B", label: "sem saneamento adequado",      color: "text-blue" },
  { value: "1M",   label: "crianças morrem/ano por água", color: "text-rose-400" },
  { value: "40%",  label: "redução de doenças possível",  color: "text-emerald-400" },
]

const pillars = [
  {
    icon:  Target,
    title: "Objetivo Global",
    desc:  "Garantir disponibilidade e gestão sustentável da água e saneamento para todos até 2030, como parte da Agenda de Desenvolvimento Sustentável da ONU.",
    tag:   "Meta 6.1 – 6.6",
  },
  {
    icon:  Users,
    title: "Impacto Social",
    desc:  "Comunidades sem saneamento básico enfrentam maior vulnerabilidade social, evasão escolar — especialmente entre meninas — e ciclos de pobreza difíceis de romper.",
    tag:   "Equidade e Inclusão",
  },
  {
    icon:  Leaf,
    title: "Preservação Ambiental",
    desc:  "Proteger ecossistemas aquáticos, reduzir a poluição hídrica e restaurar nascentes são compromissos fundamentais do ODS 6 para garantir recursos para as gerações futuras.",
    tag:   "Sustentabilidade",
  },
  {
    icon:  BarChart3,
    title: "Progresso no Brasil",
    desc:  "O Brasil avançou no abastecimento urbano, mas ainda enfrenta desafios no tratamento de esgoto — apenas 54% dos esgotos gerados no país são tratados adequadamente.",
    tag:   "Dados SNIS 2023",
  },
]

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Ods6() {
  return (
    <section id="ods6" className="relative py-32 overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/50 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="text-center mb-20"
        >
          {/* ODS badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="glass-blue px-6 py-3 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center">
                <span className="font-display font-black text-white text-lg">6</span>
              </div>
              <div className="text-left">
                <p className="text-cyan text-xs font-semibold tracking-widest uppercase">Objetivo de Desenvolvimento</p>
                <p className="text-white font-display font-bold text-lg">Água Potável e Saneamento</p>
              </div>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-5"
          >
            Um Direito <span className="gradient-text">Humano Fundamental</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            O ODS 6 reconhece que a água e o saneamento são direitos humanos essenciais e base para outros 12 objetivos de desenvolvimento sustentável.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <p className={`font-display font-black text-3xl md:text-4xl ${s.color} mb-2`}>{s.value}</p>
              <p className="text-white/50 text-sm leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="glass rounded-3xl p-8 border border-white/06 hover:border-cyan/20 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-blue/10 flex items-center justify-center flex-shrink-0 text-cyan group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan/10 text-cyan border border-cyan/20">
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-white/55 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}