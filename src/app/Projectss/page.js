import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import FooterPage from '../components/Footer'

function Page() {
  const cardsData = [
    {
      title: 'Portfolio Website',
      description: 'Personal details, project showcases, skills, and a contact form.',
    },
    {
      title: 'Blog Website',
      description: 'List of posts fetched from a CMS like Contentful or Sanity',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Posting, liking, and commenting functionality',
    },
    {
      title: 'Real-time Chat App',
      description: 'User authentication, real-time messaging, and group chat functionality.',
    },
    {
      title: 'Weather App',
      description: 'Displays current weather conditions and forecasts for a given location.',
    },
    {
      title: 'Product Catalogue',
      description: 'Search functionality, filtering, and sorting products by category.',
    },
    {
      title: 'Task Management App',
      description: 'Task creation, editing, and completion with due dates and reminders.',
    },
    {
      title: 'E-commerce Marketplace',
      description: 'Product listing, shopping cart, checkout, and payment integration.',
    },
    {
      title: 'Recipe App',
      description: 'Search functionality, filtering, and displaying recipes based on user preferences.',
    },
  ]

  return (
    <div className='bg-gray-900 min-h-screen'>
      <Navbar />

      <div>
        <div>
          <h1 className='ml-20 mt-32 text-4xl text-blue-500 font-bold font-mono'>Projects</h1>
        </div>

        <Cards cardsData={cardsData} />
      </div>

      <FooterPage/>
    </div>
  )
}

export default Page