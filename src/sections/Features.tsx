import { ArrowRight, BarChart3, DollarSign, Lock, ShoppingCart, Smartphone, Store, Users, Wrench } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'

const MODULES = [
  { icon: Smartphone, title: 'Estoque IMEI', text: 'Controle individual de novos e seminovos por número de série.' },
  { icon: ShoppingCart, title: 'Frente de Caixa', text: 'Vendas rápidas com emissão de comprovantes e garantia.' },
  { icon: Wrench, title: 'Assistência', text: 'Ordens de serviço com checklist de vistoria 8P.' },
  { icon: DollarSign, title: 'Financeiro', text: 'Fluxo de caixa diário, despesas e apuração de lucro real.' },
  { icon: Users, title: 'Clientes', text: 'Histórico completo de compras e serviços por cliente.' },
  { icon: Store, title: 'Multi-Loja', text: 'Alterne entre suas lojas com apenas um clique.' },
  { icon: BarChart3, title: 'Relatórios', text: 'Ranking de marcas mais vendidas e comissões.' },
  { icon: Lock, title: 'Permissões', text: 'Acessos restritos por perfil (Vendedor, Técnico, Dono).' },
]

export default function Features() {
  return (
    <section id="funcionalidades" aria-labelledby="func-titulo" className="bg-surface py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_2fr] lg:gap-14">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            chip="Funcionalidades"
            title={<span id="func-titulo">Tudo o que sua loja precisa em um só lugar</span>}
            text="Um sistema integrado que atende desde o atendimento no balcão até a gestão financeira da sua loja de celular e assistência técnica."
          />
          <a href="#planos" className="btn-primary mt-8">
            Conheça os planos <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {MODULES.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 4) * 0.06}
              className="card p-6 transition-colors duration-300 hover:border-brand/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
