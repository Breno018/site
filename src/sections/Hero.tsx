import { motion } from 'framer-motion'
import WordsPullUp from '../components/WordsPullUp'
import { EASE_OUT, Logo, PillCta } from '../components/ui'
import { img, systemLink } from '../config'
import { COLORS } from '../theme'

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
]


export default function Hero() {
  return (
    <section id="inicio" className="h-[100svh] min-h-[560px] p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-card md:rounded-[2rem]">
        {/* Fundo: atmosfera da marca (brilhos azul/violeta, grade sutil e ruído) */}
        <div className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[90%] w-[80%] rounded-full bg-brand-violet/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-1/4 -top-1/3 h-[70%] w-[60%] rounded-full bg-brand-blue/25 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#C9D1FF_1px,transparent_1px),linear-gradient(90deg,#C9D1FF_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_60%_30%,#000_20%,transparent_70%)]"
        />

        {/* Painel real do TellexApp como uma tela flutuante, nítida, que some suavemente embaixo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[15%] w-[125%] -translate-x-1/2 [perspective:1600px] md:top-[12%] md:w-[92%] lg:left-auto lg:right-[4%] lg:top-[13%] lg:w-[min(50%,80svh)] lg:max-w-[900px] lg:translate-x-0 [@media(orientation:landscape)_and_(max-height:500px)]:left-auto [@media(orientation:landscape)_and_(max-height:500px)]:right-[3%] [@media(orientation:landscape)_and_(max-height:500px)]:top-12 [@media(orientation:landscape)_and_(max-height:500px)]:w-[40%] [@media(orientation:landscape)_and_(max-height:500px)]:translate-x-0"
        >
          <motion.div
            className="[transform-style:preserve-3d]"
            initial={{ opacity: 0, y: 80, rotateX: 28 }}
            animate={{ opacity: 1, y: 0, rotateX: 14 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT }}
          >
            <motion.div
              className="[mask-image:linear-gradient(to_bottom,#000_55%,transparent_92%)] lg:[mask-image:linear-gradient(to_bottom,#000_40%,transparent_82%)] lg:[transform:rotateY(-10deg)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, delay: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="overflow-hidden rounded-xl border border-primary/15 bg-panel shadow-[0_40px_120px_-30px_rgba(47,91,255,.55)] md:rounded-2xl">
                <div className="flex items-center gap-1.5 border-b border-primary/10 px-3 py-2 md:px-4 md:py-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary/25" />
                  <span className="h-2 w-2 rounded-full bg-primary/25" />
                  <span className="h-2 w-2 rounded-full bg-primary/25" />
                </div>
                <img src={img('dashboard.webp')} alt="" width={976} height={780} className="block w-full brightness-[0.92]" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay" />
        {/* Garante leitura do título e do texto sobre o painel */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-ink/60 to-ink/95" />

        <a href="#inicio" aria-label="TellexApp, início" className="absolute left-5 top-4 z-20 hidden lg:block">
          <Logo size="sm" />
        </a>

        <nav
          aria-label="Navegação principal"
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-ink px-4 py-2 md:rounded-b-3xl md:px-8"
        >
          <ul className="flex items-center gap-3 whitespace-nowrap text-[10px] sm:gap-6 sm:text-xs md:gap-12 md:text-sm lg:gap-14">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[28px] items-center transition-colors duration-200"
                  style={{ color: COLORS.link }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.linkHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.link)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={systemLink()}
          className="absolute right-5 top-4 z-20 hidden text-sm transition-colors lg:block"
          style={{ color: COLORS.link }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.linkHover)}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.link)}
        >
          Entrar no sistema ↗
        </a>

        <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-12 items-end gap-4 px-4 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="sr-only">TellexApp — sistema de gestão para lojas de celular e assistências técnicas</h1>
            <div aria-hidden="true">
              <WordsPullUp
                text="TellexApp"
                showAsterisk
                className="pr-[0.2em] text-[18vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[17vw] lg:text-[12.5vw] [@media(orientation:landscape)_and_(max-height:500px)]:text-[11vw] 2xl:text-[12vw]"
                style={{ color: COLORS.title }}
              />
            </div>
          </div>

          <div className="col-span-12 flex flex-col items-start gap-5 pb-1 lg:col-span-4 lg:pb-[1.5vw]">
            <motion.p
              className="max-w-md text-xs text-primary/70 sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
            >
              O sistema de gestão feito para quem vende e conserta celulares. Estoque individual por IMEI, ordens de
              serviço com vistoria na entrada e caixa organizado no fim do dia. Sem complicações.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE_OUT }}
            >
              <PillCta href="#contato">Comece agora</PillCta>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
