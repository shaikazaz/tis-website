import { motion } from 'framer-motion'
import { images } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import SectionReveal from '../components/SectionReveal'

const points = [
  ['01', 'Independence', 'Boarding life gives students opportunities to manage routines, time and responsibilities.'],
  ['02', 'Community', 'Life on campus brings learning, activities and relationships together beyond the classroom.'],
  ['03', 'Wellbeing', 'TIS highlights structured routines, supervised residential life and round-the-clock medical support.'],
]

export default function Boarding() {
  return (
    <section id="boarding" className="section section--tint" aria-labelledby="boarding-title">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Boarding & Campus Life"
            title={<span id="boarding-title">A place to learn, live and grow.</span>}
            intro="TIS describes boarding as an extension of learning, where routines, activities and community help students develop beyond the classroom."
          />
        </SectionReveal>
        <div className="boarding__grid">
          <SectionReveal>
            <figure className="boarding__figure">
              <img src={images.campusSide} alt="Tulas International School campus" loading="lazy" decoding="async" />
              <figcaption>Campus life at Tulas International School, Dehradun.</figcaption>
            </figure>
          </SectionReveal>
          <div className="boarding__points">
            {points.map(([number, title, text]) => (
              <motion.article
                className="boarding-card"
                key={number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Number(number) * 0.06 }}
              >
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
