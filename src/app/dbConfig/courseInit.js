import Course from "../models/courseSchema.js";
import connectDB from "./connectDB.js";
connectDB( );

async function init(){
    for(let i = 0; i < 50; i++){
        const course = new Course({title: `Course ${i}`, description: `Description ${i}`, thumbnail: `Thumbnail ${i}`, video: `Video ${i}`});
        await course.save();
    }
}

init();
