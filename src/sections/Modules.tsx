import { BarChart3, DollarSign, Lock, ShoppingCart, Smartphone, Store, Users, Wrench } from 'lucide-react'
import { CardIn, PillCta, SectionIntro } from '../components/ui'

const MODULES = [
  { icon: Smartphone, title: 'Estoque IMEI', text: 'Controle individual de novos e seminovos por número de série.' },
  { icon: ShoppingCart, title: 'Frente de Caixa', text: 'Vendas rápidas com emissão de comprovantes e garantia.' },
  { icon: Wrench, title: 'Assistência', text: 'Ordens de serviço com checklist de vistoria 8P.' },
  { icon: DollarSign, title: 'Financeiro', text: 'Fluxo de caixa diário, despesas e apuração de lucro real.' },
  { icon: Users, title: 'Clientes', text: 'Histórico completo de compras e serviços por cliente.' },
  { icon: Store, title: 'Multi-Loja', text: 'Alterne entre suas lojas com apenas um clique.' },
  { icon: BarChart3, title: 'Relatórios', text: 'Ranking de marcas mais vendidas e comissões.' },
  { icon: Lock, title: 'Permissões', text: 'Acessos restritos por perfil: vendedor, técnico e dono.' },
]

export default function Modules() {
  return (
    <section aria-label="Módulos" className="container-x py-20 md:py-28">
      <SectionIntro
        label="Visão dos módulos"
        lines={[[{ text: 'Oito módulos,' }, { text: 'um só sistema.', className: 'italic font-serif' }]]}
      />

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-2 md:mt-16 lg:grid-cols-4 lg:gap-1">
        {MODULES.map(({ icon: Icon, title, text }, i) => (
          <CardIn as="li" key={title} index={i % 4} className="rounded-2xl bg-card p-6 sm:p-7">
            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-8 text-lg" style={{ color: '#E1E0CC' }}>
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">{text}</p>
          </CardIn>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <PillCta href="#planos">Conheça os planos</PillCta>
      </div>
    </section>
  )
}
