import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/Footer'
import SkillCard from '../components/SkillCard'

const skillsData = {
  'Programming Languages': [
    { name: 'JavaScript', description: 'A versatile language for web development.' },
    { name: 'Java', description: 'A high-level, class-based, object-oriented programming language.' },
    { name: 'C++', description: 'Used for system/software development.' },
  ],
  'Frontend Development': [
    { name: 'HTML', description: 'The standard markup language for web pages.' },
    { name: 'CSS', description: 'Styles the web pages.' },
    { name: 'Java Swing', description: 'A GUI widget toolkit for Java.' },
  ],
  'Frameworks': [
    { name: 'Next.js', description: 'A React framework for server-side rendering.' },
    { name: 'Tailwind CSS', description: 'A utility-first CSS framework.' },
  ],
  'Design & Creativity': [
    { name: 'Photoshop', description: 'A powerful image editing software.' },
    { name: 'Figma', description: 'A collaborative interface design tool.' },
    { name: 'Adobe Premiere Pro', description: 'A timeline-based video editing software application.' },
    { name: 'Corel Draw', description: 'A vector graphics editor.' },
  ],
  'Other Skills': [
    { name: 'Office Suite', description: 'Proficient in Microsoft Office Suite (Word, Excel, PowerPoint).' },
    { name: 'Call Center Agent', description: 'Experience in customer service and call center operations.' },
  ],
}

function SkillsPage() {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-10 py-20'>
        <h1 className='text-5xl font-bold mb-10 text-center'>Skills</h1>
        {Object.keys(skillsData).map((category) => (
          <div key={category} className='mb-16'>
            <h2 className='text-4xl font-semibold mb-6 text-blue-500'>{category}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
              {skillsData[category].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FooterPage />
    </div>
  )
}

export default SkillsPage