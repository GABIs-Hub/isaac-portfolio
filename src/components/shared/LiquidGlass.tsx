import React from 'react'
import './LiquidGlass.css'

interface LiquidGlassProps {
  className?: string
  delay?: number
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({ className = '', delay = 0 }) => {
  return (
    <div
      className={`liquid-glass ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}
