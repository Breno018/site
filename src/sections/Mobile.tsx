import { CheckItem, Reveal } from '../components/ui'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import { img } from '../config'
import { COLORS } from '../theme'

export default function Mobile() {
  return (
    <section aria-labelledby="mobile-titulo" className="container-x py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto flex max-w-lg items-end justify-end overflow-hidden rounded-2xl bg-brand-gradient pr-[6%] pt-8 md:rounded-[2rem]">
            <img
              src={img('pessoa.webp')}
              alt="Mulher sorridente segurando um celular com o painel do TellexApp aberto"
              width={214}
              height={512}
              loading="lazy"
              className="relative w-[56%] max-w-[260px]"
            />
            <p className="absolute left-[7%] top-[36%] w-[36%] -rotate-3 font-serif text-2xl italic leading-tight text-white sm:text-3xl">
              Acompanhe tudo em tempo real, no painel ou no celular.
            </p>
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="label">Gestão inteligente</p>
          <h2 id="mobile-titulo" className="mt-6" style={{ color: COLORS.title }}>
            <WordsPullUpMultiStyle
              className="!justify-start text-3xl leading-[0.95] sm:text-4xl md:text-5xl lg:text-6xl"
              segments={[
                { text: 'Sua loja', className: 'font-normal' },
                { text: 'na palma da mão.', className: 'italic font-serif text-brand-soft' },
              ]}
            />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-sm text-primary/70 sm:text-base" style={{ lineHeight: 1.4 }}>
              Todas as ferramentas que você precisa para vender mais, organizar melhor e tomar decisões inteligentes. Com
              o TellexApp, você ganha tempo, reduz erros e oferece uma experiência melhor para seus clientes.
            </p>
            <ul className="mt-8 space-y-3 text-sm sm:text-base">
              <CheckItem>Emissão e controle de OS</CheckItem>
              <CheckItem>Acompanhamento em tempo real</CheckItem>
              <CheckItem>Gestão de estoque e financeiro</CheckItem>
              <CheckItem>Histórico completo de clientes</CheckItem>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
