import React from 'react'
import { motion } from 'framer-motion'

interface Stat {
  id: string
  number: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    id: 'stat-1',
    number: '4+',
    label: 'Years Experience',
    description: 'Developing professional games, multi-map architectures, and metaverse systems.'
  },
  {
    id: 'stat-2',
    number: '10+',
    label: 'Shipped Projects',
    description: 'Games live on Google Play, App Store, and high-performance zero-install WebGL.'
  },
  {
    id: 'stat-3',
    number: '100%',
    label: 'Stability Rate',
    description: 'Delivered all major client builds on schedule with zero critical post-launch crashes.'
  }
]

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-20 md:py-28 border-t border-stroke/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.15 }}
              className="relative bg-surface/20 border border-stroke/70 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-[#89AACC]/40 transition-colors duration-500 shadow-md shadow-black/5"
            >
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[#89AACC]/[0.02] opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Accent line */}
                <div className="w-10 h-[2px] bg-stroke group-hover:w-16 transition-all duration-500 accent-gradient mb-6" />

                {/* Typography Stats */}
                <span className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors leading-none font-semibold">
                  {stat.number}
                </span>

                <h3 className="text-md md:text-lg font-bold text-text-primary mt-4 mb-2 tracking-tight">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-muted font-light leading-relaxed mt-4">
                {stat.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
