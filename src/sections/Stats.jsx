// Numbers are taken from the stats strip on https://tis.edu.in/
const stats = [
  { value: '22', label: 'Acre pollution-free campus' },
  { value: '16+', label: 'Sports' },
  { value: '24×7', label: 'Medical assistance' },
  { value: '6:1', label: 'Student–teacher ratio' },
  { value: '12+', label: 'Collaborations' },
]

export default function Stats() {
  return (
    <section className="stats" aria-label="TIS at a glance">
      <div className="container">
        <dl className="stats__grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
