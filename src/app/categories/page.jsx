import React from 'react'
import NavBar from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
function Hero(){
    return (
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Explore Learning Paths</h2>
                <p className="text-gray-400 text-lg">Discover courses in your favorite domains</p>
                <div className="mt-8 max-w-2xl mx-auto">
                    <input type="text" 
                        placeholder="Search categories..." 
                        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none" />
                    
                </div>
            </div>
        </section>
    )
}


function CategoryCard({ categoryTitle, categoryDescription, courseCounts }) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-101 transition-all group">
            <div className="relative mb-4">
                <div className="bg-gray-700 h-48 rounded-lg"></div>
                <span className="absolute bottom-2 right-2 bg-purple-600 text-sm px-3 py-1 rounded-full">
                    {courseCounts && `${courseCounts} Courses`}
                </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {categoryTitle}
            </h3>
            <p className="text-gray-400 mb-4">{categoryDescription}</p>
            <button className="text-purple-400 hover:text-purple-300 flex items-center">
                Explore Path
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    );  
}


export default function page() {
  return (
    <main className="bg-gray-900 text-gray-100">
    {/* <!-- Navigation (Same as previous) --> */}
        <NavBar/>

        {/* <!-- Categories Hero --> */}
        <Hero/>

        {/* <!-- Categories Grid --> */}
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Category Card --> */}
                    <CategoryCard 
                        categoryTitle="Web Development" 
                        categoryDescription="Master full-stack development with modern frameworks and tools" 
                        courseCounts={45} 
                    />

                    {/* <!-- Repeat similar cards for other categories --> */}
                    {/* <!-- Data Science Card --> */}
                    <CategoryCard 
                        categoryTitle="Data Science" 
                        categoryDescription="Unlock insights from data with Python and machine learning" 
                        courseCounts={28} 
                    />

                    {/* <!-- Cybersecurity Card --> */}
                    <CategoryCard 
                        categoryTitle="Cybersecurity" 
                        categoryDescription="Protect systems and networks from digital attacks" 
                        courseCounts={32} 
                    />
                </div>
            </div>
        </section>

        {/* <!-- Popular Topics --> */}
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl font-bold mb-8">Popular Topics</h3>
                <div className="flex flex-wrap gap-4">
                    <a href="#" className="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                        React.js
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                        Python
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                        Machine Learning
                    </a>
                    {/* <!-- Add more topics --> */}
                </div>
            </div>
        </section>

        {/* <!-- Footer (Same as previous) --> */}
            <Footer/>
    
    </main>
  )
}
