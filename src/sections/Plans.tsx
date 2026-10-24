import { ArrowRight, Check } from 'lucide-react'
import { CardIn, SectionIntro } from '../components/ui'

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
    <section id="planos" aria-label="Planos" className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionIntro
          label="Investimento transparente"
          lines={[
            [{ text: 'Escolha o plano ideal' }],
            [{ text: 'para a sua operação.', className: 'italic font-serif text-primary/60' }],
          ]}
        />
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-gray-500 sm:text-base">
          Sem contratos engessados ou taxas escondidas. Cancele ou mude de plano quando quiser.
        </p>

        <ul className="mt-12 grid gap-3 sm:gap-2 md:mt-16 lg:grid-cols-3 lg:gap-1">
          {PLANS.map((plan, i) => (
            <CardIn
              as="li"
              key={plan.name}
              index={i}
              className={`flex flex-col rounded-2xl p-7 sm:p-8 ${plan.featured ? 'bg-primary text-black' : 'bg-panel'}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg" style={plan.featured ? undefined : { color: '#E1E0CC' }}>
                  {plan.name}
                </h3>
                {plan.featured && <span className="rounded-full bg-black px-3 py-1 text-xs text-primary">Mais escolhido</span>}
              </div>
              <p className="mt-8 flex items-baseline gap-1" style={plan.featured ? undefined : { color: '#E1E0CC' }}>
                <span className="text-base">R$</span>
                <span className="text-6xl font-medium tracking-[-0.05em]">{plan.price}</span>
                <span className={`font-serif italic ${plan.featured ? 'text-black/60' : 'text-gray-500'}`}>/mês</span>
              </p>
              <p className={`mt-3 text-sm ${plan.featured ? 'text-black/70' : 'text-gray-400'}`}>{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-black' : 'text-primary'}`} aria-hidden="true" />
                    <span className={plan.featured ? 'text-black/80' : 'text-gray-400'}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`group mt-auto inline-flex items-center gap-1.5 pt-10 text-sm ${
                  plan.featured ? 'text-black' : 'text-primary hover:text-cream'
                }`}
              >
                Quero este plano
                <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </CardIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
