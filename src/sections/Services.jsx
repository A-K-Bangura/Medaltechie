import React from 'react'
import { Globe, Smartphone, Database, Code, Palette, TrendingUp } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
      title: 'WEBSITE DEVELOPMENT',
      description: 'We Develop, Upgrade, Maintain, Host, Update and Register Domain Name for websites.',
      features: ['Custom Web Design', 'E-commerce Solutions', 'CMS Development', 'Domain & Hosting']
    },
    {
      icon: <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
      title: 'MOBILE DEVELOPMENT',
      description: 'We develop Android, iOS and Windows Applications and bring your ideas to reality.',
      features: ['Native App Development', 'Cross-platform Apps', 'App Store Optimization', 'Maintenance & Updates']
    },
    {
      icon: <Database className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
      title: 'DATABASE DEVELOPMENT',
      description: 'We use database tools like MySQL, MongoDB and PostgreSQL with maximum security and data privacy.',
      features: ['Database Design', 'Data Migration', 'Security Implementation', 'Performance Optimization']
    },
    {
      icon: <Code className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
      title: 'SOFTWARE DEVELOPMENT',
      description: 'We build vast range of digital and management softwares using the following programming languages C#, Java.',
      features: ['Custom Software', 'Enterprise Solutions', 'API Development', 'System Integration']
    },
    {
      icon: <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
      title: 'GRAPHIC DESIGNING',
      description: 'Design your logo, flyers, banners and poster with us today, our least effort is quality and our best is perfection.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Digital Graphics']
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
      title: 'DIGITAL MARKETING',
      description: 'Our Digital Marketing team is up to the task when it comes to putting your brand out there for digital awareness.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            What we do defines and projects our level of speciality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full">
              {/* Service Icon */}
              <div className="mb-4">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="min-w-0">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="mt-4 sm:mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl mx-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
