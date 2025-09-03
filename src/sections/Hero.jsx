import React from 'react'
import ShimmerText from '../components/ShimmerText'
import ShineButton from '../components/ShineButton'
import heroVideo from '../assets/videos/hero-video.mp4'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-dvh overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video 
        src={heroVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 min-w-full min-h-full"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10 min-w-full min-h-full"></div>
      
      <div className="container mx-auto px-4 w-full max-w-full relative z-20 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center w-full py-8">
          {/* Company Type */}
          <div className="mb-6">
              <span className="inline-block lg:mt-15 bg-white/90 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium max-w-full backdrop-blur-sm">
                ICT CONSULTANCY COMPANY IN SIERRA LEONE
              </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 leading-tight px-2">
            {/* Quality & Strategic Creation of{' '}
            <span className="text-primary-600">Online and Digital Presence</span> */}
            <ShimmerText text="Quality & Strategic Creation of Online and Digital Presence" primaryColor="primary-600" shimmerColor="primary-100" classList="text-xl hidden lg:inline-block sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2" />
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base pt-12 lg:pt-0 lg:text-[#cfc9c8] lg:text-lg text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            We are a team of specialized and diverse skills, let's help you brainstorm 
            and build up that technological idea to reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 mb-6 sm:mb-8">
            {/* <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-base shadow-lg hover:shadow-xl w-full sm:w-auto">
              Get Started
            </button> */}
            <ShineButton text="Get Started" variant="primary" />
            {/* <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-base w-full sm:w-auto">
              View Our Work
            </button> */}
            <ShineButton text="View Our Work" variant="secondary" />
          </div>

          {/* Stats Preview */}
          <div className="mt-16 sm:mt-8 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 bg-white/10 backdrop-blur-sm rounded-lg py-6 sm:py-8 md:py-10 mx-4 sm:mx-8 md:mx-30 border border-white/20">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
