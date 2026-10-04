import { images } from '../data/site'
import { sports } from '../data/sports'
import SectionHeading from '../components/SectionHeading'

export default function Sports() {
  return (
    <section id="sports" className="section section--dark" aria-labelledby="sports-title">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Sports"
          title={<span id="sports-title">It&rsquo;s not just a facility. It&rsquo;s the foundation.</span>}
          intro="16+ sports curated to bring joy and discipline to your life."
        />
        <div className="sports__grid">
          <figure className="sports__figure">
            <img
              src={images.sportsMain}
              alt="Students playing polo at Tulas International School"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <ul className="sports__list">
            {sports.map((sport, index) => (
              <li key={sport}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                {sport}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
