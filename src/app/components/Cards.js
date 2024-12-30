import React from 'react'

function Cards({ cardsData }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10 ml-10 mr-10 text-justify '>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className='bg-gray-900 p-5 rounded-lg shadow-lg text-center bg-cover bg-center'
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className='bg-gray-800 bg-opacity-80 p-5 rounded-lg transition-transform duration-300 hover:scale-105'>
            <h2 className='mt-5 text-2xl font-bold text-white'>{card.title}</h2>
            <p className='mt-5 mb-5 text-gray-400 text-sm'>{card.description}</p>
            <a
              href='https://github.com/dashboard'
              target='_blank'
              rel='noopener noreferrer'
              className={`mt-4 px-4 py-2 transition border border-blue-500 hover:bg-white hover:text-black rounded-lg ${card.btn}`}
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards