import { MotionConfig } from 'framer-motion'
import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import About from './sections/About'
import Problems from './sections/Problems'
import Features from './sections/Features'
import Modules from './sections/Modules'
import HowItWorks from './sections/HowItWorks'
import Highlights from './sections/Highlights'
import Mobile from './sections/Mobile'
import Results from './sections/Results'
import Plans from './sections/Plans'
import Faq from './sections/Faq'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-ink">
        <Hero />
        <Benefits />
        <About />
        <Problems />
        <Features />
        <Modules />
        <HowItWorks />
        <Highlights />
        <Mobile />
        <Results />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  )
}
