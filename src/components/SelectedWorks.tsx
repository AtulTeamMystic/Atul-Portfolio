import React from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  featured: boolean
  tags: string[]
  links: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    id: 'mystic-motors',
    title: 'Mystic Motors',
    subtitle: 'Cross-platform spell-based combat racing game.',
    description: 'Developed multiplayer network architectures with Photon PUN2, cut lag by ~35%, Firestore leaderboards, Firebase IAPs, FCM pushes, and full iOS/Android builds. Shipped end-to-end.',
    image: './images/Mystic Game Png.png',
    featured: true,
    tags: ['Unity 3D', 'C#', 'Photon PUN2', 'Firebase IAP', 'FCM'],
    links: [
      { label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors' },
      { label: 'App Store ↗', url: 'https://apps.apple.com/app/id6612030544' }
    ]
  },
  {
    id: 'adventure-trip',
    title: 'Adventure Trip',
    subtitle: 'Hidden-object puzzle game with 10+ levels.',
    description: 'Cloud sync & progress storage using Firestore, push triggers, Figma layout pipeline with pixel-perfect Unity compilation.',
    image: './images/Ad2.png',
    featured: false,
    tags: ['Unity 3D', 'C#', 'Firebase', 'Figma UI', 'REST API'],
    links: [
      { label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld' }
    ]
  },
  {
    id: 'slot-game',
    title: 'Slot Game',
    subtitle: '60fps browser slot game running on Unity WebGL.',
    description: 'Real-time REST API payout calculations, DoTween reel multipliers, Figma UI assembly with near zero-pixel deviation.',
    image: './images/image.png',
    featured: false,
    tags: ['Unity WebGL', 'C#', 'DoTween', 'REST API', 'Figma'],
    links: [
      { label: 'Play WebGL ↗', url: 'https://slotgameunityweb.netlify.app' }
    ]
  },
  {
    id: 'kitchen-configurator',
    title: '3D Configurator',
    subtitle: 'WebGL interactive tool for 3D architecture.',
    description: 'Dynamic texture swapping, material swapping, coordinate systems translation, light shading optimizations for WebGL browser engines.',
    image: './images/Kitchen.png',
    featured: false,
    tags: ['Unity WebGL', '3D Shader', 'C#', 'Interactions'],
    links: [
      { label: 'Launch Tool ↗', url: 'https://lotusedgemaldives.netlify.app/' }
    ]
  }
]

export const SelectedWorks: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = ''
  }

  return (
    <section id="work" className="relative py-20 md:py-28 border-t border-stroke/30 bg-bg z-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading flex items-center gap-2">
            <span className="text-accent font-mono font-medium">/</span>shipped-titles
          </h2>
          <a
            href="https://linkedin.com/in/atul-pandey-a0ab23198"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent font-medium tracking-wide transition-colors"
          >
            See all work →
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`project-card bg-surface border border-stroke rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/35 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,255,136,0.1)] flex flex-col ${
                project.featured ? 'md:col-span-2' : 'md:col-span-1'
              }`}
              style={{ willChange: 'transform' }}
            >
              {/* Image Frame */}
              <div className="project-card-img w-full aspect-video overflow-hidden border-b border-stroke">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-104 select-none pointer-events-none"
                />
              </div>

              {/* Body */}
              <div className="project-card-body p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="project-card-title text-lg font-bold text-heading leading-none">
                    {project.title}
                  </h3>
                  
                  {/* Skill tags */}
                  <div className="project-tags flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-[11px] bg-surface2 border border-stroke text-muted px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="project-card-desc text-xs text-muted leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Redirect Links Row */}
                <div className="flex gap-4 pt-2 border-t border-stroke/50">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link text-xs font-semibold text-accent hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

