type Props = {
  title: string
  description: string
  tech: string[]
}

export default function TimelineItem({ title, description, tech }: Props) {
  return (
    <div className="min-w-[320px] rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/10">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

