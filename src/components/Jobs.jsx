import React from 'react'
import jobs from '../jobs.json'
import JobCard from './JobCard';

const Jobs = () => {
    
  return (
    <section className="container mx-auto py-12 px-5">
    <h2 className="text-2xl font-bold mb-6 text-center">Recent Job Listings</h2>
    <p className="text-sm text-gray-600 mb-8 text-center">Check out these recent job listings from our company.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
            <JobCard key={job.id} job={ job } />
        ))}
    </div>
  </section>
  )
}

export default Jobs