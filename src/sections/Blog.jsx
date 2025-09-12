import React from 'react'
import ShineCard from '../components/ShineCard'
import ShineButton from '../components/ShineButton'

const Blog = () => {
  const posts = [
    {
      title: 'Evritrend Service is Growing in Sierra Leone.',
      author: 'EUGENE JOHN',
      date: 'August 20, 2020',
      image: 'https://dummyimage.com/600x400/e6f3ff/1f2937&text=Evritrend',
      href: '#'
    },
    {
      title: "YFI Exceeds Bitcoin Price at $15K - But There’s a Catch",
      author: 'Joseph Young - COINTELEGRAPH',
      date: 'April 28, 2020',
      image: 'https://dummyimage.com/600x400/ffe9e3/1f2937&text=YFI+vs+BTC',
      href: '#'
    },
    {
      title: 'Mercedes + Nvidia Could Catch Tesla and Create a Truly Smart Car',
      author: 'Rob Enderle - TECHNEWSWORLD',
      date: 'July 6, 2020',
      image: 'https://dummyimage.com/600x400/eefce7/1f2937&text=Mercedes+%2B+Nvidia',
      href: '#'
    }
  ]
  return (
    <section id="blog" className="py-16 sm:py-20 bg-secondary-50 w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full text-center lg:text-left">
        <div className="mb-6">
          <span className="inline-block bg-secondary-200 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Latest Valuable Insights
          </h2>
        </div>

        {/* Desktop/Grid view */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="overflow-hidden">
              <div className="w-full aspect-video bg-neutral-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-neutral-600 mb-2">{post.date}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                  {post.title}
                </h3>
                <div className="text-sm text-neutral-700 mb-4">{post.author}</div>
                <div className="flex justify-between items-center">
                  <a href={post.href} className="text-primary-600 font-semibold">Read More</a>
                  <ShineButton text="Open" variant="secondary" />
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
                    <a href={post.href} className="text-primary-600 font-semibold">Read More</a>
                    <ShineButton text="Open" variant="secondary" />
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
