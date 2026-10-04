import { motion } from 'framer-motion'
import { site } from '../data/site'
import Button from '../components/Button'
import SectionReveal from '../components/SectionReveal'

export default function Admissions() {
  return (
    <section id="admissions" className="section admissions" aria-labelledby="admissions-title">
      <div className="container admissions__inner">
        <SectionReveal>
          <p className="eyebrow">Admissions</p>
          <h2 id="admissions-title">Begin the next chapter.</h2>
          <p>Registrations are open for the 2027 intake. Use the official TIS admission portal for the current application process.</p>
          <div className="admissions__actions">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button href={site.applyUrl} external>Begin Your Application</Button>
            </motion.div>
            <Button href={`tel:${site.phone}`} variant="ghost">Talk to Admissions</Button>
          </div>
        </SectionReveal>
        <div className="admissions__aside" aria-label="Admission highlights">
          <span>2027</span>
          <p>Admissions open</p>
          <small>Classes IV – XII</small>
        </div>
      </div>
    </section>
  )
}
