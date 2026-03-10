import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Partners from '@/components/Partners'
import Programs from '@/components/Programs'
import Community from '@/components/Community'
import Chapters from '@/components/Chapters'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <div className="page-home">
      <ScrollReveal />
      <Nav lightBackground={true} />
      <div>
        <Hero />
      </div>
      <About />
      <Partners />
      <Programs />
      <Community />
      <Chapters />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}
