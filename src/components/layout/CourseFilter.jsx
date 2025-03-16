"use client"
import React from 'react';




function AdvancedFilterPanel() {
  return (
    <div class="mt-6 p-6 bg-gray-800 rounded-lg">
      <h3 class="text-2xl font-semibold mb-4">Advanced Filters</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Price Range --> */}
        <div>
          <label class="block mb-2 text-gray-300">Price Range</label>
          <input type="range" min="0" max="1000" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none"/>
          <div class="flex justify-between text-sm text-gray-400 mt-2">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
        {/* <!-- Duration --> */}
        <div>
          <label class="block mb-2 text-gray-300">Duration</label>
          <div class="flex flex-col space-y-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600"/>
              <span class="ml-2">Less than 5 hours</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600"/>
              <span class="ml-2">5-10 hours</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600"/>
              <span class="ml-2">More than 10 hours</span>
            </label>
          </div>
        </div>
        {/* <!-- Course Type --> */}
        <div>
          <label class="block mb-2 text-gray-300">Course Type</label>
          <div class="flex flex-col space-y-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600"/>
              <span class="ml-2">Free</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600"/>
              <span class="ml-2">Paid</span>
            </label>
          </div>
        </div>
        {/* <!-- Language Filter --> */}
        <div>
          <label class="block mb-2 text-gray-300">Language</label>
          <select class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>All Languages</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button class="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  );
}


function Search() {
  return (
    <div class="relative w-full md:w-1/3">
      <input 
        type="text" 
        placeholder="Search courses..." 
        class="w-full px-4 py-3 pl-12 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
    </div>
  );
}

export function CourseFilter() {

  const [advancedFilterOpen, setAdvancedFilterOpen] = React.useState(false);
  
  return (
    <section className="py-8 bg-gray-800">
      <div class="container mx-auto">
    {/* <!-- Top Filter Controls --> */}
    <div class="flex flex-wrap items-center gap-4 justify-between">
      {/* <!-- Search Bar --> */}
      <Search/>
      {/* <!-- Level Filter Dropdown --> */}
      <div class="relative w-full md:w-1/4">
        <select class="w-full px-4 py-3 appearance-none bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option>All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          &#9662;
        </span>
      </div>
      {/* <!-- Sort Dropdown --> */}
      <div class="relative w-full md:w-1/4">
        <select class="w-full px-4 py-3 appearance-none bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option>Sort by Popularity</option>
          <option>Sort by Rating</option>
          <option>Sort by Newest</option>
        </select>
        <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          &#9662;
        </span>
      </div>
      {/* <!-- Filter Button --> */}
      <div class="w-full md:w-auto">
        <button class="flex items-center px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-4.586L3.293 6.707A1 1 0 013 6V4z"></path>
          </svg>
          Filter
        </button>
      </div>
    </div>

    {/* <!-- Advanced Filters Panel --> */}
    {advancedFilterOpen && <AdvancedFilterPanel />}
  </div>
    </section>
  );
}
