export default function Stats({ students }) {
  const total  = students.length
  const passed = students.filter(s => s.score >= 40).length
  const avg    = total ? Math.round(students.reduce((a, s) => a + s.score, 0) / total) : 0

  const cards = [
    { label: 'TOTAL STUDENTS', value: total },
    { label: 'PASSED',         value: passed },
    { label: 'AVG SCORE',      value: avg },
  ]

  return (
    <div className="panel">
      <div className="corner tl" /><div className="corner tr" />
      <div className="corner bl" /><div className="corner br" />
      <div className="stats-grid">
        {cards.map(c => (
          <div className="stat-card" key={c.label}>
            <div className="stat-label">{c.label}</div>
            <div className="stat-val">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
