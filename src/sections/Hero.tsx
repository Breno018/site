import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const NAV_ITEMS = [
  { label: 'Our story', href: '#about' },
  { label: 'Collective', href: '#about' },
  { label: 'Workshops', href: '#features' },
  { label: 'Programs', href: '#features' },
  { label: 'Inquiries', href: '#top' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section id="top" className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <nav
          aria-label="Main"
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8"
        >
          <ul className="flex items-center gap-3 whitespace-nowrap text-[10px] sm:gap-6 sm:text-xs md:gap-12 md:text-sm lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-12 items-end gap-4 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="sr-only">Prisma</h1>
            <div aria-hidden="true">
              <WordsPullUp
                text="Prisma"
                showAsterisk
                className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              />
            </div>
          </div>

          <div className="col-span-12 flex flex-col items-start gap-5 pb-2 lg:col-span-4 lg:pb-[2vw]">
            <motion.p
              className="max-w-md text-xs text-primary/70 sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or
              labels but by passion and hunger to unlock potential through our unique perspectives.
            </motion.p>

            <motion.a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all duration-300 hover:gap-3 sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            >
              Join the lab
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
