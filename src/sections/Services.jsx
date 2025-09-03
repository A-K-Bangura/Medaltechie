import React from 'react'
import { Globe, Smartphone, Database, Code, Palette, TrendingUp } from 'lucide-react'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'WEBSITE DEVELOPMENT',
      description: 'We Develop, Upgrade, Maintain, Host, Update and Register Domain Name for websites.',
      features: ['Custom Web Design', 'E-commerce Solutions', 'CMS Development', 'Domain & Hosting']
    },
    {
      icon: <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'MOBILE DEVELOPMENT',
      description: 'We develop Android, iOS and Windows Applications and bring your ideas to reality.',
      features: ['Native App Development', 'Cross-platform Apps', 'App Store Optimization', 'Maintenance & Updates']
    },
    {
      icon: <Database className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'DATABASE DEVELOPMENT',
      description: 'We use database tools like MySQL, MongoDB and PostgreSQL with maximum security and data privacy.',
      features: ['Database Design', 'Data Migration', 'Security Implementation', 'Performance Optimization']
    },
    {
      icon: <Code className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'SOFTWARE DEVELOPMENT',
      description: 'We build vast range of digital and management softwares using the following programming languages C#, Java.',
      features: ['Custom Software', 'Enterprise Solutions', 'API Development', 'System Integration']
    },
    {
      icon: <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'GRAPHIC DESIGNING',
      description: 'Design your logo, flyers, banners and poster with us today, our least effort is quality and our best is perfection.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Digital Graphics']
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />,
      title: 'DIGITAL MARKETING',
      description: 'Our Digital Marketing team is up to the task when it comes to putting your brand out there for digital awareness.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
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

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-primary-600 text-white p-6 sm:p-8 rounded-2xl mx-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <button className="bg-white text-primary-600 hover:bg-secondary-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-base text-sm sm:text-base">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>


      
    </section>
  )
}

export default Services
