import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const cols = Math.floor(window.innerWidth / 16)
    const drops = Array(cols).fill(1)
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEF0123456789<>{}[]'

    const draw = () => {
      ctx.fillStyle = 'rgba(4,8,14,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00dcff'
      ctx.font = '14px Share Tech Mono, monospace'

      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = drops[i] * 16 < canvas.height * 0.1 ? '#ffffff' : '#00dcff'
        ctx.fillText(ch, i * 16, drops[i] * 16)
        if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="matrix" ref={ref} />
}
