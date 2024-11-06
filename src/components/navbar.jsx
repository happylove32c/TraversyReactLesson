import logo from '../assets/images/logo.svg';
const Navbar = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className='text-white text-lg font-bold'>
          <img src={ logo } className='h-12 w-auto' />
        </a>
        <nav className="space-x-4">
          <a href="" className='text-white hover:text-gray-700'>Home</a>
          <a href="" className='text-white hover:text-gray-700'>About</a>
          <a href="" className='text-white hover:text-gray-700'>Services</a>
          <a href="" className='text-white hover:text-gray-700'>Contact</a>
        </nav>
      </div>
      </header>
  )
}

export default Navbar