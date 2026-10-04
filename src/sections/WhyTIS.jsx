import SectionHeading from '../components/SectionHeading'

// Each card restates a theme that appears in the copy on https://tis.edu.in/
const reasons = [
  {
    title: 'Academic Excellence',
    text: 'A CBSE curriculum focused on academic excellence, for Class IV to XII.',
  },
  {
    title: 'Holistic Development',
    text: 'Support for every student, whether it is academics, music, art or drama.',
  },
  {
    title: 'Sports',
    text: '16+ sports curated to bring joy and discipline to student life.',
  },
  {
    title: 'Leadership',
    text: 'A community that encourages leadership, innovation and lifelong learning.',
  },
  {
    title: 'Creative Learning',
    text: 'Learning that feels like an adventure, where curiosity leads and creativity thrives.',
  },
  {
    title: 'Modern Facilities',
    text: 'A 22-acre pollution-free campus with 24×7 medical assistance.',
  },
]

export default function WhyTIS() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why TIS"
          title={<span id="why-title">A school that chooses you back.</span>}
          intro="Tulas is more than a place to learn. It is a place to belong, grow and shine."
        />
        <ul className="why__grid">
          {reasons.map((reason, index) => (
            <li key={reason.title}>
              <article className="why-card">
                <span className="why-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
