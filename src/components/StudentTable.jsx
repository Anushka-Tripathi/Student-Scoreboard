import { useState } from 'react'
import StudentRow from './StudentRow'

export default function StudentTable({ students, onUpdate, onSave, onDelete }) {
  const [query, setQuery] = useState('')

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="panel">
      <div className="corner tl" /><div className="corner tr" />
      <div className="corner bl" /><div className="corner br" />

      <div className="panel-label">
        <span className="dot" />
        STUDENT RECORDS
        <span style={{ marginLeft: 'auto', fontSize: '11px', letterSpacing: '2px', color: '#1df2c870' }}>
          {students.length} ENTRIES
        </span>
      </div>

      <div className="search-wrap">
        <input
          className="sb-input"
          placeholder="SEARCH STUDENTS..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="table-header">
        <div>NAME</div>
        <div>SCORE</div>
        <div>STATUS</div>
        <div className="h-upd">UPDATE</div>
        <div className="h-act" />
      </div>

      {filtered.length === 0
        ? <div className="empty">NO RECORDS FOUND</div>
        : filtered.map(s => (
            <StudentRow
              key={s.id}
              student={s}
              onUpdate={onUpdate}
              onSave={onSave}
              onDelete={onDelete}
            />
          ))
      }
    </div>
  )
}
