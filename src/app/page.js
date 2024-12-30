import React from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'
import FooterPage from './components/Footer'

function Page() {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col overflow-auto'>
      <Navbar />
      
      <section className='flex flex-col md:flex-row mt-20 md:mt-60 mx-10 md:mx-48'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-2xl md:text-4xl'>Hi, I'm <span className='text-4xl md:text-6xl text-blue-500 font-bold font-mono'>Muhammad Younas</span></h1>
          <p className='mt-2 text-xl sm:text-2xl font-mono'>Front-end Developer | Ui/UX Designer | Software Engineer</p>

          <div className='mt-10 text-xl flex flex-col sm:flex-row gap-4 sm:gap-10 font-mono'>
            <a href="/" className='p-2 bg-blue-400 hover:bg-blue-600 transition rounded-lg text-center'>View My Work</a>
            <a href="/" download className='p-2 hover:bg-blue-600 rounded-lg transition border border-blue-500 text-center'>Download CV</a>
          </div>
        </div>
        
        <div className='flex h-96 w-full md:w-1/2 justify-center md:justify-end mt-10 md:mt-0'>
          <img src="/pic1.jpg" alt="pic" className='object-cover rounded-lg shadow-lg w-full md:w-auto' />
        </div>
      </section>

      <FooterPage />
    </div>
  )
}

export default Page