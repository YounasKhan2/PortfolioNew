import React from 'react'

function SkillCard({ skill }) {
  return (
    <div className='group perspective'>
      <div className='relative w-full h-64 bg-gray-900 text-white rounded-lg shadow-lg transform-style preserve-3d transition-transform duration-500 group-hover:rotate-y-180'>
        {/* Front Side */}
        <div className='absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg backface-hidden'>
          <h3 className='text-2xl font-bold'>{skill.name}</h3>
        </div>
        {/* Back Side */}
        <div className='absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg backface-hidden rotate-y-180'>
          <p className='text-lg text-gray-300 p-4'>{skill.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard