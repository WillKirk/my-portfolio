'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [onDark, setOnDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const navBottom = 56
      const darkSections = document.querySelectorAll('section.bg-gray-900')
      let overlapping = false
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < navBottom && rect.bottom > 0) {
          overlapping = true
        }
      })
      setOnDark(overlapping)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      onDark
        ? 'bg-transparent'
        : 'bg-gray-50/95 backdrop-blur-sm border-b border-gray-200'
    )}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              history.pushState(null, '', window.location.pathname)
            }}
            className={cn(
              'text-sm font-medium tracking-tight transition-colors duration-300 cursor-pointer',
              onDark ? 'text-white' : 'text-gray-900'
            )}
        >
            WK<span className="text-green-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
            {['Story', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a          // ← here
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                      'text-sm hover:text-green-primary transition-colors duration-200',
                      onDark ? 'text-gray-300' : 'text-gray-500'
                    )}
                >
                    {item}
                </a>
))}
        </div>

        <a
          href="#contact"
          className="text-sm font-medium bg-green-primary hover:bg-green-hover text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Say hello
        </a>
      </div>
    </nav>
  )
}