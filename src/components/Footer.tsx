import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8 border-t-4 border-accent">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-semibold text-lg">
          © 2025 Isaac Ogabi. <span className="text-accent">Building Excellence in Every Project.</span>
        </p>
        <p className="text-gray-300 mt-3 text-sm">
          Crafted with precision • Delivered with excellence
        </p>
      </div>
    </footer>
  )
}

export default Footer
