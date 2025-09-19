import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <span className="inline-block bg-secondary-200 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            {title}
          </span>
  )
}

export default SectionTitle