import React, { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  onComplete?: () => void
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <div className="text-gray-700 leading-relaxed">
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-accent font-bold">|</span>
      )}
    </div>
  )
}

export default TypingAnimation
