import { motion } from 'framer-motion'
import { images, site } from '../data/site'
import Button from '../components/Button'
import SectionReveal from '../components/SectionReveal'

export default function VirtualTour() {
  return (
    <section className="virtual-tour" aria-labelledby="tour-title">
      <div className="virtual-tour__media">
        <img src={images.hero} alt="Tulas International School campus" loading="lazy" decoding="async" />
        <div className="virtual-tour__overlay" />
      </div>
      <div className="container virtual-tour__content">
        <SectionReveal>
          <p className="eyebrow eyebrow--light">Explore TIS</p>
          <h2 id="tour-title">Step inside the campus.</h2>
          <p>Discover the spaces, facilities and atmosphere of Tulas International School through the official school website.</p>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button href={site.homeUrl} external variant="ghost">Explore Virtual Tour</Button>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  )
}
