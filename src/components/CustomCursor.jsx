import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.25 })
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.25 })

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    const update = () => setEnabled(media.matches)
    update()
    media.addEventListener?.('change', update)

    const move = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const enter = (event) => {
      if (event.target.closest('a, button, [data-cursor="interactive"]')) setHovering(true)
    }
    const leave = (event) => {
      if (event.target.closest('a, button, [data-cursor="interactive"]')) setHovering(false)
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', enter)
    document.addEventListener('pointerout', leave)

    return () => {
      media.removeEventListener?.('change', update)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', enter)
      document.removeEventListener('pointerout', leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className={`custom-cursor ${hovering ? 'custom-cursor--hover' : ''}`}
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  )
}
