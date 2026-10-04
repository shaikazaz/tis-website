import SectionHeading from '../components/SectionHeading'

// Facts come from the homepage of https://tis.edu.in/
const facts = [
  { label: 'Curriculum', value: 'CBSE' },
  { label: 'Classes', value: 'IV to XII' },
  { label: 'Student–teacher ratio', value: '6:1' },
  { label: 'Admission type', value: 'Co-ed boarding & day' },
]

export default function Academics() {
  return (
    <section id="academics" className="section" aria-labelledby="academics-title">
      <div className="container academics__grid">
        <div>
          <SectionHeading
            eyebrow="Academics"
            title={<span id="academics-title">Academic excellence, with room to be creative.</span>}
          />
          <p>
            Our CBSE curriculum focuses on academic excellence, holistic development, and
            preparing students to be global leaders.
          </p>
          <p>
            With a 6:1 student–teacher ratio and 12+ collaborations, students get the attention and
            exposure to bring out the best in every subject, from academics to music, art and drama.
          </p>
        </div>

        <dl className="academics__facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
