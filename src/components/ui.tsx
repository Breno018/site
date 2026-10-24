import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { img } from '../config'
import WordsPullUpMultiStyle, { type Segment } from './WordsPullUpMultiStyle'

export const EASE_OUT = [0.16, 1, 0.3, 1] as const
export const EASE_CARD = [0.22, 1, 0.36, 1] as const

/** Entrada suave (sobe e aparece) quando o elemento entra na tela. */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
}) {
  const Tag = as === 'li' ? motion.li : motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    >
      {children}
    </Tag>
  )
}

/** Cartão que entra com leve zoom (0.95 → 1), como os cartões da seção Features. */
export function CardIn({ children, index = 0, className = '', as = 'div' }: { children: ReactNode; index?: number; className?: string; as?: 'div' | 'li' }) {
  const Tag = as === 'li' ? motion.li : motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: EASE_CARD }}
    >
      {children}
    </Tag>
  )
}

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'h-7 w-7 rounded-lg' : 'h-9 w-9 rounded-xl'
  const text = size === 'sm' ? 'text-base' : 'text-xl'
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={img('logo.png')} alt="" width={36} height={36} className={box} />
      <span className={`${text} font-bold tracking-tight`} style={{ color: '#E1E0CC' }}>
        Tellex<span className="text-primary/60">App</span>
      </span>
    </span>
  )
}

/** Cabeçalho de seção: rótulo pequeno + título com palavras subindo (estilo Prisma). */
export function SectionIntro({
  label,
  lines,
  className = '',
}: {
  label?: string
  lines: Segment[][]
  className?: string
}) {
  return (
    <div className={`text-center ${className}`}>
      {label && <p className="label mb-6">{label}</p>}
      <h2 className="flex flex-col items-center">
        {lines.map((segments, i) => (
          <WordsPullUpMultiStyle
            key={i}
            segments={segments}
            className="text-2xl font-normal leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ color: i === 0 ? '#E1E0CC' : undefined }}
          />
        ))}
      </h2>
    </div>
  )
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <span className="text-gray-400">{children}</span>
    </li>
  )
}

/** Botão pílula creme com círculo preto e seta, no estilo "Join the lab". */
export function PillCta({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className="pill-cta group"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <span className="pill-cta-circle">
        <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
      </span>
    </a>
  )
}

/** Moldura de "tela do sistema" usada nos exemplos ilustrativos. */
export function ScreenFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-panel">
      <figcaption className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-gray-400">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="truncate">{title}</span>
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  )
}
