import { MotionConfig } from 'framer-motion'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-black">
        <Hero />
        <About />
        <Features />
      </main>
    </MotionConfig>
  )
}
