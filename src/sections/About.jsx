import React from 'react'
import { Users, Target, Zap, Cpu } from 'lucide-react'
import ShineCard from '../components/ShineCard'
import missionVideo from '../assets/videos/about-mission-video.mp4'

const About = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />,
      title: 'Experts',
      description: 'Specialized team with diverse skills'
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />,
      title: 'Specialized',
      description: 'Focused on specific technology areas'
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />,
      title: 'Innovative',
      description: 'Cutting-edge solutions and approaches'
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />,
      title: 'Technology Driven',
      description: 'Latest tech stack and methodologies'
    }
  ]

  const stats = [
    { number: '5 Years', label: 'On the market' },
    { number: '5+', label: 'Team Members' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '100%', label: 'Professionalism' }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-white w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column - Content */}
          <div className="w-full">
            <div className="mb-6">
              <span className="inline-block bg-secondary-200 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                We Are Focused on Clients Satisfaction
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-neutral-700 mb-8 leading-relaxed">
              A healthy and satisfactory relationship with clients is always our priority 
              that is the reason we give out our best so as to ensure maximum quality. 
              We aren't robots but our work can be as flawless as a robotic outcome.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-neutral-900 mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <ShineCard>
          <div className="bg-secondary-100 p-6 sm:p-8 rounded-2xl w-full">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-700 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 rounded-xl shadow-sm relative opacity-90 overflow-hidden">
              <video
                src={missionVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative p-4 sm:p-6">
                <h3 className="font-semibold text-white mb-3 md:text-2xl text-sm sm:text-base">Our Mission</h3>
                <p className="text-white/90 w-[90%] text-xs sm:text-sm">
                  To provide innovative technology solutions that empower businesses 
                  and individuals to achieve their digital transformation goals.
                </p>
              </div>
            </div>
          </div>
          </ShineCard>
        </div>
      </div>
    </section>
  )
}

export default About
