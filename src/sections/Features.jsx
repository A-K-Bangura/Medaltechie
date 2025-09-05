import React, { useState } from 'react'
import FeatureCard from '../components/FeatureCard'

const Features = () => {
  const [openId, setOpenId] = useState(null)
  return (
    <section id="features" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 text-center lg:text-right">
        <div className="mb-6">
          <span className="inline-block bg-secondary-400 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
          We don't charge much but we still <br/>maintain the quality of the services we provide
          </h2>
        </div>
        {/* <p className="text-lg text-secondary-600">
          We don't charge much but we still maintain the quality of the services we provide
        </p> */}
        {/* Desktop/tablet: expanded grid */}
        <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {features.map((f) => (
            <FeatureCard
              key={f.id}
              id={f.id}
              title={f.title}
              items={f.items}
              ctaText={f.ctaText}
              onSelect={() => {}}
              isOpen={true}
            />
          ))}
        </div>

        {/* Mobile: single-open accordion */}
        <div className="md:hidden space-y-4 text-left">
          {features.map((f) => (
            <FeatureCard
              key={f.id}
              id={f.id}
              title={f.title}
              items={f.items}
              ctaText={f.ctaText}
              onSelect={(id) => setOpenId((prev) => (prev === id ? null : id))}
              isOpen={openId === f.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

// Data & state below to keep file self-contained
const features = [
  {
    id: 'cd',
    title: 'Corporate Design (CD)',
    items: [
      'Logo (Different Formats)',
      'Banners (All Sizes)',
      'Flyers',
      'ID Cards',
      'Business Cards',
      'Customized T-shirts & Pen',
      'Customized Caps & Bands',
      'Digital Marketing',
    ],
  },
  {
    id: 'websites',
    title: 'Business/Corporate Websites',
    items: [
      'SEO & Branding',
      'Hosting Server',
      'Google Analytics',
      'Domain Name Registration',
      'SSL Security & Cloudflare',
      'Slick Interface Designs',
      'UI & UX Sketches',
      'Digital Marketing',
      '24/7 Support',
    ],
  },
  {
    id: 'apps',
    title: 'Android & iOS Apps',
    items: [
      'Apple and Play Store Upload',
      'UI & UX Sketches',
      'Vast Functionality Development',
      'Slick Interface Designs',
      'Payment Methods',
      'Branding Solutions',
      'API Integrations',
      'Back-End & Server',
      'Digital Marketing',
      'Documentation & Training',
      '24/7 Support',
    ],
  },
  {
    id: 'web-systems',
    title: 'Web Systems',
    items: [
      'SEO & Branding',
      'Vast Functionality Development',
      'cPanel & Hosting Server',
      'Domain Name Registration',
      'Google Analytics',
      'Payment Methods',
      'SSL Security & Cloudflare',
      'Customized Dashboards',
      'Slick Interface Designs',
      'API Integrations',
      'UI & UX Sketches',
      'Digital Marketing',
      'Documentation & Training',
      '24/7 Support',
    ],
  },
]

// (No wrapper needed)
