import React from 'react'
import { motion } from 'framer-motion'

interface Entry {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  timeline: string
  tags: string[]
}

const entries: Entry[] = [
  {
    id: 'tec-ventures',
    title: 'Senior Unity Developer at Tec Ventures',
    subtitle: 'Sole engineer shipping Mystic Motors to App Store and Google Play.',
    description: 'Managed complete build pipeline (Android + iOS), integrated Google/Apple SSO, Firebase IAP leadboards, and FCM push notifications. Achieved 1000+ installs with 0 critical crashes.',
    image: './images/Mystic Game Png.png',
    timeline: 'Apr 2024 – Present · 5 min read',
    tags: ['Mobile Development', 'IAP Stack', 'CI/CD']
  },
  {
    id: 'classroom-metaverse',
    title: 'Architecting Classroom Metaverse',
    subtitle: 'Multi-platform virtual classroom supporting 30+ concurrent users.',
    description: 'Designed Agora Voice SDK & Photon PUN2 networking loops, allowing real-time screen sharing, state synchronizations, and low latency user tracking across WebGL/iOS/Android.',
    image: './images/Ad2.png',
    timeline: 'Mar 2023 · 4 min read',
    tags: ['Photon PUN2', 'Agora Voice SDK', 'Metaverse']
  },
  {
    id: 'instagram-clone',
    title: 'Optimizing 3D Social Engine WebGL',
    subtitle: 'Replaced HTTP polling with Socket.IO event-driven structures.',
    description: 'Cut API round-trips by ~40%, reducing WebGL session load times from 4s to 2.5s. Scoped sprint schedules and feature specs directly preventing scope creep.',
    image: './images/image.png',
    timeline: 'Nov 2022 · 3 min read',
    tags: ['Socket.IO', 'Performance Tuning', 'WebGL']
  },
  {
    id: 'team-mentorship',
    title: 'Mentoring and Git Branching Strategies',
    subtitle: 'Reduced sprint rework cycles by 50% across two developmental sprints.',
    description: 'Established Unity code review best practices, clean C# patterns, and automated branching strategies. Guided and mentored junior game engineers.',
    image: './images/Kitchen.png',
    timeline: 'Jan 2024 · 3 min read',
    tags: ['Leadership', 'Git Architecture', 'Code Review']
  }
]

export const Journal: React.FC = () => {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24 border-t border-stroke/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Journal
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary tracking-tight font-normal">
              Experience <span className="font-display italic text-text-primary">logs</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md mt-4 font-light leading-relaxed">
              A historical timeline of my engineering achievements, team mentorship milestones, and performance updates.
            </p>
          </div>

          {/* Download CV button */}
          <a
            href="Atul_Pandey_CV.pdf"
            target="_blank"
            className="relative group h-11 inline-flex items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-wider text-text-primary border border-stroke cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1.5px] accent-gradient">
              <div className="w-full h-full bg-bg rounded-full" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              Download CV <span className="text-[10px]">↗</span>
            </span>
          </a>
        </motion.div>

        {/* Experience Pill Entries */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {entries.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.15 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8 bg-surface/20 hover:bg-surface border border-stroke/70 rounded-[2.5rem] md:rounded-full transition-all duration-500 group shadow-md hover:shadow-lg shadow-black/10"
            >
              <div className="flex items-center gap-5">
                {/* Milestone Image Thumbnail */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border border-stroke group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-muted font-medium md:hidden block">
                    {entry.timeline}
                  </span>
                  <h3 className="text-md md:text-lg font-semibold text-text-primary group-hover:text-[#89AACC] transition-colors leading-tight">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-muted max-w-xl font-light leading-relaxed">
                    {entry.subtitle}
                  </p>
                </div>
              </div>

              {/* Right side Metadata Timeline (Hidden on small, shown on md+) */}
              <div className="hidden md:flex flex-col items-end gap-2 text-right shrink-0">
                <span className="text-xs text-muted font-medium bg-[#131313] px-3 py-1 rounded-full border border-stroke">
                  {entry.timeline}
                </span>
                
                <div className="flex gap-1.5 pt-1">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold text-[#89AACC] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detail block displayed on small screens */}
              <div className="md:hidden block w-full pt-2 border-t border-stroke/50">
                <p className="text-[11px] text-muted/80 leading-relaxed font-light mb-3">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-bold text-[#89AACC] border border-[#89AACC]/20 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand/Hover reveal details on larger screen */}
              <div className="hidden group-hover:block transition-all absolute" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
