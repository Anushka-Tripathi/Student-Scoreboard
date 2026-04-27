import { useEffect, useRef } from 'react'
import './Header.css'

export default function Header() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let timeout

    const glitch = () => {
      el.classList.add('glitch-active')
      setTimeout(() => el.classList.remove('glitch-active'), 200)
      timeout = setTimeout(glitch, 3000 + Math.random() * 4000)
    }

    timeout = setTimeout(glitch, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <header className="header">
      <div className="header-badge">
        <span className="badge-line" />
        ACADEMIC TERMINAL V2.0
        <span className="badge-line" />
      </div>

      <h1 className="header-title" ref={ref} data-text="STUDENT SCOREBOARD">
        <span className="word-white">STUDENT </span>
        <span className="word-cyan">SCOREBOARD</span>
      </h1>

      <div className="header-sub">
        <span className="blink-cursor">▋</span>
        SYSTEM READY — {new Date().toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' }).toUpperCase()}
      </div>

      <div className="divider" />
    </header>
  )
}
