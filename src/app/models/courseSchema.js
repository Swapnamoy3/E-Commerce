import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    video:{
        type: String,
    }
});


const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course