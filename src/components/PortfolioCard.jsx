import React, { useRef } from 'react'
import ShineCard from './ShineCard'
import ShineButton from './ShineButton'
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({
  videoSrc,
  poster,
  title,
  description,
  tags = [],
  client,
  year,
  onView,
  className = ''
}) => {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <ShineCard className={`overflow-hidden ${className} cursor-pointer`}>
      <div
        className="w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full aspect-video bg-secondary-100">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-700">{title}</h3>
        {description && (
          <p className="mt-2 text-sm sm:text-base text-neutral-600">{description}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 text-xs rounded-full bg-secondary-200 text-secondary-800">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-neutral-600">
          <div className="space-x-3">
            {client && <span>Client: <span className="font-medium text-neutral-700">{client}</span></span>}
            {year && <span>Year: <span className="font-medium text-neutral-700">{year}</span></span>}
          </div>
          <span className="text-neutral-600 cursor-pointer flex items-center view_details gap-2">View Project <FaArrowRight /></span>
        </div>
      </div>
    </ShineCard>
  )
}

export default PortfolioCard


