import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export type Segment = {
  text: string
  className?: string
}

type WordsPullUpMultiStyleProps = {
  segments: Segment[]
  className?: string
  style?: React.CSSProperties
}

export default function WordsPullUpMultiStyle({ segments, className = '', style }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className ?? '' })),
  )

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map(({ word, className: wordClass }, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${wordClass}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginRight: i === words.length - 1 ? 0 : '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
