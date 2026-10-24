import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type WordsPullUpProps = {
  text: string
  className?: string
  style?: React.CSSProperties
  /** Adiciona um asterisco sobrescrito depois da última letra da última palavra. */
  showAsterisk?: boolean
  delay?: number
}

export default function WordsPullUp({ text, className = '', style, showAsterisk = false, delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        const withAsterisk = showAsterisk && isLast

        return (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {withAsterisk ? (
              <>
                {word.slice(0, -1)}
                <span className="relative inline-block">
                  {word.slice(-1)}
                  <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none">*</span>
                </span>
              </>
            ) : (
              word
            )}
          </motion.span>
        )
      })}
    </span>
  )
}
