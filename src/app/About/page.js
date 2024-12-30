'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/Footer'
import { AcademicCapIcon, PencilAltIcon, DatabaseIcon, CodeIcon, CloudIcon, OfficeBuildingIcon, PhotographIcon, DeviceMobileIcon } from '@heroicons/react/outline'

function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />

      <div className="container mx-auto px-10 py-20 mt-10">

        {/* About Me Section */}
        <section className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-6 animate__animated animate__fadeInUp">About Me</h1>
          <div className="flex flex-col items-center space-y-4">
            <img 
              src="/pic1.jpg" 
              alt="Muhammad Younas" 
              className="w-40 h-48 rounded-full border-4 border-blue-500 shadow-lg object-cover"
            />
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mt-6">
              Hi, I'm Muhammad Younas, a passionate Front-end Developer and Software Engineer. 
              I specialize in crafting user-friendly, visually appealing, and high-performance web applications. 
              My goal is to create digital experiences that leave a lasting impression.
            </p>
          </div>
        </section>

        {/* Education and Certifications Section */}
        <section className="flex flex-col md:flex-row mb-16 space-y-10 md:space-y-0 md:space-x-10">
          {/* Education Section */}
          <div className="flex flex-col w-full md:w-1/2 bg-gray-800 rounded-lg p-5">
            <h2 className="flex text-4xl font-semibold text-blue-400 mb-6 gap-5">Education
              <AcademicCapIcon className="h-8 w-8 text-blue-500" />
            </h2>
            <div className="text-lg text-gray-300 space-y-2">
              <p>Superior University, Lahore</p>
              <p>BS Software Engineering</p>
              <p>Batch: 2022-2026</p>
              <p>Semester 6</p>
              <p>Relevant Courses:</p>
              <ul className="list-disc list-inside ml-5">
                <li>Web Development</li>
                <li>Data Structures and Algorithms in C++</li>
                <li>Database Management</li>
                <li>Advance Computer Programming</li>
              </ul>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="flex flex-col w-full md:w-1/2 bg-gray-800 rounded-lg p-5">
            <h2 className="text-4xl font-semibold text-blue-400 mb-6">Certifications</h2>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li className="flex items-center space-x-3">
                <PencilAltIcon className="h-6 w-6 text-blue-500" />
                <span>Graphics Designing</span>
              </li>
              <li className="flex items-center space-x-3">
                <DatabaseIcon className="h-6 w-6 text-blue-500" />
                <span>MySQL</span>
              </li>
              <li className="flex items-center space-x-3">
                <OfficeBuildingIcon className="h-6 w-6 text-blue-500" />
                <span>MS Office Suite</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhotographIcon className="h-6 w-6 text-blue-500" />
                <span>Corel Draw</span>
              </li>
              <li className="flex items-center space-x-3">
                <DeviceMobileIcon className="h-6 w-6 text-blue-500" />
                <span>Photoshop</span>
              </li>
              <li className="flex items-center space-x-3">
                <CodeIcon className="h-6 w-6 text-blue-500" />
                <span>Typing 60 Words Per Minute</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Summary and Values Section */}
        <section className="flex flex-col md:flex-row mb-16 space-y-10 md:space-y-0 md:space-x-10">
          {/* Skills Summary Section */}
          <div className="flex flex-col w-full md:w-1/2 bg-gray-800 rounded-lg p-5">
            <h2 className="text-4xl font-semibold text-blue-400 mb-6">Skills Summary</h2>
            <p className="text-lg text-gray-300">
              Showcase your core competencies and tools you excel at:
            </p>
            <p className="text-lg text-gray-300 mt-2">
              Proficient in C++, Java, JavaScript, HTML, CSS, MySQL, and Graphics Design.
            </p>
          </div>

          {/* Values and Work Philosophy Section */}
          <div className="flex flex-col w-full md:w-1/2 bg-gray-800 rounded-lg p-5">
            <h2 className="text-4xl font-semibold text-blue-400 mb-6">Values and Work Philosophy</h2>
            <p className="text-lg text-gray-300">
              I believe in writing clean, maintainable code and creating designs that balance functionality with aesthetics.
            </p>
          </div>
        </section>

        {/* Simple Stats Section */}
        <section>
          <h2 className="text-4xl font-semibold text-blue-400 mb-6">Statistics</h2>
          <div className="flex justify-around text-center">
            <div>
              <h3 className="text-5xl font-bold text-blue-500">1</h3>
              <p className="text-lg text-gray-300">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-500">9</h3>
              <p className="text-lg text-gray-300">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-500">2</h3>
              <p className="text-lg text-gray-300">Clients Served</p>
            </div>
          </div>
        </section>

      </div>

      <FooterPage />
    </div>
  )
}

export default AboutPage