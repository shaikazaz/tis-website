import { images } from '../data/site'

export default function Introduction() {
  return (
    <section id="about" className="section intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div>
          <p className="eyebrow">Welcome to TIS</p>
          <h2 id="intro-title" className="intro__title">
            One of India&rsquo;s top boarding and day schools, in the hills of Dehradun.
          </h2>
          <p>
            Tulas International School was established in 2012 under the aegis of Rishabh
            Educational Trust to impart education through seamless opportunities.
          </p>
          <p>
            Our CBSE curriculum focuses on academic excellence, holistic development, and
            preparing students to be global leaders. We provide modern facilities and a nurturing
            environment where students can thrive academically, socially and culturally.
          </p>
        </div>
        <figure className="intro__figure">
          <img
            src={images.intro}
            alt="Students enjoying school life at Tulas International School"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
