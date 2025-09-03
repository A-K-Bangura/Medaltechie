import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import medalTechieLogo from '../assets/images/medallogo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-16 w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {/* Company Info */}
          <div className="md:col-span-2 w-full">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={medalTechieLogo} 
                alt="Medal Techie Logo" 
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain" 
              />
              {/* <span className="text-lg sm:text-xl font-bold">Medal Techie</span> */}
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed text-sm sm:text-base">
              We are a Techie Team, we pride ourselves with our each unique skills and we ensure 
              that we give our customers what they truly want with a bit of technological advice 
              and inputs from us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary-600 rounded-full"></div>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary-600 rounded-full"></div>
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary-600 rounded-full"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Our Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Our Team', 'Our Services', 'Testimonials', 'Features', 'Why Choose Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-secondary-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" />
              <span className="text-secondary-300 text-sm sm:text-base">No 43 Soldier Street, Freetown Sierra Leone</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" />
              <a href="mailto:medaltechie@gmail.com" className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                medaltechie@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" />
              <a href="tel:+23278672866" className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                +232 78 672866
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} | Proudly Powered by Medal Techie
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-secondary-400 hover:text-white text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-xs sm:text-sm transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
