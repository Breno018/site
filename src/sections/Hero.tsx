import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { img } from '../config'

const EASE = [0.22, 1, 0.36, 1] as const

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#F3F6FF] to-white pb-16 pt-[calc(110px+env(safe-area-inset-top))] sm:pb-24 lg:pt-36"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div>
          <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-brand">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Sistema para vendas e assistência técnica
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.1rem]"
          >
            Mais controle, mais resultados <span className="text-brand">para sua loja.</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            O sistema de gestão feito para quem vende e conserta celulares. Estoque individual por IMEI, ordens de
            serviço com vistoria na entrada e caixa organizado no fim do dia. Sem complicações.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="btn-primary">
              Comece agora <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#como-funciona" className="btn-outline">
              <PlayCircle className="h-5 w-5 text-brand" aria-hidden="true" /> Ver demonstração
            </a>
          </motion.div>

          <motion.ul {...fade(0.32)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-medium">
            {['Simples e intuitivo', 'Completo e integrado', 'Feito para sua loja'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                  <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                    <path d="M2.5 6.2l2.2 2.2L9.5 3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative"
        >
          <div
            className="absolute -right-24 -top-16 h-[120%] w-[90%] rounded-[45%_55%_40%_60%] bg-brand-gradient opacity-[0.14] blur-2xl"
            aria-hidden="true"
          />
          <img
            src={img('dashboard.webp')}
            alt="Painel do TellexApp com resumo de vendas, faturamento, lucro líquido e atalhos para nova venda e novo conserto"
            width={976}
            height={780}
            className="relative w-full rounded-2xl border border-line shadow-[0_40px_80px_-30px_rgba(31,69,224,.35)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
