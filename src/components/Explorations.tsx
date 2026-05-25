import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

interface Exploration {
  id: string
  title: string
  category: string
  description: string
  image: string
  rotation: string
}

const explorations: Exploration[] = [
  {
    id: 'exp-1',
    title: 'Custom Shader Math',
    category: 'Graphics Optimization',
    description: 'Dynamic texture blending and material coordinate updates written in custom GLSL/HLSL shaders for WebGL graphics pipelines.',
    image: './images/Kitchen.png',
    rotation: '-rotate-3 hover:-rotate-1'
  },
  {
    id: 'exp-2',
    title: 'Multiplayer PUN2 Network Loops',
    category: 'Network Engineering',
    description: 'Lag compensation loops, client-side prediction, and authoritative state replications using Photon PUN2 networking interfaces.',
    image: './images/Mystic Game Png.png',
    rotation: 'rotate-6 hover:rotate-3'
  },
  {
    id: 'exp-3',
    title: 'Rigid Body Race Combats',
    category: 'Physics & Mechanics',
    description: 'Rigid body vehicle physics scripting, spell trajectory calculations, and custom collision multipliers designed in C#.',
    image: './images/Ad2.png',
    rotation: '-rotate-6 hover:-rotate-3'
  },
  {
    id: 'exp-4',
    title: 'Procedural Terrain Meshes',
    category: 'Algorithmic Design',
    description: 'Generating organic land surfaces using mathematical Perlin noise inputs, transforming high-resolution meshes on the fly.',
    image: './images/image.png',
    rotation: 'rotate-2 hover:rotate-0'
  },
  {
    id: 'exp-5',
    title: 'Zero-Deviation Figma Pipeline',
    category: 'UI Toolkit Canvas',
    description: 'Structured layout conversions transforming design shapes into interactive responsive game interfaces under 2px deviations.',
    image: './images/Kitchen.png',
    rotation: '-rotate-4 hover:-rotate-2'
  },
  {
    id: 'exp-6',
    title: 'SSO Authentication Leadboards',
    category: 'Backend Architectures',
    description: 'Secure dual platform login methods, persistent cloud synchronization structures, and leaderboards built on Firestore.',
    image: './images/Mystic Game Png.png',
    rotation: 'rotate-4 hover:rotate-2'
  }
]

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  const [activeExploration, setActiveExploration] = useState<Exploration | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const pinned = pinnedRef.current
    const leftCol = leftColRef.current
    const rightCol = rightColRef.current

    if (!container || !pinned || !leftCol || !rightCol) return

    const ctx = gsap.context(() => {
      // Pin Left Content Section
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: pinned,
        pinSpacing: false,
      })

      // Parallax Left Column (moves UP faster)
      gsap.fromTo(leftCol,
        { yPercent: 10 },
        {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      )

      // Parallax Right Column (moves DOWN)
      gsap.fromTo(rightCol,
        { yPercent: -10 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] w-full bg-bg z-30 flex flex-col md:flex-row items-stretch"
    >
      {/* Halftone Screen Pattern Overlay */}
      <div className="absolute inset-0 halftone-overlay opacity-[0.03] pointer-events-none" />

      {/* Layer 1: Pinned Content (Left Side on Desktop) */}
      <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 lg:px-24 z-10 py-16 md:py-0">
        <div ref={pinnedRef} className="md:h-screen flex flex-col justify-center max-w-md md:fixed md:top-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              Unity Sandbox
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary tracking-tight font-normal leading-tight">
            Engine lab & <span className="font-display italic text-text-primary">shaders</span>
          </h2>

          <p className="text-sm text-muted mt-6 mb-8 font-light leading-relaxed">
            A showcase of custom C# scripting, shader math, low-level network replication, and real-time physics optimizations in Unity. Click any asset to inspect.
          </p>

          <div>
            <a
              href="https://github.com/atul-pandey-a0ab23198"
              target="_blank"
              rel="noreferrer"
              className="relative group h-11 inline-flex items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-wider text-text-primary border border-stroke cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1.5px] accent-gradient">
                <div className="w-full h-full bg-bg rounded-full" />
              </div>
              <span className="relative z-10 flex items-center gap-2">
                Visit GitHub <span className="text-[10px]">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (Right Side on Desktop) */}
      <div className="w-full md:w-1/2 flex justify-center items-start px-6 md:px-12 lg:px-16 z-20 py-8 md:py-32 overflow-visible">
        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full max-w-[650px] overflow-visible">

          {/* Left Column of Parallax */}
          <div ref={leftColRef} className="space-y-12 md:space-y-16 overflow-visible">
            {explorations.filter((_, i) => i % 2 === 0).map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveExploration(exp)}
                className={`relative aspect-square max-w-[280px] rounded-2xl overflow-hidden bg-surface border border-stroke cursor-pointer shadow-lg shadow-black/30 select-none group transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:border-white/20 ${exp.rotation}`}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[9px] text-[#89AACC] font-bold uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <h4 className="text-sm font-semibold text-text-primary mt-1 font-display">
                    {exp.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column of Parallax */}
          <div ref={rightColRef} className="space-y-12 md:space-y-16 pt-16 md:pt-24 overflow-visible">
            {explorations.filter((_, i) => i % 2 !== 0).map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveExploration(exp)}
                className={`relative aspect-square max-w-[280px] rounded-2xl overflow-hidden bg-surface border border-stroke cursor-pointer shadow-lg shadow-black/30 select-none group transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:border-white/20 ${exp.rotation}`}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[9px] text-[#89AACC] font-bold uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <h4 className="text-sm font-semibold text-text-primary mt-1 font-display">
                    {exp.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeExploration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
            onClick={() => setActiveExploration(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-surface border border-stroke rounded-3xl overflow-hidden cursor-default shadow-2xl p-6 md:p-8 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Top Bar / Category */}
              <div className="flex items-center justify-between border-b border-stroke pb-4">
                <div>
                  <span className="text-[10px] text-[#89AACC] font-bold uppercase tracking-[0.2em]">
                    {activeExploration.category}
                  </span>
                  <h3 className="text-2xl font-display italic text-text-primary font-medium mt-1">
                    {activeExploration.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveExploration(null)}
                  className="w-8 h-8 rounded-full border border-stroke bg-bg flex items-center justify-center text-xs text-muted hover:text-text-primary transition-colors cursor-pointer hover:border-white/20"
                >
                  ✕
                </button>
              </div>

              {/* Showcase Image */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-stroke">
                <img
                  src={activeExploration.image}
                  alt={activeExploration.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-xs md:text-sm text-text-primary/90 font-light leading-relaxed">
                  {activeExploration.description}
                </p>
                <div className="text-[10px] text-muted leading-relaxed font-light">
                  *This exploration is part of our standard internal 3D physics frameworks, showcasing engine optimizations, dynamic vertex displacements, and state-management capabilities.
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
