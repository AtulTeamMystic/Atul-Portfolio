import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
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

  // Butter-smooth Inertial Scrolling (Lenis)
  useEffect(() => {
    if (isLoading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutQuart
      infinite: false,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
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
    const element = document.getElementById(id)
    if (!element) return

    // Offset coordinates
    const offset = id === 'home' ? 0 : element.offsetTop
    
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
    
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
        </>
      )}
    </div>
  )
}

export default App
