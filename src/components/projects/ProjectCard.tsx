'use client'

import { useState } from 'react'

type Project = {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
}


export default function ProjectCard({ project }: any) {
  return (
    <div className="
      w-[320px] h-[200px]
      rounded-xl
      bg-neutral-900
      border border-white/10
      p-6
      flex flex-col justify-between
      hover:border-white/30
      transition
    ">
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>

      <p className="text-sm text-neutral-400">
        {project.description}
      </p>

      <div className="flex gap-3 pt-4">
        <a className="text-sm underline">GitHub</a>
        <a className="text-sm underline">Live</a>
      </div>
    </div>
  )
}

