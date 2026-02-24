'use client'

import Link from 'next/link'

type Project = {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
}

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      onClick={() => alert('clicked')}
      className="relative z-50
        w-[320px] h-[200px]
        rounded-xl
        bg-neutral-900
        border border-white/10
        p-6
        flex flex-col justify-between
        hover:border-white/30
        hover:-translate-y-1
        transition
      "
    >
      <div>
        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-400 mt-2">
          {project.description}
        </p>
      </div>

      <div className="flex gap-4 pt-4">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:text-white"
        >
          GitHub
        </Link>

        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:text-white"
        >
          Live
        </Link>
      </div>
    </div>
  )
}
