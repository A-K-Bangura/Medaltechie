import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "../components/PortfolioCard";
import ShineButton from "../components/ShineButton";
import SectionTitle from '../components/SectionTitle'       
import vitaform from "../assets/images/projects/vitaform.jpg";
import evritrend from "../assets/images/projects/evritrend.png";
import elearning from "../assets/images/projects/Acabase.png";
import ctaVideo from "../assets/videos/projectCTA.mp4";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Portfolio = () => {

  useGSAP(()=>{
    gsap.from('.slide-in-from-right', {
      scrollTrigger: {
        trigger: '.slide-in-from-right',
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


  const { currentIndex, setCurrentIndex, trackRef, next, prev, handleTouchStart, handleTouchMove, handleTouchEnd } = useSlider(projects.length)
  const ctaVideoRef = useRef(null)
  const ctaSectionRef = useRef(null)
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false)

  // Intersection Observer to detect when CTA section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedOnce && ctaVideoRef.current) {
            ctaVideoRef.current.play()
            setHasPlayedOnce(true)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    )

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current)
    }

    return () => {
      if (ctaSectionRef.current) {
        observer.unobserve(ctaSectionRef.current)
      }
    }
  }, [hasPlayedOnce])


  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-6  text-center lg:text-left slide-in-from-right">
          <SectionTitle title="Portfolio" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Showcasing our expertise through <br /> successful projects
          </h2>
        </div>

        {/* Desktop/Grid view */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <PortfolioCard key={idx} {...p} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((p, idx) => (
                <div key={idx} className="min-w-full pr-2">
                  <PortfolioCard {...p} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-900 rounded-full p-2 shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-900 rounded-full p-2 shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 w-2 rounded-full ${idx === currentIndex ? "bg-primary-600" : "bg-neutral-300"}`}
              />)
            )}
          </div>
        </div>
         {/* CTA Section */}
         <div 
           ref={ctaSectionRef}
           className="relative mt-12 sm:mt-16 overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl mx-4"
         >
           <video 
             ref={ctaVideoRef}
             src={ctaVideo} 
             muted 
             playsInline 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/40" />
           <div className="absolute inset-0 flex items-center justify-end px-4 md:pr-6 sm:pr-12">
             <div className="text-right max-w-md">
               <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-white">
                 Ready to Get Started?
               </h3>
               <p className="text-white/90 mb-6 text-sm">
                 Let's discuss your project requirements and create something amazing together.
               </p>
               <ShineButton className="sm:w-[70%] md:w-auto mx-auto" text="Contact Us Today" variant="secondary" />
             </div>
           </div>
         </div>
      </div>

    </section>
  );
};

export default Portfolio;

// Demo data
const demoVideo = null; // Optional: replace with actual demo video path if available
const demoPoster = "https://dummyimage.com/1280x720/ffdfd3/190903&text=Project+Preview";

const projects = [
  {
    videoSrc: demoVideo,
    poster: vitaform,
    title: "Ecommerce and Store Locator Website",
    description: "Modern storefront with seamless checkout and admin dashboard.",
    tags: ["React", "Node.js", "Stripe"],
    client: "Vitaform",
    year: "2024",
    onView: () => {}
  },
  {
    videoSrc: demoVideo,
    poster: evritrend,
    title: "Social Digital Marketing Platform",
    description: "Secure mobile app with biometric login and bill payments.",
    tags: ["React Native", "GraphQL"],
    client: "Evritrend",
    year: "2023",
    onView: () => {}
  },
  {
    videoSrc: demoVideo,
    poster: elearning,
    title: "E-Learning Platform",
    description: "Realtime analytics with custom reporting and alerts.",
    tags: ["Next.js", "D3.js"],
    client: "Acabase",
    year: "2025",
    onView: () => {}
  }
]

// Local hook
const useSlider = (length) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)

  const clamp = (idx) => Math.max(0, Math.min(idx, length - 1))
  const next = () => setCurrentIndex((i) => clamp(i + 1))
  const prev = () => setCurrentIndex((i) => clamp(i - 1))

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const handleTouchEnd = () => {
    const threshold = 50
    if (touchDeltaX.current > threshold) {
      prev()
    } else if (touchDeltaX.current < -threshold) {
      next()
    }
    touchDeltaX.current = 0
  }

  return { currentIndex, setCurrentIndex, trackRef, next, prev, handleTouchStart, handleTouchMove, handleTouchEnd }
}
