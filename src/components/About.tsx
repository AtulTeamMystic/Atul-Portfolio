import React from 'react'
import { motion } from 'framer-motion'

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 border-t border-stroke/30 bg-bg z-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading flex items-center gap-2">
            <span className="text-accent font-mono font-medium">/</span>player-one
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 space-y-6"
          >
            <p className="text-text-primary text-base md:text-[17px] leading-relaxed font-light">
              I am <span className="text-accent font-semibold">Atul Kumar Pandey</span>, a Senior Unity Developer with over 4 years of experience designing and engineering immersive 2D, 3D, and multiplayer games. My expertise spans mobile development (Android & iOS), optimized WebGL interactive apps, and real-time multiplayer systems.
            </p>
            <p className="text-text-primary text-base md:text-[17px] leading-relaxed font-light">
              Throughout my career, I have shipped <span className="text-accent font-semibold">10+ projects</span>, ensuring high-performance execution, lag-compensated network architectures, and zero critical post-launch crashes. I specialize in bridging the gap between designers and developers by setting up zero-deviation pipelines that convert complex Figma mockups into interactive Unity builds.
            </p>
            <p className="text-text-primary text-base md:text-[17px] leading-relaxed font-light">
              I thrive on optimization challenges—whether it is reducing API round-trips by 40% with Socket.IO, optimizing rendering paths for Unity WebGL configurations, or coding robust state machines for multiplayer gameplay. I am committed to clean code, modular architecture, and mentoring team members to elevate project quality.
            </p>
          </motion.div>

          {/* Right Column: About Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-img hidden sm:block w-[260px] shrink-0"
          >
            <img
              src="./images/20251020_193431.jpg"
              alt="Atul Kumar Pandey Profile"
              className="w-full rounded-xl border border-stroke filter grayscale-[15%] transition-all duration-300 hover:grayscale-0"
            />
          </motion.div>

        </div>

      </div>
    </section>
  )
}
