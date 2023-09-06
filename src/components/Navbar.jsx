import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <section className='navbar-section flex justify-center bg-transparent fixed top-0 left-0 text-white z-10  w-[100%] backdrop-blur-sm'>
      <div className='navbaar-container flex items-center justify-between w-[80%] py-5'>
        <h2 className='text-3xl text-red-600 font-semibold'>Yan Cinema</h2>
        <ul className='navbar-list flex'>
          <NavLink to='/' className='me-4 font-semibold'><li className=' '>Home</li></NavLink>
          <NavLink to='/movies' className='me-4 font-semibold'><li className=''>Movies</li></NavLink>
          <NavLink to='/series' className='me-4 font-semibold'><li className=''>TV Series</li></NavLink>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
