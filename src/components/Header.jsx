import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import medalTechieLogo from '../assets/images/medallogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    // { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Features', href: '#features' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ]

  return (
          <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-[2000] w-full max-w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full max-w-full">
                  <div className="flex items-center justify-between w-full h-16 sm:h-18 md:h-18 lg:h-18 xl:h-18">
           {/* Logo */}
           <div className="flex items-center justify-center flex-shrink-0 h-full">
             <img 
               src={medalTechieLogo} 
               alt="Medal Techie Logo" 
               className="w-28 h-28 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain" 
             />
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-shrink-0 h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

                     {/* Mobile Menu Button */}
           <button
             className="lg:hidden p-2 flex-shrink-0 h-full flex items-center justify-center"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-600" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-200 w-full">
            <nav className="flex flex-col space-y-3 pt-4 w-full">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
