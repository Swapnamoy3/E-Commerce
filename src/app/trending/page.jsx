"use client"

import React from 'react'
import NavBar from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { getRequest } from '@/components/helpers/apiRequests';


function FIlterBar(){
    return(
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
    );
}

function TrendingHeader () {
    return <section class="relative py-24 overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <h1 class="text-5xl font-bold mb-4">Trending Now</h1>
            <p class="text-xl text-gray-400">What the community is learning</p>
        </div>
        <div class="absolute inset-0 opacity-20">
            <div class="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -top-48 -right-48 mix-blend-screen"></div>
            <div class="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -bottom-48 -left-48 mix-blend-screen"></div>
        </div>
    </section>;
}

function FeaturedCourseCard({ title, author, rating, price, bestseller }) {
    return(
        <div className="md:col-span-2 relative group">
            <div className="relative h-96 rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-[0.98]">
                {/* Card background & overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <div className="bg-gray-700 h-full w-full"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20">
                {bestseller && <span className="bg-purple-600 text-sm px-4 py-1 rounded-full mb-2 inline-block">Bestseller</span>}
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">By {author}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">{rating}</div>
                    <span className="text-sm">(4,892)</span>
                    </div>
                    <span className="text-xl font-bold text-purple-400">{price}</span>
                </div>
                </div>
            </div>
        </div>
  );
}



function CourseCard({title, author, rating, price}){
    return(
        <div class="relative group h-64 bg-gray-800 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[0.98]">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
            <div class="bg-gray-700 h-full w-full"></div>
            <div class="absolute bottom-0 left-0 p-6 z-20">
                <h3 class="font-bold mb-1">{title}</h3>
                <p class="text-sm text-gray-400">By {author}</p>
                <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center space-x-1">
                        {rating}
                    </div>
                    <span class="text-purple-400">{price}</span>
                </div>
            </div>
        </div>
    );
}

function VerticalCourseCard({title, rating, price, hot}){
    return(
        <div class="relative group h-[600px] bg-gray-800 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[0.98]">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
            <div class="bg-gray-700 h-full w-full"></div>
            <div class="absolute bottom-0 left-0 p-6 z-20">
                {hot && <span class="bg-pink-600 text-sm px-4 py-1 rounded-full mb-2 inline-block">Hot</span>}
                <h3 class="text-2xl font-bold mb-2">{title}</h3>
                <p class="text-gray-400 mb-4">Build iOS & Android Apps</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        {rating}
                    </div>
                    <span class="text-xl font-bold text-purple-400">{price}</span>
                </div>
            </div>
        </div>
    )
}

const courses = [
    {
        id: 1,
        title: "Python Automation",
        author: "Jane Smith",
        rating: "★★★★★",
        price: "$89"
    },
    {
        id: 2,
        title: "UX Design Pro",
        author: "Sarah Johnson",
        rating: "★★★★★",
        price: "$149"
    },
    {
        id: 3,
        title: "Mobile Development",
        author: "John Doe",
        rating: "★★★★★",
        price: "$199",
        hot: true
    },
    {
        id: 4,
        title: "Mobile Development",
        author: "John Doe",
        rating: "★★★★★",
        price: "$199",
        hot: true
    },
]


function Row1({courses}){
    // `slice` creates a shallow copy of the array from index 0 to 2 (exclusive)
    // This is useful because we don't want to modify the original array
    const course = courses.slice(0, 4);
    const part1 = course.slice(0, 2);
    const part2 = course[2];
    const part3 = course[3];

    return(
        <>

            <CourseGrid 
                courses={part1}
            />
            {/* <!-- Right Column --> */} 
            <RightColumn 
                title={part2.title}
                rating={part2.rating}
                price={part2.price}
                hot={part2.hot}
            />
            <RightColumn 
                title={part3.title}
                rating={part3.rating}
                price={part3.price}
                hot={part3.hot}
            />

        </>
    )
}

function Row2({courses}){
    const course = courses.slice(0,3);
    const part1 = course[0];
    const part2 = course.slice(1);

    return(
    <>
        <FeaturedCourseCard 
            title={part1.title}
            author={part1.author}
            rating={part1.rating}
            price={part1.price}
            bestseller={part1.bestseller}
        />

        {/* <!-- Course Grid --> */} 
        <CourseGrid 
            courses={part2}
        />

    </>
    );
}

function Row3({courses}){
    const course = courses.slice(0,2);
    const part1 = courses[0];
    const part2 = courses[1];
    return(<>
    <FeaturedCourseCard 
        title={part1.title}
        author={part1.author}
        rating={part1.rating}
        price={part1.price}
        bestseller={part1.bestseller}
    />


    <RightColumn 
        title={part2.title}
        rating={part2.rating}
        price={part2.price}
        hot={part2.hot}
    />
    
    </>);
}



function RightColumn({title, rating, price, hot}){
    return(
        <div class="md:col-span-1 grid gap-8 mt-8 md:mt-0">
            {/* <!-- Vertical Course Card --> */} 
            <VerticalCourseCard 
                title={title}
                rating={rating}
                price={price}
                hot={hot}
            />
        </div>
    );
}

function CourseGrid({courses}){
    console.log(courses)
    return(
        <div class="grid grid-cols-1 gap-8 md:-mt-16">
            {/* <!-- Course Card 1 --> */} 
            {courses.map(course => (
                <CourseCard 
                    key={course.id}
                    title={course.title}
                    author={course.author}
                    rating={course.rating}
                    price={course.price}
                />
            ))}
        </div>
    );
}

function chunkCourses(courses) {
    const result = [];
    const chunkSizes = [4, 3, 2];
    let index = 0;

    while (index < courses.length) {
    // Pick a random size from our chunkSizes
    const randomSize = chunkSizes[Math.floor(Math.random() * chunkSizes.length)];
    // If there aren’t enough courses left, adjust the size
    const chunkSize = index + randomSize > courses.length ? courses.length - index : randomSize;
    result.push(courses.slice(index, index + chunkSize));
    index += chunkSize;
    }

    return result;
}
  

export default function page() {

    const [courseChunks, setCourseChunks] = React.useState([]);

    React.useEffect(() => {
        async function getCourses() {
            const response = await getRequest("/api/trending");
            console.log(response.data);
            const chunks = chunkCourses(response.data);
            console.log(chunks);
            setCourseChunks(chunks);
        }
        getCourses();
    }, [])

  return (
    <main class="bg-gray-900 text-gray-100">
    {/* <!-- Navigation (Same as previous) --> */} 
    <NavBar/>

    {/* <!-- Trending Header --> */} 
    <TrendingHeader/>

    {/* <!-- Course Collage --> */} 
    <section class="container mx-auto px-6 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 transform-style-preserve-3d">
            {/* <!-- Featured Course Card --> */} 
            
            {courseChunks.map((chunk, index) => {
                console.log(chunk, index);
                return (
                    <>
                    {chunk.length === 4 && <Row1 courses={chunk} />}
                    {chunk.length === 3 && <Row2 courses={chunk} />}
                    {chunk.length === 2 && <Row3 courses={chunk} />}
                    </>
                );
                })}


        </div>
    </section>

    {/* <!-- Floating Filter Bar --> */} 
    <FIlterBar/>

    {/* <!-- Footer (Same as previous) --> */} 
    <Footer/>
</main>
  )
}

