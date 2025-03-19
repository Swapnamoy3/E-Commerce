import Course from "@/app/models/courseSchema";
import { NextResponse } from "next/server";
import connectDB from "@/app/dbConfig/connectDB";

connectDB();
export async function GET(req) {
    
    const randomCourses = await Course.aggregate([{ $sample: { size: 12 } }]);
    return NextResponse.json({status: 200, message: "Success", data: randomCourses});
}