import React, { useState } from 'react'
import FeatureCard from '../components/FeatureCard'
import SectionTitle from '../components/SectionTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Features = () => {
  useGSAP(()=>{
    gsap.from('.slide-in-from-left2', {
      scrollTrigger: {
        trigger: '.slide-in-from-left2',
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        // scrub: true,
      },
      opacity: 0,
      x: '-120%',
      duration: 1,
      ease: 'power1.Out'
    })
  }, [])

  const [openId, setOpenId] = useState(null)
  return (
    <section id="features" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center md:text-right slide-in-from-left2">
          <SectionTitle title="Features" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          We don't charge much but we still <br/>maintain the quality of the services we provide
          </h2>
        </div>

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
