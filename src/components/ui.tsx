import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { img } from '../config'

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export function Logo({ light = false, size = 'md' }: { light?: boolean; size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'h-11 w-11' : 'h-9 w-9 sm:h-10 sm:w-10'
  const text = size === 'lg' ? 'text-2xl' : 'text-xl sm:text-2xl'
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={img('logo.png')} alt="" width={40} height={40} className={`${box} rounded-xl`} />
      <span className={`${text} font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Tellex<span className={light ? 'text-[#8EA6FF]' : 'text-brand'}>App</span>
      </span>
    </span>
  )
}

export function SectionHeading({
  chip,
  title,
  text,
  center = false,
}: {
  chip: string
  title: ReactNode
  text?: ReactNode
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="chip">{chip}</span>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{text}</p>}
    </div>
  )
}

export function CheckItem({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'green' }) {
  const color = tone === 'green' ? 'bg-emerald-500' : 'bg-brand'
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${color}`}>
        <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
      </span>
      <span>{children}</span>
    </li>
  )
}

/** Moldura de "tela do sistema" usada nos exemplos ilustrativos. */
export function ScreenFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="card overflow-hidden">
      <figcaption className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3 text-xs font-semibold text-muted">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="truncate">{title}</span>
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  )
}
