import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import gsap from 'gsap'

export const ContactFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  // HLS Video Stream initialization (Flipped)
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

  // GSAP Infinite Horizontal Marquee
  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const ctx = gsap.context(() => {
      gsap.to(marquee, {
        xPercent: -50,
        ease: "none",
        duration: 38,
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  const textToRepeat = "BUILDING THE FUTURE • ENGINEERED IN DEEP SPACE • "
  const repeatedText = Array(12).fill(textToRepeat).join("")

  return (
    <section
      id="contact"
      className="relative bg-bg pt-20 md:pt-28 pb-12 overflow-hidden border-t border-stroke/30 flex flex-col justify-between min-h-[85vh]"
    >
      {/* Background Video (Flipped Vertically) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] pointer-events-none opacity-45"
          muted
          loop
          playsInline
          autoPlay
        />
        {/* Contrast Overlays */}
        <div className="absolute inset-0 bg-black/65 z-1" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent z-2" />
      </div>

      {/* 1. GSAP Continuous Marquee (Layer 10) */}
      <div className="relative z-10 w-full overflow-hidden border-y border-stroke/40 py-5 bg-bg/40 backdrop-blur-sm select-none">
        <div className="flex whitespace-nowrap overflow-visible">
          <div
            ref={marqueeRef}
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-text-primary/45 font-body"
          >
            {repeatedText}
          </div>
        </div>
      </div>

      {/* 2. Primary Call To Action Panel (Center) */}
      <div className="relative z-10 text-center px-6 my-auto flex flex-col items-center gap-6 max-w-2xl mx-auto py-12">
        
        <h2 className="text-5xl md:text-7xl font-display italic text-text-primary tracking-tight font-normal leading-[0.95]">
          Let's build <span className="font-display italic text-text-primary">together</span>
        </h2>

        <p className="text-xs md:text-sm text-muted font-light leading-relaxed max-w-md mb-4">
          Looking to collaborate on standard Unity platforms, custom WebGL configurators, or multiplayer architectures? Drop an email or connect on LinkedIn.
        </p>

        {/* Dynamic Email Button with outer hover gradient border ring */}
        <a
          href="mailto:atul.pandey.local@gmail.com"
          className="relative group h-14 inline-flex items-center justify-center rounded-full px-10 text-xs font-semibold uppercase tracking-widest text-text-primary border border-stroke cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/25"
        >
          <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1.5px] accent-gradient">
            <div className="w-full h-full bg-bg rounded-full" />
          </div>
          <span className="relative z-10 flex items-center gap-2">
            atul.pandey.local@gmail.com <span className="text-[10px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </span>
        </a>

      </div>

      {/* 3. Footer Bar Section (Bottom) */}
      <div className="relative z-10 border-t border-stroke/30 pt-8 mt-12 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Pulsing Dot Status */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[11px] text-text-primary/85 font-semibold tracking-wider uppercase">
              Available for projects
            </span>
          </div>

          {/* Social Anchors */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/atul-pandey-a0ab23198"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-text-primary font-medium tracking-wide transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/atul-pandey-a0ab23198"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-text-primary font-medium tracking-wide transition-colors"
            >
              GitHub
            </a>
            <a
              href="Atul_Pandey_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-text-primary font-medium tracking-wide transition-colors"
            >
              Resume
            </a>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="text-center mt-12 text-[10px] text-muted/40 font-medium">
          &copy; 2026 Atul Kumar Pandey. Engineered in deep space.
        </div>

      </div>

    </section>
  )
}
