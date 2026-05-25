import React, { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import gsap from 'gsap'

interface HeroProps {
  scrollToSection: (id: string) => void
}

const roles = ["Unity Engineer", "Game Architect", "Technical Designer", "Metaverse Builder"]

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  // Roles cycle every 2s
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(roleTimer)
  }, [])

  // HLS Video Stream initialization
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsSource = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      })
      hls.loadSource(hlsSource)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.log("Auto-play blocked:", err))
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback for native Safari player
      video.src = hlsSource
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((err) => console.log("Auto-play blocked:", err))
      })
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [])

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.name-reveal',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
      )

      tl.fromTo('.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        '-=0.8'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030303]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          muted
          loop
          playsInline
          autoPlay
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/35 z-1" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-2 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">

        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6 font-semibold md:mb-8">
          SENIOR UNITY DEVELOPER
        </p>

        {/* Display Name */}
        <h1 className="name-reveal text-5xl md:text-7xl lg:text-[7.5rem] font-display italic text-text-primary leading-[0.95] tracking-tight mb-6 select-none font-normal">
          Atul Kumar Pandey
        </h1>

        {/* Dynamic Role Line */}
        <div className="blur-in text-base md:text-xl text-text-primary/95 font-medium mb-4 flex items-center gap-1.5 justify-center">
          <span>A</span>
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display italic text-text-primary font-medium"
          >
            {roles[roleIndex]}
          </span>
          <span>lives in India.</span>
        </div>

        {/* Subtext description */}
        <p className="blur-in text-xs md:text-sm text-muted max-w-md mb-10 leading-relaxed font-light">
          Engineering high-performance multiplayer games, immersive metaverse frontends, and optimized real-time 3D systems in Unity & C#.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row gap-4 items-center justify-center">

          {/* Button 1: See Works */}
          <button
            onClick={() => scrollToSection('work')}
            className="relative w-44 h-12 rounded-full text-xs font-semibold uppercase tracking-wider bg-text-primary text-bg transition-transform duration-300 hover:scale-105 cursor-pointer active:scale-95 group flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1.5px] accent-gradient">
              <div className="w-full h-full bg-bg rounded-full" />
            </div>
            <span className="relative z-10 group-hover:text-text-primary transition-colors">See Works</span>
          </button>

          {/* Button 2: Reach out */}
          <a
            href="mailto:atul.pandey.local@gmail.com"
            className="relative w-44 h-12 rounded-full text-xs font-semibold uppercase tracking-wider text-text-primary bg-bg/20 backdrop-blur-sm border border-stroke transition-transform duration-300 hover:scale-105 cursor-pointer active:scale-95 group flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1.5px] accent-gradient">
              <div className="w-full h-full bg-bg rounded-full" />
            </div>
            <span className="relative z-10">Reach out...</span>
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none pointer-events-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium opacity-65">
          SCROLL
        </span>
        <div className="relative w-[1px] h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text-primary/60 rounded-full animate-scroll-down" />
        </div>
      </div>

    </section>
  )
}
