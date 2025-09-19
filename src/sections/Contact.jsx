import React from 'react'
import ContactForm from '../components/ContactForm'
import map2 from '../assets/images/map2.png'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${map2})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
            <SectionTitle title="Contact" />          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Let's Get Started Now! <br/> Send Us an Email
          </h2>
        </div>
                  
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
