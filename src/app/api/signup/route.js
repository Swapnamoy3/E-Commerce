import connectDB from "../../dbConfig/connectDB"
import User from "@/app/models/userSchema";
import bcryptjs from "bcryptjs";
connectDB();

export async function POST(req) {

  const data = await req.json();
  const {name, email, phone, username, password} = data;

  if(!name || !email || !phone || !username || !password){
    return Response.json({status: 400, message: "Invalid SignUp Info"});
  }

  const user = await User.findOne({email});
  if(user){
    return Response.json({status: 400, message: "User already exists"});
  }
  
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({name, email, phone, username, password: hashedPassword});
  await newUser.save();
  

  return Response.json({status: 200, message: "You have been signed up"});
}
  