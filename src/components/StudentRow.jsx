export default function StudentRow({ student, onUpdate, onSave, onDelete }) {
  const pass = student.score >= 40

  return (
    <div className={`student-row ${pass ? 'pass' : 'fail'}`}>
      <div className="s-name">{student.name}</div>

      <div className={pass ? 's-score-pass' : 's-score-fail'}>
        {student.score}
      </div>

      <div>
        <span className={`status-badge ${pass ? 'badge-pass' : 'badge-fail'}`}>
          <span className="badge-dot" />
          {pass ? 'PASS' : 'FAIL'}
        </span>
      </div>

      <div className="r-upd">
        <input
          className="score-edit"
          type="number"
          min={0} max={100}
          value={student.editScore}
          onChange={e => onUpdate(student.id, 'editScore', e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSave(student.id)}
        />
      </div>

      <div className="row-actions r-act">
        <button className="btn btn-save" onClick={() => onSave(student.id)}>SAVE</button>
        <button className="btn btn-del"  onClick={() => onDelete(student.id)}>✕</button>
      </div>
    </div>
  )
}
