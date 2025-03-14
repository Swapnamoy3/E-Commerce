import React from 'react'
import NavBar from '@/components/layout/NavBar';


function Hero(){
    return(
        <section class="bg-gradient-to-r from-gray-800 to-gray-700 py-16">
            <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h2 class="text-4xl font-bold mb-4">Master Modern Web Development</h2>
                    <p class="text-gray-400 mb-6">Learn cutting-edge technologies from industry experts</p>
                    <button class="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg transition-colors">
                        Explore Courses
                    </button>
                </div>
                <div class="md:w-1/2">
                    <div class="bg-gray-600 h-64 rounded-xl shadow-xl"></div>
                </div>
            </div>
        </section>
    );
 
}

function CourseCard(){
    return (
        <div class="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all">
            <div class="bg-gray-700 h-40 rounded-lg mb-4"></div>
                <h4 class="font-bold mb-2">Advanced React Patterns</h4>
                <p class="text-gray-400 text-sm mb-4">Learn professional React development patterns</p>
                <div class="flex justify-between items-center">
                    <span class="text-purple-400 font-bold">$89.99</span>
                    <button class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors">
                        Add to Cart
                    </button>
                </div>
        </div>
    );
}

function Featured(){
    return(
        <section class="py-12">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold mb-8">Featured Courses</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <!-- Course Card --> */}
                    <CourseCard/>

                    {/* <!-- Repeat similar course cards --> */}
                </div>
            </div>
        </section>
    );
}

function Categories(){
    return(
        <section class="py-12 bg-gray-800">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold mb-8">Popular Categories</h3>
                <div class="flex flex-wrap gap-4">
                    <button class="bg-gray-700 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors">
                        Web Development
                    </button>
                    <button class="bg-gray-700 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors">
                        Data Science
                    </button>
                    {/* <!-- Add more categories --> */}
                </div>
            </div>
        </section>
    );
}

function Footer(){
    return(
        <footer class="bg-gray-800 py-12 mt-16">
            <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h5 class="text-lg font-bold mb-4">Dark Academy</h5>
                    <p class="text-gray-400 text-sm">Empowering developers worldwide</p>
                </div>
                <div>
                    <h6 class="font-bold mb-3">Company</h6>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" class="hover:text-purple-400">About</a></li>
                        <li><a href="#" class="hover:text-purple-400">Careers</a></li>
                        <li><a href="#" class="hover:text-purple-400">Blog</a></li>
                    </ul>
                </div>
                {/* <!-- Add more footer columns --> */}
            </div>
        </footer>
    );
}
export default function page() {
  return (
    <main class="bg-gray-900 text-gray-100">
    {/* <!-- Navigation --> */}
    <NavBar/>

    {/* <!-- Hero Section --> */}
    <Hero/>

    {/* <!-- Featured Courses --> */}
    <Featured/>

    {/* <!-- Categories Section --> */}
    <Categories/>

    {/* <!-- Footer --> */}
    <Footer/>
</main>
  )
}
