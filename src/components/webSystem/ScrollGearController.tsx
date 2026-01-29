'use client'

import { useEffect, useRef } from 'react'

export default function ScrollGear() {
  const gearRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const rotation = useRef(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const gear = gearRef.current
    if (!gear) return

    const onScroll = () => {
      if (raf.current) return

      raf.current = requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastScrollY.current

        rotation.current += delta * 0.25

        gear.style.transform = `rotate(${rotation.current}deg)`

        lastScrollY.current = currentY
        raf.current = null
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={gearRef}
      className="
        fixed
        md:-left-5
        top-1/8
        z-10
        pointer-events-none
        opacity-40
        text-purple-400
        hidden md:block
        will-change-transform
      "
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.54V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.54 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.54-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.54-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.54V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.54 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9c0 .66.39 1.26 1 1.54.28.12.58.18.88.18H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.28Z" />
      </svg>
    </div>
  )
}
