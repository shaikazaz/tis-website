import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionReveal from '../components/SectionReveal'
import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="achievements-title">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Recognition"
            title={<span id="achievements-title">A record built over time.</span>}
            intro="A selection of recognitions and achievements published by TIS across education, leadership and student activities."
          />
        </SectionReveal>
        <div className="achievement-list">
          {achievements.map((item, index) => (
            <motion.article
              className="achievement"
              key={item.year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="achievement__year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
