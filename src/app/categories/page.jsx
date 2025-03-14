import React from 'react'
import NavBar from '@/components/layout/NavBar';

export default function page() {
  return (
    <main class="bg-gray-900 text-gray-100">
    {/* <!-- Navigation (Same as previous) --> */}
        <NavBar/>

        {/* <!-- Categories Hero --> */}
        <section class="bg-gradient-to-r from-gray-800 to-gray-700 py-20">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-4xl font-bold mb-4">Explore Learning Paths</h2>
                <p class="text-gray-400 text-lg">Discover courses in your favorite domains</p>
                <div class="mt-8 max-w-2xl mx-auto">
                    <input type="text" 
                        placeholder="Search categories..." 
                        class="w-full px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none" />
                    
                </div>
            </div>
        </section>

        {/* <!-- Categories Grid --> */}
        <section class="py-16">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Category Card --> */}
                    <div class="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all group">
                        <div class="relative mb-4">
                            <div class="bg-gray-700 h-48 rounded-lg"></div>
                            <span class="absolute bottom-2 right-2 bg-purple-600 text-sm px-3 py-1 rounded-full">
                                45 Courses
                            </span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                            Web Development
                        </h3>
                        <p class="text-gray-400 mb-4">Master full-stack development with modern frameworks and tools</p>
                        <button class="text-purple-400 hover:text-purple-300 flex items-center">
                            Explore Path
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Repeat similar cards for other categories --> */}
                    {/* <!-- Data Science Card --> */}
                    <div class="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all group">
                        <div class="relative mb-4">
                            <div class="bg-gray-700 h-48 rounded-lg"></div>
                            <span class="absolute bottom-2 right-2 bg-purple-600 text-sm px-3 py-1 rounded-full">
                                28 Courses
                            </span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                            Data Science
                        </h3>
                        <p class="text-gray-400 mb-4">Unlock insights from data with Python and machine learning</p>
                        <button class="text-purple-400 hover:text-purple-300 flex items-center">
                            Explore Path
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Cybersecurity Card --> */}
                    <div class="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all group">
                        <div class="relative mb-4">
                            <div class="bg-gray-700 h-48 rounded-lg"></div>
                            <span class="absolute bottom-2 right-2 bg-purple-600 text-sm px-3 py-1 rounded-full">
                                32 Courses
                            </span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                            Cybersecurity
                        </h3>
                        <p class="text-gray-400 mb-4">Protect systems and networks from digital attacks</p>
                        <button class="text-purple-400 hover:text-purple-300 flex items-center">
                            Explore Path
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Popular Topics --> */}
        <section class="py-16 bg-gray-800">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold mb-8">Popular Topics</h3>
                <div class="flex flex-wrap gap-4">
                    <a href="#" class="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                        React.js
                    </a>
                    <a href="#" class="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                        Python
                    </a>
                    <a href="#" class="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                        Machine Learning
                    </a>
                    {/* <!-- Add more topics --> */}
                </div>
            </div>
        </section>

        {/* <!-- Footer (Same as previous) --> */}
        <footer class="bg-gray-800 py-12">
            {/* <!-- Footer content from previous --> */}
        </footer>
    </main>
  )
}
