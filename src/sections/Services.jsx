import React from 'react'
import { Globe, Smartphone, Database, Code, Palette, TrendingUp } from 'lucide-react'
import ServicesCard from '../components/ServicesCard'
import webDevelopmentImage from '../assets/images/services/web-dev.jpg'
import mobileDevelopmentImage from '../assets/images/services/mobile-dev.jpg'
import databaseDevelopmentImage from '../assets/images/services/database-dev.jpg'
import softwareDevelopmentImage from '../assets/images/services/software-dev.jpg'
import graphicDesigningImage from '../assets/images/services/graphic-dev.jpg'
import digitalMarketingImage from '../assets/images/services/digital-dev.jpg'
import ShineButton from '../components/ShineButton'

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'WEBSITE DEVELOPMENT',
      description: 'We Develop, Upgrade, Maintain, Host, Update and Register Domain Name for websites.',
      features: ['Custom Web Design', 'E-commerce Solutions', 'CMS Development', 'Domain & Hosting'],
      image: webDevelopmentImage,
      number: 1
    },
    {
      icon: <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'MOBILE DEVELOPMENT',
      description: 'We develop Android, iOS and Windows Applications and bring your ideas to reality.',
      features: ['Native App Development', 'Cross-platform Apps', 'App Store Optimization', 'Maintenance & Updates'],
      image: mobileDevelopmentImage,
      number: 2
    },
    {
      icon: <Database className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'DATABASE DEVELOPMENT',
      description: 'We use database tools like MySQL, MongoDB and PostgreSQL with maximum security and data privacy.',
      features: ['Database Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],
      image: databaseDevelopmentImage,
      number: 3
    },
    {
      icon: <Code className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'SOFTWARE DEVELOPMENT',
      description: 'We build vast range of digital and management softwares using the following programming languages C#, Java.',
      features: ['Custom Software', 'Enterprise Solutions', 'API Development', 'System Integration'],
      image: softwareDevelopmentImage,
      number: 4
    },
    {
      icon: <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'GRAPHIC DESIGNING',
      description: 'Design your logo, flyers, banners and poster with us today, our least effort is quality and our best is perfection.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Digital Graphics'],
      image: graphicDesigningImage,
      number: 5
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'DIGITAL MARKETING',
      description: 'Our Digital Marketing team is up to the task when it comes to putting your brand out there for digital awareness.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
      image: digitalMarketingImage,
      number: 6
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-20 bg-secondary-50 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        {/* Section Header */}
        <div className="text-center md:text-right mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="inline-block bg-secondary-400 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            What we do defines <br/> and projects our level of speciality
            </h2>
          </div>
        </div>
  
  <ServicesCard items={services} />

        
      </div>


      
    </section>
  )
}

export default Services
