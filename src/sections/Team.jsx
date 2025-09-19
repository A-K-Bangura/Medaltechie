import React from 'react'
// import TeamGrid from '../components/TeamMember'
// import TeamMember from '../components/TeamMember'
import TeamGrid from '../components/TeamGrid'
import SectionTitle from '../components/SectionTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Team = () => {

    useGSAP(()=>{
    gsap.from('.slide-in-from-right2', {
      scrollTrigger: {
        trigger: '.slide-in-from-right2',
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        // scrub: true,
      },
      opacity: 0,
      x: '120%',
      duration: 1,
      ease: 'power1.Out'
    })
  }, [])
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="lg:text-left mb-6  text-center slide-in-from-right2">
          <SectionTitle title="Team" />                             
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          A team with seamless level of experience, <br/> ready to build up your idea
          </h2>
        </div>
        
        <TeamGrid />
      </div>
    </section>
  )
}

export default Team
