import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SelectedWorks } from './components/SelectedWorks'
import { Skills } from './components/Skills'
import { Journal } from './components/Journal'
import { Education } from './components/Education'
import { ContactFooter } from './components/ContactFooter'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  // Smooth Inertial Scrolling (Lenis)
  useEffect(() => {
    if (isLoading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutQuart
      infinite: false,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [isLoading])

  // Mouse cursor glow tracking (GPU-composited via requestAnimationFrame)
  useEffect(() => {
    if (isLoading) return

    let rafPending = false
    let mx = -999
    let my = -999

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${mx}px`)
        document.documentElement.style.setProperty('--mouse-y', `${my}px`)
        rafPending = false
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isLoading])

  // Global click interceptor for mailto: links to copy to clipboard & show Toast
  useEffect(() => {
    if (isLoading) return

    const handleMailToClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.getAttribute('href')?.startsWith('mailto:')) {
        const email = anchor.getAttribute('href')?.replace('mailto:', '')
        if (email) {
          navigator.clipboard.writeText(email).then(() => {
            setToastMessage('Email copied to clipboard! 📋')
            setTimeout(() => {
              setToastMessage(null)
            }, 3000)
          }).catch(() => {
            // fallback if copy fails
          })
        }
      }
    }

    window.addEventListener('click', handleMailToClick)
    return () => window.removeEventListener('click', handleMailToClick)
  }, [isLoading])

  // Scroll spy to update Navbar active section indicator
  useEffect(() => {
    if (isLoading) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      const homeSec = document.getElementById('home')
      const aboutSec = document.getElementById('about')
      const workSec = document.getElementById('work')
      const skillsSec = document.getElementById('skills')
      const expSec = document.getElementById('experience')
      const eduSec = document.getElementById('education')
      const contactSec = document.getElementById('contact')

      if (contactSec && scrollPosition >= contactSec.offsetTop) {
        setActiveSection('contact')
      } else if (eduSec && scrollPosition >= eduSec.offsetTop) {
        setActiveSection('education')
      } else if (expSec && scrollPosition >= expSec.offsetTop) {
        setActiveSection('experience')
      } else if (skillsSec && scrollPosition >= skillsSec.offsetTop) {
        setActiveSection('skills')
      } else if (workSec && scrollPosition >= workSec.offsetTop) {
        setActiveSection('work')
      } else if (aboutSec && scrollPosition >= aboutSec.offsetTop) {
        setActiveSection('about')
      } else if (homeSec) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial trigger
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading])

  const scrollToSection = (id: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, {
        duration: 1.2,
        immediate: false
      })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setActiveSection(id)
  }

  return (
    <div className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-accent/30 selection:text-white">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Floating Navigation Bar */}
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

          {/* Hero Section */}
          <Hero scrollToSection={scrollToSection} />

          <main className="relative z-10 w-full">
            {/* About / Player One */}
            <About />

            {/* Selected Works / Bento Grid */}
            <SelectedWorks />



            {/* Skills / Skill Tree */}
            <Skills />

            {/* Experience / Campaign Log */}
            <Journal />

            {/* Education / Skill School */}
            <Education />
          </main>

          {/* Contact / Footer */}
          <ContactFooter />

          {/* Floating Glassmorphic Toast Notification */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
                animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3.5 bg-surface/85 backdrop-blur-md border border-accent/20 text-text-primary rounded-full shadow-2xl flex items-center gap-3 text-xs md:text-sm font-semibold select-none pointer-events-none"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default App
