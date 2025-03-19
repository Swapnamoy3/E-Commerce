import connectDB from "./connectDB.js";
import Category from "../models/categorySchema.js";
import Course from "../models/courseSchema.js";



connectDB( );


async function init() {
    await Category.deleteMany({});

    for(let i = 0; i < 5; i++) {
        const courses = await Course.aggregate([{ $sample: { size: 10 } }]);
        const category = new Category({ title: `Category ${i}`, description: `Description ${i}`, courses: courses.map(course => course._id) });
        await category.save();
    }

    console.log("Categories initialized");
}

init();