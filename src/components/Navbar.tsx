import React, { useState, useEffect } from 'react'

interface NavbarProps {
  activeSection: string
  scrollToSection: (id: string) => void
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Journey' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleLinkClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] border-b border-stroke bg-bg/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-2xl shadow-black/30 border-b bg-bg/95' : ''
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-[60px] flex items-center justify-between">
        
        {/* Brand logo/initials */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-white hover:opacity-85 cursor-pointer font-bold tracking-tight text-lg flex items-center gap-1.5"
        >
          <span className="text-accent font-mono font-medium">&lt;</span>
          ATUL PANDEY
          <span className="text-accent font-mono font-medium">/&gt;</span>
        </button>

        {/* Desktop Links & Theme Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 nav-links font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[14px] cursor-pointer hover:text-accent pb-0.5 tracking-wide transition-colors ${
                  activeSection === link.id || 
                  (link.id === 'experience' && activeSection === 'education')
                    ? 'text-accent font-semibold active'
                    : 'text-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-[34px] h-[34px] rounded border border-stroke flex items-center justify-center text-muted hover:border-accent hover:text-accent cursor-pointer transition-all duration-200"
            aria-label="Toggle Theme"
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-[34px] h-[34px] rounded border border-stroke flex items-center justify-center text-muted hover:border-accent hover:text-accent cursor-pointer transition-all duration-200"
          >
            <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Nav Collapsible Drawer */}
      <div
        className={`md:hidden flex flex-col px-6 border-t border-stroke bg-bg gap-3 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`text-left text-[15px] py-1 cursor-pointer font-medium transition-colors ${
              activeSection === link.id ||
              (link.id === 'experience' && activeSection === 'education')
                ? 'text-accent font-semibold'
                : 'text-muted hover:text-accent'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

