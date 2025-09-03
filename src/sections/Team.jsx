import React from 'react'
// import TeamGrid from '../components/TeamMember'
// import TeamMember from '../components/TeamMember'
import TeamGrid from '../components/TeamGrid'

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="lg:text-left mb-6">
          <span className="inline-block bg-secondary-400 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Team
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
          A team with seamless level of experience, <br/> ready to build up your idea
          </h2>
        </div>
        
        <TeamGrid />
      </div>
    </section>
  )
}

export default Team
