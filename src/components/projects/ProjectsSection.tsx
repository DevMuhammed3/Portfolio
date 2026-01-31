'use client'

import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { projectsData } from './projects.data'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    transition: {
      duration: 0.35,
      ease: 'easeIn',
    },
  },
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const firstRender = useRef(true)

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, 3)


  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (!showAll) {
      document
        .getElementById('projects')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [showAll])

  return (
    <section
      id="projects"
      className="relative mx-auto min-h-screen px-8 md:px-24 py-40"
    >
      {/* Header */}
      <div className="mb-24 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-purple-600">/</span>
          Projects
        </h2>

        <p className="mt-4 text-base opacity-70">
          A selection of projects showcasing my work, experiments, and real-world applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}

      {projectsData.length > 3 && (
        <div className="mt-24 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group relative px-8 py-4 rounded-full border border-neutral-700 text-white overflow-hidden"
          >
            <span className="relative z-10">
              {showAll ? 'Show less projects' : 'Show more projects'}
            </span>

            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      )}

    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  const arrowRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!arrowRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    arrowRef.current.style.transform = `
      translate3d(${x - 21}px, ${y - 21}px, 0)
    `
  }

  return (
    <div className="group relative will-change-transform">
      {/* Image wrapper */}
      <div
        data-cursor="hover"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMove}
        className="relative h-[420px] overflow-hidden rounded-2xl bg-neutral-900"
      >
        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="
    absolute inset-0
    w-full h-full
    object-cover
    transform-gpu
    transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]
    group-hover:scale-110
    z-10
  "
        />

        {/* ARROW */}
        <div
          ref={arrowRef}
          className="
            pointer-events-none
            absolute top-0 left-0
            z-20
            opacity-0
            scale-75
            transition-[opacity,transform]
            duration-300
            ease-out
            group-hover:opacity-100
            group-hover:scale-100
          "
        >
          <div className="project-cursor">↗</div>
        </div>
      </div>

      {/* Text */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}
