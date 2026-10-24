import { ArrowRight } from 'lucide-react'
import { Reveal } from '../components/ui'
import { img } from '../config'

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="container-x py-16 sm:py-20">
      <Reveal>
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-10 text-white sm:px-12 sm:py-14 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <img
            src={img('logo.png')}
            alt=""
            width={140}
            height={140}
            loading="lazy"
            className="hidden h-28 w-28 -rotate-6 rounded-[1.75rem] shadow-[0_24px_40px_-12px_rgba(0,0,0,.45)] lg:block xl:h-32 xl:w-32"
          />
          <div className="relative">
            <h2 id="cta-titulo" className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Sua loja mais inteligente começa aqui.
            </h2>
            <p className="mt-3 max-w-xl text-lg text-white/85">
              Experimente o TellexApp e veja como é fácil levar sua gestão para o próximo nível.
            </p>
          </div>
          <div className="relative flex flex-col items-start gap-3 lg:items-center">
            <a href="#contato" className="btn-white min-w-[220px]">
              Comece agora <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-sm text-white/85">Sem burocracia. Teste grátis.</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
