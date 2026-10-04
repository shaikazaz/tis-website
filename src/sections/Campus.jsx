import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { images } from '../data/site'

export default function Campus() {
  const frameRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Move the image slightly slower than the page for a gentle parallax.
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <section id="campus" className="section section--tint campus" aria-labelledby="campus-title">
      <div className="container campus__grid">
        <div ref={frameRef} className="campus__frame">
          <motion.img
            src={images.campusMain}
            alt="The 22-acre Tulas International School campus"
            loading="lazy"
            decoding="async"
            style={{ y: reduceMotion ? 0 : y, scale: 1.15 }}
          />
        </div>

        <div className="campus__text">
          <p className="eyebrow">Campus Experience</p>
          <h2 id="campus-title">Twenty-two acres to explore, play and grow.</h2>
          <p>
            Our pollution-free campus in Dhoolkot, Selaqui, Dehradun is built around the idea that
            school should feel like an adventure: every day brings something new to discover.
          </p>
          <p>
            When students are inspired, they don&rsquo;t just learn, they grow, explore and shape
            their own futures.
          </p>
          <img
            className="campus__side"
            src={images.campusSide}
            alt="Students taking part in a school event at TIS"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
