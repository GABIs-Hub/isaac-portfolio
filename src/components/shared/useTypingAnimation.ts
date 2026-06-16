/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useRef } from 'react'

export const useTypingAnimation = (text: string, speed: number = 60) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    if (!text) return

    indexRef.current = 0
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText('')
    setIsComplete(false)

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1))
        indexRef.current++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return { displayedText, isComplete }
}
