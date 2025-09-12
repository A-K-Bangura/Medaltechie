import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "../components/PortfolioCard";
import ShineButton from "../components/ShineButton";

const Portfolio = () => {
  const { currentIndex, setCurrentIndex, trackRef, next, prev, handleTouchStart, handleTouchMove, handleTouchEnd } = useSlider(projects.length)
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center lg:text-left">
        <div className="mb-6">
          <span className="inline-block bg-secondary-200 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Showcasing our expertise through <br /> successful projects
          </h2>
        </div>
        {/* <p className="text-lg text-secondary-600">
          Showcasing our expertise through successful projects
        </p> */}
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
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-primary-600 text-white p-6 sm:p-8 rounded-2xl mx-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss your project requirements and create something amazing together.
            </p>
            {/* <button className="bg-white text-primary-600 hover:bg-secondary-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-base text-sm sm:text-base">
              Contact Us Today
            </button> */}
            <ShineButton text="Contact Us Today" variant="secondary" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Portfolio;

// Demo data
const demoVideo = ""; // Optional: replace with actual demo video path if available
const demoPoster = "https://dummyimage.com/1280x720/ffdfd3/190903&text=Project+Preview";

const projects = [
  {
    videoSrc: demoVideo,
    poster: demoPoster,
    title: "E-commerce Platform",
    description: "Modern storefront with seamless checkout and admin dashboard.",
    tags: ["React", "Node.js", "Stripe"],
    client: "Acme Corp",
    year: "2024",
    onView: () => {}
  },
  {
    videoSrc: demoVideo,
    poster: demoPoster,
    title: "Mobile Banking App",
    description: "Secure mobile app with biometric login and bill payments.",
    tags: ["React Native", "GraphQL"],
    client: "Finex Bank",
    year: "2023",
    onView: () => {}
  },
  {
    videoSrc: demoVideo,
    poster: demoPoster,
    title: "Analytics Dashboard",
    description: "Realtime analytics with custom reporting and alerts.",
    tags: ["Next.js", "D3.js"],
    client: "DataSight",
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
