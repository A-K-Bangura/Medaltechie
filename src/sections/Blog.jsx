import React from 'react'

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block bg-secondary-400 text-primary-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
          Latest Valuable Insights
          </h2>
        </div>
        {/* <p className="text-lg text-secondary-600">
          Latest Valuable Insights
        </p> */}
        <p className="text-secondary-500 mt-4">
          Component coming soon...
        </p>
      </div>
    </section>
  )
}

export default Blog
