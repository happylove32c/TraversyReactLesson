import React from 'react'

const Hero = ({title = 'Find Your Dream Job', subtitle = 'Explore thousands of job opportunities with one click.'}) => {
  return(
    <section className="bg-blue-500 py-20 px-5 text-center text-white">
        <h1 className="text-4xl font-bold">{ title }</h1>
        <p className="mt-4">{ subtitle }</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full sm:w-auto px-4 py-2 rounded-lg text-gray-900"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full sm:w-auto px-4 py-2 rounded-lg text-gray-900"
          />
          <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold">
            Search Jobs
          </button>
        </div>
      </section>
  )
}

export default Hero