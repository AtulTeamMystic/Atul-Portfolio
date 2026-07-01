import React from 'react'
import { motion } from 'framer-motion'

interface EduEntry {
  school: string
  degree: string
  duration: string
  location: string
  grade: string
  tags: string[]
  isOrigin?: boolean
}

const eduEntries: EduEntry[] = [
  {
    school: 'Hi-Tech Institute of Engineering & Technology',
    degree: 'BCA (Bachelor of Computer Applications)',
    duration: '2020 — 2023',
    location: 'Ghaziabad, India',
    grade: '70%',
    tags: ['C++', 'Data Structures', 'DBMS', 'OOPs', 'Software Engineering']
  },
  {
    school: 'P.C. Senior Secondary School',
    degree: 'Intermediate (PCB)',
    duration: '2020',
    location: 'India',
    grade: '75%',
    tags: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    isOrigin: true
  }
]

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 md:py-28 border-t border-stroke/30 bg-bg z-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading flex items-center gap-2">
            <span className="text-[#7b8fff] font-mono font-medium">/</span>skill-school
          </h2>
        </motion.div>

        {/* Timeline Grid (Vertical timeline with purple spine) */}
        <div className="journey journey-edu relative pl-10 sm:pl-14">
          
          {/* Vertical spine (Purple gradient) */}
          <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-12 w-[2px] bg-gradient-to-b from-[#7b8fff] via-[#7b8fff]/35 to-[#7b8fff]/05 rounded-full pointer-events-none" />

          {eduEntries.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="journey-node relative mb-8 flex group"
            >
              {/* Spine dot with graduation cap */}
              <div className="absolute left-[-40px] sm:left-[-54px] top-0 w-8 sm:w-10 flex justify-center">
                <div className="journey-dot edu w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface border-2 border-[#7b8fff] flex items-center justify-center text-xs sm:text-sm text-[#7b8fff] z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(123,143,255,0.12),0_0_20px_rgba(123,143,255,0.2)]">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-4">
                {edu.isOrigin ? (
                  <span className="journey-badge origin inline-block text-[10px] font-bold tracking-wider uppercase rounded px-2.5 py-0.5 mb-2 bg-[#ff7a57]/10 text-[#ff7a57] border border-[#ff7a57]/30">
                    Origin
                  </span>
                ) : (
                  <span className="journey-badge edu-badge inline-block text-[10px] font-bold tracking-wider uppercase rounded px-2.5 py-0.5 mb-2 bg-[#7b8fff]/10 text-[#7b8fff] border border-[#7b8fff]/30">
                    Graduated
                  </span>
                )}

                <div className="journey-card edu-card-j bg-surface border border-stroke rounded-xl p-5 transition-all duration-300 group-hover:border-[#7b8fff]/35 group-hover:shadow-[0_6px_28px_rgba(123,143,255,0.07)] group-hover:translate-x-1">
                  <div className="journey-year text-[11px] font-bold tracking-wider uppercase text-[#7b8fff] mb-1.5 opacity-80">
                    {edu.duration}
                  </div>
                  
                  <h3 className="journey-title text-lg md:text-xl font-bold text-heading mb-1">
                    {edu.school}
                  </h3>
                  
                  <p className="journey-role text-sm md:text-base text-muted mb-2">
                    {edu.degree}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <p className="journey-loc text-xs text-muted/75 flex items-center gap-1.5">
                      <i className="fas fa-map-marker-alt text-[#7b8fff] text-[10px]"></i> {edu.location}
                    </p>
                    <span className="text-xs text-muted/70 bg-surface2 px-2.5 py-1 rounded border border-stroke font-mono">
                      Score: <span className="text-[#7b8fff] font-bold">{edu.grade}</span>
                    </span>
                  </div>

                  <div className="journey-tags flex flex-wrap gap-1.5">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag text-[11px] bg-surface2 border border-stroke text-muted px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* End Cap */}
          <div className="journey-end flex items-center gap-3 mt-[-5px]">
            <div className="journey-end-dot edu-dot w-3.5 h-3.5 rounded-full border-2 border-[#7b8fff]/35 bg-bg shrink-0 relative left-[-33px] sm:left-[-41px]" />
            <span className="text-xs text-muted font-mono tracking-wider ml-[-20px] sm:ml-[-26px]">
              LOADING COMPLETE
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
