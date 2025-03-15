import connectDB from "../../dbConfig/connectDB"
import User from "@/app/models/userSchema";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
connectDB();

export async function POST(req) {

  const data = await req.json();
  const {email, phone, password} = data;

  if( !email && !phone ){
    return Response.json({status: 400, message: "Can't Identify you"});
  }

  if(!password){
    return Response.json({status: 400, message: "Invalid Login Info"});
  }

  const user = await User.findOne({email});

  if(!user){
    return Response.json({status: 400, message: "User doesn't exist"});
  }

  if(!(await bcryptjs.compare(password, user.password))){
    return Response.json({status: 400, message: "Invalid Password"});
  }

  const tokenData = {
    id: user._id,
    name: user.name,
    email: user.email
  };

  const token = await jwt.sign(tokenData, process.env.JWT_SECRET || "mySecret", {expiresIn: "1h"});


  const response = NextResponse.json({
    status: 200,
    message: "You have been signed up"
  })
  response.cookies.set("token", token, {
    httpOnly: true
  });

  

  return response;
}
  