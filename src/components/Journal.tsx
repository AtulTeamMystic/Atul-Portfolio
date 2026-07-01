import React from 'react'
import { motion } from 'framer-motion'

interface ExperienceEntry {
  company: string
  companyUrl?: string
  role: string
  duration: string
  timeline: string
  location: string
  bullets: string[]
  tags: string[]
  isCurrent?: boolean
  isOrigin?: boolean
}

const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Tec Ventures',
    role: 'Senior Unity Developer',
    duration: 'Apr 2024 — Present',
    timeline: 'Currently Working',
    location: 'Remote',
    bullets: [
      'Sole engineer on Mystic Motors—shipped end-to-end to Google Play & App Store; integrated Google/Apple/Guest Login, Firebase IAP, and Firestore leaderboards, achieving a live dual-platform monetised product within 4 months.',
      'Owned full mobile build pipeline (Android + iOS): CI builds, Firebase Crashlytics monitoring, and staged rollout—zero critical post-launch crashes across initial 1,000+ installs.',
      'Architected spell-based multiplayer combat loop with Photon PUN2; optimised network sync intervals, cutting observable input lag by ~35% versus naive approach.',
      'Mentored 1 junior developer on Unity best practices, code review standards, and Git branching strategy—reduced rework cycles by 50% within 2 sprints.'
    ],
    tags: ['Mobile Development', 'IAP Stack', 'CI/CD Pipeline', 'Photon PUN2', 'Firebase'],
    isCurrent: true
  },
  {
    company: 'Abhiwan Technology Pvt. Ltd.',
    role: 'Unity Developer → Mid-Level Unity Developer',
    duration: 'Mar 2021 — Mar 2024',
    timeline: '3 years',
    location: 'Ghaziabad, India',
    bullets: [
      'Delivered 5 client-facing Unity projects in 3 years across mobile and PC—all shipped on schedule with zero scope-blocking bugs at handoff, earning repeat client contracts.',
      'Designed and built Classroom Metaverse: multi-platform (PC/Android/iOS) virtual classroom with Agora Voice SDK + Photon supporting 30+ concurrent users and real-time screen sharing.',
      'Cut API round-trips by ~40% in the 3D Instagram clone by replacing polling with Socket.IO event-driven architecture, directly reducing session load time from ~4s to ~2.5s.',
      'Took ownership of technical scoping for new feature requests—translated client briefs into sprint tasks, reducing estimation errors and preventing mid-sprint scope creep on 3 consecutive projects.'
    ],
    tags: ['Classroom Metaverse', 'Socket.IO', 'Agora SDK', 'Optimization', 'Git Branching'],
    isOrigin: true
  }
]

export const Journal: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 border-t border-stroke/30 bg-bg z-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-accent font-mono font-medium">/</span>campaign-log
          </h2>
        </motion.div>

        {/* Timeline Grid (Vertical timeline with green spine) */}
        <div className="journey relative pl-10 sm:pl-14">
          
          {/* Vertical spine (Green gradient) */}
          <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-12 w-[2px] bg-gradient-to-b from-accent via-accent/35 to-accent/05 rounded-full pointer-events-none" />

          {experienceEntries.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="journey-node relative mb-8 flex group"
            >
              {/* Spine dot with briefcase icon */}
              <div className="absolute left-[-40px] sm:left-[-54px] top-0 w-8 sm:w-10 flex justify-center">
                <div className={`journey-dot w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface border-2 border-accent flex items-center justify-center text-xs sm:text-sm text-accent z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(0,255,136,0.12),0_0_20px_rgba(0,255,136,0.2)] ${
                  exp.isCurrent ? 'bg-accent text-[#000] shadow-[0_0_0_6px_rgba(0,255,136,0.12),0_0_20px_rgba(0,255,136,0.25)]' : ''
                }`}>
                  <i className="fas fa-briefcase"></i>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-4">
                {exp.isCurrent && (
                  <span className="journey-badge current inline-block text-[10px] font-bold tracking-wider uppercase rounded px-2.5 py-0.5 mb-2 bg-accent/10 text-accent border border-accent/30">
                    Current Quest
                  </span>
                )}
                {exp.isOrigin && (
                  <span className="journey-badge origin inline-block text-[10px] font-bold tracking-wider uppercase rounded px-2.5 py-0.5 mb-2 bg-[#ff7a57]/10 text-[#ff7a57] border border-[#ff7a57]/30">
                    Spawn Point
                  </span>
                )}

                <div className="journey-card bg-surface border border-stroke rounded-xl p-5 transition-all duration-300 group-hover:border-accent/22 group-hover:shadow-[0_6px_28px_rgba(0,255,136,0.07)] group-hover:translate-x-1">
                  <div className="journey-year text-[11px] font-bold tracking-wider uppercase text-accent mb-1.5 opacity-80">
                    {exp.duration}
                  </div>
                  {exp.timeline && (
                    <p className="journey-duration text-xs text-muted mb-2 font-mono">
                      {exp.timeline}
                    </p>
                  )}
                  
                  <h3 className="journey-title text-lg md:text-xl font-bold text-white mb-1">
                    {exp.company}
                  </h3>
                  
                  <p className="journey-role text-sm md:text-base text-muted mb-2">
                    {exp.role}
                  </p>

                  <p className="journey-loc text-xs text-muted/75 mb-4 flex items-center gap-1.5">
                    <i className="fas fa-map-marker-alt text-accent text-[10px]"></i> {exp.location}
                  </p>

                  {/* Bullet points description */}
                  <ul className="list-disc pl-4 mb-4 text-xs md:text-sm text-text-primary/90 space-y-2 leading-relaxed font-light">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="journey-tags flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
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
            <div className="journey-end-dot w-3.5 h-3.5 rounded-full border-2 border-accent/25 bg-bg shrink-0 relative left-[-33px] sm:left-[-41px]" />
            <span className="text-xs text-muted font-mono tracking-wider ml-[-20px] sm:ml-[-26px]">
              FIRST SPAWN POINT
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
