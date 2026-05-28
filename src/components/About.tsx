import { motion } from "framer-motion"
import { Droplets, AlertTriangle, HeartPulse, Cpu } from "lucide-react"
import type { Variants } from "framer-motion";
const cards = [
  {
    icon:  Droplets,
    color: "from-cyan/20 to-cyan/5",
    border:"border-cyan/20",
    iconColor: "text-cyan",
    title: "Importância da Água",
    desc:  "A água é essencial para toda forma de vida. Representa 70% do corpo humano, sendo indispensável para hidratação, higiene, agricultura e produção de energia. Sua escassez compromete a sobrevivência e o desenvolvimento de comunidades inteiras.",
  },
  {
    icon:  AlertTriangle,
    color: "from-orange-500/15 to-orange-500/5",
    border:"border-orange-500/20",
    iconColor: "text-orange-400",
    title: "Impacto do Desperdício",
    desc:  "O Brasil desperdiça cerca de 40% da água tratada nas redes de distribuição. Um vazamento de apenas 1 litro por hora representa 8.760 litros/ano. Cada gota desperdiçada agrava a crise hídrica e sobrecarrega o sistema de abastecimento.",
  },
  {
    icon:  HeartPulse,
    color: "from-emerald-500/15 to-emerald-500/5",
    border:"border-emerald-500/20",
    iconColor: "text-emerald-400",
    title: "Saneamento e Qualidade de Vida",
    desc:  "O acesso ao saneamento básico reduz em até 80% as doenças de veiculação hídrica, como cólera e hepatite A. Populações com saneamento adequado apresentam maior expectativa de vida, melhor desempenho escolar e maior produtividade econômica.",
  },
  {
    icon:  Cpu,
    color: "from-blue/15 to-blue/5",
    border:"border-blue/20",
    iconColor: "text-blue",
    title: "Tecnologia na Conscientização",
    desc:  "Plataformas digitais ampliam o alcance da educação ambiental, democratizando o acesso à informação. A tecnologia permite monitoramento em tempo real do consumo, gamificação da sustentabilidade e mobilização social em escala global.",
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
export default function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">

      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-cyan text-sm font-semibold tracking-widest uppercase">
            Por que importa
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-5"
          >
            Entendendo a <span className="gradient-text">Crise Hídrica</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Compreender os desafios relacionados à água é o primeiro passo para construir um futuro mais sustentável e justo.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${card.color} border ${card.border} glass group cursor-default`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                bg-gradient-to-br from-white/02 to-transparent" />

                <div className={`w-14 h-14 rounded-2xl bg-navy-mid flex items-center justify-center mb-6 ${card.iconColor}`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}