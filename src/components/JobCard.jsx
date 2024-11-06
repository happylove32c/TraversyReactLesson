import React from 'react'
import location from '../assets/images/location-pin.svg'
const JobCard = ({job}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-gray-700">{job.company}</p>
        <p className="text-red-500 flex gap-1"><img src={ location } className='h-4 w-auto' /> {job.location}</p>
        <h4 className="text-gray-700">{job.description}</h4>
        <h4 className="text-gray-700 mt-3 mb-6">{job.salary}</h4>
        <a href={`/job/${job.id}`} class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition-all"> Apply Now </a>
    </div>
  )
}

export default JobCard