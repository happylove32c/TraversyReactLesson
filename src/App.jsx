import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import Jobs from './components/Jobs'

const App = () => {
  return (
    <div className='bg-yellow-100 text-gray-900'>
      <Navbar />
      <Hero />
      <HomeCards />
      <Jobs />

  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Job Finder. All rights reserved.</p>
    </div>
  </footer>

    </div>
  )
}

export default App