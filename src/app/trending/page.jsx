import React from 'react'
import NavBar from '@/components/layout/NavBar'
export default function page() {
  return (
    <main class="bg-gray-900 text-gray-100">
    {/* <!-- Navigation (Same as previous) --> */} 
    <NavBar/>

    {/* <!-- Trending Header --> */} 
    <section class="relative py-24 overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <h1 class="text-5xl font-bold mb-4">Trending Now</h1>
            <p class="text-xl text-gray-400">What the community is learning</p>
        </div>
        <div class="absolute inset-0 opacity-20">
            <div class="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -top-48 -right-48 mix-blend-screen"></div>
            <div class="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -bottom-48 -left-48 mix-blend-screen"></div>
        </div>
    </section>

    {/* <!-- Course Collage --> */} 
    <section class="container mx-auto px-6 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 transform-style-preserve-3d">
            {/* <!-- Featured Course Card --> */} 
            <div class="md:col-span-2 relative group">
                <div class="relative h-96 rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-[0.98]">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                    <div class="bg-gray-700 h-full w-full"></div>
                    <div class="absolute bottom-0 left-0 p-8 z-20">
                        <span class="bg-purple-600 text-sm px-4 py-1 rounded-full mb-2 inline-block">Bestseller</span>
                        <h3 class="text-2xl font-bold mb-2">Advanced React Masterclass</h3>
                        <p class="text-gray-400 mb-4">By John Doe</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <div class="flex text-yellow-400">
                                    ★★★★★
                                </div>
                                <span class="text-sm">(4,892)</span>
                            </div>
                            <span class="text-xl font-bold text-purple-400">$129</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Course Grid --> */} 
            <div class="grid grid-cols-1 gap-8 md:-mt-16">
                {/* <!-- Course Card 1 --> */} 
                <div class="relative group h-64 bg-gray-800 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[0.98]">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                    <div class="bg-gray-700 h-full w-full"></div>
                    <div class="absolute bottom-0 left-0 p-6 z-20">
                        <h3 class="font-bold mb-1">Python Automation</h3>
                        <p class="text-sm text-gray-400">By Jane Smith</p>
                        <div class="flex items-center justify-between mt-2">
                            <div class="flex items-center space-x-1">
                                ★★★★★
                            </div>
                            <span class="text-purple-400">$89</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Course Card 2 --> */} 
                <div class="relative group h-64 bg-gray-800 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[0.98]">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                    <div class="bg-gray-700 h-full w-full"></div>
                    <div class="absolute bottom-0 left-0 p-6 z-20">
                        <span class="bg-blue-600 text-xs px-3 py-1 rounded-full mb-2 inline-block">New</span>
                        <h3 class="font-bold mb-1">UX Design Pro</h3>
                        <p class="text-sm text-gray-400">By Sarah Johnson</p>
                        <div class="flex items-center justify-between mt-2">
                            <div class="flex items-center space-x-1">
                                ★★★★★
                            </div>
                            <span class="text-purple-400">$149</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Right Column --> */} 
            <div class="md:col-span-1 grid gap-8 mt-8 md:mt-0">
                {/* <!-- Vertical Course Card --> */} 
                <div class="relative group h-[600px] bg-gray-800 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[0.98]">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                    <div class="bg-gray-700 h-full w-full"></div>
                    <div class="absolute bottom-0 left-0 p-6 z-20">
                        <span class="bg-pink-600 text-sm px-4 py-1 rounded-full mb-2 inline-block">Hot</span>
                        <h3 class="text-2xl font-bold mb-2">Mobile Development</h3>
                        <p class="text-gray-400 mb-4">Build iOS & Android Apps</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                ★★★★★
                            </div>
                            <span class="text-xl font-bold text-purple-400">$199</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Floating Filter Bar --> */} 
    <div class="sticky bottom-6 container mx-auto px-6 mb-8">
        <div class="bg-gray-800 backdrop-blur-lg rounded-full p-4 shadow-xl max-w-2xl mx-auto flex items-center justify-between">
            <span class="text-gray-400">Filter:</span>
            <div class="flex space-x-4">
                <button class="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                    All
                </button>
                <button class="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                    Popular
                </button>
                <button class="px-4 py-2 bg-gray-700 hover:bg-purple-600 rounded-full transition-colors">
                    Newest
                </button>
            </div>
        </div>
    </div>

    {/* <!-- Footer (Same as previous) --> */} 
    <footer class="bg-gray-800 py-12">
        {/* <!-- Footer content from previous --> */} 
    </footer>
</main>
  )
}
