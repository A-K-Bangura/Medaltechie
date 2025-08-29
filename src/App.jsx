import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import WhyChooseUs from './sections/WhyChooseUs'
import Testimonials from './sections/Testimonials'
import Features from './sections/Features'
import Team from './sections/Team'
import Contact from './sections/Contact'
import Blog from './sections/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Features />
        <Team />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
