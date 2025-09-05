import React from 'react'
import { ChevronDown } from 'lucide-react'

const FeatureCard = ({ id, title, items = [], ctaText, onSelect, isOpen, className = '' }) => {
  return (
    <div className={`border rounded-xl bg-white shadow-sm transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <button
        type="button"
        onClick={() => onSelect(id)}
        className="w-full flex items-center justify-between p-4 sm:p-6 md:cursor-default md:pointer-events-none"
        aria-expanded={isOpen}
        aria-controls={`feature-panel-${id}`}
      >
        <span className="text-left font-semibold text-secondary-900 text-base sm:text-lg">{title}</span>
        <ChevronDown className={`w-5 h-5 text-secondary-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} md:hidden`} />
      </button>

      <div
        id={`feature-panel-${id}`}
        className={`overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} border-t`}
      >
        <div className="min-h-0">
          <div className="p-4 sm:p-6 text-left">
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-secondary-800">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {ctaText && (
              <div className="mt-4 text-sm text-secondary-700">{ctaText}</div>
            )}
            <div className="mt-6">
              <button className="btn-shine border-2 bg-primary-100/50  border-primary-600 text-primary-600 px-5 py-2 rounded-lg font-semibold text-sm">Select the Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard


