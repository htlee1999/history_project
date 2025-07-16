// ABOUTME: Scroll-to-top button component that appears when navigation tabs are out of view
// ABOUTME: Uses intersection observer to detect visibility and provides smooth scrolling back to top

import { useState, useEffect, useRef } from 'react'
import { ChevronUp } from 'lucide-react'

interface ScrollToTopButtonProps {
  targetElementId: string;
}

export function ScrollToTopButton({ targetElementId }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const targetElement = document.getElementById(targetElementId)
    if (!targetElement) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    observerRef.current.observe(targetElement)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [targetElementId])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}