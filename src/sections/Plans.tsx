import { ArrowRight, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'

const PLANS = [
  {
    name: 'Loja Inicial',
    price: '149',
    description: 'Para lojas focadas em vendas de aparelhos e acessórios.',
    items: ['1 loja cadastrada', 'Controle de estoque IMEI', 'Frente de caixa (PDV)', 'Suporte por e-mail/WhatsApp'],
    featured: false,
  },
  {
    name: 'Loja Profissional',
    price: '249',
    description: 'Para lojas com assistência técnica ativa.',
    items: ['Tudo do plano Loja Inicial', 'Ordens de serviço (OS)', 'Checklist vistoria 8P', 'Financeiro completo & DRE'],
    featured: true,
  },
  {
    name: 'Rede de Lojas',
    price: '399',
    description: 'Para quem possui mais de uma unidade.',
    items: ['Multi-loja ilimitado', 'Estoque inter-lojas', 'Relatórios consolidados', 'Suporte prioritário VIP'],
    featured: false,
  },
]

export default function Plans() {
  return (
    <section id="planos" aria-labelledby="planos-titulo" className="container-x py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          center
          chip="Investimento transparente"
          title={<span id="planos-titulo">Escolha o plano ideal para a sua operação</span>}
          text="Sem contratos engessados ou taxas escondidas. Cancele ou mude de plano quando quiser."
        />
      </Reveal>

      <ul className="mx-auto mt-14 grid max-w-6xl items-stretch gap-5 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal
            as="li"
            key={plan.name}
            delay={i * 0.08}
            className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
              plan.featured ? 'bg-brand-gradient text-white shadow-brand lg:-my-3 lg:py-11' : 'card'
            }`}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-xs font-bold">Mais escolhido</span>
            )}
            <h3 className={`text-lg font-bold ${plan.featured ? '' : 'text-ink'}`}>{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-lg font-bold">R$</span>
              <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
              <span className={plan.featured ? 'text-white/80' : 'text-muted'}>/mês</span>
            </p>
            <p className={`mt-3 text-[15px] ${plan.featured ? 'text-white/85' : 'text-muted'}`}>{plan.description}</p>

            <ul className="mt-6 space-y-3 text-[15px]">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? 'text-white' : 'text-emerald-500'}`}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contato" className={`${plan.featured ? 'btn-white' : 'btn-outline'} mt-8 w-full`}>
              Quero este plano <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
