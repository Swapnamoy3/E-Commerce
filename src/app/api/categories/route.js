import connectDB from "@/app/dbConfig/connectDB";
import Category from "@/app/models/categorySchema";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
    console.log("Fetching categories");
    const categories = (await Category.find({})).map((category) => {
        return{
            _id: category._id,
            title: category.title,
            description: category.description,
            count : category.courses.length
        }
    });
        return NextResponse.json({ status: 200, message: "Success", data: categories });                            
}