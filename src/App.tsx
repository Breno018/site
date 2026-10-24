import { MotionConfig } from 'framer-motion'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Problems from './sections/Problems'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Highlights from './sections/Highlights'
import About from './sections/About'
import Results from './sections/Results'
import Plans from './sections/Plans'
import Faq from './sections/Faq'
import FinalCta from './sections/FinalCta'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Problems />
        <Features />
        <HowItWorks />
        <Highlights />
        <About />
        <Results />
        <Plans />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
