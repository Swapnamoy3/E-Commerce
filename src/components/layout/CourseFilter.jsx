"use client"
import React from 'react';


function PriceRange() {
  return(
    <div>
      <label className="block mb-2 text-gray-300">Price Range</label>
      <input type="range" min="0" max="1000" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none"/>
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>
  );
}

function DurationRange(){
  return (
    <div>
      <label className="block mb-2 text-gray-300">Duration</label>
      <div className="flex flex-col space-y-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600"/>
          <span className="ml-2">Less than 5 hours</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600"/>
          <span className="ml-2">5-10 hours</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600"/>
          <span className="ml-2">More than 10 hours</span>
        </label>
      </div>
    </div>
  );
}

function CourseTypeFilter() {
  return (
    <div>
      <label className="block mb-2 text-gray-300">Course Type</label>
      <div className="flex flex-col space-y-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600"/>
          <span className="ml-2">Free</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600"/>
          <span className="ml-2">Paid</span>
        </label>
      </div>
    </div>
  );
}

function LanguageFilter() {
  return(
    <div>
      <label className="block mb-2 text-gray-300">Language</label>
      <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
        <option>All Languages</option>
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
      </select>
    </div>
  );
}

function AdvancedFilterPanel() {
  return (
    <div className="mt-6 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Advanced Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Price Range --> */}
        <PriceRange/>
        {/* <!-- Duration --> */}
        <DurationRange/>
        {/* <!-- Course Type --> */}
        <CourseTypeFilter/>
        {/* <!-- Language Filter --> */}
        <LanguageFilter/>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  );
}


function Search() {
  return (
    <div className="relative w-full md:w-1/3">
      <input 
        type="text" 
        placeholder="Search courses..." 
        className="w-full px-4 py-3 pl-12 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
    </div>
  );
}

export function CourseFilter() {

  const [advancedFilterOpen, setAdvancedFilterOpen] = React.useState(false);
  function toggleAdvancedFilter() {
    setAdvancedFilterOpen(a => !a);
  }
  return (
    <section className="py-8 bg-gray-800">
      <div className="container mx-auto">
    {/* <!-- Top Filter Controls --> */}
    <div className="flex flex-wrap items-center gap-4 justify-between">
      {/* <!-- Search Bar --> */}
      <Search/>
      {/* <!-- Level Filter Dropdown --> */}
      <div className="relative w-full md:w-1/4">
        <select className="w-full px-4 py-3 appearance-none bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option>All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          &#9662;
        </span>
      </div>
      {/* <!-- Sort Dropdown --> */}
      <div className="relative w-full md:w-1/4">
        <select className="w-full px-4 py-3 appearance-none bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option>Sort by Popularity</option>
          <option>Sort by Rating</option>
          <option>Sort by Newest</option>
        </select>
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          &#9662;
        </span>
      </div>
      {/* <!-- Filter Button --> */}
      <div className="w-full md:w-auto">
        { !advancedFilterOpen &&
          <button className="flex items-center px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-4.586L3.293 6.707A1 1 0 013 6V4z"></path>
            </svg>
          Filter
        </button>
        }
      </div>
      <span>
       
        <span 
        className = "flex items-center px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          onClick={toggleAdvancedFilter}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            { !advancedFilterOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />}
            { advancedFilterOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />}
          </svg>
        </span>

        

      </span>
    </div>

    {/* <!-- Advanced Filters Panel --> */}
    {advancedFilterOpen && <AdvancedFilterPanel />}
  </div>
    </section>
  );
}
