import React from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  colSpan: string
  aspectRatio: string
  tags: string[]
  links: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    id: 'mystic-motors',
    title: 'Mystic Motors',
    subtitle: 'Cross-platform spell-based combat racing game live on Google Play & App Store.',
    description: 'Developed multiplayer network architectures with Photon PUN2, cut lag by ~35%, Firestore leaderboards, Firebase IAPs, FCM pushes, and full iOS/Android builds.',
    image: './images/Mystic Game Png.png',
    colSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10] md:aspect-auto md:h-[450px]',
    tags: ['Unity 3D', 'C#', 'Photon PUN2', 'Firebase IAP', 'FCM'],
    links: [
      { label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors' },
      { label: 'App Store ↗', url: 'https://apps.apple.com/app/id6612030544' }
    ]
  },
  {
    id: 'adventure-trip',
    title: 'Adventure Trip',
    subtitle: 'Hidden-object puzzle game with 10+ timed levels on Google Play.',
    description: 'Cloud sync & progress storage using Firestore, push triggers, Figma layout pipeline with pixel-perfect Unity compilation.',
    image: './images/Ad2.png',
    colSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[16/10] md:aspect-auto md:h-[450px]',
    tags: ['Unity 3D', 'C#', 'Firebase', 'Figma UI', 'REST API'],
    links: [
      { label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld' }
    ]
  },
  {
    id: 'slot-game',
    title: 'Slot Game',
    subtitle: '60fps browser slot game running on lightweight Unity WebGL.',
    description: 'Real-time REST API payout calculations, DoTween reel multipliers, Figma UI assembly with near zero-pixel deviation.',
    image: './images/image.png',
    colSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[16/10] md:aspect-auto md:h-[450px]',
    tags: ['Unity WebGL', 'C#', 'DoTween', 'REST API', 'Figma'],
    links: [
      { label: 'Play WebGL ↗', url: 'https://slotgameunityweb.netlify.app' }
    ]
  },
  {
    id: 'kitchen-configurator',
    title: '3D Configurator',
    subtitle: 'Real-time WebGL interactive tool to custom render 3D architectural setups.',
    description: 'Dynamic texture swapping, material swapping, coordinate systems translation, light shading optimizations for WebGL browser engines.',
    image: './images/Kitchen.png',
    colSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10] md:aspect-auto md:h-[450px]',
    tags: ['Unity WebGL', '3D Shader', 'C#', 'Interactions'],
    links: [
      { label: 'Launch Tool ↗', url: 'https://lotusedgemaldives.netlify.app/' }
    ]
  }
]

export const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-16 md:py-24">
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
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary tracking-tight font-normal">
              Featured <span className="font-display italic text-text-primary">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-md mt-4 font-light leading-relaxed">
              A selection of projects I've worked on, from initial architecture designs to dual-platform launches.
            </p>
          </div>
          
          {/* Desktop Only Button */}
          <a
            href="https://linkedin.com/in/atul-pandey-a0ab23198"
            target="_blank"
            className="hidden md:inline-flex relative group h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-wider text-text-primary border border-stroke cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1.5px] accent-gradient">
              <div className="w-full h-full bg-bg rounded-full" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              View all work <span className="text-[10px]">→</span>
            </span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.1 }}
              className={`${project.colSpan} ${project.aspectRatio} relative group bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer`}
            >
              
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out select-none pointer-events-none"
              />

              {/* Halftone Screen Pattern Overlay */}
              <div className="absolute inset-0 halftone-overlay opacity-15 mix-blend-multiply pointer-events-none" />

              {/* Content Overlay (Visible default on bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="space-y-3 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider bg-stroke/60 backdrop-blur-md text-text-primary px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-text-primary leading-none">
                    {project.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-muted max-w-sm font-light leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover Disclosure Mask */}
              <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-between p-6 md:p-8 backdrop-blur-lg">
                
                {/* Top: Description & stack */}
                <div className="space-y-4">
                  <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-semibold">
                    Description & Highlights
                  </span>
                  <p className="text-xs md:text-sm text-text-primary/90 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-[#131313] text-muted px-3 py-1 rounded-full border border-stroke"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Custom Hover Label and Redirect Actions */}
                <div className="flex flex-wrap items-end justify-between gap-4 pt-4 border-t border-stroke">
                  
                  {/* Visual Premium Pill */}
                  <div 
                    className="inline-flex items-center rounded-full p-[1px] select-none scale-95 group-hover:scale-100 transition-transform duration-300"
                    style={{ background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)' }}
                  >
                    <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                      View — <span className="font-display italic font-semibold">{project.title}</span>
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-text-primary hover:text-[#89AACC] font-semibold border-b border-white/20 hover:border-[#89AACC] pb-0.5 transition-all"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
