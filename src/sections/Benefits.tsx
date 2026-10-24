import { BarChart3, Headphones, ShieldCheck, Smartphone } from 'lucide-react'
import { Reveal } from '../components/ui'

const ITEMS = [
  { icon: BarChart3, label: 'Relatórios em tempo real' },
  { icon: ShieldCheck, label: 'Segurança e confiabilidade' },
  { icon: Smartphone, label: 'Acesso de qualquer lugar' },
  { icon: Headphones, label: 'Suporte especializado' },
]

export default function Benefits() {
  return (
    <section aria-label="Benefícios" className="container-x">
      <Reveal>
        <div className="grid gap-8 rounded-3xl bg-brand-gradient px-6 py-8 text-white sm:px-10 lg:grid-cols-[1.1fr_2fr] lg:items-center lg:gap-6">
          <p className="text-lg leading-snug">
            <strong className="font-extrabold">TellexApp</strong> é o sistema completo para assistências técnicas e lojas
            que querem mais controle, agilidade e resultados.
          </p>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:border-l lg:border-white/20 lg:pl-6">
            {ITEMS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/10">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
