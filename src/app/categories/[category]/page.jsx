import React from 'react'
import NavBar from '@/components/layout/NavBar'
export default function page({params}) {
  return (
    <main className="bg-gray-900 text-gray-100">
  {/* <!-- Navigation --> */}
  <NavBar />

  {/* <!-- Category Hero Section --> */}
  <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">{params.category ||"Web Development"}</h2>
      <p className="text-gray-400 text-lg">Master full-stack development with modern frameworks and tools</p>
    </div>
  </section>

  {/* <!-- Filters Bar --> */}
  <section className="py-8 bg-gray-800">
    <div className="container mx-auto px-6 flex  gap-4">
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <select className="w-full md:w-1/3 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
        <option>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select className="w-full md:w-1/3 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
        <option>Sort by Popularity</option>
        <option>Sort by Rating</option>
        <option>Sort by Newest</option>
      </select>
    </div>
  </section>

  {/* <!-- Courses Grid --> */}
  <section className="py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Course Card --> */}
        <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="bg-gray-700 h-40 rounded-lg mb-4"></div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            Full-Stack Web Dev Bootcamp
          </h3>
          <p className="text-gray-400 mb-4">
            Learn HTML, CSS, JavaScript and more to become a full-stack developer.
          </p>
          <button className="text-purple-400 hover:text-purple-300 flex items-center">
            Explore Course
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* <!-- Course Card --> */}
        <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="bg-gray-700 h-40 rounded-lg mb-4"></div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            React for Beginners
          </h3>
          <p className="text-gray-400 mb-4">
            Dive into React.js and build dynamic user interfaces with ease.
          </p>
          <button className="text-purple-400 hover:text-purple-300 flex items-center">
            Explore Course
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* <!-- Course Card --> */}
        <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="bg-gray-700 h-40 rounded-lg mb-4"></div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            Modern JavaScript Essentials
          </h3>
          <p className="text-gray-400 mb-4">
            Get hands-on with modern JavaScript techniques and best practices.
          </p>
          <button className="text-purple-400 hover:text-purple-300 flex items-center">
            Explore Course
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* <!-- Add more course cards as needed --> */}
      </div>
    </div>
  </section>

  {/* <!-- Footer --> */}
  <footer className="bg-gray-800 py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="text-gray-400">&copy; 2025 YourSiteName. All rights reserved.</p>
    </div>
  </footer>
</main>

  )
}
