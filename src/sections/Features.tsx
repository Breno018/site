import { ArrowRight, Check, ShoppingCart, Smartphone, Wrench, type LucideIcon } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import { CardIn } from '../components/ui'
import { img } from '../config'
import { COLORS } from '../theme'

type Feature = {
  number: string
  title: string
  icon: LucideIcon
  items: string[]
  href: string
}

const FEATURES: Feature[] = [
  {
    number: '01',
    title: 'Estoque por IMEI.',
    icon: Smartphone,
    items: [
      'Controle individual de novos e seminovos.',
      'Rastreio pelo número de série de cada aparelho.',
      'Garantia consultada em segundos.',
      'Trade-in registrado como parte do pagamento.',
    ],
    href: '#imei',
  },
  {
    number: '02',
    title: 'Assistência 8P.',
    icon: Wrench,
    items: [
      'Ordens de serviço com vistoria de 8 itens.',
      'OS impressa e assinada pelo cliente.',
      'Margem de lucro calculada por serviço.',
    ],
    href: '#checklist',
  },
  {
    number: '03',
    title: 'Caixa sem erros.',
    icon: ShoppingCart,
    items: [
      'PIX, cartão, dinheiro e boleto no mesmo pedido.',
      'Fechamento de caixa cego com conferência real.',
      'Comissões e lucro real apurados automaticamente.',
    ],
    href: '#pdv',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="relative min-h-screen overflow-hidden bg-ink px-4 py-20 sm:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-12 flex flex-col items-center text-center md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: COLORS.title }}
            segments={[{ text: 'Tudo o que sua loja precisa em um só lugar.' }]}
          />
          <WordsPullUpMultiStyle
            className="text-xl font-normal text-dim sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[{ text: 'Do balcão ao financeiro. Feito para sua loja.' }]}
          />
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          <CardIn className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl lg:min-h-0">
            <img
              src={img('dashboard.webp')}
              alt="Painel do TellexApp com faturamento, lucro e vendas"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-left-top brightness-[0.8]"
            />
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <p className="relative p-6 text-lg sm:text-xl" style={{ color: COLORS.title }}>
              Sua loja inteira em um painel.
            </p>
          </CardIn>

          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <CardIn key={feature.number} index={i + 1} className="flex flex-col rounded-2xl bg-panel p-6 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
                </span>

                <h3 className="mt-8 flex items-baseline justify-between gap-3 text-lg sm:text-xl" style={{ color: COLORS.title }}>
                  {feature.title}
                  <span className="text-xs text-dim sm:text-sm">{feature.number}</span>
                </h3>

                <ul className="mt-6 space-y-3">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={feature.href}
                  className="group mt-auto inline-flex items-center gap-1.5 pt-8 text-sm text-primary transition-colors hover:text-cream"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </CardIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
