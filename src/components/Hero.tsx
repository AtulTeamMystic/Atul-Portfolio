import React, { useEffect, useRef, useState } from 'react'

interface HeroProps {
  scrollToSection: (id: string) => void
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const avatarRef = useRef<HTMLDivElement>(null)
  
  const [typewrittenText, setTypewrittenText] = useState('')
  const [statsCount, setStatsCount] = useState({ years: 0, studios: 0, projects: 0 })

  // Typewriter effect cycling roles
  useEffect(() => {
    const phrases = [
      'Unity Engineer.',
      'game architect.',
      'technical designer.',
      'gameplay engineer.',
      'C# developer.'
    ]
    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let paused = false
    let timerId: any

    function tick() {
      if (paused) return
      const current = phrases[phraseIdx]
      if (!deleting) {
        setTypewrittenText(current.slice(0, ++charIdx))
        if (charIdx === current.length) {
          paused = true
          timerId = setTimeout(() => { paused = false; deleting = true; tick(); }, 2200)
          return
        }
      } else {
        setTypewrittenText(current.slice(0, --charIdx))
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
        }
      }
      timerId = setTimeout(tick, deleting ? 40 : 90)
    }
    tick()
    return () => clearTimeout(timerId)
  }, [])

  // Stats counting animation
  useEffect(() => {
    const targets = { years: 4, studios: 2, projects: 10 }
    const duration = 1500
    const startTime = performance.now()
    let frameId: number

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      setStatsCount({
        years: Math.floor(progress * targets.years),
        studios: Math.floor(progress * targets.studios),
        projects: Math.floor(progress * targets.projects)
      })

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setStatsCount(targets)
      }
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  // 3D Avatar Card Tilt Interaction
  const handleAvatarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = avatarRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px) scale(1.03)`
    card.style.boxShadow = '0 24px 48px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 136, 0.12)'
    
    // Brighten the pulsing indicator ring
    const parent = card.parentElement
    if (parent) {
      parent.style.setProperty('--ring-opacity', '0.6')
    }
  }

  const handleAvatarMouseLeave = () => {
    const card = avatarRef.current
    if (!card) return
    card.style.transform = ''
    card.style.boxShadow = ''
    
    const parent = card.parentElement
    if (parent) {
      parent.style.setProperty('--ring-opacity', '0')
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-bg z-10"
    >
      <div className="max-w-[1100px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Column: Hero Text */}
        <div className="flex-1 space-y-6 text-left">
          {/* Eyebrow */}
          <p className="hero-statement text-xs text-accent font-mono uppercase tracking-[0.25em] font-semibold">
            // SENIOR UNITY DEVELOPER
          </p>

          {/* Main Title & Typewriter */}
          <h1 className="hero-statement text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-heading leading-tight">
            Atul Kumar Pandey
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted font-normal mt-2">
              I am a <span className="text-accent font-mono font-medium">{typewrittenText}</span>
              <span className="typed-cursor">|</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline text-base sm:text-lg text-muted max-w-xl leading-relaxed font-light font-sans">
            Engineering high-performance mobile games, virtual multiplayer environments, and optimized real-time WebGL applications in C# and Unity.
          </p>

          {/* Action buttons */}
          <div className="hero-actions flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider bg-accent text-[#000] hover:opacity-85 cursor-pointer transition-opacity"
            >
              Let's Team Up
            </button>
            <a
              href="https://linkedin.com/in/atul-pandey-a0ab23198"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider border border-stroke text-text-primary hover:border-accent hover:text-accent cursor-pointer transition-colors"
            >
              Visit LinkedIn
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-socials flex items-center gap-6 pt-2">
            <a href="mailto:atul.pandey.local@gmail.com" className="social-link text-sm text-muted hover:text-accent flex items-center gap-2 transition-colors">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://github.com/atul-pandey-a0ab23198" target="_blank" rel="noopener noreferrer" className="social-link text-sm text-muted hover:text-accent flex items-center gap-2 transition-colors">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="Atul_Pandey_CV.pdf" target="_blank" rel="noopener noreferrer" className="social-link text-sm text-muted hover:text-accent flex items-center gap-2 transition-colors">
              <i className="fas fa-file-pdf"></i> Resume
            </a>
          </div>

          {/* Stats indicators */}
          <div className="hero-stats grid grid-cols-3 gap-6 pt-6 border-t border-stroke/50 max-w-md">
            <div className="stat-item flex flex-col">
              <span className="stat-num text-3xl font-extrabold text-accent leading-none">
                {statsCount.years}<span className="stat-plus text-lg">+</span>
              </span>
              <span className="stat-label text-[11px] text-muted font-medium uppercase mt-1 tracking-wider">
                Years Exp.
              </span>
            </div>
            <div className="stat-item flex flex-col">
              <span className="stat-num text-3xl font-extrabold text-accent leading-none">
                {statsCount.studios}<span className="stat-plus text-lg">+</span>
              </span>
              <span className="stat-label text-[11px] text-muted font-medium uppercase mt-1 tracking-wider">
                Studios Served
              </span>
            </div>
            <div className="stat-item flex flex-col">
              <span className="stat-num text-3xl font-extrabold text-accent leading-none">
                {statsCount.projects}<span className="stat-plus text-lg">+</span>
              </span>
              <span className="stat-label text-[11px] text-muted font-medium uppercase mt-1 tracking-wider">
                Shipped Games
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Avatar Container */}
        <div className="hero-avatar flex-shrink-0 w-[320px] aspect-[4/5] relative select-none">
          
          {/* Animated pulsing gradient ring behind */}
          <div 
            className="absolute inset-[-3px] rounded-[20px] bg-gradient-to-br from-accent to-accent2 pointer-events-none transition-opacity duration-500 z-0 animate-pulse"
            style={{ 
              opacity: 'var(--ring-opacity, 0)',
              filter: 'blur(3px)'
            }}
          />

          {/* Main frame container */}
          <div
            ref={avatarRef}
            onMouseMove={handleAvatarMouseMove}
            onMouseLeave={handleAvatarMouseLeave}
            className="w-full h-full rounded-2xl border border-stroke bg-surface overflow-hidden relative z-10 transition-transform duration-300 ease-out flex items-center justify-center cursor-crosshair shadow-xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* User photo */}
            <img
              src="./images/20251020_193431.jpg"
              alt="Atul Kumar Pandey"
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] transition-all duration-300 pointer-events-none z-1"
            />

            {/* Scanline repeating overlay */}
            <div className="absolute inset-0 scanline-overlay opacity-8 pointer-events-none z-2" />
            
            {/* Border frame helper for gaming theme */}
            <div className="absolute top-2 left-2 border-t-2 border-l-2 border-accent/40 w-4 h-4 z-3" />
            <div className="absolute top-2 right-2 border-t-2 border-r-2 border-accent/40 w-4 h-4 z-3" />
            <div className="absolute bottom-2 left-2 border-b-2 border-l-2 border-accent/40 w-4 h-4 z-3" />
            <div className="absolute bottom-2 right-2 border-b-2 border-r-2 border-accent/40 w-4 h-4 z-3" />
          </div>

        </div>

      </div>
    </section>
  )
}

