import { useState } from 'react'

export default function AddStudentForm({ onAdd, showToast }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const submit = () => {
    const n = name.trim()
    const s = parseInt(score)
    if (!n) { showToast('NAME REQUIRED', 'error'); return }
    if (isNaN(s) || s < 0 || s > 100) { showToast('SCORE MUST BE 0–100', 'error'); return }
    onAdd(n, s)
    setName('')
    setScore('')
  }

  const onKey = (e) => { if (e.key === 'Enter') submit() }

  return (
    <div className="panel">
      <div className="corner tl" /><div className="corner tr" />
      <div className="corner bl" /><div className="corner br" />
      <div className="panel-label">
        <span className="dot" />
        REGISTER STUDENT
        <span style={{ marginLeft: 'auto', opacity: 0.45, fontSize: '10px', letterSpacing: '2px' }}>
          NEW ENTRY
        </span>
      </div>
      <div className="form-row">
        <input
          className="sb-input"
          placeholder="Student name..."
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={onKey}
        />
        <input
          className="sb-input"
          placeholder="Score (0–100)"
          type="number"
          min={0} max={100}
          value={score}
          onChange={e => setScore(e.target.value)}
          onKeyDown={onKey}
        />
        <button className="btn btn-add" onClick={submit}>+ ADD</button>
      </div>
    </div>
  )
}
