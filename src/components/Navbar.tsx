import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface NavbarProps {
  activeSection: string
  scrollToSection: (id: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2.5 py-1.5 transition-all duration-300 pointer-events-auto ${
          scrolled ? 'shadow-lg shadow-black/40 bg-surface/90 border-white/15' : 'shadow-sm shadow-black/10'
        }`}
      >
        {/* 1. Logo */}
        <button
          onClick={() => scrollToSection('home')}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          {/* Animated Outer Gradient Ring */}
          <div
            className={`absolute inset-0 rounded-full transition-transform duration-700 ease-in-out ${
              logoHovered ? 'rotate-180 scale-105' : 'rotate-0'
            }`}
            style={{
              background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
              padding: '1.5px',
            }}
          >
            <div className="w-full h-full rounded-full bg-bg" />
          </div>
          {/* Initials Text */}
          <span className="relative z-10 font-display italic text-[12px] font-bold text-text-primary tracking-tighter">
            AP
          </span>
        </button>

        {/* Vertical Divider */}
        <div className="hidden sm:block w-px h-4 bg-stroke mx-2" />

        {/* 3. Navigation Links */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-xs sm:text-sm rounded-full px-3.5 py-1.5 font-medium transition-all cursor-pointer ${
              activeSection === 'home'
                ? 'text-text-primary bg-stroke/60 font-semibold'
                : 'text-muted hover:text-text-primary hover:bg-stroke/30'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => scrollToSection('work')}
            className={`text-xs sm:text-sm rounded-full px-3.5 py-1.5 font-medium transition-all cursor-pointer ${
              activeSection === 'work'
                ? 'text-text-primary bg-stroke/60 font-semibold'
                : 'text-muted hover:text-text-primary hover:bg-stroke/30'
            }`}
          >
            Work
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className={`text-xs sm:text-sm rounded-full px-3.5 py-1.5 font-medium transition-all cursor-pointer ${
              activeSection === 'experience'
                ? 'text-text-primary bg-stroke/60 font-semibold'
                : 'text-muted hover:text-text-primary hover:bg-stroke/30'
            }`}
          >
            Resume
          </button>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-4 bg-stroke mx-2" />

        {/* 5. "Say hi" CTA Button */}
        <a
          href="mailto:atul.pandey.local@gmail.com"
          className="relative group text-xs sm:text-sm rounded-full px-4 py-1.5 font-medium transition-all cursor-pointer overflow-visible text-text-primary flex items-center gap-1"
        >
          {/* Gradient Reveal Behind */}
          <span
            className="absolute inset-[-1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
              padding: '1.5px',
            }}
          >
            <span className="block w-full h-full rounded-full bg-surface" />
          </span>
          
          <span className="relative z-10 flex items-center gap-1 font-semibold group-hover:text-text-primary">
            Say hi <span className="text-[10px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </span>
        </a>
      </motion.div>
    </nav>
  )
}
