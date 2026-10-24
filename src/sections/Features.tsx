import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const CARD_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

type Feature = {
  number: string
  title: string
  icon: string
  items: string[]
}

const FEATURES: Feature[] = [
  {
    number: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Map every scene on a shared visual board.',
      'Arrange shots, references and notes in one place.',
      'Track progress from first sketch to final cut.',
      'Share boards with your crew in a single link.',
    ],
  },
  {
    number: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI analysis of pacing, framing and color.',
      'Creative notes pinned to the exact frame.',
      'Integrations with the tools you already use.',
    ],
  },
  {
    number: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Silence notifications while you create.',
      'Ambient soundscapes tuned for deep focus.',
      'Sync focus sessions with your schedule.',
    ],
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

function cardMotion(index: number, isInView: boolean) {
  return {
    initial: { opacity: 0, scale: 0.95 },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
    transition: { duration: 0.8, delay: index * 0.15, ease: EASE },
  }
}

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative min-h-screen overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-12 flex flex-col items-center text-center md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#E1E0CC' }}
            segments={[{ text: 'Studio-grade workflows for visionary creators.' }]}
          />
          <WordsPullUpMultiStyle
            className="text-xl font-normal text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[{ text: 'Built for pure vision. Powered by art.' }]}
          />
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
        >
          <motion.article
            {...cardMotion(0, isInView)}
            className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl lg:min-h-0"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={CARD_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="relative p-6 text-lg sm:text-xl" style={{ color: '#E1E0CC' }}>
              Your creative canvas.
            </p>
          </motion.article>

          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.number}
              {...cardMotion(i + 1, isInView)}
              className="flex flex-col rounded-2xl bg-[#212121] p-6 sm:p-7"
            >
              <img
                src={feature.icon}
                alt=""
                className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
                loading="lazy"
              />

              <h3 className="mt-8 flex items-baseline justify-between gap-3 text-lg sm:text-xl" style={{ color: '#E1E0CC' }}>
                {feature.title}
                <span className="text-xs text-gray-500 sm:text-sm">{feature.number}</span>
              </h3>

              <ul className="mt-6 space-y-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#top"
                className="group mt-auto inline-flex items-center gap-1.5 pt-8 text-sm text-primary transition-colors hover:text-[#E1E0CC]"
              >
                Learn more
                <ArrowRight
                  className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
