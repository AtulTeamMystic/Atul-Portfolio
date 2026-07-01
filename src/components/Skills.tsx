import React from 'react'
import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  iconClass: string
  delay: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Engine & Language',
    iconClass: 'fa-code',
    delay: '0s',
    skills: ['Unity 3D / 2D', 'C#', 'C', 'Unity WebGL', 'Unity Addressables']
  },
  {
    title: 'Multiplayer & Network',
    iconClass: 'fa-network-wired',
    delay: '0.4s',
    skills: ['Photon PUN2', 'Socket.IO', 'WebSocket', 'Agora Voice SDK']
  },
  {
    title: 'Backend & Auth',
    iconClass: 'fa-server',
    delay: '0.8s',
    skills: ['Firebase Auth', 'Firestore', 'FCM', 'In-App Purchases', 'REST API', 'Google/Apple Login']
  },
  {
    title: 'UI/UX & Design',
    iconClass: 'fa-gamepad',
    delay: '0.2s',
    skills: ['Figma', 'UI/UX Design', 'DoTween', 'Unity UI Toolkit', 'Ready Player Me']
  },
  {
    title: 'DevOps & Tools',
    iconClass: 'fa-toolbox',
    delay: '0.6s',
    skills: ['Git', 'Firebase Crashlytics', 'Unity Cloud Build', 'Android Studio', 'Xcode']
  },
  {
    title: 'Platforms',
    iconClass: 'fa-laptop',
    delay: '1s',
    skills: ['Android', 'iOS', 'PC', 'WebGL']
  }
]

export const Skills: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--gx', `${x.toFixed(1)}%`)
    card.style.setProperty('--gy', `${y.toFixed(1)}%`)
  }

  return (
    <section id="skills" className="relative py-20 md:py-28 border-t border-stroke/30 bg-bg z-10">
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
            <span className="text-accent font-mono font-medium">/</span>skill-tree
          </h2>
        </motion.div>

        {/* Skills Floating Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseMove={handleMouseMove}
              className="skill-category-card relative rounded-2xl border border-stroke bg-surface p-6 overflow-hidden transition-all duration-300 hover:border-accent/35 hover:shadow-[0_0_28px_rgba(0,255,136,0.08),0_8px_32px_rgba(0,0,0,0.4)]"
              style={{
                animation: `float 4s ease-in-out ${category.delay} infinite`,
                animationPlayState: 'running',
                // inline style custom delay support
                ['--float-delay' as any]: category.delay
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused'
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running'
                e.currentTarget.style.transform = ''
              }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stroke">
                <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm shrink-0">
                  <i className={`fas ${category.iconClass}`}></i>
                </span>
                <h3 className="text-[15px] font-semibold text-white leading-none">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill skill-pill--adv text-[12px] font-medium px-3 py-1 rounded-full bg-accent/8-light mode border border-accent/25-light mode text-accent transition-transform duration-200 hover:scale-[1.08] hover:shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
