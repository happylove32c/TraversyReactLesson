import React from 'react'

const Card = (children) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-blue-600">For Developers</h2>
            <p className="mt-4 text-gray-700">Looking for your next career move? We provide thousands of job opportunities for developers to find their dream role.</p>
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">Explore Developer Jobs</button>
    </div>
  )
}

export default Card