import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/Footer'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function ContactPage() {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />

      <div className='container mx-auto px-10 py-20'>
        <h1 className='text-5xl font-bold mb-10 text-center'>Contact Me</h1>

        {/* Direct Contact Information */}
        <div className='mb-16 text-center'>
          <p className='text-xl mb-4'>Email: <a href='mailto:younaskk120@gmail.com' className='text-blue-400 hover:underline'>younaskk120@gmail.com</a></p>
          <p className='text-xl'>Phone: <a href='tel:+92 313 081 2324' className='text-blue-400 hover:underline'>+92 313 081 2324</a></p>
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center space-x-6 mb-16'>
          <a href='https://www.linkedin.com/in/your-profile' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 transition duration-300'>
            <FaLinkedin size={40} />
          </a>
          <a href='https://github.com/your-profile' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-800 transition duration-300'>
            <FaGithub size={40} />
          </a>
          <a href='https://www.instagram.com/your-profile' target='_blank' rel='noopener noreferrer' className='text-pink-600 hover:text-pink-800 transition duration-300'>
            <FaInstagram size={40} />
          </a>
        </div>

        {/* Contact Form */}
        <div className='max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg'>
          <form>
            <div className='mb-4'>
              <label className='block text-lg mb-2' htmlFor='name'>Name</label>
              <input className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400' type='text' id='name' name='name' required />
            </div>
            <div className='mb-4'>
              <label className='block text-lg mb-2' htmlFor='email'>Email</label>
              <input className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400' type='email' id='email' name='email' required />
            </div>
            <div className='mb-4'>
              <label className='block text-lg mb-2' htmlFor='subject'>Subject</label>
              <input className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400' type='text' id='subject' name='subject' required />
            </div>
            <div className='mb-4'>
              <label className='block text-lg mb-2' htmlFor='message'>Message</label>
              <textarea className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400' id='message' name='message' rows='4' required></textarea>
            </div>
            <button className='w-full p-3 rounded bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold' type='submit'>Send Message</button>
          </form>
        </div>

        {/* Optional Embedded Google Map */}
        <div className='mt-16'>
          <iframe
            className='w-full h-64 rounded-lg shadow-lg'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112482927!2d144.9630583153169!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6e4b0b1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611818364857!5m2!1sen!2sau'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>

      <FooterPage />
    </div>
  )
}

export default ContactPage