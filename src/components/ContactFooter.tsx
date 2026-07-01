import React from 'react'
import { motion } from 'framer-motion'

export const ContactFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const marqueeText = "BUILDING THE FUTURE • ENGINEERED IN DEEP SPACE • "
  const repeatedMarquee = Array(12).fill(marqueeText).join("")

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-surface border-t border-stroke z-10 font-mono">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading flex items-center gap-2">
            <span className="text-accent font-mono font-medium">/</span>co-op-invite
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-heading">
              Slot open for a new quest.
            </h3>
            <p className="text-text-primary text-sm md:text-base leading-relaxed font-light font-sans">
              Looking to collaborate on high-performance Unity mobile builds, virtual multiplayer spaces, or optimized WebGL setups? Reach out via email or let's connect on social media. I am open to co-op contracts and senior development opportunities.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex flex-col md:items-end">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/25 bg-accent/8 text-accent text-xs font-semibold select-none shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              READY TO SPAWN IN
            </div>

            {/* Contact Links Grid */}
            <div className="space-y-3.5 w-full max-w-[320px]">
              <a
                href="mailto:atul.pandey.local@gmail.com"
                className="flex items-center gap-3 text-sm text-text-primary hover:text-accent transition-colors p-3 rounded-lg border border-stroke bg-bg/50 hover:border-accent/25"
              >
                <i className="fas fa-envelope text-accent w-5 text-center text-base"></i>
                <span className="truncate font-sans font-medium">atul.pandey.local@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/atul-pandey-a0ab23198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-primary hover:text-accent transition-colors p-3 rounded-lg border border-stroke bg-bg/50 hover:border-accent/25"
              >
                <i className="fab fa-linkedin text-accent w-5 text-center text-base"></i>
                <span className="truncate font-sans font-medium">linkedin.com/in/atul-pandey</span>
              </a>

              <a
                href="https://github.com/atul-pandey-a0ab23198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-primary hover:text-accent transition-colors p-3 rounded-lg border border-stroke bg-bg/50 hover:border-accent/25"
              >
                <i className="fab fa-github text-accent w-5 text-center text-base"></i>
                <span className="truncate font-sans font-medium">github.com/atul-pandey-a0ab23198</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* horizontal scrolling marquee text */}
      <div className="w-full overflow-hidden border-y border-stroke/40 py-4 bg-bg/40 backdrop-blur-sm select-none mb-10">
        <div className="flex whitespace-nowrap">
          <div
            className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-muted/30 whitespace-nowrap"
            style={{
              animation: 'marquee 28s linear infinite',
              display: 'inline-block'
            }}
          >
            {repeatedMarquee}
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 relative z-10 border-t border-stroke/30 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <div>
            &copy; {currentYear} Atul Kumar Pandey. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:atul.pandey.local@gmail.com" className="hover:text-accent transition-colors">Email</a>
            <a href="https://linkedin.com/in/atul-pandey-a0ab23198" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/atul-pandey-a0ab23198" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="Atul_Pandey_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Resume</a>
          </div>

          <div className="text-[10px] text-muted/50 font-sans tracking-wide">
            ENGINEERED IN DEEP SPACE
          </div>
        </div>
      </div>

      {/* CSS style definition injected for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </footer>
  )
}

