'use client'
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className='bg-gray-900 text-white p-4 font-mono pt-20 ml-10 mr-10'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl mr-5'>Younas Khan</h1>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
          <ul className='hidden md:flex ml-auto mr-auto gap-16 font-semibold text-lg'>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/About">About</a></li>
            <li className='nav-item'><a href="/Projectss">Projects</a></li>
            <li className='nav-item'><a href="/Skills">Skills</a></li>
            <li className='nav-item'><a href="/Contact-us">Contact us</a></li>
          </ul>
          <a href='/path/to/your-cv.pdf' download className='hidden md:block hover:bg-white hover:text-gray-800 font-semibold px-5 rounded-lg transition-transform duration-300 hover:scale-105 text-lg border border-blue-500'>Cv</a>
        </div>
        {isOpen && (
          <ul className='md:hidden mt-4 space-y-4'>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/About">About</a></li>
            <li className='nav-item'><a href="/Projectss">Projects</a></li>
            <li className='nav-item'><a href="/Skills">Skills</a></li>
            <li className='nav-item'><a href="/Contact-us">Contact us</a></li>
            <a href='/path/to/your-cv.pdf' download className='hover:bg-white hover:text-gray-800 font-semibold px-5 rounded-lg transition-transform duration-300 hover:scale-105 text-lg border border-blue-500 mt-2'>Cv</a>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar