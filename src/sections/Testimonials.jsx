import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  const change = (direction) => {
    setActive((index) => (index + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section section--dark testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          light
          eyebrow="From The Parents"
          title={<span id="testimonials-title">What parents say about TIS.</span>}
          intro="Selected parent feedback published by Tulas International School."
        />
        <div className="testimonials__layout">
          <div className="testimonials__count" aria-hidden="true">
            <span>{String(active + 1).padStart(2, '0')}</span>
            <i />
            <span>{String(testimonials.length).padStart(2, '0')}</span>
          </div>
          <div className="testimonials__quote" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <p>“{current.quote}”</p>
                <footer>
                  <strong>{current.name}</strong>
                  <span>{current.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="testimonials__controls">
              <button type="button" onClick={() => change(-1)} aria-label="Previous testimonial">←</button>
              <button type="button" onClick={() => change(1)} aria-label="Next testimonial">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
