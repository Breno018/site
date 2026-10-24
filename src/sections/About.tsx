import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'

const BODY =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: bodyRef, offset: ['start 0.8', 'end 0.2'] })
  const chars = BODY.split('')

  return (
    <section id="about" className="bg-black px-4 py-20 sm:px-6 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 text-center sm:px-10 md:rounded-[2rem] md:py-24 lg:py-28">
        <p className="mb-6 text-[10px] text-primary sm:mb-8 sm:text-xs">Visual arts</p>

        <h2 style={{ color: '#E1E0CC' }}>
          <WordsPullUpMultiStyle
            className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal' },
              { text: 'a self-taught director.', className: 'italic font-serif' },
              {
                text: 'I have skills in color grading, visual effects, and narrative design.',
                className: 'font-normal',
              },
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
