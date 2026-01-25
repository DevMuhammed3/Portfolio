type Props = {
  title: string
  subtitle: string
  description: string
  skills: string[]
  index: number
}

export function SkillStage({
  title,
  subtitle,
  description,
  skills,
  index,
}: Props) {
  const isTop = index % 2 === 0

  return (
    <div className="relative min-w-[420px] flex justify-center">

      <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-sm z-10" />

      {/* Card */}
      <div
        className={`
          absolute
          ${isTop ? 'bottom-[60%]' : 'top-[60%]'}
          w-[360px]
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
        `}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-xs opacity-60">{subtitle}</span>

        <p className="mt-3 text-sm opacity-80 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map(skill => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
