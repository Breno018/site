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
    <section aria-label="Benefícios" className="container-x pt-4 md:pt-6">
      <Reveal>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 bg-ink px-4 py-5 sm:px-6">
              <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-xs text-primary/80 sm:text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
