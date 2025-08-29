import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Company Type */}
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium max-w-full">
              ICT CONSULTANCY COMPANY IN SIERRA LEONE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight px-2">
            Quality & Strategic Creation of{' '}
            <span className="text-blue-600">Online and Digital Presence</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            We are a team of specialized and diverse skills, let's help you brainstorm 
            and build up that technological idea to reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 w-full sm:w-auto">
              View Our Work
            </button>
          </div>

          {/* Stats Preview */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
