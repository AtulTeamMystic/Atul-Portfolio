import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

const words = ["Design", "Create", "Inspire"]

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    // Word cycler every 900ms (totals 2700ms for 3 words)
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 900)

    // Smooth requestAnimationFrame counter from 0 to 100 over 2700ms
    const duration = 2700
    const startTimestamp = performance.now()

    let animationFrameId: number

    const step = (timestamp: number) => {
      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)
      const currentCount = Math.floor(progress * 100)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        // Complete state with 400ms delay
        setTimeout(() => {
          onComplete()
        }, 400)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      clearInterval(wordInterval)
      cancelAnimationFrame(animationFrameId)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 lg:p-16 select-none overflow-hidden">
      
      {/* Top Left Label */}
      <div className="flex items-start">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-semibold"
        >
          PORTFOLIO &copy; 2026
        </motion.div>
      </div>

      {/* Center - Word Cycle */}
      <div className="flex justify-center items-center my-auto">
        <AnimatePresence mode="wait">
          <motion.h2
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/90 select-none pointer-events-none"
          >
            {words[wordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Bottom Display */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 pt-4">
        
        {/* Left-aligned metadata info */}
        <div className="hidden md:block max-w-xs text-xs text-muted/60 leading-relaxed font-light">
          Senior Unity Developer Portfolio · Crafting Immersive Real-time 3D Systems, Games & Metaverse Frontends.
        </div>

        {/* Right-aligned Counter */}
        <div className="flex flex-col items-end">
          <span className="text-7xl md:text-9xl lg:text-[10rem] font-display font-light text-text-primary leading-none tabular-nums select-none tracking-tighter">
            {String(count).padStart(3, "0")}
          </span>
        </div>

      </div>

      {/* Full Width Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/30 overflow-hidden">
        <div
          className="h-full accent-gradient transition-transform duration-75 ease-out origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 12px rgba(137, 170, 204, 0.5)'
          }}
        />
      </div>
      
    </div>
  )
}
