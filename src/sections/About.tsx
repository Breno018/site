import { CheckItem, Reveal } from '../components/ui'
import { img } from '../config'

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="container-x py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto flex max-w-lg items-end justify-end overflow-hidden rounded-[2rem] border border-line bg-[#F9F9FB] pr-[6%] pt-8">
            <img
              src={img('pessoa.webp')}
              alt="Mulher sorridente segurando um celular com o painel do TellexApp aberto"
              width={214}
              height={512}
              loading="lazy"
              className="relative w-[56%] max-w-[260px]"
            />
            <p className="absolute left-[6%] top-[38%] w-[36%] -rotate-6 font-hand text-xl leading-tight text-brand sm:text-2xl">
              Acompanhe tudo em tempo real pelo painel ou no celular!
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="chip">Para assistências técnicas e lojas</span>
          <h2 id="sobre-titulo" className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Gestão inteligente para o <span className="text-brand">crescimento da sua loja</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Todas as ferramentas que você precisa para vender mais, organizar melhor e tomar decisões inteligentes. Com o
            TellexApp, você ganha tempo, reduz erros e oferece uma experiência melhor para seus clientes.
          </p>
          <ul className="mt-7 space-y-3.5 text-[16px] font-medium">
            <CheckItem>Emissão e controle de OS</CheckItem>
            <CheckItem>Acompanhamento em tempo real</CheckItem>
            <CheckItem>Gestão de estoque e financeiro</CheckItem>
            <CheckItem>Histórico completo de clientes</CheckItem>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
