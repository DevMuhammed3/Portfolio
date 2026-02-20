'use client'

import { skillsData } from './skills.data'

export default function MobileSkillsTimeline() {
  return (
    <section id='skills' className="px-6 py-20">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-purple-600">/</span>Skills
      </h2>

      {/* Timeline */}
      <div className="relative border-l border-white/20 pl-6 space-y-12">
        {skillsData.map((stage) => (
          <div key={stage.id} className="relative">
            {/* Node */}
            <span className="absolute -left-[33px] top-1 w-4 h-4 bg-purple-600 rounded-sm" />

            {/* Content */}
            <h3 className="text-xl font-semibold">
              {stage.title}
            </h3>

            <p className="mt-2 text-sm opacity-70 leading-relaxed">
              {stage.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {stage.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
