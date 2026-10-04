import { motion } from 'framer-motion'
import { images, site } from '../data/site'
import Button from '../components/Button'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={images.hero}
        alt="Aerial view of the Tulas International School campus in Dehradun"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <motion.div className="container hero__content" variants={container} initial="hidden" animate="show">
        <motion.p className="eyebrow eyebrow--light" variants={item}>
          CBSE Co-ed Boarding &amp; Day School · Dehradun
        </motion.p>
        <motion.h1 id="hero-title" variants={item}>
          Let&rsquo;s do it <em>with Tulas.</em>
        </motion.h1>
        <motion.p className="hero__text" variants={item}>
          A CBSE school for boys and girls from Class IV to XII, set on a 22-acre pollution-free
          campus in Dehradun, Uttarakhand. Academic excellence, holistic development and 16+ sports.
        </motion.p>
        <motion.div className="hero__actions" variants={item}>
          <Button href={site.applyUrl} external>Apply Now</Button>
          <Button href="#campus" variant="ghost">Explore the campus</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
