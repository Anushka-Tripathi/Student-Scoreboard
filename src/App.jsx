import { useState, useCallback } from 'react'
import Header from './components/Header'
import AddStudentForm from './components/AddStudentForm'
import Stats from './components/Stats'
import StudentTable from './components/StudentTable'
import MatrixRain from './components/MatrixRain'
import Toast from './components/Toast'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Aman', score: 78, editScore: '78' },
  { id: 2, name: 'Riya', score: 45, editScore: '45' },
  { id: 3, name: 'Vikram', score: 32, editScore: '32' },
  { id: 4, name: 'Priya', score: 89, editScore: '89' },
]

let nextId = 5

export default function App() {
  const [students, setStudents] = useState(initialStudents)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((msg, type = 'success') => {
    setToast({ msg, type, id: Date.now() })
    setTimeout(() => setToast(null), 2500)
  }, [])

  const addStudent = useCallback((name, score) => {
    setStudents(prev => [...prev, { id: nextId++, name, score, editScore: String(score) }])
    showToast('STUDENT REGISTERED', 'success')
  }, [showToast])

  const updateStudent = useCallback((id, field, val) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, [field]: val } : s))
  }, [])

  const saveScore = useCallback((id) => {
    setStudents(prev => prev.map(s => {
      if (s.id !== id) return s
      const parsed = parseInt(s.editScore)
      if (isNaN(parsed) || parsed < 0 || parsed > 100) {
        showToast('INVALID SCORE: 0–100', 'error')
        return s
      }
      showToast('SCORE UPDATED', 'success')
      return { ...s, score: parsed }
    }))
  }, [showToast])

  const deleteStudent = useCallback((id) => {
    setStudents(prev => prev.filter(s => s.id !== id))
    showToast('RECORD DELETED', 'error')
  }, [showToast])

  return (
    <div className="app">
      <MatrixRain />
      <div className="scanlines" />
      <div className="crt-vignette" />
      <div className="content">
        <Header />
        <AddStudentForm onAdd={addStudent} showToast={showToast} />
        <Stats students={students} />
        <StudentTable
          students={students}
          onUpdate={updateStudent}
          onSave={saveScore}
          onDelete={deleteStudent}
        />
      </div>
      {toast && <Toast key={toast.id} msg={toast.msg} type={toast.type} />}
    </div>
  )
}
