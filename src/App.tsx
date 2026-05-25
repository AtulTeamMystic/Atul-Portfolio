import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SelectedWorks } from './components/SelectedWorks'
import { Journal } from './components/Journal'
import { Explorations } from './components/Explorations'
import { Stats } from './components/Stats'
import { ContactFooter } from './components/ContactFooter'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  
  const lenisRef = useRef<Lenis | null>(null)

  // Butter-smooth Inertial Scrolling (Lenis)
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
      const workSec = document.getElementById('work')
      const expSec = document.getElementById('experience')

      if (expSec && scrollPosition >= expSec.offsetTop) {
        setActiveSection('experience')
      } else if (workSec && scrollPosition >= workSec.offsetTop) {
        setActiveSection('work')
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
    <div className="relative min-h-screen bg-bg text-text-primary overflow-x-hidden selection:bg-[#89AACC] selection:text-bg">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Floating Navigation pill */}
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

          {/* Section 2: Hero */}
          <Hero scrollToSection={scrollToSection} />

          <main className="relative z-10 w-full">
            {/* Section 3: Selected Works (Bento Grid) */}
            <SelectedWorks />

            {/* Section 4: Journal (Experience logs & timeline) */}
            <Journal />

            {/* Section 5: Explorations (Scroll-driven GSAP Parallax Gallery) */}
            <Explorations />

            {/* Section 6: Stats Achievements */}
            <Stats />
          </main>

          {/* Section 7: Contact / Footer */}
          <ContactFooter />

          {/* Floating Glassmorphic Toast Notification */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
                animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3.5 bg-surface/85 backdrop-blur-md border border-[#89AACC]/30 text-text-primary rounded-full shadow-2xl flex items-center gap-3 text-xs md:text-sm font-semibold select-none pointer-events-none"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
