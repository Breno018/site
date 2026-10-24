import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'

const BODY =
  'Lidar com aparelhos de alto valor exige controles que cadernos e planilhas não oferecem. Perder tempo procurando aparelhos, vender um seminovo sem registrar o IMEI, ouvir reclamações depois da manutenção, encontrar furos no caixa e não saber o lucro real. O TellexApp foi criado para eliminar esses gargalos e trazer a organização que sua equipe precisa para focar no que importa: vender mais.'

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: bodyRef, offset: ['start 0.8', 'end 0.2'] })
  const chars = BODY.split('')

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-black px-4 py-20 sm:px-6 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl bg-card px-6 py-16 text-center sm:px-10 md:rounded-[2rem] md:py-24 lg:py-28">
        <p className="label mb-6 sm:mb-8">Para lojas de celular e assistências técnicas</p>

        <h2 id="sobre-titulo" style={{ color: '#E1E0CC' }}>
          <WordsPullUpMultiStyle
            className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: 'Mais controle,', className: 'font-normal' },
              { text: 'mais resultados', className: 'italic font-serif' },
              { text: 'para quem vende e conserta celulares.', className: 'font-normal' },
            ]}
          />
        </h2>

        <p
          ref={bodyRef}
          className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-[#DEDBC8] sm:mt-14 sm:text-sm md:text-base"
          aria-label={BODY}
        >
          <span aria-hidden="true">
            {chars.map((char, i) => (
              <AnimatedLetter key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
            ))}
          </span>
        </p>
      </div>
    </section>
  )
}
