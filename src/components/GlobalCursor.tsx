'use client'

import { useEffect, useRef } from 'react'

export default function GlobalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)

  const raf = useRef<number | null>(null)
  const projectTimer = useRef<NodeJS.Timeout | null>(null)

  const speed = 0.15

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    /* start hidden */
    cursor.classList.add('cursor-hidden')

    /* Mouse position */
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      cursor.classList.remove('cursor-hidden')
    }

    /* Animation loop */
    const animate = () => {
      currentX.current += (mouseX.current - currentX.current) * speed
      currentY.current += (mouseY.current - currentY.current) * speed

      cursor.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0)`
      raf.current = requestAnimationFrame(animate)
    }

    /* Hover logic */
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('p, span, h1, h2, h3, h4, h5, h6')) {
        cursor.classList.add('cursor-text')
      }

      if (target.closest('ul')) {
        cursor.classList.add('cursor-ul')
      }

      if (target.closest('[data-cursor="hover"]')) {
        cursor.classList.add('cursor-project')

        projectTimer.current = setTimeout(() => {
          cursor.classList.add('cursor-project-active')
        }, 120)
        return
      }

      if (target.closest('a, button')) {
        cursor.classList.add('cursor-hover')
      }
    }

    const resetStates = () => {
      if (projectTimer.current) {
        clearTimeout(projectTimer.current)
        projectTimer.current = null
      }

      cursor.classList.remove(
        'cursor-hover',
        'cursor-project',
        'cursor-project-active',
        'cursor-text',
        'cursor-ul'
      )
    }

    /* HARD hide (guaranteed) */
    const hideCursor = () => {
      cursor.classList.add('cursor-hidden')
    }

    /* Events */
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', resetStates)

    document.documentElement.addEventListener('pointerleave', hideCursor)

    // tab changed / minimized
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') hideCursor()
    })

    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', resetStates)

      document.documentElement.removeEventListener('pointerleave', hideCursor)
      document.removeEventListener('visibilitychange', hideCursor)

      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" />
}
