'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { skillsData } from './skills.data'
import { SkillStage } from './SkillStage'
import SectionHeader from './SectionHeader'

export default function SkillsTimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(
    scrollYProgress,
    [0.2, 1],
    ['100%', '-120%']
  )

  const lineOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.95, 1],
    [0, 1, 1, 0]
  )

  return (
    <section className="relative">

      {/* Header (teaser) */}
      <SectionHeader />

      {/* Scroll space */}
      <div ref={scrollRef} className="h-[300vh]" />

      {/* الخط */}

      <motion.div
        style={{ opacity: lineOpacity }}
        className="fixed inset-0 flex items-center pointer-events-none z-0"
      >
        <div className="w-full h-px bg-white/20" />
      </motion.div>


      {/* Timeline */}
      <div className="fixed inset-0 flex items-center pointer-events-none z-10">
        <motion.div
          style={{ x }}
          className="relative flex items-center gap-24 px-40 pointer-events-auto"
        >
          {skillsData.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              <SkillStage {...stage} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
