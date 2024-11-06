import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="bg-gray-200 py-12 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card><h2 className="text-2xl font-bold text-blue-600">For Developers</h2>
            <p className="mt-4 text-gray-700">Looking for your next career move? We provide thousands of job opportunities for developers to find their dream role.</p>
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">Explore Developer Jobs</button>
            </Card>

          <Card>
          <h2 className="text-2xl font-bold text-blue-600">For Employers</h2>
            <p className="mt-4 text-gray-700">Need talented developers? Post your job openings to reach a wide audience of skilled tech professionals.</p>
            <button className="mt-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg">Post a Job</button>
          </Card>
          
        </div>
      </section>

  )
}

export default HomeCards