import React from 'react'

import SectionTitle from '../components/SectionTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import blog1 from '../assets/images/blog/evritrendblog1.jpg'
import blog2 from '../assets/images/blog/bitcoinblog1.jpg'
import blog3 from '../assets/images/blog/carblog1.jpg'

const Blog = () => {

  useGSAP(()=>{
    gsap.from('.slide-in-from-right3', {
      scrollTrigger: {
        trigger: '.slide-in-from-right3',
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        // scrub: true,
      },
      opacity: 0,
      x: '120%',
      duration: 1,
      ease: 'power1.Out'
    })
  }, [])

  const posts = [
    {
      title: 'Evritrend Service is Growing in Sierra Leone.',
      author: 'EUGENE JOHN',
      date: 'August 20, 2020',
      image: blog1,
      href: '#'
    },
    {
      title: "YFI Exceeds Bitcoin Price at $15K - But There’s a Catch",
      author: 'Joseph Young - COINTELEGRAPH',
      date: 'April 28, 2020',
      image: blog2,
      href: '#'
    },
    {
      title: 'Mercedes + Nvidia Could Catch Tesla and Create a Truly Smart Car',
      author: 'Rob Enderle - TECHNEWSWORLD',
      date: 'July 6, 2020',
      image: blog3,
      href: '#'
    }
  ]
  return (
    <section id="blog" className="py-16 sm:py-20 bg-secondary-50 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="mb-6 text-center lg:text-left slide-in-from-right3">
          <SectionTitle title="Blog" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Latest Valuable Insights
          </h2>
        </div>

        {/* Desktop/Grid view */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group"
            >
              <div className="w-full h-48 bg-neutral-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-neutral-600 mb-2">{post.date}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="text-sm text-neutral-700 mb-4">{post.author}</div>
                <div className="flex justify-between items-center">
                  <a href={post.href} className="text-secondary-600 font-semibold hover:text-primary-700 transition-colors duration-300">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single row, horizontal scroll */}
        <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-4 snap-x snap-mandatory">
            {posts.map((post, idx) => (
              <div key={idx} className="overflow-hidden min-w-[85%] sm:min-w-[320px] snap-start">
                <div className="w-full aspect-video bg-neutral-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-neutral-600 mb-2">{post.date}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">
                    {post.title}
                  </h3>
                  <div className="text-sm text-neutral-700 mb-4">{post.author}</div>
                  <div className="flex justify-between items-center">
                    <a href={post.href} className="text-secondary-600 font-semibold">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
