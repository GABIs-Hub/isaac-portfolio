import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1b2b] text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-accent font-syne mb-2">IO.</h3>
            <p className="text-gray-400 text-sm">Building excellence through precision engineering and quality management.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:ogabi.isaac@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/isaac-ogabi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><p className="text-gray-500">Lagos, Nigeria</p></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Isaac Ogabi. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0"><span className="text-accent font-bold">Building Excellence</span> in Every Project.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
